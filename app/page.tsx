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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-accent/30">
        {/* decorative circles */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/5" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:py-28 lg:grid-cols-2 lg:px-8">
          {/* Left text */}
          <div className="text-white text-center lg:text-left">
            <p className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-medium tracking-wide backdrop-blur-sm">
              Chartered Accountant &amp; Tax Consultant
            </p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {SITE_CONFIG.name}
            </h1>
            <p className="mt-4 mx-auto lg:mx-0 max-w-lg text-base sm:text-lg text-white/80 leading-relaxed">
              {SITE_CONFIG.tagline}. Helping businesses stay compliant, grow
              sustainably, and operate with financial clarity.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                id="hero-cta"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg hover:shadow-xl transition-all"
              >
                Get Free Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Our Services
              </Link>
            </div>

            {/* Trust chips */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2 text-white/70 text-sm">
                  {h.icon}
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — abstract trust graphic */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative flex h-80 w-80 items-center justify-center">
              <div className="absolute h-full w-full rounded-full border-2 border-white/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute h-64 w-64 rounded-full border-2 border-white/10 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <span className="text-5xl font-extrabold text-white">VK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="bg-white" id="services-preview">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-wider">
              What We Offer
            </p>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 text-muted max-w-xl mx-auto">
              Comprehensive financial and compliance solutions tailored to your
              business needs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((svc) => (
              <div
                key={svc.category}
                className="group rounded-xl border border-card-border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {iconMap[svc.icon]}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {svc.category}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {svc.items.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <CheckCircle size={14} className="text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="bg-background" id="about-preview">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 text-center lg:text-left">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                Who We Are
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
                About {SITE_CONFIG.name}
              </h2>
              <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-muted leading-relaxed">
                With deep expertise in taxation, auditing, and business
                compliance, we deliver precise financial solutions that
                empower businesses to thrive. Our commitment to accuracy,
                transparency, and regulatory excellence sets us apart.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "500+", label: "Clients Served" },
                { value: "100%", label: "Compliance Rate" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white border border-card-border p-6 text-center hover:shadow-md transition-shadow"
                >
                  <p className="text-3xl font-extrabold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="bg-primary" id="contact-cta">
        <div className="mx-auto max-w-4xl px-4 text-center text-white lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-3 text-white/70 max-w-lg mx-auto">
            Book a free consultation today and discover how we can simplify
            your finances and compliance needs.
          </p>
          <Link
            href="/contact"
            id="cta-btn"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
