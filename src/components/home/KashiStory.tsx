"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { STORY_IMAGE } from "@/data/kashi";

export function KashiStory() {
  return (
    <section className="w-full py-20 sm:py-28 lg:py-32 bg-ivory-light text-charcoal border-y border-sand/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Evocative Image with Architectural Frame */}
          <div className="lg:col-span-6">
            <div className="relative p-2 sm:p-3 bg-ivory border border-sand/50 shadow-[0_12px_40px_rgb(0,0,0,0.06)] rounded-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xs bg-charcoal/10">
                <Image
                  src={STORY_IMAGE.src}
                  alt={STORY_IMAGE.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Editorial Caption Tag */}
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-text-muted">
                <span>Twilight on the Ganga</span>
                <span>Varanasi, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Copy */}
          <div className="lg:col-span-6 lg:pl-6 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-semibold tracking-[0.28em] text-saffron uppercase inline-flex items-center gap-2.5">
                <span className="w-8 h-[1px] bg-saffron" />
                <span>MORE THAN A DESTINATION</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] text-charcoal tracking-tight">
                Kashi has a rhythm <br />
                <span className="italic font-normal text-gold-dark">
                  of its own.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-text-muted leading-relaxed font-light">
              <p>
                Kashi is a city of ancient ghats, narrow lanes, morning boats,
                temple bells, music, food and stories. Every turn reveals
                another layer of the city.
              </p>

              <p className="font-serif italic text-xl sm:text-2xl text-charcoal font-normal border-l-2 border-gold pl-5 py-1">
                “Discover the city beyond the postcard.”
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/explore"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-charcoal text-ivory font-medium text-sm tracking-wider uppercase hover:bg-charcoal-dark transition-all duration-300 min-h-[48px] shadow-sm active:scale-[0.99]"
              >
                <span>Explore Kashi</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
