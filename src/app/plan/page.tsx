"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PlanHero } from "@/components/plan/PlanHero";
import { Planner } from "@/components/plan/Planner";
import { Itinerary } from "@/components/plan/Itinerary";
import { QuickPlan } from "@/components/plan/QuickPlan";
import {
  SavedPlanBanner,
  savePlanLocally,
  loadSavedPlan,
} from "@/components/plan/SavedPlan";
import type { Itinerary as ItineraryType, TripPreferences } from "@/types/itinerary";

export default function PlanPage() {
  const [currentItinerary, setCurrentItinerary] = useState<ItineraryType | null>(null);
  const [isPlanningMode, setIsPlanningMode] = useState<boolean>(true);
  const [activePreferences, setActivePreferences] = useState<TripPreferences | undefined>(undefined);

  // Check on initial client mount if user has a previously generated plan
  useEffect(() => {
    const saved = loadSavedPlan();
    if (saved) {
      setCurrentItinerary(saved);
      setActivePreferences(saved.preferences);
      setIsPlanningMode(false);
    }
  }, []);

  const handlePlanGenerated = (newPlan: ItineraryType) => {
    setCurrentItinerary(newPlan);
    setActivePreferences(newPlan.preferences);
    setIsPlanningMode(false);
    savePlanLocally(newPlan);

    // Smooth scroll to top of generated itinerary
    setTimeout(() => {
      const el = document.getElementById("itinerary-results");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleEditPreferences = () => {
    setIsPlanningMode(true);
    setTimeout(() => {
      const el = document.getElementById("planner-card");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleStartOver = () => {
    setActivePreferences(undefined);
    setIsPlanningMode(true);
    setTimeout(() => {
      const el = document.getElementById("planner-card");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col selection:bg-saffron selection:text-white">
      {/* Sticky Global Navigation (hidden on print) */}
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="flex-1 w-full">
        {/* Saved Plan Alert Banner */}
        <div className="pt-20 sm:pt-24 print:hidden">
          <SavedPlanBanner
            onLoadSaved={(plan) => {
              setCurrentItinerary(plan);
              setActivePreferences(plan.preferences);
              setIsPlanningMode(false);
            }}
            onDismiss={() => {
              // Dismiss banner
            }}
          />
        </div>

        {/* 1. Plan Hero Section (shown primarily when in planning mode) */}
        {isPlanningMode && (
          <PlanHero
            onStartPlanning={() => {
              const el = document.getElementById("planner-card");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
        )}

        {/* 2. Interactive Guided Planner or Results Itinerary */}
        {isPlanningMode ? (
          <div className="space-y-12">
            <Planner
              initialPreferences={activePreferences}
              onPlanGenerated={handlePlanGenerated}
            />

            {/* "Don't want to plan? Just want the essentials?" Quick Starters */}
            <QuickPlan onSelectQuickPlan={handlePlanGenerated} />
          </div>
        ) : (
          currentItinerary && (
            <Itinerary
              itinerary={currentItinerary}
              onEditPreferences={handleEditPreferences}
              onStartOver={handleStartOver}
            />
          )
        )}
      </main>

      {/* Global Footer (hidden on print) */}
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
