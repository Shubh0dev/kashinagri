"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FINAL_CTA_IMAGE } from "@/data/kashi";

export function FinalCTA() {
  return (
    <section className="relative w-full py-28 sm:py-36 lg:py-44 overflow-hidden bg-charcoal text-ivory">
      {/* Background Image with Cinematic Grading */}
      <div className="absolute inset-0 z-0">
        <Image
          src={FINAL_CTA_IMAGE.src}
          alt={FINAL_CTA_IMAGE.alt}
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.75]"
        />

        {/* Cinematic Vignette Overlays */}
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-light mb-4 block">
          THE JOURNEY BEGINS HERE
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-ivory mb-6 leading-[1.08]">
          Ready to experience <br />
          <span className="italic font-normal text-gold-light">Kashi?</span>
        </h2>

        <p className="text-lg sm:text-xl lg:text-2xl text-sand-light/90 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Let Kashi show you its own way.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/explore"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-gold text-charcoal font-semibold text-xs tracking-wider uppercase hover:bg-gold-light transition-all duration-300 min-h-[48px] shadow-2xl active:scale-[0.98]"
          >
            <span>Start Exploring</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/plan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-charcoal-surface/80 text-ivory border border-sand/35 font-semibold text-xs tracking-wider uppercase hover:bg-white hover:text-charcoal transition-all duration-300 min-h-[48px] active:scale-[0.98]"
          >
            <span>Plan Your Kashi Trip</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
