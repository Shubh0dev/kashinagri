"use client";

import React from "react";
import { WalkStopCard } from "./WalkStopCard";
import type { Walk } from "@/data/walks";
import { MapPin, Flag, CheckCircle2 } from "lucide-react";

interface WalkTimelineProps {
  walk: Walk;
}

export function WalkTimeline({ walk }: WalkTimelineProps) {
  return (
    <section id="route-timeline" className="w-full py-6">
      {/* Route Timeline Heading */}
      <div className="mb-8">
        <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
          STEP-BY-STEP WAYPOINTS
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
          Route Timeline
        </h3>
        <p className="text-xs sm:text-sm text-text-muted mt-1.5 font-light">
          Follow the numbered stops along the sequence. Click any stop to explore in-depth details.
        </p>
      </div>

      {/* Vertical Timeline Structure */}
      <div className="relative pl-6 sm:pl-8">
        {/* Continuous Route Line */}
        <div className="absolute top-4 bottom-8 left-[11px] sm:left-[15px] w-[2px] bg-gradient-to-b from-saffron via-gold to-ganga" />

        {/* START NODE */}
        <div className="relative mb-8 flex items-start gap-4">
          <div className="absolute -left-[23px] sm:-left-[27px] w-6 h-6 rounded-full bg-saffron text-white flex items-center justify-center text-[10px] font-bold shadow-md ring-4 ring-ivory">
            <Flag className="w-3 h-3" />
          </div>

          <div className="bg-ivory-light border border-sand/40 rounded-sm px-4 py-2.5 inline-flex items-center gap-2 text-xs">
            <span className="font-semibold text-charcoal uppercase tracking-wider">
              ROUTE START:
            </span>
            <span className="text-text-muted">
              {walk.transportToStart.startLocation}
            </span>
          </div>
        </div>

        {/* STOP CARDS SEQUENCE */}
        <div className="space-y-8 mb-8">
          {walk.stops.map((stop, index) => {
            const isFirst = index === 0;
            const isLast = index === walk.stops.length - 1;

            return (
              <div key={stop.id} className="relative">
                {/* Timeline Circle Bullet Node */}
                <div className="absolute -left-[23px] sm:-left-[27px] top-6 w-6 h-6 rounded-full bg-white border-2 border-gold text-charcoal flex items-center justify-center text-[10px] font-bold shadow-sm ring-4 ring-ivory group-hover:bg-gold">
                  {stop.order}
                </div>

                {/* Stop Card Component */}
                <WalkStopCard
                  stop={stop}
                  isFirst={isFirst}
                  isLast={isLast}
                />
              </div>
            );
          })}
        </div>

        {/* END NODE */}
        <div className="relative flex items-start gap-4">
          <div className="absolute -left-[23px] sm:-left-[27px] w-6 h-6 rounded-full bg-ganga text-white flex items-center justify-center text-[10px] font-bold shadow-md ring-4 ring-ivory">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </div>

          <div className="bg-ivory-light border border-sand/40 rounded-sm px-4 py-2.5 inline-flex items-center gap-2 text-xs">
            <span className="font-semibold text-charcoal uppercase tracking-wider">
              ROUTE CONCLUSION:
            </span>
            <span className="text-text-muted">
              {walk.stops[walk.stops.length - 1].name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
