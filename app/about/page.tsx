import { ABOUT_TEXT, SITE_CONFIG } from "@/lib/constants";
import {
    Award,
    BookOpen,
    CheckCircle,
    GraduationCap,
    Target,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `About | ${SITE_CONFIG.name}`,
    description: ABOUT_TEXT.slice(0, 155),
};

const values = [
    {
        icon: <Target size={24} />,
        title: "Precision",
        desc: "Every number matters. We ensure accuracy in all financial reporting and compliance filings.",
    },
    {
        icon: <Award size={24} />,
        title: "Integrity",
        desc: "Transparent, ethical practices are the cornerstone of every client relationship we build.",
    },
    {
        icon: <BookOpen size={24} />,
        title: "Knowledge",
        desc: "Continuously updated expertise in taxation laws, GST regulations, and compliance standards.",
    },
    {
        icon: <GraduationCap size={24} />,
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
            <section className="bg-primary text-white py-16 md:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p className="text-sm font-medium uppercase tracking-wider text-white/60">
                        Get to Know Us
                    </p>
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                        About {SITE_CONFIG.name}
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-white/70 leading-relaxed">
                        {SITE_CONFIG.tagline}
                    </p>
                    <div className="mt-8 h-px w-24 bg-white/20" />
                </div>
            </section>

            {/* Bio */}
            <section className="bg-white py-16 md:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-5">
                        <div className="lg:col-span-3">
                            <h2 className="text-2xl font-semibold text-slate-900">
                                Professional Background
                            </h2>
                            <p className="mt-4 text-slate-600 leading-relaxed whitespace-pre-line">
                                {ABOUT_TEXT}
                            </p>
                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Based in <strong>Chennai</strong>, I work with businesses of all
                                sizes — from startups to established enterprises — helping them
                                navigate the complexities of Indian taxation and corporate
                                compliance with confidence.
                            </p>
                        </div>

                        {/* Qualifications sidebar */}
                        <div className="lg:col-span-2">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                                    Qualifications & Expertise
                                </h3>
                                <ul className="space-y-3">
                                    {qualifications.map((q) => (
                                        <li key={q} className="flex items-center gap-3 text-sm text-slate-600">
                                            <CheckCircle size={16} className="text-primary shrink-0" />
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
            <section className="bg-slate-50 py-16 md:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-sm font-medium text-primary uppercase tracking-wider">
                            What Drives Us
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                            Our Core Values
                        </h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((v) => (
                            <div
                                key={v.title}
                                className="group rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {v.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900">{v.title}</h3>
                                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
