"use client";

import React from "react";
import { WalkCard } from "./WalkCard";
import type { Walk } from "@/data/walks";
import { Footprints, RotateCcw } from "lucide-react";

interface WalkGridProps {
  walks: Walk[];
  onResetFilters?: () => void;
  totalAvailable?: number;
}

export function WalkGrid({
  walks,
  onResetFilters,
  totalAvailable = 6,
}: WalkGridProps) {
  return (
    <section id="walks-list" className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4 pb-6 border-b border-sand/20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-saffron uppercase mb-2">
              <span className="w-6 h-[1px] bg-saffron" />
              <span>CURATED ITINERARIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-charcoal">
              Start with a walk
            </h2>
            <p className="text-sm sm:text-base text-text-muted mt-2 max-w-xl font-light">
              Curated routes for discovering different sides of Kashi — from quiet morning ghats to ancient food corridors.
            </p>
          </div>

          <div className="text-xs text-text-muted shrink-0">
            Showing <span className="font-semibold text-charcoal">{walks.length}</span> of {totalAvailable} curated walks
          </div>
        </div>

        {/* Empty State */}
        {walks.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-sm border border-sand/40 p-8 max-w-xl mx-auto my-8">
            <div className="w-14 h-14 rounded-full bg-sand/20 text-saffron flex items-center justify-center mx-auto mb-4">
              <Footprints className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">
              No walks match your current selection
            </h3>
            <p className="text-sm text-text-muted mb-6 leading-relaxed">
              Try adjusting your duration, interest, or time of day filters, or clear your search term to see all routes.
            </p>
            {onResetFilters && (
              <button
                type="button"
                onClick={onResetFilters}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-charcoal text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-charcoal-dark transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset all filters</span>
              </button>
            )}
          </div>
        ) : (
          /* Cards Grid: 1 col on mobile, 2 on tablet, 3 on desktop */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {walks.map((walk) => (
              <WalkCard key={walk.id} walk={walk} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
