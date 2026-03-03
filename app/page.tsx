"use client";

import { SERVICES } from "@/lib/constants";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle,
  FileText,
  GitBranch,
  Receipt,
  Send,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const iconMap: Record<string, React.ReactNode> = {
  receipt: <Receipt size={22} />,
  "file-text": <FileText size={22} />,
  "building-2": <Building2 size={22} />,
  calculator: <Calculator size={22} />,
};

const serviceCards = [
  {
    title: "Direct Tax",
    subtitle: "Tax Filing & Compliance",
    icon: <Receipt size={26} />,
    headerBg: "bg-primary",
    textWhite: true,
    features: ["Income Tax Filings", "TDS Return Filing", "Tax Audit", "Professional Certifications"],
    highlighted: false,
  },
  {
    title: "Business Registrations",
    subtitle: "Incorporation & Filings",
    icon: <Building2 size={26} />,
    headerBg: "bg-peach",
    textWhite: false,
    features: ["Company Incorporation", "Company Annual Filings", "MSME Registration", "IEC Registration", "Professional Tax Registration"],
    highlighted: true,
  },
  {
    title: "Accounting",
    subtitle: "Books & Payroll",
    icon: <Calculator size={26} />,
    headerBg: "bg-soft-blue",
    textWhite: false,
    features: ["Bookkeeping (Tally)", "Financial Statements", "Payroll Management", "GST Registration & Filings"],
    highlighted: false,
  },
];

export default function Home() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — Full viewport, 2-col grid
          ═══════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ─── Left: Content ─── */}
            <div className="flex flex-col gap-7 lg:gap-8 max-w-xl">
              <p className="text-sm font-medium text-primary uppercase tracking-wide">
                Trusted Chartered Accountant in Chennai
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] max-w-[24ch] lg:max-w-[26ch]">
                All financial clarity in one firm
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[48ch]">
                Expert chartered accountancy that manages your finances, automates compliance workflows, and helps your business grow with complete transparency.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-all duration-200 shadow-sm"
                >
                  Get Free Consultation
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-slate-300 text-slate-700 hover:bg-slate-100 transition-all duration-200"
                >
                  Explore Services
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-200/80">
                {[
                  { icon: <Shield size={16} />, label: "100% Compliance" },
                  { icon: <TrendingUp size={16} />, label: "10+ Years" },
                  { icon: <Users size={16} />, label: "500+ Clients" },
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <span className="text-primary">{badge.icon}</span>
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>

            {/* ─── Right: Visual — Single clean image ─── */}
            <div className="hidden lg:block">
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-slate-100 overflow-hidden shadow-xl shadow-slate-200/60">
                <Image
                  src="/images/professional.png"
                  alt="Professional at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mobile visual — simplified stat row */}
            <div className="grid grid-cols-3 gap-3 lg:hidden">
              {[
                { stat: "500+", label: "Clients", bg: "bg-peach" },
                { stat: "100%", label: "Compliance", bg: "bg-soft-blue" },
                { stat: "10+", label: "Years", bg: "bg-peach" },
              ].map((item) => (
                <div key={item.label} className={`${item.bg} rounded-2xl p-4 text-center`}>
                  <p className="text-2xl font-bold text-primary">{item.stat}</p>
                  <p className="text-xs font-medium text-slate-600 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURE SHOWCASE — 2-col
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-28 bg-white" id="showcase">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left text */}
            <div ref={addRef} className="reveal flex flex-col gap-6 max-w-xl">
              <p className="text-sm font-medium text-primary uppercase tracking-wide">
                Features at a Glance
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                Professional services, simplified
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[48ch]">
                From tax filings to company registrations, we handle every aspect of your financial compliance with precision, timeliness, and complete transparency.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: <Shield size={16} />, text: "Compliance" },
                  { icon: <TrendingUp size={16} />, text: "Growth" },
                  { icon: <Users size={16} />, text: "Support" },
                ].map((item) => (
                  <span
                    key={item.text}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-slate-50 rounded-full px-4 py-2 border border-slate-100"
                  >
                    {item.icon}
                    {item.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Dashboard mock */}
            <div ref={addRef} className="reveal">
              <div className="animate-float rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-3 bg-primary">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="flex-1 text-center text-[11px] text-white/50 font-medium">
                    service-dashboard
                  </span>
                </div>
                {/* Content */}
                <div className="p-5 bg-slate-50/50">
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white">
                      <Briefcase size={14} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Service Dashboard</p>
                      <p className="text-[11px] text-slate-500">4 active services</p>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {SERVICES.map((svc, i) => (
                      <div key={svc.category} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100">
                        <div className={`flex items-center justify-center w-9 h-9 rounded-lg shrink-0 text-primary ${i % 2 === 0 ? "bg-peach" : "bg-soft-blue"}`}>
                          {iconMap[svc.icon]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-900 truncate">{svc.category}</p>
                          <p className="text-[11px] text-slate-500">{svc.items.length} services</p>
                        </div>
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full shrink-0">
                          <GitBranch size={10} />
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES — Pricing-style cards
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-28 bg-slate-50" id="services-preview">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={addRef} className="reveal text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
              Our professional services
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Comprehensive financial solutions tailored to your business. Choose the service that fits your requirements.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 md:grid-cols-3">
            {serviceCards.map((card, idx) => (
              <div
                key={card.title}
                ref={addRef}
                className={`reveal stagger-${idx + 1} group rounded-2xl bg-white overflow-hidden shadow-sm border border-slate-200/80 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ${card.highlighted ? "ring-2 ring-primary/20 shadow-lg" : ""}`}
              >
                {/* Header */}
                <div className={`${card.headerBg} p-6 pb-7`}>
                  {card.highlighted && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-white text-primary px-3 py-1 rounded-full mb-3">
                      Popular
                    </span>
                  )}
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-3 ${card.textWhite ? "bg-white/20 text-white" : "bg-white/60 text-primary"}`}>
                    {card.icon}
                  </div>
                  <h3 className={`text-lg font-semibold ${card.textWhite ? "text-white" : "text-slate-900"}`}>
                    {card.title}
                  </h3>
                  <p className={`text-sm mt-1 ${card.textWhite ? "text-white/70" : "text-slate-600"}`}>
                    {card.subtitle}
                  </p>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className={`mt-7 flex items-center justify-center rounded-full py-3 text-sm font-semibold transition-all duration-200 ${card.highlighted
                      ? "bg-primary text-white hover:bg-primary/90 shadow-sm"
                      : "border border-slate-300 text-slate-700 hover:bg-slate-100"
                      }`}
                  >
                    {card.highlighted ? "Get Started" : "Learn More"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT CTA
          ═══════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-28 bg-white" id="contact-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={addRef}
            className="reveal relative overflow-hidden rounded-3xl bg-primary px-8 py-14 md:px-14 md:py-16"
          >
            {/* Blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-peach/15 blur-[80px] -mt-20 -mr-20 animate-blob-pulse pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-soft-blue/15 blur-[60px] -mb-16 -ml-16 animate-blob-pulse pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* Left */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-[1.15]">
                  Have a project in mind?
                </h2>
                <p className="mt-4 text-base text-white/60 leading-relaxed max-w-md mx-auto lg:mx-0">
                  Write to us, we will respond promptly. Book a free consultation and let us simplify your compliance.
                </p>
              </div>

              {/* Right */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="w-full sm:w-72 rounded-full bg-white/10 border border-white/15 px-6 py-3.5 text-sm text-white placeholder:text-white/30 font-medium outline-none focus:bg-white/15 focus:border-white/30 transition-all duration-200"
                />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-peach px-7 py-3.5 text-sm font-semibold text-primary hover:bg-peach/90 transition-all duration-200 shadow-sm shrink-0"
                >
                  <Send size={14} />
                  Send
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
