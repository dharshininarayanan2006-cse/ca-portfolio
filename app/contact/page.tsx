"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In production, wire up to an API route or service
        setSubmitted(true);
    };

    return (
        <>
            {/* Page Header */}
            <section className="bg-gradient-to-br from-primary to-primary-light text-white">
                <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
                    <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
                        Reach Out
                    </p>
                    <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">
                        Contact Us
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-white/70 leading-relaxed">
                        Have questions or need professional financial guidance? We&apos;re
                        here to help.
                    </p>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-5">
                        {/* Left — Info Cards */}
                        <div className="lg:col-span-2 space-y-6">
                            {[
                                {
                                    icon: <MapPin size={20} />,
                                    title: "Visit Us",
                                    content: SITE_CONFIG.address,
                                    href: `https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address)}`,
                                },
                                {
                                    icon: <Phone size={20} />,
                                    title: "Call Us",
                                    content: SITE_CONFIG.phone,
                                    href: `tel:${SITE_CONFIG.phone}`,
                                },
                                {
                                    icon: <Mail size={20} />,
                                    title: "Email Us",
                                    content: SITE_CONFIG.email,
                                    href: `mailto:${SITE_CONFIG.email}`,
                                },
                                {
                                    icon: <Clock size={20} />,
                                    title: "Working Hours",
                                    content: "Mon – Sat: 9:30 AM – 6:30 PM",
                                    href: undefined,
                                },
                            ].map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="flex items-start gap-4 rounded-xl border border-card-border p-5 hover:shadow-md transition-shadow group"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                        <p className="mt-0.5 text-sm text-muted">{item.content}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Right — Form */}
                        <div className="lg:col-span-3">
                            <div className="rounded-xl border border-card-border bg-background p-8">
                                {submitted ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent">
                                            <Send size={28} />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground">
                                            Message Sent!
                                        </h3>
                                        <p className="mt-2 text-sm text-muted max-w-sm">
                                            Thank you for reaching out. We&apos;ll get back to you
                                            within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-6 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <h3 className="text-lg font-bold text-foreground">
                                            Send a Message
                                        </h3>

                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                                                    Full Name
                                                </label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    placeholder="Your name"
                                                    className="w-full rounded-lg border border-card-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    placeholder="you@example.com"
                                                    className="w-full rounded-lg border border-card-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                                                Phone Number
                                            </label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 XXXXX XXXXX"
                                                className="w-full rounded-lg border border-card-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                required
                                                placeholder="How can we help you?"
                                                className="w-full rounded-lg border border-card-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            id="contact-submit"
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary-light hover:-translate-y-0.5 transition-all sm:w-auto"
                                        >
                                            <Send size={16} /> Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
