import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import {
    ArrowRight,
    Building2,
    Calculator,
    CheckCircle,
    FileText,
    Receipt,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: `Services | ${SITE_CONFIG.name}`,
    description:
        "Comprehensive tax, GST, auditing, business registration, and accounting services in Chennai.",
};

const iconMap: Record<string, React.ReactNode> = {
    receipt: <Receipt size={28} />,
    "file-text": <FileText size={28} />,
    "building-2": <Building2 size={28} />,
    calculator: <Calculator size={28} />,
};

export default function ServicesPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-primary text-white py-16 md:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p className="text-sm font-medium uppercase tracking-wider text-white/60">
                        What We Do
                    </p>
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                        Our Services
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-white/70 leading-relaxed">
                        From tax filings to business registrations, we provide end‑to‑end
                        financial solutions to help your business stay compliant and grow.
                    </p>
                    <div className="mt-8 h-px w-24 bg-white/20" />
                </div>
            </section>

            {/* Service Cards */}
            <section className="bg-white py-16 md:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((svc) => (
                            <div
                                key={svc.category}
                                className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {iconMap[svc.icon]}
                                </div>
                                <h2 className="text-xl font-semibold text-slate-900">
                                    {svc.category}
                                </h2>
                                <ul className="mt-4 space-y-2.5">
                                    {svc.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-2.5 text-sm text-slate-500"
                                        >
                                            <CheckCircle
                                                size={16}
                                                className="text-primary shrink-0"
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-50 py-16 md:py-24 lg:py-28">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
                        Need a Custom Solution?
                    </h2>
                    <p className="mt-3 text-slate-500 leading-relaxed">
                        Every business is unique. Reach out to discuss your specific
                        requirements and we&apos;ll craft a tailored service package.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-all duration-200"
                    >
                        Get in Touch <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </>
    );
}
