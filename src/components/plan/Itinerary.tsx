"use client";

import React, { useState } from "react";
import { TripSummary } from "./TripSummary";
import { DaySection } from "./DaySection";
import { TripEssentials } from "./TripEssentials";
import { StayRecommendation } from "./StayRecommendation";
import { TransportRecommendation } from "./TransportRecommendation";
import { SharePlan } from "./SharePlan";
import type { Itinerary as ItineraryType } from "@/types/itinerary";
import { Calendar, Compass } from "lucide-react";

interface ItineraryProps {
  itinerary: ItineraryType;
  onEditPreferences: () => void;
  onStartOver: () => void;
}

export function Itinerary({
  itinerary,
  onEditPreferences,
  onStartOver,
}: ItineraryProps) {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);

  const selectedDay =
    itinerary.days.find((d) => d.dayNumber === selectedDayNumber) ||
    itinerary.days[0];

  return (
    <div id="itinerary-results" className="w-full">
      {/* 1. Top Summary Banner */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 sm:pt-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Compass className="w-4 h-4 text-gold-dark" />
            <span>Itinerary generated according to your personal travel style</span>
          </div>

          {/* Share & Print Bar */}
          <div className="print:hidden">
            <SharePlan itinerary={itinerary} />
          </div>
        </div>

        <TripSummary
          itinerary={itinerary}
          onEditPreferences={onEditPreferences}
          onStartOver={onStartOver}
        />
      </div>

      {/* 2. Main Daily Schedule Layout */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16">
        {/* Mobile Horizontal Day Tabs */}
        <div className="block lg:hidden mb-8 print:hidden">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-5 px-5">
            {itinerary.days.map((day) => {
              const isSelected = day.dayNumber === selectedDayNumber;

              return (
                <button
                  key={day.dayNumber}
                  type="button"
                  onClick={() => setSelectedDayNumber(day.dayNumber)}
                  className={`shrink-0 px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer min-h-[42px] ${
                    isSelected
                      ? "bg-charcoal text-ivory border border-charcoal shadow-sm"
                      : "bg-white text-charcoal/80 border border-sand/40 hover:border-gold"
                  }`}
                  aria-pressed={isSelected}
                >
                  <span>DAY {day.dayNumber}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Layout: Left Sticky Day Index + Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Day Index Navigation (4 cols desktop, sticky, hidden on print) */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 space-y-3 print:hidden">
            <div className="p-5 rounded-sm bg-white border border-sand/35 space-y-2">
              <span className="text-[10px] font-semibold tracking-[0.25em] text-saffron uppercase block mb-3">
                DAY-BY-DAY SCHEDULE
              </span>

              {itinerary.days.map((day) => {
                const isSelected = day.dayNumber === selectedDayNumber;

                return (
                  <button
                    key={day.dayNumber}
                    type="button"
                    onClick={() => setSelectedDayNumber(day.dayNumber)}
                    className={`w-full text-left p-3.5 rounded-sm transition-all duration-200 cursor-pointer block border ${
                      isSelected
                        ? "bg-ivory-light border-gold shadow-xs"
                        : "bg-transparent border-transparent hover:bg-sand/15"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs uppercase tracking-wider text-charcoal">
                        DAY {day.dayNumber}
                      </span>
                      <span className="text-[10px] text-saffron uppercase font-semibold">
                        {day.periods.length} Periods
                      </span>
                    </div>

                    <h5 className="font-serif text-sm font-medium text-charcoal leading-snug line-clamp-1">
                      {day.title}
                    </h5>

                    <p className="text-[11px] text-text-muted line-clamp-1 mt-0.5 font-light">
                      {day.theme}
                    </p>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT: Active Day Itinerary Content (8 cols desktop) */}
          <main className="lg:col-span-8">
            <DaySection day={selectedDay} />
          </main>
        </div>
      </div>

      {/* 3. Personalized Kashi Essentials */}
      <TripEssentials
        recommendations={itinerary.recommendations}
        preferences={itinerary.preferences}
      />

      {/* 4. Stay Recommendation */}
      <StayRecommendation
        stayRecommendation={itinerary.recommendations.stayAreaRecommendation}
        baseArea={itinerary.preferences.baseArea}
      />

      {/* 5. Transport Guidance */}
      <TransportRecommendation
        suggestions={itinerary.recommendations.transportSuggestions}
      />
    </div>
  );
}
