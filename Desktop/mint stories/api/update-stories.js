const { google } = require('googleapis');
const { GoogleGenAI } = require('@google/genai');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { accessToken } = req.body;
    if (!accessToken) return res.status(400).json({ error: 'Token required' });

    try {
        const oauth2Client = new google.auth.OAuth2();
        oauth2Client.setCredentials({ access_token: accessToken });

        const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

        // 1. Fetch recent emails - broadened search
        // Try specific known senders first, with a wider time window
        let response = await gmail.users.messages.list({
            userId: 'me',
            q: '(from:alerts@mint.intuit.com OR from:newsletters@livemint.com OR from:noreply@htdigital.in OR from:mint OR subject:mint OR subject:"budget alert" OR subject:"spending alert" OR subject:"bank alert" OR subject:"credit card" OR subject:"transaction alert") newer_than:30d',
            maxResults: 15,
        });

        let messages = response.data.messages || [];

        // Fallback: if no results, try an even broader search
        if (messages.length === 0) {
            response = await gmail.users.messages.list({
                userId: 'me',
                q: '(subject:alert OR subject:transaction OR subject:payment OR subject:budget OR from:mint) newer_than:90d',
                maxResults: 10,
            });
            messages = response.data.messages || [];
        }

        // If still nothing, return a helpful message
        if (messages.length === 0) {
            return res.status(200).json({
                stories: [],
                message: 'No Mint or financial alert emails found in your inbox. Make sure you have Mint alerts enabled or financial notification emails in this Gmail account.'
            });
        }
        const parsedStories = [];

        // 2. Fetch and parse each email's content
        for (const msg of messages) {
            const msgData = await gmail.users.messages.get({
                userId: 'me',
                id: msg.id,
                format: 'full',
            });

            const headers = msgData.data.payload.headers;
            const subjectHeader = headers.find(h => h.name === 'Subject');
            const dateHeader = headers.find(h => h.name === 'Date');

            let emailBody = msgData.data.snippet || '';

            try {
                if (msgData.data.payload.parts) {
                    const part = msgData.data.payload.parts.find(p => p.mimeType === 'text/plain');
                    if (part && part.body && part.body.data) {
                        emailBody = Buffer.from(part.body.data, 'base64').toString('utf8');
                    }
                }
            } catch (e) {
                console.warn("Failed to extract full body, falling back to snippet.");
            }

            if (process.env.GEMINI_API_KEY) {
                try {
                    const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);
                    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

                    const prompt = `You are a financial assistant reading an email. 
              Read the following email text and extract three things into a valid JSON object:
              1. "title": A short, catchy 3-4 word title.
              2. "summary": A clean, 1-2 sentence human-readable summary.
              3. "amount": The primary dollar amount mentioned (e.g. "$140.50"), or "N/A" if none.
              
              ONLY return the valid raw JSON object, no markdown blocks.
              
              Email Text:
              ${emailBody.substring(0, 5000)}`;

                    const aiResult = await model.generateContent(prompt);
                    const aiResponse = await aiResult.response;
                    let jsonText = aiResponse.text().trim();

                    if (jsonText.startsWith('```json')) {
                        jsonText = jsonText.replace(/```json/g, '').replace(/```/g, '').trim();
                    }
                    const result = JSON.parse(jsonText);

                    parsedStories.push({
                        title: result.title || subjectHeader?.value || 'Alert',
                        date: dateHeader ? new Date(dateHeader.value).toLocaleDateString() : 'Recent',
                        summary: result.summary || emailBody.substring(0, 100),
                        amount: result.amount || 'View Data'
                    });
                    continue;
                } catch (aiError) {
                    console.error("Gemini AI failed to summarize:", aiError);
                }
            }

            // Fallback
            parsedStories.push({
                title: subjectHeader ? subjectHeader.value : 'Alert',
                date: dateHeader ? new Date(dateHeader.value).toLocaleDateString() : 'Recent',
                summary: emailBody.substring(0, 150) + '...',
                amount: emailBody.match(/\$[\d,]+\.\d{2}/) ? emailBody.match(/\$[\d,]+\.\d{2}/)[0] : 'View Data'
            });
        }

        // Return stories directly
        res.status(200).json(parsedStories);
    } catch (err) {
        console.error('Gmail API Error:', err);
        res.status(500).json({ error: 'Failed' });
    }
};
