"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ExploreHero } from "@/components/explore/ExploreHero";
import { CategoryNav } from "@/components/explore/CategoryNav";
import { PlacesExplorer } from "@/components/explore/PlacesExplorer";
import { SoulOfKashi } from "@/components/explore/SoulOfKashi";
import {
  GhatsSection,
  TemplesSection,
  SarnathSection,
  HiddenKashiSection,
} from "@/components/explore/ThematicSections";

function ExploreContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedMoodTag, setSelectedMoodTag] = useState("");

  // Sync category or query from URL query params if provided
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const queryParam = searchParams.get("q");
    const tagParam = searchParams.get("tag");

    if (categoryParam) {
      setSelectedCategory(categoryParam.toUpperCase());
    }
    if (queryParam) {
      setSearchQuery(queryParam);
    }
    if (tagParam) {
      setSelectedMoodTag(tagParam);
    }
  }, [searchParams]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("ALL");
    setSelectedMoodTag("");
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col selection:bg-saffron selection:text-white">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. Explore Hero & Live Search Bar */}
        <ExploreHero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* 2. Sticky Category Filter Bar */}
        <CategoryNav
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 3. Interactive Places Explorer (Mood Filter + Places Grid + Empty Fallback) */}
        <section className="w-full py-12 sm:py-16 bg-ivory">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <PlacesExplorer
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              selectedMoodTag={selectedMoodTag}
              onSelectMoodTag={setSelectedMoodTag}
              onResetFilters={handleResetFilters}
            />
          </div>
        </section>

        {/* 4. "The Soul of Kashi" Editorial Magazine Section */}
        <SoulOfKashi />

        {/* 5. Thematic Ghats Section (8 Ghats) */}
        <GhatsSection />

        {/* 6. Thematic Temples Section (8 Temples) */}
        <TemplesSection />

        {/* 7. Thematic Sarnath Section */}
        <SarnathSection />

        {/* 8. Thematic Hidden Kashi Section */}
        <HiddenKashiSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ivory flex items-center justify-center text-charcoal">
          <div className="text-center space-y-3">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="font-serif tracking-widest text-sm uppercase text-text-muted">
              Loading Kashi Guide...
            </p>
          </div>
        </div>
      }
    >
      <ExploreContent />
    </Suspense>
  );
}
