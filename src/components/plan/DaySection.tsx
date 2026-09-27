"use client";

import React from "react";
import { ItineraryItem } from "./ItineraryItem";
import { ItineraryRoute } from "./ItineraryRoute";
import type { Day } from "@/types/itinerary";
import { Sun, Sunset, Moon, Coffee } from "lucide-react";

interface DaySectionProps {
  day: Day;
  isFirst?: boolean;
}

const periodIcons = {
  MORNING: Sun,
  AFTERNOON: Coffee,
  EVENING: Sunset,
  NIGHT: Moon,
};

export function DaySection({ day, isFirst }: DaySectionProps) {
  return (
    <div id={`day-${day.dayNumber}`} className="space-y-8">
      {/* Day Title & Header */}
      <div className="pb-4 border-b border-sand/30">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-charcoal text-gold-light rounded-xs">
            DAY {day.dayNumber}
          </span>
          <span className="text-xs text-text-muted font-medium">
            {day.theme}
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-charcoal mb-2">
          {day.title}
        </h3>

        <p className="text-sm text-text-muted leading-relaxed font-light">
          {day.summary}
        </p>
      </div>

      {/* Visual Route Flow */}
      <ItineraryRoute routeFlow={day.routeFlow} />

      {/* Structured Day Periods (Morning, Afternoon, Evening, Night) */}
      <div className="space-y-10">
        {day.periods.map((period) => {
          if (!period.items || period.items.length === 0) return null;
          const Icon = periodIcons[period.period] || Sun;

          return (
            <div key={period.period} className="space-y-4">
              {/* Period Header */}
              <div className="flex items-center justify-between pb-2 border-b border-sand/20">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-sand/20 text-saffron flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-charcoal">
                    {period.period}
                  </span>
                </div>

                <span className="text-xs text-text-muted font-mono">
                  {period.timeSlot}
                </span>
              </div>

              {/* Activity Cards List */}
              <div className="space-y-4">
                {period.items.map((item) => (
                  <ItineraryItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
