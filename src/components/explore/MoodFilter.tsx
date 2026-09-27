"use client";

import React from "react";
import { MOOD_TAGS, type MoodTag } from "@/data/places";

interface MoodFilterProps {
  selectedTag: string;
  onSelectTag: (tag: string) => void;
}

export function MoodFilter({ selectedTag, onSelectTag }: MoodFilterProps) {
  return (
    <div className="my-8 p-6 sm:p-8 bg-ivory-light rounded-sm border border-sand/40">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
            DISCOVERY BY MOOD
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">
            What kind of Kashi are you looking for?
          </h3>
        </div>

        {selectedTag && (
          <button
            type="button"
            onClick={() => onSelectTag("")}
            className="text-xs text-saffron hover:underline font-semibold tracking-wider uppercase self-start sm:self-auto min-h-[44px] flex items-center"
          >
            Clear mood filter (×)
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2.5">
        {MOOD_TAGS.map((mood: MoodTag) => {
          const isActive =
            selectedTag.toLowerCase() === mood.tag.toLowerCase();

          return (
            <button
              key={mood.id}
              type="button"
              onClick={() => onSelectTag(isActive ? "" : mood.tag)}
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
