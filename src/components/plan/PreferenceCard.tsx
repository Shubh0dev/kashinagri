"use client";

import React from "react";
import { Check } from "lucide-react";

interface PreferenceCardProps {
  id: string;
  label: string;
  description?: string;
  icon?: string | React.ReactNode;
  badge?: string;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export function PreferenceCard({
  id,
  label,
  description,
  icon,
  badge,
  isSelected,
  onClick,
  disabled = false,
}: PreferenceCardProps) {
  return (
    <button
      id={`pref-${id}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={isSelected}
      className={`group relative text-left p-4 sm:p-5 rounded-sm transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold flex flex-col justify-between min-h-[88px] ${
        isSelected
          ? "bg-white border-2 border-gold shadow-md"
          : "bg-white/90 border border-sand/50 hover:border-gold/60 hover:bg-white hover:shadow-xs"
      } ${disabled ? "opacity-40 cursor-not-allowed" : ""}`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2.5">
            {icon && (
              <span className="text-xl sm:text-2xl shrink-0" aria-hidden="true">
                {icon}
              </span>
            )}
            <span
              className={`font-serif text-lg sm:text-xl font-medium tracking-tight leading-snug transition-colors ${
                isSelected ? "text-charcoal font-semibold" : "text-charcoal/90"
              }`}
            >
              {label}
            </span>
          </div>

          {/* Selection Check Indicator */}
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${
              isSelected
                ? "bg-gold text-charcoal scale-100"
                : "border border-sand/40 opacity-0 group-hover:opacity-60"
            }`}
          >
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
        </div>

        {description && (
          <p className="text-xs text-text-muted leading-relaxed font-light mt-1">
            {description}
          </p>
        )}
      </div>

      {badge && (
        <div className="mt-2.5">
          <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-xs bg-sand/20 text-gold-dark">
            {badge}
          </span>
        </div>
      )}
    </button>
  );
}
