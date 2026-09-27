"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, Check } from "lucide-react";
import { stayAreas, type StayArea } from "@/data/kashi";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StayPreview() {
  return (
    <section id="stay" className="w-full py-20 sm:py-28 bg-ivory-light text-charcoal border-y border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="NEIGHBOURHOOD GUIDE"
            title="Where should you stay?"
            subtitle="Choose the Kashi that fits your journey — each enclave offers its own unique spirit, pace and morning view."
          />

          <Link
            href="/stay"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-charcoal hover:text-saffron transition-colors min-h-[44px]"
          >
            <span>Find your stay</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* 4 Area Cards: 4 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {stayAreas.map((area: StayArea) => {
            const areaSlug =
              area.id === "assi-ghat"
                ? "assi-ghat"
                : area.id === "old-kashi"
                ? "old-kashi"
                : area.id === "godowlia"
                ? "godowlia"
                : "sarnath";

            return (
              <Link
                key={area.id}
                href={`/stay/${areaSlug}`}
                className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal/10">
                  <Image
                    src={area.image}
                    alt={area.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <span className="text-xs text-sand-light/95 italic font-serif">
                      {area.vibe}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-2xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors mb-2">
                      {area.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-5">
                      {area.description}
                    </p>

                    {/* "Best For" Tag */}
                    <div className="p-3 bg-sand/20 rounded-xs border border-sand/30 mb-4">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-text-muted block mb-1">
                        BEST SUITED FOR:
                      </span>
                      <p className="text-xs font-medium text-charcoal leading-snug">
                        {area.bestFor}
                      </p>
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="pt-4 border-t border-sand/20 flex items-center justify-between text-xs font-semibold tracking-wider text-charcoal uppercase">
                    <span className="group-hover:text-saffron transition-colors">Explore Area</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sand-dark group-hover:text-saffron group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
