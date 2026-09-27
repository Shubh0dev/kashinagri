"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Share2, Compass } from "lucide-react";
import type { Walk } from "@/data/walks";
import { WalkOverview } from "./WalkOverview";
import { WalkTimeline } from "./WalkTimeline";
import { WalkRouteVisualization } from "./WalkRouteVisualization";
import { WalkTips } from "./WalkTips";
import { NearbyFood } from "./NearbyFood";
import { NearbyStay } from "./NearbyStay";
import { GettingToStart } from "./GettingToStart";

interface WalkDetailProps {
  walk: Walk;
}

export function WalkDetail({ walk }: WalkDetailProps) {
  return (
    <article className="w-full">
      {/* Subtle Breadcrumbs Header */}
      <div className="bg-ivory border-b border-sand/25 py-3.5 text-xs text-text-muted">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link
              href="/"
              className="hover:text-charcoal transition-colors hover:underline"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/walks"
              className="hover:text-charcoal transition-colors hover:underline"
            >
              Walks
            </Link>
            <span>/</span>
            <span className="text-charcoal font-medium truncate max-w-[200px] sm:max-w-none">
              {walk.name}
            </span>
          </nav>

          <Link
            href="/walks"
            className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Walks</span>
          </Link>
        </div>
      </div>

      {/* 1. Route Overview & Hero & Story */}
      <WalkOverview walk={walk} />

      {/* 2. Main Trail Core: Desktop Side-by-Side / Mobile Stack */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT: Timeline & Stop Cards (7 columns on desktop) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <WalkTimeline walk={walk} />
          </div>

          {/* RIGHT: Route Visualization & Map Placeholder (5 columns on desktop, sticky) */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-24 space-y-6">
            <WalkRouteVisualization walk={walk} />

            {/* Quick Action Box */}
            <div className="p-5 rounded-sm bg-ivory-light border border-sand/35 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-charcoal">
                <span>Trail Route Summary</span>
                <span className="text-saffron">{walk.stops.length} Stops</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Take your time between stops. The beauty of Kashi unfolds in the pauses between destinations.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-sand/20 text-xs">
                <span className="text-text-muted">Pacing:</span>
                <span className="font-semibold text-charcoal">{walk.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. What to Expect & Practical Walking Tips */}
      <WalkTips />

      {/* 4. Walk + Food Integration */}
      <NearbyFood foodSlugs={walk.nearbyFood} />

      {/* 5. Walk + Stay Integration */}
      <NearbyStay staySlugs={walk.nearbyStay} />

      {/* 6. Walk + Transport Integration */}
      <GettingToStart transport={walk.transportToStart} />

      {/* 7. Bottom Navigation CTA */}
      <div className="w-full py-16 bg-charcoal text-ivory text-center border-t border-sand/20">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 space-y-6">
          <span className="text-xs font-semibold tracking-[0.28em] text-gold-light uppercase block">
            MORE WALKS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-medium">
            Discover another side of Kashi
          </h2>
          <p className="text-sand-light/80 text-sm sm:text-base font-light">
            From early morning boat-and-step rituals to late-night street food corridors, explore our other curated walking itineraries.
          </p>
          <div className="pt-2">
            <Link
              href="/walks"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-light transition-colors min-h-[44px]"
            >
              <span>Explore All Curated Walks</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
