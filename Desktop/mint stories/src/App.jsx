import React, { useState, useEffect } from 'react';
import { Mail, RefreshCw, ShieldCheck, ChevronRight } from 'lucide-react';

export default function App() {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useState(false);

    // Replace with the Google OAuth Client ID
    const CLIENT_ID = '589005411077-fud2253d3b4ds4i1622psfio3b32nunr.apps.googleusercontent.com';

    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = async () => {
        try {
            const res = await fetch('/api/stories');
            const data = await res.json();
            setStories(data);
        } catch (err) {
            console.error('Failed to fetch stories', err);
        }
    };

    const [gapiReady, setGapiReady] = useState(false);
    const [debugLog, setDebugLog] = useState('');

    const log = (msg) => {
        console.log(msg);
        setDebugLog(prev => prev + '\n' + msg);
    };

    useEffect(() => {
        const checkGapi = () => {
            if (window.google && window.google.accounts && window.google.accounts.oauth2) {
                setGapiReady(true);
                log('Google API Ready');
            }
        };

        const interval = setInterval(() => {
            checkGapi();
            if (window.google?.accounts?.oauth2) clearInterval(interval);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleAuthClick = () => {
        if (!window.google || !window.google.accounts) {
            alert('Google Login is still loading. Please wait 3 seconds and try again.');
            return;
        }

        log('Initiating Login...');
        try {
            const client = window.google.accounts.oauth2.initTokenClient({
                client_id: CLIENT_ID.trim(),
                scope: 'openid email profile https://www.googleapis.com/auth/gmail.readonly',
                callback: (tokenResponse) => {
                    log('Response received');
                    if (tokenResponse && tokenResponse.access_token) {
                        setAuth(true);
                        updateStories(tokenResponse.access_token);
                    } else if (tokenResponse.error) {
                        log('Error: ' + tokenResponse.error);
                        alert('Login Error: ' + tokenResponse.error);
                    }
                },
            });
            client.requestAccessToken();
        } catch (err) {
            log('Fatal Init Error: ' + err.message);
            alert('Failed to start Google Login: ' + err.message);
        }
    };

    const [statusMessage, setStatusMessage] = useState('');

    const updateStories = async (accessToken) => {
        setLoading(true);
        setStatusMessage('');
        log('Fetching stories from API...');
        try {
            const res = await fetch('/api/update-stories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ accessToken })
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);

            // Handle new response format: { stories: [], message: '...' }
            if (data.stories !== undefined) {
                setStories(data.stories);
                if (data.stories.length === 0 && data.message) {
                    setStatusMessage(data.message);
                    log('No stories found: ' + data.message);
                } else {
                    log(`Found ${data.stories.length} stories!`);
                }
            } else if (Array.isArray(data)) {
                // Old format: direct array
                setStories(data);
                if (data.length === 0) {
                    setStatusMessage('No financial alert emails found in your inbox for the last 30 days.');
                    log('No stories found in your inbox.');
                } else {
                    log(`Found ${data.length} stories!`);
                }
            }
        } catch (err) {
            log('Update Error: ' + err.message);
            setStatusMessage('Something went wrong while fetching stories. Please try again.');
            console.error('Failed to update stories', err);
        } finally {
            setLoading(false);
        }
    };

    const [selectedStory, setSelectedStory] = useState(null);

    return (
        <div className="min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Status Indicator */}
                {!gapiReady && (
                    <div className="fixed top-4 right-4 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-md animate-pulse z-50">
                        Connecting to Google...
                    </div>
                )}

                {/* Header Section */}
                <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center p-3 bg-mint-light/20 rounded-2xl mb-4">
                        <Mail className="w-8 h-8 text-mint-dark" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Mint <span className="text-mint">Stories</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Your financial narrative, beautifully extracted from your Mint alerts.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={handleAuthClick}
                            disabled={loading}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-mint text-white font-semibold rounded-full hover:bg-mint-dark transition-colors shadow-lg shadow-mint/30 disabled:opacity-70"
                        >
                            {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <ShieldCheck className="w-5 h-5" />}
                            {loading ? 'Fetching Stories...' : 'Connect Gmail Account'}
                        </button>

                        <button
                            onClick={() => {
                                log('Loading demo stories...');
                                setStories([
                                    {
                                        title: "☕ Starbucks Budget Alert",
                                        date: new Date().toLocaleDateString(),
                                        summary: "Your morning coffee routine has pushed you $15 over your 'Dining Out' budget for March. Consider skipping the extra shot tomorrow!",
                                        amount: "$15.00 over",
                                        fullStory: "Your transaction of $15.00 at Starbucks on 1st Ave triggered a budget alert. You've reached 110% of your monthly dining budget. Over the last 30 days, you've visited coffee shops 12 times, spending a total of $185.20. Pro-tip: Switching to a home-brew could save you roughly $2,100 per year!"
                                    },
                                    {
                                        title: "📈 Market Update: Tech Surge",
                                        date: new Date().toLocaleDateString(),
                                        summary: "LiveMint reports a massive 5% surge in tech stocks following new AI regulations. Your portfolio may see a positive impact this week.",
                                        amount: "+5.2% Gain",
                                        fullStory: "The NSE and BSE saw significant gains today as tech giants reported better-than-expected quarterly earnings. AI-related stocks led the rally, with Mint analysis showing a 15% increase in retail investor participation in the tech sector. This volatility presents a unique opportunity for long-term holders to rebalance their portfolios."
                                    },
                                    {
                                        title: "💸 Unusual Spending Detected",
                                        date: new Date().toLocaleDateString(),
                                        summary: "A large $450.00 purchase at 'Gadget World' was detected. If this wasn't you, login to your bank portal immediately to flag it.",
                                        amount: "$450.00",
                                        fullStory: "A security alert was triggered for your primary credit card ending in 4421. A transaction of $450.00 was authorized at 'Gadget World' at 2:15 PM today. Since this location is 50 miles from your typical spending area, we've flagged it for review. Please use the mobile app to confirm if this was an authorized purchase."
                                    }
                                ]);
                                setAuth(true);
                                log('Demo stories loaded.');
                            }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-mint border-2 border-mint font-semibold rounded-full hover:bg-mint-bg transition-colors"
                        >
                            Try Demo Mode
                        </button>
                    </div>

                    {/* Debug log - hidden by default, toggle with triple-click on header */}
                    {debugLog && (
                        <div className="mt-4 p-4 bg-slate-100 rounded-xl text-left font-mono text-xs text-slate-500 overflow-auto max-h-32 max-w-md mx-auto" style={{ display: 'none' }}>
                            <div className="flex justify-between mb-2">
                                <span>Debug Log:</span>
                                <button onClick={() => setDebugLog('')} className="text-mint hover:underline">Clear</button>
                            </div>
                            <pre>{debugLog}</pre>
                        </div>
                    )}
                </div>

                {/* Stories Grid Section */}
                {stories.length === 0 && !loading && (
                    <div className="text-center p-12 bg-white rounded-3xl border border-emerald-100 shadow-sm">
                        <p className="text-slate-500 mb-2">
                            {statusMessage || 'No stories found yet.'}
                        </p>
                        {!statusMessage && (
                            <p className="text-sm text-slate-400">Connect your account to fetch your latest Mint alerts.</p>
                        )}
                        {statusMessage && (
                            <p className="text-sm text-slate-400 mt-2">Try the Demo Mode above to see how Mint Stories works!</p>
                        )}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedStory(story)}
                            className="story-card group cursor-pointer flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-semibold text-mint-dark bg-mint-bg px-3 py-1 rounded-full">
                                        {story.date || 'Recent'}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-mint transition-colors">
                                    {story.title || 'Financial Alert'}
                                </h3>
                                <p className="text-slate-600 line-clamp-3">
                                    {story.summary || 'Summary...'}
                                </p>
                            </div>

                            <div className="mt-6 flex flex-col gap-2">
                                <span className="text-xl font-bold text-slate-900 text-right">{story.amount}</span>
                                <div className="flex items-center text-sm font-medium text-mint group-hover:text-mint-dark">
                                    Read Full Story <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detailed Story Modal */}
                {selectedStory && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                        <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 relative animate-in zoom-in-95 duration-300">
                            <button
                                onClick={() => setSelectedStory(null)}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="space-y-6">
                                <span className="text-sm font-semibold text-mint-dark bg-mint-bg px-4 py-1.5 rounded-full">
                                    {selectedStory.date}
                                </span>
                                <h2 className="text-3xl font-extrabold text-slate-900">
                                    {selectedStory.title}
                                </h2>
                                <div className="prose prose-slate max-w-none">
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {selectedStory.fullStory || selectedStory.summary}
                                    </p>
                                </div>
                                <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-slate-500 font-medium font-mono uppercase tracking-wider text-sm">Value Detected</span>
                                    <span className="text-3xl font-black text-mint">{selectedStory.amount}</span>
                                </div>
                                <button
                                    onClick={() => setSelectedStory(null)}
                                    className="w-full mt-6 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl active:scale-95"
                                >
                                    Close Story
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
