"use client";

import React from "react";
import { WALK_CATEGORIES, type WalkCategoryItem } from "@/data/walks";

interface WalkCategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function WalkCategories({
  selectedCategory,
  onSelectCategory,
}: WalkCategoriesProps) {
  return (
    <div id="walk-discovery" className="w-full py-8 sm:py-10 bg-ivory border-b border-sand/25">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
              THEMATIC TRAILS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
              How do you want to experience Kashi?
            </h2>
          </div>

          <span className="text-xs text-text-muted">
            Select a theme to filter curated walking journeys
          </span>
        </div>

        {/* Categories Bar - Horizontal scroll on mobile without breaking layout */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0">
          {WALK_CATEGORIES.map((cat: WalkCategoryItem) => {
            const isSelected =
              selectedCategory.toUpperCase() === cat.categoryKey.toUpperCase();

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.categoryKey)}
                className={`group shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 select-none min-h-[42px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron ${
                  isSelected
                    ? "bg-charcoal text-ivory shadow-md border border-charcoal scale-102"
                    : "bg-white text-charcoal/80 border border-sand/50 hover:border-gold hover:text-charcoal hover:bg-ivory-light"
                }`}
                aria-pressed={isSelected}
              >
                <span className="text-sm">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
