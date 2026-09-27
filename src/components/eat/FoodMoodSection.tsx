"use client";

import React from "react";
import { FOOD_MOODS, type FoodMoodItem } from "@/data/food";

interface FoodMoodSectionProps {
  selectedMood: string;
  onSelectMood: (mood: string) => void;
}

export function FoodMoodSection({
  selectedMood,
  onSelectMood,
}: FoodMoodSectionProps) {
  return (
    <div className="my-6 p-6 sm:p-7 bg-ivory-light rounded-sm border border-sand/40">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
            EXPLORE BY APPETITE
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">
            What are you in the mood for?
          </h3>
        </div>

        {selectedMood && (
          <button
            type="button"
            onClick={() => onSelectMood("")}
            className="text-xs text-saffron hover:underline font-semibold tracking-wider uppercase self-start sm:self-auto min-h-[44px] flex items-center"
          >
            Clear mood filter (×)
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2.5">
        {FOOD_MOODS.map((mood: FoodMoodItem) => {
          const isActive =
            selectedMood.toLowerCase() === mood.tag.toLowerCase();

          return (
            <button
              key={mood.id}
              type="button"
              onClick={() => onSelectMood(isActive ? "" : mood.tag)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-medium tracking-wide transition-all min-h-[44px] cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron ${
                isActive
                  ? "bg-saffron text-ivory shadow-sm border border-saffron-dark font-semibold scale-105"
                  : "bg-white text-charcoal hover:border-gold border border-sand/40 hover:bg-sand/15"
              }`}
            >
              <span className="text-base" aria-hidden="true">
                {mood.icon}
              </span>
              <span>{mood.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
