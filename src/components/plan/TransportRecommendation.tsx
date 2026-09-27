"use client";

import React from "react";
import Link from "next/link";
import { Navigation, Footprints, Zap, Car, Ship, ArrowRight, Info } from "lucide-react";
import type { RecommendationSummary } from "@/types/itinerary";

interface TransportRecommendationProps {
  suggestions: RecommendationSummary["transportSuggestions"];
}

const iconMap = {
  footprints: Footprints,
  zap: Zap,
  car: Car,
  bike: Zap,
  ship: Ship,
};

export function TransportRecommendation({
  suggestions,
}: TransportRecommendationProps) {
  if (!suggestions || suggestions.length === 0) return null;

  return (
    <section className="w-full py-10 sm:py-14 bg-white border-t border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
              CITY TRANSIT GUIDANCE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
              Getting around during your trip
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mt-1 font-light">
              Consider these modes based on your travel party and daily route flow.
            </p>
          </div>

          <Link
            href="/move"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors"
          >
            <span>Full Transit Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {suggestions.map((item, idx) => {
            const Icon = (item.icon && iconMap[item.icon]) || Navigation;

            return (
              <div
                key={idx}
                className="bg-ivory-light rounded-sm border border-sand/40 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-sand/25 text-saffron flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif text-xl font-medium text-charcoal">
                        Consider {item.mode}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                    {item.reason}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand/20 flex items-start gap-2 text-xs text-charcoal/80 bg-white/70 p-3 rounded-xs">
                  <Info className="w-3.5 h-3.5 text-ganga shrink-0 mt-0.5" />
                  <span className="italic">{item.tip}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
