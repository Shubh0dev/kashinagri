"use client";

import React from "react";
import { Check } from "lucide-react";

interface StepItem {
  number: number;
  label: string;
  tagline: string;
}

interface PlannerProgressProps {
  steps: StepItem[];
  currentStepIndex: number;
  onStepClick?: (index: number) => void;
}

export function PlannerProgress({
  steps,
  currentStepIndex,
  onStepClick,
}: PlannerProgressProps) {
  const currentStepNumber = currentStepIndex + 1;
  const progressPercent = (currentStepNumber / steps.length) * 100;

  return (
    <div>
      {/* ==================== MOBILE PROGRESS BAR ==================== */}
      <div className="block lg:hidden mb-6">
        <div className="flex items-center justify-between text-xs text-text-muted mb-2 font-medium">
          <span className="uppercase tracking-widest text-[11px] text-saffron font-semibold">
            STEP {currentStepNumber} OF {steps.length}
          </span>
          <span className="text-charcoal font-serif">{steps[currentStepIndex].label}</span>
        </div>
        <div className="w-full h-1.5 bg-sand/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-saffron to-gold transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* ==================== DESKTOP PROGRESS TIMELINE ==================== */}
      <div className="hidden lg:block space-y-4">
        <div className="pb-4 border-b border-sand/30">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
            ITINERARY BUILDER
          </span>
          <h3 className="font-serif text-xl font-medium text-charcoal">
            Trip Preferences
          </h3>
          <p className="text-xs text-text-muted mt-1">
            Step {currentStepNumber} of {steps.length}
          </p>
        </div>

        <div className="space-y-2 pt-2">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;
            const isClickable = index < currentStepIndex && onStepClick;

            return (
              <div
                key={step.number}
                onClick={() => {
                  if (isClickable) onStepClick(index);
                }}
                className={`group flex items-start gap-3.5 p-2.5 rounded-sm transition-all duration-200 ${
                  isCurrent
                    ? "bg-white border-l-2 border-gold shadow-xs"
                    : isClickable
                    ? "hover:bg-sand/15 cursor-pointer"
                    : "opacity-60"
                }`}
              >
                {/* Step Circle Indicator */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 transition-colors ${
                    isCompleted
                      ? "bg-gold text-charcoal"
                      : isCurrent
                      ? "bg-charcoal text-ivory ring-2 ring-gold/40"
                      : "bg-sand/30 text-text-muted"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  ) : (
                    step.number
                  )}
                </div>

                {/* Step Text */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-medium uppercase tracking-wider block ${
                        isCurrent
                          ? "text-charcoal font-semibold"
                          : isCompleted
                          ? "text-charcoal/80"
                          : "text-text-muted"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  <span className="text-[11px] text-text-muted/80 block line-clamp-1">
                    {step.tagline}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
