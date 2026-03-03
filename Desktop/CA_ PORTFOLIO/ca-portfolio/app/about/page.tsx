import {
    GraduationCap,
    Award,
    Target,
    BookOpen,
    CheckCircle,
} from "lucide-react";
import { SITE_CONFIG, ABOUT_TEXT } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `About | ${SITE_CONFIG.name}`,
    description: ABOUT_TEXT.slice(0, 155),
};

const values = [
    {
        icon: <Target size={28} />,
        title: "Precision",
        desc: "Every number matters. We ensure accuracy in all financial reporting and compliance filings.",
    },
    {
        icon: <Award size={28} />,
        title: "Integrity",
        desc: "Transparent, ethical practices are the cornerstone of every client relationship we build.",
    },
    {
        icon: <BookOpen size={28} />,
        title: "Knowledge",
        desc: "Continuously updated expertise in taxation laws, GST regulations, and compliance standards.",
    },
    {
        icon: <GraduationCap size={28} />,
        title: "Growth",
        desc: "We go beyond compliance to provide insights that drive sustainable business growth.",
    },
];

const qualifications = [
    "Chartered Accountancy (CA)",
    "Global Accounting Certifications",
    "Expert in Direct & Indirect Taxation",
    "GST Practitioner",
    "Business Compliance Specialist",
    "Financial Auditing & Consulting",
];

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-primary to-primary-light text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
                    <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
                        Get to Know Us
                    </p>
                    <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
                        About {SITE_CONFIG.name}
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-white/70 leading-relaxed">
                        {SITE_CONFIG.tagline}
                    </p>
                </div>
            </section>

            {/* Bio */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-5">
                        <div className="lg:col-span-3">
                            <h2 className="text-2xl font-bold text-foreground">
                                Professional Background
                            </h2>
                            <p className="mt-4 text-muted leading-relaxed whitespace-pre-line">
                                {ABOUT_TEXT}
                            </p>
                            <p className="mt-4 text-muted leading-relaxed">
                                Based in <strong>Chennai</strong>, I work with businesses of all
                                sizes — from startups to established enterprises — helping them
                                navigate the complexities of Indian taxation and corporate
                                compliance with confidence.
                            </p>
                        </div>

                        {/* Qualifications sidebar */}
                        <div className="lg:col-span-2">
                            <div className="rounded-xl border border-card-border bg-background p-6">
                                <h3 className="text-lg font-semibold text-foreground mb-4">
                                    Qualifications & Expertise
                                </h3>
                                <ul className="space-y-3">
                                    {qualifications.map((q) => (
                                        <li key={q} className="flex items-center gap-3 text-sm text-muted">
                                            <CheckCircle size={16} className="text-accent shrink-0" />
                                            {q}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-background">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                            What Drives Us
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-foreground">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((v) => (
                            <div
                                key={v.title}
                                className="group rounded-xl border border-card-border bg-white p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
                            >
                                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    {v.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                                <p className="mt-2 text-sm text-muted leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
