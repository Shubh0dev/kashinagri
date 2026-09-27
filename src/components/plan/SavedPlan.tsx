"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, ArrowRight, RotateCcw, Calendar, BookmarkCheck } from "lucide-react";
import type { Itinerary } from "@/types/itinerary";

const STORAGE_KEY = "kashinagri-trip";

export function loadSavedPlan(): Itinerary | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Itinerary;
  } catch (err) {
    return null;
  }
}

export function savePlanLocally(itinerary: Itinerary) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(itinerary));
  } catch (err) {
    // Ignore storage quota errors
  }
}

export function clearSavedPlan() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    // Ignore
  }
}

interface SavedPlanBannerProps {
  onLoadSaved: (plan: Itinerary) => void;
  onDismiss: () => void;
}

export function SavedPlanBanner({ onLoadSaved, onDismiss }: SavedPlanBannerProps) {
  const [savedPlan, setSavedPlan] = useState<Itinerary | null>(null);

  useEffect(() => {
    const plan = loadSavedPlan();
    if (plan) {
      setSavedPlan(plan);
    }
  }, []);

  if (!savedPlan) return null;

  return (
    <div className="w-full bg-charcoal text-ivory border-b border-gold/30 py-3.5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <BookmarkCheck className="w-4 h-4 text-gold shrink-0" />
          <span>
            You have a saved trip:{" "}
            <strong className="text-gold-light font-medium">
              {savedPlan.title} ({savedPlan.summary.paceLabel})
            </strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onLoadSaved(savedPlan)}
            className="px-3.5 py-1.5 rounded-xs bg-gold text-charcoal font-semibold tracking-wider uppercase text-[11px] hover:bg-gold-light transition-colors cursor-pointer"
          >
            Continue your plan
          </button>

          <button
            type="button"
            onClick={() => {
              clearSavedPlan();
              setSavedPlan(null);
              onDismiss();
            }}
            className="text-sand-light/70 hover:text-white transition-colors text-[11px] underline"
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}
