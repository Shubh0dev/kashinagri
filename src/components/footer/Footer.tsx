import React from "react";
import Link from "next/link";
import { footerLinks } from "@/data/kashi";

export function Footer() {
  return (
    <footer className="w-full bg-charcoal text-ivory border-t border-sand/20 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-sand/15">
          {/* Brand & Narrative Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 focus:outline-none"
              aria-label="KashiNagri Home"
            >
              {/* Subtle Ganga Wave Mark */}
              <div className="w-7 h-5 text-gold">
                <svg
                  viewBox="0 0 28 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full stroke-current"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C5.5 4.5 8.5 4.5 12 9C15.5 13.5 18.5 13.5 22 9C23.5 7 25 7 26 9"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 13C5.5 8.5 8.5 8.5 12 13C15.5 17.5 18.5 17.5 22 13C23.5 11 25 11 26 13"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeOpacity="0.5"
                  />
                </svg>
              </div>

              <span className="font-serif tracking-[0.22em] text-xl font-semibold tracking-wider text-ivory">
                KASHINAGRI
              </span>
            </Link>

            <p className="text-sm text-sand-light/80 font-light leading-relaxed max-w-sm">
              "Discover Kashi. Experience the soul."
            </p>

            <p className="text-xs text-sand/60 font-light leading-relaxed max-w-sm">
              A curated digital guide for curious explorers seeking the
              authentic rhythms, living traditions, and quiet secrets of the
              sacred city.
            </p>

            {/* Social Icons Placeholders */}
            <div className="pt-2 flex items-center gap-3 text-sand-light/70">
              {["Instagram", "YouTube", "X", "Spotify"].map((platform) => (
                <span
                  key={platform}
                  className="w-8 h-8 rounded-xs border border-sand/20 flex items-center justify-center text-[11px] font-medium hover:border-gold hover:text-gold transition-colors cursor-pointer"
                  title={platform}
                  aria-label={platform}
                >
                  {platform.slice(0, 2)}
                </span>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1: Explore */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                EXPLORE
              </h4>
              <ul className="space-y-2.5 text-sm text-sand-light/75">
                {footerLinks.explore.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Discover */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                DISCOVER
              </h4>
              <ul className="space-y-2.5 text-sm text-sand-light/75">
                {footerLinks.discover.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Plan */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                PLAN
              </h4>
              <ul className="space-y-2.5 text-sm text-sand-light/75">
                {footerLinks.plan.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Company */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
                COMPANY
              </h4>
              <ul className="space-y-2.5 text-sm text-sand-light/75">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand/60">
          <div>
            © 2026 KashiNagri. All rights reserved. Made for travellers discovering Kashi.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-ivory cursor-pointer">Privacy Policy</span>
            <span className="hover:text-ivory cursor-pointer">Terms of Service</span>
            <span className="hover:text-ivory cursor-pointer">Editorial Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
