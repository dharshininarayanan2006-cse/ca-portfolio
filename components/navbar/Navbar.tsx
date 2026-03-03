"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import clsx from "clsx";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-card-border">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
                {/* Logo / Brand */}
                <Link href="/" className="flex items-center gap-2 group" id="brand-logo">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-lg transition-transform group-hover:scale-105">
                        VK
                    </span>
                    <div className="hidden sm:block">
                        <p className="text-sm font-bold text-foreground leading-tight">
                            {SITE_CONFIG.name}
                        </p>
                        <p className="text-xs text-muted">{SITE_CONFIG.role}</p>
                    </div>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                id={`nav-${link.label.toLowerCase()}`}
                                className={clsx(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                    pathname === link.href
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted hover:text-foreground hover:bg-primary/5"
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        id="nav-call-btn"
                        className="hidden sm:flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-light transition-colors"
                    >
                        <Phone size={14} />
                        Call Now
                    </a>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-primary/5 text-foreground"
                        id="mobile-menu-btn"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={clsx(
                    "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-card-border bg-white",
                    mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <ul className="flex flex-col px-4 py-3 gap-1">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={clsx(
                                    "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                    pathname === link.href
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted hover:text-foreground hover:bg-primary/5"
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
