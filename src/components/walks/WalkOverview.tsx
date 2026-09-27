"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Route, Clock, ShieldCheck, MapPin, Calendar, Compass, Share2 } from "lucide-react";
import type { Walk } from "@/data/walks";
import { Button } from "@/components/ui/Button";

interface WalkOverviewProps {
  walk: Walk;
}

export function WalkOverview({ walk }: WalkOverviewProps) {
  const scrollToTimeline = () => {
    const el = document.getElementById("route-timeline");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full">
      {/* Editorial Route Hero Banner */}
      <div className="relative w-full h-[52vh] sm:h-[62vh] min-h-[400px] max-h-[640px] bg-charcoal text-ivory overflow-hidden">
        <Image
          src={walk.image}
          alt={walk.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.70] scale-102"
        />

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-charcoal/30 to-charcoal/80" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-5 sm:px-8 lg:px-12 flex flex-col justify-end pb-10 sm:pb-14">
          {/* Eyebrow & Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-charcoal/90 text-gold-light rounded-xs border border-gold/40">
              {walk.category} TRAIL
            </span>

            {walk.featured && (
              <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-saffron text-white rounded-xs">
                FEATURED ROUTE
              </span>
            )}

            <span className="text-xs text-sand-light/80 font-medium">
              Start: {walk.transportToStart.startLocation}
            </span>
          </div>

          {/* Route Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-ivory max-w-3xl mb-3">
            {walk.name}
          </h1>

          {/* Tagline / Subtitle */}
          <p className="text-base sm:text-xl text-sand-light font-light max-w-2xl mb-6">
            &ldquo;{walk.tagline}&rdquo;
          </p>

          {/* Hero Action Button */}
          <div className="flex items-center gap-4">
            <Button
              variant="gold"
              size="md"
              onClick={scrollToTimeline}
              className="shadow-lg"
            >
              <span>Start exploring</span>
              <ArrowDown className="w-4 h-4 ml-1.5" />
            </Button>

            <span className="text-xs text-sand-light/70 italic hidden sm:inline">
              Approximate prototype itinerary
            </span>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="w-full bg-white border-b border-sand/30 shadow-xs">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-sand/20 text-center sm:text-left">
            {/* DISTANCE */}
            <div className="pt-2 sm:pt-0 sm:pr-4">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-text-muted block">
                DISTANCE
              </span>
              <div className="text-lg sm:text-xl font-serif font-medium text-charcoal flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
                <Route className="w-4 h-4 text-saffron" />
                <span>{walk.distance}</span>
              </div>
            </div>

            {/* DURATION */}
            <div className="pt-2 sm:pt-0 sm:px-4">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-text-muted block">
                ESTIMATED TIME
              </span>
              <div className="text-lg sm:text-xl font-serif font-medium text-charcoal flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
                <Clock className="w-4 h-4 text-ganga" />
                <span>{walk.duration}</span>
              </div>
            </div>

            {/* DIFFICULTY */}
            <div className="pt-2 sm:pt-0 sm:px-4">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-text-muted block">
                DIFFICULTY
              </span>
              <div className="text-lg sm:text-xl font-serif font-medium text-charcoal flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-gold-dark" />
                <span>{walk.difficulty}</span>
              </div>
            </div>

            {/* STOPS */}
            <div className="pt-2 sm:pt-0 sm:px-4">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-text-muted block">
                CURATED STOPS
              </span>
              <div className="text-lg sm:text-xl font-serif font-medium text-charcoal flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
                <MapPin className="w-4 h-4 text-saffron" />
                <span>{walk.stops.length} stops</span>
              </div>
            </div>

            {/* BEST TIME */}
            <div className="pt-2 sm:pt-0 sm:pl-4 col-span-2 sm:col-span-1">
              <span className="text-[10px] font-semibold tracking-wider uppercase text-text-muted block">
                BEST WINDOW
              </span>
              <div className="text-xs sm:text-sm font-medium text-charcoal mt-1 line-clamp-1">
                {walk.bestTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Route Story Section */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14 text-center sm:text-left">
        <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block mb-2">
          EDITORIAL ESSAY
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium mb-4">
          {walk.storyHeading || "Why take this walk?"}
        </h2>
        <p className="text-base sm:text-lg text-charcoal/85 leading-relaxed font-light font-serif italic border-l-2 border-gold pl-4 sm:pl-6 my-4 text-left">
          &ldquo;{walk.story}&rdquo;
        </p>
        <p className="text-sm text-text-muted leading-relaxed mt-4 font-normal">
          {walk.description}
        </p>
      </div>
    </section>
  );
}
