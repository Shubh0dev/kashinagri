"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, RotateCcw, Check, Clock, Route, ShieldCheck, Compass } from "lucide-react";
import { getRecommendedWalks, type RecommendationAnswers, type Walk } from "@/data/walks";

const QUESTIONS = [
  {
    id: "time",
    question: "How much time do you have?",
    subtitle: "Select the time you can comfortably dedicate to walking without rushing.",
    options: [
      { key: "30-60min", label: "30–60 minutes", desc: "Short, focused neighbourhood stroll" },
      { key: "1-2hours", label: "1–2 hours", desc: "Classic walking route with key highlights" },
      { key: "2-3hours", label: "2–3 hours", desc: "Deep cultural immersion with multiple stops" },
      { key: "halfday", label: "Half day", desc: "Unrushed journey across major ghats & lanes" },
    ],
  },
  {
    id: "interest",
    question: "What interests you most?",
    subtitle: "Choose the theme that calls to your curiosity today.",
    options: [
      { key: "food", label: "🍜 Food & Flavours", desc: "Generational chaats, lassis, kachoris & sweets" },
      { key: "temples", label: "🛕 Temples & Sanctums", desc: "Jyotirlingas, ancient shrines & sacred energy" },
      { key: "ganga", label: "🌊 Ganga & Ghats", desc: "Stone steps, morning aarti, riverfront life" },
      { key: "history", label: "🏛️ History & Palaces", desc: "Maratha havelis, stone bastions & architecture" },
      { key: "photography", label: "📸 Photography", desc: "Scenic dawn light, textures & historic frames" },
      { key: "hidden", label: "👀 Hidden Backstreets", desc: "Artisan quarters, weavers & local secrets" },
    ],
  },
  {
    id: "timeOfDay",
    question: "When do you want to walk?",
    subtitle: "Each hour of the day casts a totally different mood across Kashi.",
    options: [
      { key: "sunrise", label: "🌅 Sunrise", desc: "Cool misty river air, chants & dawn rituals (5:30 AM)" },
      { key: "morning", label: "☀️ Morning", desc: "Bustling breakfast kadai & active temples (8:00 AM)" },
      { key: "afternoon", label: "🌤️ Late Afternoon", desc: "Soft golden light on royal palaces & quiet alleys" },
      { key: "evening", label: "🌙 Evening", desc: "Sizzling street food, river breezes & aarti bells" },
    ],
  },
  {
    id: "activity",
    question: "How active do you want to be?",
    subtitle: "Pacing and terrain difficulty preference.",
    options: [
      { key: "relaxed", label: "Relaxed", desc: "Gentle walking on flat stone steps with ample rest" },
      { key: "moderate", label: "Moderate", desc: "Navigating alley steps and busy market streets" },
      { key: "long", label: "Long walk", desc: "Covering multiple kilometres along the riverfront" },
    ],
  },
];

export function WalkRecommendation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<RecommendationAnswers>({});
  const [results, setResults] = useState<Walk[] | null>(null);

  const handleSelectOption = (key: string) => {
    const q = QUESTIONS[currentStep];
    const newAnswers = { ...answers, [q.id]: key };
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate matches using deterministic rule-based matching
      const recommended = getRecommendedWalks(newAnswers);
      setResults(recommended);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setResults(null);
  };

  const progressPct = ((currentStep + 1) / QUESTIONS.length) * 100;

  return (
    <section
      id="walk-recommendation"
      className="w-full py-16 sm:py-24 bg-charcoal text-ivory relative overflow-hidden"
    >
      {/* Background Subtle Gradient & Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-charcoal-surface via-charcoal to-charcoal-dark pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-gold-light uppercase mb-2">
            <Compass className="w-3.5 h-3.5 text-saffron" />
            <span>ROUTE RECOMMENDER</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ivory">
            Not sure which walk to take?
          </h2>
          <p className="text-sand-light/80 text-sm sm:text-base mt-2 font-light">
            Answer 4 quick questions to find the route that matches your available time, curiosity, and pace.
          </p>
        </div>

        {/* Recommender Card Container */}
        <div className="bg-charcoal-card border border-sand/20 rounded-sm p-6 sm:p-10 shadow-2xl">
          {results === null ? (
            <div>
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs text-sand-light/70 uppercase tracking-wider mb-2">
                  <span>Question {currentStep + 1} of {QUESTIONS.length}</span>
                  <span>{Math.round(progressPct)}%</span>
                </div>
                <div className="w-full h-1 bg-charcoal-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-saffron to-gold transition-all duration-300 ease-out"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              {/* Current Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-ivory mb-2">
                    {QUESTIONS[currentStep].question}
                  </h3>
                  <p className="text-sm text-sand-light/70 mb-6">
                    {QUESTIONS[currentStep].subtitle}
                  </p>

                  {/* Options List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {QUESTIONS[currentStep].options.map((option) => (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => handleSelectOption(option.key)}
                        className="group text-left p-4 sm:p-5 rounded-sm bg-charcoal-surface border border-sand/15 hover:border-gold/60 hover:bg-charcoal transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-medium text-sm sm:text-base text-ivory group-hover:text-gold-light transition-colors">
                            {option.label}
                          </span>
                          <div className="w-6 h-6 rounded-full border border-sand/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-colors">
                            <ArrowRight className="w-3 h-3 text-sand-light group-hover:text-gold transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </div>
                        <p className="text-xs text-sand-light/60 group-hover:text-sand-light/85 transition-colors">
                          {option.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Back button */}
              {currentStep > 0 && (
                <div className="mt-8 pt-4 border-t border-sand/10 flex justify-start">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-medium text-sand-light/70 hover:text-ivory transition-colors"
                  >
                    ← Back to previous question
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results View */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-sand/20 gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light block mb-1">
                    MATCH RESULT
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-ivory">
                    Your suggested walk
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-charcoal-surface border border-sand/30 text-xs font-semibold uppercase tracking-wider text-sand-light hover:text-ivory hover:border-gold transition-colors self-start sm:self-auto cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start again</span>
                </button>
              </div>

              {/* Suggested Routes Display */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {results.map((route) => (
                  <div
                    key={route.id}
                    className="flex flex-col justify-between overflow-hidden rounded-sm bg-charcoal-surface border border-sand/25 hover:border-gold transition-all duration-300 group"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={route.image}
                        alt={route.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-surface via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-gold text-charcoal rounded-xs">
                          {route.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h4 className="font-serif text-2xl font-medium text-ivory group-hover:text-gold-light transition-colors mb-2">
                          {route.name}
                        </h4>

                        <div className="flex flex-wrap items-center gap-2 mb-3 text-xs text-sand-light/80">
                          <div className="inline-flex items-center gap-1">
                            <Route className="w-3.5 h-3.5 text-saffron" />
                            <span>{route.distance}</span>
                          </div>
                          <span>•</span>
                          <div className="inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-ganga-light" />
                            <span>{route.duration}</span>
                          </div>
                          <span>•</span>
                          <div className="inline-flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-gold-light" />
                            <span>{route.difficulty}</span>
                          </div>
                        </div>

                        <p className="text-xs text-sand-light/70 leading-relaxed mb-4 line-clamp-2">
                          {route.shortDescription}
                        </p>
                      </div>

                      <Link
                        href={`/walks/${route.slug}`}
                        className="inline-flex items-center justify-between w-full py-3 px-4 rounded-sm bg-gold text-charcoal font-semibold text-xs uppercase tracking-wider hover:bg-gold-light transition-colors"
                      >
                        <span>Explore this walk</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
