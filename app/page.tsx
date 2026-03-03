import Link from "next/link";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  Receipt,
  FileText,
  Building2,
  Calculator,
} from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  receipt: <Receipt size={28} />,
  "file-text": <FileText size={28} />,
  "building-2": <Building2 size={28} />,
  calculator: <Calculator size={28} />,
};

const highlights = [
  { icon: <Shield size={24} />, label: "Trusted Expertise" },
  { icon: <TrendingUp size={24} />, label: "Business Growth" },
  { icon: <Users size={24} />, label: "Client-First Approach" },
];

export default function Home() {
  return (
    <>
      {/* ──────── HERO ──────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#152C69] to-[#0A1635]">
        {/* Soft Glowing Orbs for Premium Background Depth */}
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:py-40 lg:grid-cols-2 lg:px-8">
          {/* Left text */}
          <div className="text-white text-center lg:text-left z-10">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-xs font-semibold tracking-widest text-[#E2E8F0] backdrop-blur-md border border-white/20">
              <span className="mr-2 h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              CHARTERED ACCOUNTANT &amp; TAX CONSULTANT
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl drop-shadow-lg">
              {SITE_CONFIG.name}
            </h1>
            <p className="mt-6 mx-auto lg:mx-0 max-w-lg text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
              {SITE_CONFIG.tagline}. Structuring absolute compliance and ensuring business growth with ultimate financial clarity.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-5 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-accent hover:bg-[#D97706] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_40px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_15px_50px_-10px_rgba(245,158,11,0.6)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Free Consultation <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white/30 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>

            {/* Trust chips */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start border-t border-white/10 pt-8">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                  <div className="text-accent">{h.icon}</div>
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — abstract trust graphic upgraded */}
          <div className="hidden lg:flex items-center justify-center relative z-10">
            <div className="relative flex h-[400px] w-[400px] items-center justify-center">
              <div className="absolute h-full w-full rounded-full border border-white/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute h-[320px] w-[320px] rounded-full border-2 border-accent/30 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute h-[240px] w-[240px] rounded-full bg-gradient-to-tr from-white/5 to-white/20 backdrop-blur-xl shadow-2xl flex items-center justify-center border border-white/30">
                <span className="text-7xl font-black text-white drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400">VK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="bg-slate-50 py-24 md:py-32" id="services-preview">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h2 className="text-4xl font-extrabold text-[#0F172A] sm:text-5xl">
              Our Professional Services
            </h2>
            <div className="mt-6 h-1 w-20 bg-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              We provide highly structured framework solutions, navigating complex compliances flawlessly so you can focus strictly on growing your business.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((svc) => (
              <div
                key={svc.category}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-primary shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md transition-all duration-300">
                    {iconMap[svc.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                    {svc.category}
                  </h3>
                  <ul className="space-y-3">
                    {svc.items.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-slate-600 font-medium"
                      >
                        <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-base font-bold text-primary hover:text-accent group transition-colors"
            >
              Explore All Services
              <span className="group-hover:translate-x-1 transition-transform bg-primary/10 group-hover:bg-accent/10 p-2 rounded-full">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="bg-white py-24 md:py-32" id="about-preview">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="text-4xl font-extrabold text-[#0F172A] sm:text-5xl">
                About {SITE_CONFIG.name}
              </h2>
              <div className="mt-6 h-1 w-20 bg-accent mx-auto lg:mx-0 rounded-full"></div>
              <p className="mt-8 max-w-xl mx-auto lg:mx-0 text-lg text-slate-600 font-light leading-relaxed">
                With elite expertise in taxation, extensive auditing intelligence, and secure business compliance strategies, we engineer precise financial solutions that definitively empower businesses.
                <br /><br />
                Our strict commitment to accuracy, total transparency, and flawless regulatory adherence elevates our client's peace of mind to the highest degree.
              </p>
              <Link
                href="/about"
                className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 text-white hover:bg-primary px-8 py-4 text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Read Our Story <ArrowRight size={18} />
              </Link>
            </div>

            {/* Premium Stats Grid */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-6 p-6 lg:p-10 rounded-3xl bg-slate-50 border border-slate-100 shadow-inner">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "500+", label: "Clients Served" },
                { value: "100%", label: "Compliance Rate" },
                { value: "24/7", label: "Client Support" },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`relative rounded-2xl bg-white p-8 text-center shadow-sm border border-slate-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 transform hover:-translate-y-1 ${idx === 1 || idx === 3 ? 'lg:translate-y-6' : ''}`}
                >
                  <p className="text-4xl lg:text-5xl font-black text-primary mb-2 drop-shadow-sm">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden" id="contact-cta">
        {/* Abstract waves for the bottom CTA */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-accent blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-white blur-[80px] opacity-20"></div>

        <div className="relative mx-auto max-w-4xl px-6 text-center text-white lg:px-8 z-10">
          <h2 className="text-4xl font-extrabold sm:text-5xl drop-shadow-md">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="mt-6 text-lg text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Take the first step toward impeccable financial health. Book a high-impact, free consultation today to streamline your compliance needs definitively.
          </p>
          <Link
            href="/contact"
            id="cta-btn"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-base font-bold text-primary shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_15px_60px_-10px_rgba(255,255,255,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            Schedule Consultation Now <ArrowRight size={20} className="text-accent" />
          </Link>
        </div>
      </section>
    </>
  );
}
