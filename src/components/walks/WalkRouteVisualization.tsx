"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Info, Layers, Compass } from "lucide-react";
import type { Walk } from "@/data/walks";

interface WalkRouteVisualizationProps {
  walk: Walk;
}

export function WalkRouteVisualization({ walk }: WalkRouteVisualizationProps) {
  const [activeStopIndex, setActiveStopIndex] = useState<number | null>(null);

  return (
    <div className="bg-charcoal text-ivory rounded-sm border border-sand/25 p-5 sm:p-7 shadow-lg">
      <div className="flex items-center justify-between pb-4 border-b border-sand/15 mb-5">
        <div>
          <span className="text-[10px] font-semibold tracking-[0.25em] text-gold-light uppercase block">
            ROUTE SCHEMATIC
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-ivory">
            Follow the route
          </h3>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-charcoal-surface border border-sand/20 text-[11px] text-sand-light/80">
          <Navigation className="w-3 h-3 text-saffron" />
          <span>{walk.distance}</span>
        </div>
      </div>

      {/* Stylized Schematic Route Graphic (Non-tile vector illustration) */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-charcoal-surface rounded-xs border border-sand/15 overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none">
        {/* Subtle Water & Ghat Motif in Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ghat-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D8C7A3" strokeWidth="0.5" strokeOpacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ghat-grid)" />
            {/* Ganga River stylized gentle sweep */}
            <path
              d="M 280,0 Q 240,160 300,320 T 360,480"
              fill="none"
              stroke="#356B78"
              strokeWidth="24"
              strokeOpacity="0.3"
            />
          </svg>
        </div>

        {/* Top Info Header */}
        <div className="relative z-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-saffron animate-pulse" />
            <span className="font-medium text-sand-light">Start: {walk.transportToStart.startLocation}</span>
          </div>
          <span className="text-[11px] text-sand-light/60 font-mono">
            {walk.stops.length} STOPS
          </span>
        </div>

        {/* Schematic Trail Sequence Nodes */}
        <div className="relative z-10 my-auto py-4">
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
            {/* Connecting Route Line */}
            <div className="hidden sm:block absolute top-1/2 left-4 right-4 h-[2px] bg-gradient-to-r from-saffron via-gold to-ganga -translate-y-1/2 z-0" />

            {walk.stops.map((stop, index) => {
              const isFirst = index === 0;
              const isLast = index === walk.stops.length - 1;
              const isSelected = activeStopIndex === index;

              return (
                <div
                  key={stop.id}
                  onClick={() => setActiveStopIndex(index)}
                  className="relative z-10 flex sm:flex-col items-center gap-2 group cursor-pointer"
                  title={`${stop.order}. ${stop.name}`}
                >
                  {/* Stop Marker Node */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                      isFirst
                        ? "bg-saffron text-white ring-4 ring-saffron/20"
                        : isLast
                        ? "bg-ganga-light text-white ring-4 ring-ganga/20"
                        : isSelected
                        ? "bg-gold text-charcoal ring-4 ring-gold/30 scale-110"
                        : "bg-charcoal text-sand-light border border-gold/50 group-hover:bg-gold group-hover:text-charcoal"
                    }`}
                  >
                    {stop.order}
                  </div>

                  {/* Stop Label */}
                  <div className="text-left sm:text-center max-w-[100px]">
                    <span
                      className={`block text-[11px] font-medium leading-tight truncate transition-colors ${
                        isSelected ? "text-gold-light font-bold" : "text-sand-light/80 group-hover:text-ivory"
                      }`}
                    >
                      {stop.name}
                    </span>
                    <span className="text-[10px] text-sand-light/50 hidden sm:block">
                      {stop.approximateDuration || "Stop"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Route Legend Bar */}
        <div className="relative z-10 pt-3 border-t border-sand/15 flex flex-wrap items-center justify-between text-[11px] text-sand-light/75 gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-saffron" />
              <span>Start</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-gold" />
              <span>Waypoints</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-ganga-light" />
              <span>Conclusion</span>
            </div>
          </div>

          <span className="font-mono text-sand-light/60">
            {walk.difficulty} Pace
          </span>
        </div>
      </div>

      {/* Subtle Future Map Note */}
      <div className="mt-4 flex items-center gap-2 text-xs text-sand-light/60 bg-charcoal-surface/60 px-3.5 py-2.5 rounded-xs border border-sand/10">
        <Info className="w-3.5 h-3.5 text-gold-light shrink-0" />
        <span>
          Interactive turn-by-turn GPS route map and offline navigation is currently in preparation.
        </span>
      </div>
    </div>
  );
}
