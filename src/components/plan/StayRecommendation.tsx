"use client";

import React from "react";
import Link from "next/link";
import { Bed, ArrowRight, MapPin, Sparkles } from "lucide-react";
import type { RecommendationSummary, BaseAreaOption } from "@/types/itinerary";

interface StayRecommendationProps {
  stayRecommendation?: RecommendationSummary["stayAreaRecommendation"];
  baseArea?: BaseAreaOption;
}

export function StayRecommendation({
  stayRecommendation,
  baseArea,
}: StayRecommendationProps) {
  const isDecided = baseArea && baseArea !== "not-decided";

  return (
    <section className="w-full py-10 sm:py-14 bg-ivory-light border-t border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="bg-white rounded-sm border border-sand/40 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-saffron mb-1.5">
              <Bed className="w-4 h-4" />
              <span>{isDecided ? "YOUR TRIP BASE" : "WHERE TO STAY"}</span>
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium mb-2">
              {stayRecommendation ? stayRecommendation.name : "Find your Kashi base"}
            </h4>

            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-light mb-2">
              {stayRecommendation?.description ||
                "Base yourself in an ancient stone haveli near the river steps or a peaceful modern retreat in the Cantonment."}
            </p>

            {stayRecommendation?.reason && (
              <p className="text-xs text-charcoal/80 font-medium">
                💡 {stayRecommendation.reason}
              </p>
            )}
          </div>

          <div className="shrink-0">
            {stayRecommendation ? (
              <Link
                href={`/stay/${stayRecommendation.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-charcoal text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-charcoal-dark transition-colors shadow-sm min-h-[44px]"
              >
                <span>Explore Stays in {stayRecommendation.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <Link
                href="/stay"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-gold text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors shadow-sm min-h-[44px]"
              >
                <span>Find Your Kashi Base</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
