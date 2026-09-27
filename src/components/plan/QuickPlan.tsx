"use client";

import React from "react";
import { Zap, ArrowRight, Clock } from "lucide-react";
import { getQuickItinerary } from "@/lib/itineraryEngine";
import type { Itinerary } from "@/types/itinerary";

interface QuickPlanProps {
  onSelectQuickPlan: (itinerary: Itinerary) => void;
}

export function QuickPlan({ onSelectQuickPlan }: QuickPlanProps) {
  const handleGenerateQuick = (days: 1 | 2 | 3) => {
    const plan = getQuickItinerary(days);
    onSelectQuickPlan(plan);
    const el = document.getElementById("itinerary-results");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-12 sm:py-16 bg-ivory border-t border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <div className="max-w-xl mx-auto mb-8">
          <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
            INSTANT ESSENTIALS
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium">
            Just want the essentials?
          </h3>
          <p className="text-xs sm:text-sm text-text-muted mt-1.5 font-light leading-relaxed">
            Short on time? Jump straight into a balanced, pre-crafted itinerary featuring Kashi’s timeless icons.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* 1 Day */}
          <div className="bg-white rounded-sm border border-sand/40 hover:border-gold/60 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-saffron block mb-1">
                EXPRESS
              </span>
              <h4 className="font-serif text-2xl font-medium text-charcoal mb-2">
                1 Day in Kashi
              </h4>
              <p className="text-xs text-text-muted leading-relaxed mb-4">
                Dawn boat on the Ganga, Vishwanath Jyotirlinga corridor, authentic kachori breakfast, and evening Dashashwamedh Aarti.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleGenerateQuick(1)}
              className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-sm bg-charcoal text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-charcoal-dark transition-colors cursor-pointer"
            >
              <span>Instant 1-Day Plan</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-light" />
            </button>
          </div>

          {/* 2 Days */}
          <div className="bg-white rounded-sm border border-gold/40 hover:border-gold p-6 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gold text-charcoal text-[9px] font-bold uppercase px-3 py-0.5 rounded-bl-xs tracking-wider">
              POPULAR
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-saffron block mb-1">
                CLASSIC
              </span>
              <h4 className="font-serif text-2xl font-medium text-charcoal mb-2">
                2 Days in Kashi
              </h4>
              <p className="text-xs text-text-muted leading-relaxed mb-4">
                Day 1 on the sacred river & ancient gallis; Day 2 covering Kal Bhairav guardian sanctum, street chaats, and observatory.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleGenerateQuick(2)}
              className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-sm bg-gold text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors cursor-pointer"
            >
              <span>Instant 2-Day Plan</span>
              <ArrowRight className="w-3.5 h-3.5 text-charcoal" />
            </button>
          </div>

          {/* 3 Days */}
          <div className="bg-white rounded-sm border border-sand/40 hover:border-gold/60 p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-saffron block mb-1">
                COMPLETE ARC
              </span>
              <h4 className="font-serif text-2xl font-medium text-charcoal mb-2">
                3 Days in Kashi
              </h4>
              <p className="text-xs text-text-muted leading-relaxed mb-4">
                Ghats, old-city food pilgrimage, Jyotirlinga darshan, plus an excursion to the peaceful Buddhist deer park of Sarnath.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleGenerateQuick(3)}
              className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-sm bg-charcoal text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-charcoal-dark transition-colors cursor-pointer"
            >
              <span>Instant 3-Day Plan</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-light" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
