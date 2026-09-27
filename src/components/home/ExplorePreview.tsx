"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { explorePlaces, type ExplorePlace } from "@/data/kashi";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExplorePreview() {
  return (
    <section id="explore" className="w-full py-20 sm:py-28 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header with "View all places" action */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="DISCOVER PLACES"
            title="Explore Kashi"
            subtitle="From sacred ghats to streets filled with stories."
          />

          <Link
            href="/explore"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-charcoal hover:text-saffron transition-colors min-h-[44px]"
          >
            <span>Explore Kashi</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* 6 Category Image Cards Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {explorePlaces.map((place: ExplorePlace) => (
            <Link
              key={place.id}
              href="/explore"
              className="group relative flex flex-col overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image Container with controlled aspect ratio */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-charcoal/10">
                <Image
                  src={place.image}
                  alt={place.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent pointer-events-none" />

                {/* Tag on image */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-ivory/95 text-charcoal rounded-xs backdrop-blur-xs shadow-sm">
                    {place.tag}
                  </span>
                </div>

                {/* Count badge on image bottom right */}
                <div className="absolute bottom-3 right-4 z-10">
                  <span className="text-xs text-sand-light/90 font-medium tracking-wide">
                    {place.count}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-ivory-light">
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors mb-2">
                    {place.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {place.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-sand/20 flex items-center justify-between text-xs font-semibold tracking-wider text-charcoal/80 uppercase">
                  <span>Explore category</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sand-dark group-hover:text-saffron group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
