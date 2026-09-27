"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, Loader2, Compass } from "lucide-react";
import { PlannerProgress } from "./PlannerProgress";
import { PlannerQuestion } from "./PlannerQuestion";
import { generateItinerary } from "@/lib/itineraryEngine";
import type { TripPreferences, Itinerary } from "@/types/itinerary";
import { Button } from "@/components/ui/Button";

const STEPS = [
  { number: 1, label: "Duration", tagline: "Length of your Kashi stay" },
  { number: 2, label: "Travel Party", tagline: "Who is accompanying you" },
  { number: 3, label: "Interests", tagline: "1 to 6 key experiences" },
  { number: 4, label: "Travel Pace", tagline: "Speed & stops per day" },
  { number: 5, label: "Trip Style", tagline: "Comfort & practical tier" },
  { number: 6, label: "Core Priority", tagline: "Single biggest focal point" },
  { number: 7, label: "Base Location", tagline: "Optional stay neighbourhood" },
];

const DEFAULT_PREFERENCES: TripPreferences = {
  duration: "3-days",
  travellerType: "Couple",
  interests: ["temples", "ganga", "food", "history"],
  pace: "balanced",
  budget: "comfort",
  priority: "spirituality",
  baseArea: "godowlia",
};

interface PlannerProps {
  initialPreferences?: TripPreferences;
  onPlanGenerated: (itinerary: Itinerary) => void;
}

export function Planner({ initialPreferences, onPlanGenerated }: PlannerProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [preferences, setPreferences] = useState<TripPreferences>(
    initialPreferences || DEFAULT_PREFERENCES
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleUpdatePreferences = (updates: Partial<TripPreferences>) => {
    setPreferences((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setDirection(1);
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      handleFinalGenerate();
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setDirection(-1);
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleFinalGenerate = () => {
    setIsGenerating(true);
    // Real deterministic generation with brief 600ms polish delay
    setTimeout(() => {
      const result = generateItinerary(preferences);
      setIsGenerating(false);
      onPlanGenerated(result);
    }, 650);
  };

  // Validation
  const isCurrentStepValid = () => {
    if (currentStepIndex === 0) return Boolean(preferences.duration);
    if (currentStepIndex === 1) return Boolean(preferences.travellerType);
    if (currentStepIndex === 2) return preferences.interests && preferences.interests.length >= 1;
    if (currentStepIndex === 3) return Boolean(preferences.pace);
    if (currentStepIndex === 4) return Boolean(preferences.budget);
    if (currentStepIndex === 5) return Boolean(preferences.priority);
    return true; // Step 7 is optional
  };

  // Variants for direction-aware sliding
  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? -30 : 30,
      opacity: 0,
    }),
  };

  return (
    <div id="planner-card" className="w-full max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
      {/* Loading Modal Overlay */}
      {isGenerating && (
        <div className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center text-ivory">
          <div className="w-16 h-16 rounded-full bg-charcoal border border-gold/40 flex items-center justify-center mb-6 shadow-2xl animate-pulse">
            <Compass className="w-8 h-8 text-gold animate-spin" style={{ animationDuration: "3s" }} />
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-medium text-ivory mb-2">
            Shaping your Kashi...
          </h3>
          <p className="text-sm text-sand-light/80 max-w-sm leading-relaxed">
            Curating dawn timings, street corridors, and sacred sanctums based on your preferences.
          </p>
        </div>
      )}

      {/* Main Container Card */}
      <div className="bg-ivory-light border border-sand/40 rounded-sm shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT COLUMN: Progress Timeline (4 cols on desktop) */}
          <div className="lg:col-span-4 lg:border-r lg:border-sand/30 lg:pr-8">
            <PlannerProgress
              steps={STEPS}
              currentStepIndex={currentStepIndex}
              onStepClick={(targetIdx) => {
                setDirection(targetIdx > currentStepIndex ? 1 : -1);
                setCurrentStepIndex(targetIdx);
              }}
            />
          </div>

          {/* RIGHT COLUMN: Question Content & Action Buttons (8 cols on desktop) */}
          <div className="lg:col-span-8 flex flex-col justify-between min-h-[460px]">
            <div className="flex-1">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentStepIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.24, ease: "easeInOut" }}
                >
                  <PlannerQuestion
                    stepIndex={currentStepIndex}
                    preferences={preferences}
                    onUpdatePreferences={handleUpdatePreferences}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-8 mt-8 border-t border-sand/30 flex items-center justify-between gap-4">
              {currentStepIndex > 0 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-sand/50 text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer min-h-[44px]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {currentStepIndex < STEPS.length - 1 ? (
                <button
                  type="button"
                  disabled={!isCurrentStepValid()}
                  onClick={handleNext}
                  className={`inline-flex items-center gap-2 px-7 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all min-h-[44px] cursor-pointer ${
                    isCurrentStepValid()
                      ? "bg-charcoal text-ivory hover:bg-charcoal-dark shadow-sm"
                      : "bg-sand/40 text-text-muted cursor-not-allowed opacity-60"
                  }`}
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!isCurrentStepValid() || isGenerating}
                  onClick={handleFinalGenerate}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-sm bg-gold text-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-gold-light transition-all shadow-md active:scale-[0.99] cursor-pointer min-h-[46px]"
                >
                  <Sparkles className="w-4 h-4 text-charcoal" />
                  <span>Build My Kashi Plan</span>
                </button>
              )}
            </div>

            {currentStepIndex === STEPS.length - 1 && (
              <p className="text-[11px] text-text-muted text-right mt-2 font-light">
                You can change and edit your preferences anytime.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
