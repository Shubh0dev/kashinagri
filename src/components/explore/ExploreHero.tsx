"use client";

import React from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";

interface ExploreHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function ExploreHero({ searchQuery, onSearchChange }: ExploreHeroProps) {
  return (
    <section className="relative w-full min-h-[58vh] sm:min-h-[64vh] flex items-center justify-center pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden bg-charcoal text-ivory">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/kashi-sunrise-ghats.jpg"
          alt="Atmospheric morning view of Varanasi ghats and temple spires"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.78]"
        />
        {/* Editorial Overlays */}
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.28em] text-gold-light uppercase mb-4">
          <span className="w-6 h-[1px] bg-gold" />
          <span>EXPLORE KASHI</span>
          <span className="w-6 h-[1px] bg-gold" />
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] text-ivory font-medium tracking-tight mb-5">
          Find your way through <br className="hidden sm:inline" />
          <span className="italic font-normal text-gold-light">Kashi.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-sand-light/90 font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          From ancient temples and sacred ghats to hidden lanes, markets and
          stories that most visitors miss.
        </p>

        {/* Search Bar Interface */}
        <div className="max-w-xl mx-auto relative">
          <div className="relative flex items-center bg-ivory/95 backdrop-blur-md rounded-sm border border-sand/40 shadow-2xl transition-all focus-within:ring-2 focus-within:ring-gold focus-within:border-gold">
            <div className="pl-4 sm:pl-5 text-charcoal/60">
              <Search className="w-5 h-5" aria-hidden="true" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search places, ghats, temples, food in Kashi..."
              className="w-full py-4 pl-3 pr-10 bg-transparent text-charcoal placeholder-text-muted text-sm sm:text-base focus:outline-none min-h-[52px]"
              aria-label="Search places in Kashi"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute right-3 p-2 text-charcoal/50 hover:text-charcoal transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="mt-2.5 flex items-center justify-center gap-2 text-xs text-sand-light/75">
            <span>Try searching:</span>
            <button
              type="button"
              onClick={() => onSearchChange("temple")}
              className="underline hover:text-gold-light transition-colors"
            >
              "temple"
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onSearchChange("ghat")}
              className="underline hover:text-gold-light transition-colors"
            >
              "ghat"
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onSearchChange("sarnath")}
              className="underline hover:text-gold-light transition-colors"
            >
              "sarnath"
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
