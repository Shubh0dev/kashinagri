"use client";

import React from "react";
import { FOOD_CATEGORIES, type FoodCategoryItem } from "@/data/food";

interface FoodCategoriesProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export function FoodCategories({
  selectedCategory,
  onSelectCategory,
}: FoodCategoriesProps) {
  return (
    <section className="w-full bg-ivory border-b border-sand/30 sticky top-[60px] z-30 shadow-xs backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div
          className="flex items-center gap-2 sm:gap-2.5 py-3 overflow-x-auto no-scrollbar scroll-smooth"
          role="tablist"
          aria-label="Food Categories"
        >
          {FOOD_CATEGORIES.map((cat: FoodCategoryItem) => {
            const isSelected =
              selectedCategory.toUpperCase() === cat.key.toUpperCase();

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => onSelectCategory(cat.key)}
                className={`shrink-0 px-4 sm:px-4.5 py-2 rounded-xs text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-200 min-h-[44px] flex items-center justify-center cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron ${
                  isSelected
                    ? "bg-charcoal text-gold shadow-sm border border-charcoal scale-[1.02]"
                    : "bg-ivory-light text-text-muted hover:text-charcoal hover:bg-sand/30 border border-sand/40"
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
