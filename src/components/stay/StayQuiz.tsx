"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, CheckCircle2, RotateCcw, ArrowRight, Sparkles, MapPin } from "lucide-react";
import { QUIZ_QUESTIONS, recommendNeighbourhoods, type Neighbourhood } from "@/data/stays";

interface StayQuizProps {
  onSelectArea?: (areaSlug: string) => void;
}

export function StayQuiz({ onSelectArea }: StayQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [recommended, setRecommended] = useState<Neighbourhood[] | null>(null);

  const handleSelectOption = (weights: Record<string, number>) => {
    // Accumulate scores
    const newScores = { ...scores };
    Object.entries(weights).forEach(([slug, pts]) => {
      newScores[slug] = (newScores[slug] || 0) + pts;
    });
    setScores(newScores);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Finished quiz, calculate recommendations
      const results = recommendNeighbourhoods(newScores);
      setRecommended(results);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setScores({});
    setRecommended(null);
  };

  const activeQuestion = QUIZ_QUESTIONS[currentStep];

  return (
    <section id="quiz" className="w-full py-16 sm:py-24 bg-charcoal text-ivory border-b border-sand/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand/10 border border-sand/20 text-xs font-semibold tracking-[0.24em] text-sand-light uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>BASE RECOMMENDATION QUIZ</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-ivory">
            Not sure where to stay?
          </h2>
          <p className="text-sm sm:text-base text-sand-light/80 mt-2">
            Answer 3 quick questions about your morning rhythm, alley comfort, and travel pace to discover your natural Kashi enclave.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-charcoal-light/60 backdrop-blur-md border border-sand/25 rounded-sm p-6 sm:p-10 shadow-2xl">
          {!recommended ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-sand/20">
                <span className="text-xs font-semibold tracking-wider text-gold uppercase">
                  Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <div className="flex items-center gap-1.5">
                  {QUIZ_QUESTIONS.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentStep
                          ? "w-8 bg-gold"
                          : idx < currentStep
                          ? "w-4 bg-sand"
                          : "w-4 bg-sand/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-ivory mb-2">
                    {activeQuestion.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-sand-light/80 mb-6 font-light">
                    {activeQuestion.subtitle}
                  </p>

                  {/* Options List */}
                  <div className="space-y-3">
                    {activeQuestion.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(option.weights)}
                        className="w-full text-left p-4 sm:p-5 rounded-sm bg-white/5 border border-sand/20 hover:border-gold hover:bg-white/10 transition-all duration-200 group flex items-start justify-between gap-4"
                      >
                        <div>
                          <div className="text-base sm:text-lg font-medium text-ivory group-hover:text-gold-light transition-colors mb-1">
                            {option.label}
                          </div>
                          <div className="text-xs sm:text-sm text-sand-light/75 leading-relaxed font-light">
                            {option.description}
                          </div>
                        </div>
                        <div className="w-6 h-6 rounded-full border border-sand/40 flex items-center justify-center shrink-0 mt-1 group-hover:border-gold group-hover:bg-gold/10">
                          <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-gold transition-colors" />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            /* Results Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-sand/20">
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-saffron uppercase block mb-1">
                    YOUR RECOMMENDED BASE
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-ivory">
                    {recommended[0]?.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gold-light font-serif italic mt-0.5">
                    {recommended[0]?.tagline}
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-sand-light hover:text-ivory py-1.5 px-3 rounded-full bg-sand/15 hover:bg-sand/30 transition-colors uppercase tracking-wider"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Over</span>
                </button>
              </div>

              {/* Recommended Enclave Feature Card */}
              {recommended[0] && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-white/5 p-4 sm:p-6 rounded-sm border border-gold/40">
                  <div className="relative aspect-[16/10] md:col-span-5 w-full rounded-sm overflow-hidden bg-charcoal">
                    <Image
                      src={recommended[0].image}
                      alt={recommended[0].alt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-sand-light/90 leading-relaxed font-light">
                      {recommended[0].description}
                    </p>

                    <div className="p-3 bg-black/20 rounded-xs border border-sand/20 text-xs">
                      <span className="text-gold font-semibold block mb-0.5 uppercase text-[10px] tracking-wider">
                        Why this matches you:
                      </span>
                      <p className="text-sand-light/80 italic font-serif">
                        {recommended[0].whatItFeelsLike}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <Link
                        href={`/stay/${recommended[0].slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-light transition-colors min-h-[38px]"
                      >
                        <span>Explore {recommended[0].name} Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {onSelectArea && (
                        <button
                          onClick={() => onSelectArea(recommended[0].slug)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-ivory border border-sand/30 text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-white/20 transition-colors min-h-[38px]"
                        >
                          <MapPin className="w-3.5 h-3.5 text-saffron" />
                          <span>Show Stays Here</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Alternative Match (if any) */}
              {recommended[1] && (
                <div className="pt-2">
                  <span className="text-xs font-semibold tracking-wider text-text-muted uppercase block mb-3">
                    Alternative Base Match:
                  </span>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-sm bg-white/5 border border-sand/20 gap-4">
                    <div>
                      <h4 className="font-serif text-lg font-medium text-ivory">
                        {recommended[1].name}
                      </h4>
                      <p className="text-xs text-sand-light/75">
                        {recommended[1].atmosphere}
                      </p>
                    </div>
                    <Link
                      href={`/stay/${recommended[1].slug}`}
                      className="text-xs text-gold hover:underline uppercase tracking-wider font-semibold inline-flex items-center gap-1"
                    >
                      <span>View Area</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
