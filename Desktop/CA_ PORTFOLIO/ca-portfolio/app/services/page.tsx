import {
    Receipt,
    FileText,
    Building2,
    Calculator,
    CheckCircle,
} from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `Services | ${SITE_CONFIG.name}`,
    description:
        "Comprehensive tax, GST, auditing, business registration, and accounting services in Chennai.",
};

const iconMap: Record<string, React.ReactNode> = {
    receipt: <Receipt size={32} />,
    "file-text": <FileText size={32} />,
    "building-2": <Building2 size={32} />,
    calculator: <Calculator size={32} />,
};

export default function ServicesPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-primary to-primary-light text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
                    <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
                        What We Do
                    </p>
                    <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
                        Our Services
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-white/70 leading-relaxed">
                        From tax filings to business registrations, we provide end‑to‑end
                        financial solutions to help your business stay compliant and grow.
                    </p>
                </div>
            </section>

            {/* Service Cards */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((svc) => (
                            <div
                                key={svc.category}
                                className="group rounded-xl border border-card-border bg-card p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    {iconMap[svc.icon]}
                                </div>
                                <h2 className="text-xl font-bold text-foreground">
                                    {svc.category}
                                </h2>
                                <ul className="mt-4 space-y-2.5">
                                    {svc.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-2.5 text-sm text-muted"
                                        >
                                            <CheckCircle
                                                size={16}
                                                className="text-accent shrink-0"
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
            <section className="bg-background">
                <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
                    <h2 className="text-3xl font-bold text-foreground">
                        Need a Custom Solution?
                    </h2>
                    <p className="mt-3 text-muted">
                        Every business is unique. Reach out to discuss your specific
                        requirements and we&apos;ll craft a tailored service package.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-primary-light hover:-translate-y-0.5 transition-all"
                    >
                        Get in Touch <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </>
    );
}
