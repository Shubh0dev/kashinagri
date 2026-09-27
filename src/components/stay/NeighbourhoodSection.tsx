"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Waves, Compass, Sparkles, MapPin } from "lucide-react";
import { neighbourhoodsData, type Neighbourhood } from "@/data/stays";

interface NeighbourhoodSectionProps {
  onSelectArea?: (areaSlug: string) => void;
}

export function NeighbourhoodSection({ onSelectArea }: NeighbourhoodSectionProps) {
  return (
    <section id="neighbourhoods" className="w-full py-20 sm:py-28 bg-ivory text-charcoal border-b border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="text-xs font-semibold tracking-[0.24em] text-saffron uppercase block mb-3">
            7 DISTINCT KASHI ENCLAVES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-charcoal mb-4">
            Which side of Kashi feels like you?
          </h2>
          <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
            Every enclave possesses its own character. Before picking a room, choose your living environment: 
            serene bohemian riverfront, electric market crossroads, deep medieval galis, or secluded garden sanctuaries.
          </p>
        </div>

        {/* 7 Neighbourhood Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {neighbourhoodsData.map((neighbourhood: Neighbourhood, index: number) => {
            const isFeatured = index === 0; // Assi Ghat gets prominent treatment or subtle highlight

            return (
              <div
                key={neighbourhood.id}
                className={`group flex flex-col justify-between overflow-hidden rounded-sm border bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isFeatured ? "border-gold/70 ring-1 ring-gold/20" : "border-sand/40 hover:border-gold/60"
                }`}
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/10">
                  <Image
                    src={neighbourhood.image}
                    alt={neighbourhood.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent pointer-events-none" />

                  {/* Top Access Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-charcoal/80 backdrop-blur-sm text-[10px] font-medium tracking-wider text-sand-light border border-sand/30 uppercase">
                      <Waves className="w-3 h-3 text-ganga-light" />
                      {neighbourhood.gangaAccess}
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-charcoal/80 backdrop-blur-sm text-[10px] font-medium tracking-wider text-sand-light border border-sand/30 uppercase">
                      <Compass className="w-3 h-3 text-gold" />
                      {neighbourhood.oldCityAccess}
                    </span>
                  </div>

                  {/* Bottom Vibe Tagline */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <span className="text-xs text-sand-light font-serif italic line-clamp-1">
                      &ldquo;{neighbourhood.atmosphere}&rdquo;
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif text-2xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors">
                        <Link href={`/stay/${neighbourhood.slug}`} className="hover:underline">
                          {neighbourhood.name}
                        </Link>
                      </h3>
                    </div>

                    <p className="text-xs font-serif italic text-gold-dark mb-3">
                      {neighbourhood.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-5 line-clamp-3">
                      {neighbourhood.description}
                    </p>

                    {/* Best for tags */}
                    <div className="mb-4">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-text-muted block mb-2">
                        BEST FOR
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {neighbourhood.bestFor.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-xs bg-sand/20 border border-sand/30 text-[11px] font-medium text-charcoal"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Gali Reality Note */}
                    <div className="p-3 bg-ivory-light rounded-xs border border-sand/30 text-xs text-text-muted mb-5">
                      <span className="font-semibold text-charcoal block mb-0.5">
                        What to consider:
                      </span>
                      <p className="line-clamp-2 italic font-serif">
                        {neighbourhood.thingsToConsider[0]}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-sand/20 flex items-center justify-between gap-3 text-xs font-semibold tracking-wider uppercase">
                    <Link
                      href={`/stay/${neighbourhood.slug}`}
                      className="inline-flex items-center gap-1.5 text-charcoal hover:text-saffron transition-colors min-h-[38px]"
                    >
                      <span>Neighbourhood Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    {onSelectArea && (
                      <button
                        onClick={() => onSelectArea(neighbourhood.slug)}
                        className="text-text-muted hover:text-charcoal underline underline-offset-4 transition-colors"
                      >
                        View Stays
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
