"use client";

import React from "react";
import Link from "next/link";
import {
  Footprints,
  Zap,
  Bike,
  Shield,
  Car,
  Ship,
  ArrowRight,
  Info,
} from "lucide-react";
import { transportModes, type TransportMode } from "@/data/kashi";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  footprints: Footprints,
  zap: Zap,
  bike: Bike,
  shield: Shield,
  car: Car,
  ship: Ship,
};

export function TransportPreview() {
  return (
    <section
      id="transport"
      className="w-full py-20 sm:py-28 bg-ivory text-charcoal"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="NAVIGATING THE CITY"
            title="Move around Kashi"
            subtitle="Choose your way through the city — every route from ancient alleys to wide outer avenues has its own ideal rhythm."
          />

          <Link
            href="#transport"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-charcoal hover:text-saffron transition-colors min-h-[44px]"
          >
            <span>Explore transportation</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* 6 Transport Mode Cards: 3 cols desktop, 2 cols tablet/mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {transportModes.map((mode: TransportMode) => {
            const Icon = iconMap[mode.icon];

            return (
              <div
                key={mode.id}
                className="group flex flex-col justify-between p-5 sm:p-6 rounded-sm bg-ivory-light border border-sand/40 hover:border-gold/60 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div>
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-sm bg-sand/20 border border-sand/30 flex items-center justify-center text-charcoal group-hover:bg-gold group-hover:text-charcoal transition-colors mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-charcoal mb-1">
                    {mode.title}
                  </h3>

                  {/* Best For Tag */}
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-saffron block mb-3">
                    {mode.bestFor}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-text-muted leading-relaxed mb-4 line-clamp-3">
                    {mode.description}
                  </p>
                </div>

                {/* Practical Tip */}
                <div className="pt-3 border-t border-sand/20 flex items-start gap-1.5 text-[11px] text-text-muted">
                  <Info className="w-3 h-3 text-ganga shrink-0 mt-0.5" />
                  <span className="italic">{mode.tip}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-text-muted/80">
            * KashiNagri provides independent route and transit intelligence. Direct bookings and live transit tracking will roll out in upcoming stages.
          </p>
        </div>
      </div>
    </section>
  );
}
