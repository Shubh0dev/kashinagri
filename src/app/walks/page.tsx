"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { WalksHero } from "@/components/walks/WalksHero";
import { WalkCategories } from "@/components/walks/WalkCategories";
import { WalkSearch } from "@/components/walks/WalkSearch";
import { WalkFilters, type WalkFilterState } from "@/components/walks/WalkFilters";
import { WalkGrid } from "@/components/walks/WalkGrid";
import { WalkRecommendation } from "@/components/walks/WalkRecommendation";
import { WalkTips } from "@/components/walks/WalkTips";
import { walksData, type Walk } from "@/data/walks";

const INITIAL_FILTERS: WalkFilterState = {
  time: "ALL",
  interest: "ALL",
  timeOfDay: "ALL",
  difficulty: "ALL",
};

export default function WalksPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<WalkFilterState>(INITIAL_FILTERS);

  const handleFilterChange = <K extends keyof WalkFilterState>(
    key: K,
    value: WalkFilterState[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setSelectedCategory("ALL");
    setSearchQuery("");
    setFilters(INITIAL_FILTERS);
  };

  // Filtered walks dataset based on category, search, and multi-filters
  const filteredWalks = useMemo(() => {
    return walksData.filter((walk) => {
      // 1. Thematic Category Filter
      if (selectedCategory !== "ALL") {
        if (walk.category.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }
      }

      // 2. Search Query across name, description, tags, stops
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = walk.name.toLowerCase().includes(query);
        const matchesDesc =
          walk.description.toLowerCase().includes(query) ||
          walk.shortDescription.toLowerCase().includes(query);
        const matchesCategory = walk.category.toLowerCase().includes(query);
        const matchesTags = walk.tags.some((t) => t.toLowerCase().includes(query));
        const matchesStops = walk.stops.some((s) => s.name.toLowerCase().includes(query));

        if (
          !matchesName &&
          !matchesDesc &&
          !matchesCategory &&
          !matchesTags &&
          !matchesStops
        ) {
          return false;
        }
      }

      // 3. Time Filter
      if (filters.time !== "ALL") {
        if (filters.time === "<1h" && !walk.duration.includes("1") && !walk.duration.includes("45")) return false;
        if (filters.time === "1-2h" && !walk.duration.includes("2") && !walk.duration.includes("1.5")) return false;
        if (filters.time === "2-3h" && !walk.duration.includes("2–3") && !walk.duration.includes("2.5") && !walk.duration.includes("3")) return false;
        if (filters.time === "halfday" && !walk.duration.includes("3") && !walk.distance.includes("3.")) return false;
      }

      // 4. Interest Filter
      if (filters.interest !== "ALL") {
        const hasInterest = walk.interests.some(
          (i) => i.toLowerCase() === filters.interest.toLowerCase()
        );
        const matchesCategory = walk.category.toLowerCase() === filters.interest.toLowerCase();
        if (!hasInterest && !matchesCategory) return false;
      }

      // 5. Time of Day Filter
      if (filters.timeOfDay !== "ALL") {
        const hasTimeOfDay = walk.timeOfDay.some(
          (tod) => tod.toLowerCase() === filters.timeOfDay.toLowerCase()
        );
        if (!hasTimeOfDay) return false;
      }

      // 6. Difficulty Filter
      if (filters.difficulty !== "ALL") {
        if (walk.difficulty.toLowerCase() !== filters.difficulty.toLowerCase()) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery, filters]);

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col selection:bg-saffron selection:text-white">
      {/* Sticky Global Navigation */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 1. Cinematic Walks Hero */}
        <WalksHero />

        {/* 2. Walk Categories Filter Bar */}
        <WalkCategories
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 3. Search and Multi-Filter Controls */}
        <section className="w-full py-8 bg-ivory">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-6">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <WalkSearch
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                resultCount={filteredWalks.length}
              />

              <div className="text-xs text-text-muted hidden md:block">
                Curated routes marked with approximate distances & stops
              </div>
            </div>

            <WalkFilters
              filters={filters}
              onChangeFilter={handleFilterChange}
              onResetFilters={handleResetFilters}
            />
          </div>
        </section>

        {/* 4. Filtered Walks Grid */}
        <WalkGrid
          walks={filteredWalks}
          onResetFilters={handleResetFilters}
          totalAvailable={walksData.length}
        />

        {/* 5. Interactive "Which walk is right for you?" Recommender */}
        <WalkRecommendation />

        {/* 6. What to Expect & Practical Walking Tips */}
        <WalkTips />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
