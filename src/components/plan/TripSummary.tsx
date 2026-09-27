"use client";

import React from "react";
import { Edit3, RotateCcw, Calendar, Users, Activity, Sparkles, MapPin } from "lucide-react";
import type { Itinerary } from "@/types/itinerary";

interface TripSummaryProps {
  itinerary: Itinerary;
  onEditPreferences: () => void;
  onStartOver: () => void;
}

export function TripSummary({
  itinerary,
  onEditPreferences,
  onStartOver,
}: TripSummaryProps) {
  const { summary } = itinerary;

  return (
    <div className="w-full bg-charcoal text-ivory rounded-sm border border-sand/20 p-6 sm:p-8 shadow-xl mb-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-sand/15">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.25em] text-gold-light uppercase mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-saffron" />
            <span>YOUR KASHI PLAN</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ivory">
            {itinerary.title}
          </h1>
          <p className="text-sm sm:text-base text-sand-light/80 font-light mt-1">
            {itinerary.subtitle}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onEditPreferences}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-sm bg-charcoal-surface border border-sand/30 text-xs font-semibold uppercase tracking-wider text-ivory hover:text-gold-light hover:border-gold transition-colors cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5 text-gold" />
            <span>Edit preferences</span>
          </button>

          <button
            type="button"
            onClick={onStartOver}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-sm bg-transparent border border-sand/20 text-xs font-semibold uppercase tracking-wider text-sand-light hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Start over</span>
          </button>
        </div>
      </div>

      {/* Structured Preference Attributes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6 text-xs">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-sand-light/60 font-semibold block mb-1">
            DURATION
          </span>
          <div className="flex items-center gap-1.5 font-medium text-ivory">
            <Calendar className="w-3.5 h-3.5 text-saffron" />
            <span>{summary.durationDays} {summary.durationDays === 1 ? "Day" : "Days"}</span>
          </div>
        </div>

        <div>
          <span className="text-[10px] uppercase tracking-wider text-sand-light/60 font-semibold block mb-1">
            TRAVELLERS
          </span>
          <div className="flex items-center gap-1.5 font-medium text-ivory">
            <Users className="w-3.5 h-3.5 text-ganga-light" />
            <span>{summary.travellerLabel}</span>
          </div>
        </div>

        <div>
          <span className="text-[10px] uppercase tracking-wider text-sand-light/60 font-semibold block mb-1">
            TRAVEL PACE
          </span>
          <div className="flex items-center gap-1.5 font-medium text-ivory">
            <Activity className="w-3.5 h-3.5 text-gold-light" />
            <span>{summary.paceLabel}</span>
          </div>
        </div>

        <div>
          <span className="text-[10px] uppercase tracking-wider text-sand-light/60 font-semibold block mb-1">
            INTERESTS
          </span>
          <div className="font-medium text-ivory line-clamp-1">
            {summary.interestsLabels.slice(0, 3).join(" • ")}
          </div>
        </div>

        <div>
          <span className="text-[10px] uppercase tracking-wider text-sand-light/60 font-semibold block mb-1">
            BASE AREA
          </span>
          <div className="flex items-center gap-1.5 font-medium text-ivory">
            <MapPin className="w-3.5 h-3.5 text-saffron" />
            <span>{summary.baseAreaLabel || "Flexible"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
