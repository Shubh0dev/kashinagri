"use client";

import React, { useMemo } from "react";
import { searchPlaces, type Place } from "@/data/places";
import { PlaceCard } from "./PlaceCard";
import { MoodFilter } from "./MoodFilter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SearchX, RotateCcw } from "lucide-react";

interface PlacesExplorerProps {
  searchQuery: string;
  selectedCategory: string;
  selectedMoodTag: string;
  onSelectMoodTag: (tag: string) => void;
  onResetFilters: () => void;
}

export function PlacesExplorer({
  searchQuery,
  selectedCategory,
  selectedMoodTag,
  onSelectMoodTag,
  onResetFilters,
}: PlacesExplorerProps) {
  // Compute filtered places
  const filteredPlaces = useMemo(() => {
    return searchPlaces(searchQuery, selectedCategory, selectedMoodTag);
  }, [searchQuery, selectedCategory, selectedMoodTag]);

  const hasActiveFilters =
    searchQuery.trim().length > 0 ||
    selectedCategory.toUpperCase() !== "ALL" ||
    selectedMoodTag.length > 0;

  return (
    <div id="places-grid" className="w-full">
      {/* Mood filter discovery component */}
      <MoodFilter
        selectedTag={selectedMoodTag}
        onSelectTag={onSelectMoodTag}
      />

      {/* Results Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pt-4 border-t border-sand/20">
        <div>
          <SectionHeading
            eyebrow="DIRECTORY & DISCOVERY"
            title={
              selectedCategory !== "ALL"
                ? `${selectedCategory} in Kashi`
                : "Start with the icons of Kashi"
            }
            subtitle={
              selectedCategory !== "ALL"
                ? `Explore curated ${selectedCategory.toLowerCase()} destinations and cultural landmarks.`
                : "The places, ghats, and living monuments that define the ancient city."
            }
          />
        </div>

        {/* Counter and reset */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <span className="text-xs font-semibold tracking-wider text-text-muted uppercase px-3 py-1.5 bg-sand/20 rounded-xs">
            {filteredPlaces.length}{" "}
            {filteredPlaces.length === 1 ? "Place" : "Places"} Found
          </span>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-saffron hover:text-saffron-dark uppercase tracking-wider min-h-[44px] px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Grid or Empty State */}
      {filteredPlaces.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredPlaces.map((place: Place, index: number) => {
            // First item or items with featured flag when viewing ALL can render as featured
            const isFeaturedCard =
              (selectedCategory === "ALL" && !hasActiveFilters && index === 0) ||
              Boolean(place.featured && index === 0);

            return (
              <PlaceCard
                key={place.id}
                place={place}
                variant={isFeaturedCard ? "featured" : "standard"}
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
            No places found
          </h3>

          <p className="text-sm text-text-muted max-w-md mx-auto mb-6">
            We couldn't find any places matching your current search and filter
            criteria. Try clearing your filters or searching for terms like
            "temple", "ghat", or "sarnath".
          </p>

          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-ivory text-xs font-semibold tracking-wider uppercase rounded-xs hover:bg-charcoal-dark transition-colors min-h-[44px]"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}
