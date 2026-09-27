"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navigationLinks } from "@/data/kashi";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolidBackground = !isHome || isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          showSolidBackground
            ? "bg-charcoal/92 backdrop-blur-md py-3 shadow-md border-b border-sand/15 text-ivory"
            : "bg-gradient-to-b from-charcoal/80 via-charcoal/30 to-transparent py-5 text-ivory"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron rounded-sm"
            aria-label="KashiNagri Home"
          >
            {/* Subtle Ganga Waves Minimal Mark */}
            <div className="w-8 h-6 relative flex items-center justify-center text-gold transition-transform duration-300 group-hover:scale-105">
              <svg
                width="28"
                height="16"
                viewBox="0 0 28 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full stroke-current"
                aria-hidden="true"
              >
                {/* Traditional Kashi Ghat Step Wave Motif */}
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

            <div className="flex flex-col">
              <span className="font-serif tracking-[0.22em] text-lg sm:text-xl font-semibold tracking-wider text-ivory group-hover:text-gold-light transition-colors">
                KASHINAGRI
              </span>
            </div>
          </Link>

          {/* Desktop Center/Right Navigation */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-9"
            aria-label="Main Navigation"
          >
            {navigationLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-sm tracking-wide transition-colors duration-200 py-1 font-medium group ${
                    isActive
                      ? "text-gold font-semibold"
                      : "text-ivory/85 hover:text-gold-light"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-gold transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/plan"
              className="inline-flex items-center justify-center text-xs font-semibold tracking-[0.15em] uppercase px-5 py-2.5 rounded-sm bg-gold/90 text-charcoal hover:bg-gold-light transition-all duration-300 min-h-[44px] shadow-sm hover:shadow active:scale-[0.99]"
            >
              Plan My Trip
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden flex items-center justify-center p-2.5 rounded-sm text-ivory hover:text-gold hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px]"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
