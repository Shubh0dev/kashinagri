"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { EatHero } from "@/components/eat/EatHero";
import { FoodSearch } from "@/components/eat/FoodSearch";
import { FoodCategories } from "@/components/eat/FoodCategories";
import { FoodExplorer } from "@/components/eat/FoodExplorer";
import { MustTrySection } from "@/components/eat/MustTrySection";
import { FoodTimeline } from "@/components/eat/FoodTimeline";
import { StreetFoodSection } from "@/components/eat/StreetFoodSection";
import { FoodStreetsSection } from "@/components/eat/FoodStreetsSection";
import {
  RestaurantSection,
  CafeSection,
  BudgetFoodSection,
} from "@/components/eat/PlacesToEatSections";

function EatContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedMood, setSelectedMood] = useState("");

  // Sync category or query from URL query params if provided
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const queryParam = searchParams.get("q");
    const moodParam = searchParams.get("mood");

    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    if (queryParam) {
      setSearchQuery(queryParam);
    }
    if (moodParam) {
      setSelectedMood(moodParam);
    }
  }, [searchParams]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("ALL");
    setSelectedMood("");
  };

  const scrollToDirectory = () => {
    const el = document.getElementById("food-directory");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPlaces = () => {
    const el = document.getElementById("restaurants-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col selection:bg-saffron selection:text-white">
      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. Hero Section */}
        <EatHero
          onDiscoverClick={scrollToDirectory}
          onPlacesClick={scrollToPlaces}
        />

        {/* 2. Prominent Search Bar */}
        <div className="bg-ivory py-4 border-b border-sand/20">
          <FoodSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* 3. Sticky Horizontal Category Filter */}
        <FoodCategories
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 4. Interactive Food Explorer (Mood Filter + Food Grid + Empty Fallback) */}
        <section className="w-full py-12 sm:py-16 bg-ivory">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <FoodExplorer
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              selectedMood={selectedMood}
              onSelectMood={setSelectedMood}
              onResetFilters={handleResetFilters}
            />
          </div>
        </section>

        {/* 5. "What should you try in Kashi?" (7 Iconic Dishes) */}
        <MustTrySection />

        {/* 6. "A day of eating in Kashi" (Immersive Timeline) */}
        <FoodTimeline />

        {/* 7. "Kashi, one bite at a time." (Street Food) */}
        <StreetFoodSection />

        {/* 8. "Follow the food streets" (5 Food Corridors) */}
        <FoodStreetsSection />

        {/* 9. "Sit down and savour" (Restaurants) */}
        <RestaurantSection />

        {/* 10. "Slow mornings & Ganga views" (Cafés) */}
        <CafeSection />

        {/* 11. "Eat well without spending much" (Budget Gastronomy) */}
        <BudgetFoodSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function EatPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ivory flex items-center justify-center text-charcoal">
          <div className="text-center space-y-3">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="font-serif tracking-widest text-sm uppercase text-text-muted">
              Loading Kashi Food Guide...
            </p>
          </div>
        </div>
      }
    >
      <EatContent />
    </Suspense>
  );
}
