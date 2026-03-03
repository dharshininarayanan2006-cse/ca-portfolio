import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-white" id="footer">
            <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
                <div className="grid gap-10 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
                                VK
                            </span>
                            <div>
                                <p className="font-bold leading-tight">{SITE_CONFIG.name}</p>
                                <p className="text-sm text-white/60">{SITE_CONFIG.role}</p>
                            </div>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                            {SITE_CONFIG.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/70 hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                            Get in Touch
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-white/70">
                                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                                <span>{SITE_CONFIG.address}</span>
                            </li>
                            <li>
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`}
                                    className="flex items-center gap-3 text-sm text-white/70 hover:text-accent transition-colors"
                                >
                                    <Phone size={16} className="shrink-0" />
                                    {SITE_CONFIG.phone}
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${SITE_CONFIG.email}`}
                                    className="flex items-center gap-3 text-sm text-white/70 hover:text-accent transition-colors"
                                >
                                    <Mail size={16} className="shrink-0" />
                                    {SITE_CONFIG.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 border-t border-white/10 pt-6 text-center">
                    <p className="text-xs text-white/40">
                        © {year} {SITE_CONFIG.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
