import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-3 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`text-xs font-semibold tracking-[0.25em] uppercase inline-flex items-center gap-2 ${
            isDark ? "text-gold-light" : "text-saffron"
          }`}
        >
          <span
            className={`w-6 h-[1px] ${
              isDark ? "bg-gold-light/60" : "bg-saffron/60"
            }`}
          />
          <span>{eyebrow}</span>
          {isCenter && (
            <span
              className={`w-6 h-[1px] ${
                isDark ? "bg-gold-light/60" : "bg-saffron/60"
              }`}
            />
          )}
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight ${
          isDark ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? "text-sand-light/80" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
