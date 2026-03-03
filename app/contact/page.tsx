"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            {/* Page Header */}
            <section className="bg-primary text-white py-16 md:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p className="text-sm font-medium uppercase tracking-wider text-white/60">
                        Reach Out
                    </p>
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                        Contact Us
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-white/70 leading-relaxed">
                        Have questions or need professional financial guidance? We&apos;re
                        here to help.
                    </p>
                    <div className="mt-8 h-px w-24 bg-white/20" />
                </div>
            </section>

            {/* Contact Grid */}
            <section className="bg-white py-16 md:py-24 lg:py-28">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-5">
                        {/* Left — Info Cards */}
                        <div className="lg:col-span-2 space-y-4">
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
                                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                                        <p className="mt-0.5 text-sm text-slate-500">{item.content}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Right — Form */}
                        <div className="lg:col-span-3">
                            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                                {submitted ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <Send size={28} />
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-900">
                                            Message Sent!
                                        </h3>
                                        <p className="mt-2 text-sm text-slate-500 max-w-sm">
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
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            Send a Message
                                        </h3>

                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-1.5">
                                                    Full Name
                                                </label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    placeholder="Your name"
                                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1.5">
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    placeholder="you@example.com"
                                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-1.5">
                                                Phone Number
                                            </label>
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="+91 XXXXX XXXXX"
                                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-1.5">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                required
                                                placeholder="How can we help you?"
                                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            id="contact-submit"
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-all duration-200 sm:w-auto"
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
