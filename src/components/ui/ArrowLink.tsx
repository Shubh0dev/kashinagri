import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  theme?: "light" | "dark";
  ariaLabel?: string;
}

export function ArrowLink({
  href,
  children,
  className = "",
  theme = "light",
  ariaLabel,
}: ArrowLinkProps) {
  const isDark = theme === "dark";

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`group inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-colors duration-300 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron ${
        isDark
          ? "text-gold-light hover:text-ivory"
          : "text-charcoal hover:text-saffron"
      } ${className}`}
    >
      <span className="relative">
        {children}
        <span
          className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
            isDark ? "bg-ivory" : "bg-saffron"
          }`}
        />
      </span>
      <ArrowRight
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
        aria-hidden="true"
      />
    </Link>
  );
}
