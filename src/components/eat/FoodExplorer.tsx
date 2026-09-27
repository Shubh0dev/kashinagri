"use client";

import React, { useMemo } from "react";
import { searchFood, type FoodItem } from "@/data/food";
import { FoodCard } from "./FoodCard";
import { FoodMoodSection } from "./FoodMoodSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SearchX, RotateCcw } from "lucide-react";

interface FoodExplorerProps {
  searchQuery: string;
  selectedCategory: string;
  selectedMood: string;
  onSelectMood: (mood: string) => void;
  onResetFilters: () => void;
}

export function FoodExplorer({
  searchQuery,
  selectedCategory,
  selectedMood,
  onSelectMood,
  onResetFilters,
}: FoodExplorerProps) {
  const filteredFood = useMemo(() => {
    return searchFood(searchQuery, selectedCategory, selectedMood);
  }, [searchQuery, selectedCategory, selectedMood]);

  const hasActiveFilters =
    searchQuery.trim().length > 0 ||
    selectedCategory.toUpperCase() !== "ALL" ||
    selectedMood.length > 0;

  return (
    <div id="food-directory" className="w-full">
      {/* Mood filter selector */}
      <FoodMoodSection
        selectedMood={selectedMood}
        onSelectMood={onSelectMood}
      />

      {/* Header and Results Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pt-4 border-t border-sand/20">
        <div>
          <SectionHeading
            eyebrow="FOOD DIRECTORY"
            title={
              selectedCategory !== "ALL"
                ? `${selectedCategory} in Kashi`
                : "Culinary Discoveries"
            }
            subtitle={
              selectedCategory !== "ALL"
                ? `Explore curated ${selectedCategory.toLowerCase()} spots and local favourites across the city.`
                : "Browse iconic dishes, century-old halwais, hidden street alleys, and riverside spots."
            }
          />
        </div>

        {/* Counter and Reset Action */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <span className="text-xs font-semibold tracking-wider text-text-muted uppercase px-3 py-1.5 bg-sand/20 rounded-xs">
            {filteredFood.length}{" "}
            {filteredFood.length === 1 ? "Item" : "Items"} Found
          </span>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-saffron hover:text-saffron-dark uppercase tracking-wider min-h-[44px] px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid or Empty State */}
      {filteredFood.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredFood.map((food: FoodItem, index: number) => {
            const isFeatured =
              (selectedCategory === "ALL" && !hasActiveFilters && index === 0) ||
              Boolean(food.featured && index === 0);

            return (
              <FoodCard
                key={food.id}
                food={food}
                variant={isFeatured ? "featured" : "standard"}
              />
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 sm:p-16 text-center bg-ivory-light border border-dashed border-sand rounded-sm my-8">
          <div className="w-14 h-14 rounded-full bg-sand/20 flex items-center justify-center mx-auto mb-4 text-text-muted">
            <SearchX className="w-7 h-7" />
          </div>

          <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">
            No food spots found.
          </h3>

          <p className="text-sm text-text-muted max-w-md mx-auto mb-6">
            We couldn't find any dishes or places matching your search. Try searching for terms like "kachori", "lassi", "assi", or "breakfast".
          </p>

          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-ivory text-xs font-semibold tracking-wider uppercase rounded-xs hover:bg-charcoal-dark transition-colors min-h-[44px] cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try another search</span>
          </button>
        </div>
      )}
    </div>
  );
}
