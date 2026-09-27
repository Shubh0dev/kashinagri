"use client";

import React from "react";
import { Flag, CheckCircle2, ArrowRight } from "lucide-react";

interface ItineraryRouteProps {
  routeFlow: string[];
}

export function ItineraryRoute({ routeFlow }: ItineraryRouteProps) {
  if (!routeFlow || routeFlow.length === 0) return null;

  return (
    <div className="bg-white rounded-sm border border-sand/35 p-5 sm:p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-semibold tracking-[0.25em] text-saffron uppercase block">
            VISUAL DAY ARC
          </span>
          <h4 className="font-serif text-lg sm:text-xl font-medium text-charcoal">
            Your day at a glance
          </h4>
        </div>

        <span className="text-xs text-text-muted hidden sm:inline">
          {routeFlow.length} Key Milestones
        </span>
      </div>

      {/* Visual Sequence Ribbon */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-saffron text-white text-xs font-semibold shrink-0 shadow-xs">
          <Flag className="w-3 h-3" />
          <span>START</span>
        </div>

        <ArrowRight className="w-3.5 h-3.5 text-sand-dark shrink-0" />

        {routeFlow.map((stop, index) => {
          const isLast = index === routeFlow.length - 1;

          return (
            <React.Fragment key={index}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-ivory-light border border-sand/40 text-xs font-medium text-charcoal shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>{stop}</span>
              </div>

              {!isLast && (
                <ArrowRight className="w-3.5 h-3.5 text-sand-dark shrink-0" />
              )}
            </React.Fragment>
          );
        })}

        <ArrowRight className="w-3.5 h-3.5 text-sand-dark shrink-0" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-ganga text-white text-xs font-semibold shrink-0 shadow-xs">
          <CheckCircle2 className="w-3 h-3" />
          <span>EVENING</span>
        </div>
      </div>
    </div>
  );
}
