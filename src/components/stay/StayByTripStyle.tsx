"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { TRIP_STYLES, type TripStyleItem } from "@/data/stays";

export function StayByTripStyle() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white text-charcoal border-b border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-[0.24em] text-saffron uppercase block mb-2">
            CURATED ITINERARY ANCHORS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-charcoal">
            Where to stay by trip style
          </h2>
          <p className="text-sm sm:text-base text-text-muted mt-2">
            Your travel intent dictates where you will thrive. Align your base with what you want your mornings and evenings to feel like.
          </p>
        </div>

        {/* 5 Trip Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRIP_STYLES.map((style: TripStyleItem) => (
            <div
              key={style.id}
              className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-ivory-light hover:border-gold/60 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/10">
                <Image
                  src={style.image}
                  alt={style.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-charcoal/80 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-wider text-sand-light border border-sand/30 flex items-center gap-1">
                    <Compass className="w-3 h-3 text-gold" />
                    Recommended: {style.recommendedArea}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <span className="text-xs text-sand-light font-serif italic line-clamp-1">
                    {style.tagline}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors mb-2">
                    {style.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                    {style.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand/25 flex items-center justify-between">
                  <Link
                    href={`/stay/${style.areaSlug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal group-hover:text-saffron transition-colors min-h-[36px]"
                  >
                    <span>Explore {style.recommendedArea}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
