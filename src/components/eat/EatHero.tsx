"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Utensils, MapPin } from "lucide-react";

interface EatHeroProps {
  onDiscoverClick?: () => void;
  onPlacesClick?: () => void;
}

export function EatHero({ onDiscoverClick, onPlacesClick }: EatHeroProps) {
  return (
    <section className="relative w-full min-h-[56vh] sm:min-h-[62vh] flex items-center justify-center pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden bg-charcoal text-ivory">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=2000&q=85"
          alt="Warm authentic street food and clay kulhad delicacies in Varanasi"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.72]"
        />
        {/* Editorial Overlays */}
        <div className="absolute inset-0 bg-charcoal/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.28em] text-gold-light uppercase mb-4">
          <span className="w-6 h-[1px] bg-gold" />
          <span>EAT KASHI</span>
          <span className="w-6 h-[1px] bg-gold" />
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] text-ivory font-medium tracking-tight mb-5">
          Taste the soul of <br className="hidden sm:inline" />
          <span className="italic font-normal text-gold-light">Kashi.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-sand-light/90 font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          From crisp kachoris at sunrise to lassi, chaat and Banarasi paan —
          discover the flavours that belong to the city.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#food-directory"
            onClick={(e) => {
              if (onDiscoverClick) {
                e.preventDefault();
                onDiscoverClick();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gold text-charcoal font-semibold text-xs tracking-wider uppercase rounded-sm hover:bg-gold-light transition-all duration-300 min-h-[48px] shadow-lg active:scale-[0.98]"
          >
            <span>Discover Kashi Food</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#restaurants-section"
            onClick={(e) => {
              if (onPlacesClick) {
                e.preventDefault();
                onPlacesClick();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-charcoal/40 text-ivory backdrop-blur-sm border border-sand/35 font-medium text-xs tracking-wider uppercase hover:bg-white/10 hover:border-ivory transition-all duration-300 min-h-[48px] active:scale-[0.98]"
          >
            <span>Find a Food Place</span>
          </a>
        </div>
      </div>
    </section>
  );
}
