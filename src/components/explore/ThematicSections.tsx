"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { placesData, type Place } from "@/data/places";
import { SectionHeading } from "@/components/ui/SectionHeading";

// ==================== SECTION 8: GHATS SHOWCASE ====================
export function GhatsSection() {
  const ghats = placesData.filter((p) => p.category === "Ghat").slice(0, 8);

  return (
    <section id="ghats-section" className="w-full py-20 sm:py-28 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="RIVERFRONT HERITAGE"
            title="Walk the Ghats"
            subtitle="84 ghats. Hundreds of stories. Each stone step descending into the sacred crescent carries its own distinctive legend and morning atmosphere."
          />

          <Link
            href="/explore?category=GHATS"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-charcoal hover:text-saffron transition-colors min-h-[44px]"
          >
            <span>All 84 Ghats</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {ghats.map((ghat: Place) => (
            <Link
              key={ghat.id}
              href={`/explore/${ghat.slug}`}
              className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal/10">
                <Image
                  src={ghat.image}
                  alt={ghat.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <span className="text-[11px] font-medium text-sand-light tracking-wide truncate block">
                    {ghat.bestFor}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1 bg-ivory-light">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors mb-2">
                    {ghat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-2 mb-4">
                    {ghat.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand/20 flex items-center justify-between text-xs font-semibold tracking-wider text-charcoal/80 uppercase">
                  <span>Explore Ghat</span>
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

// ==================== SECTION 9: TEMPLES SHOWCASE ====================
export function TemplesSection() {
  const temples = placesData.filter((p) => p.category === "Temple").slice(0, 8);

  return (
    <section id="temples-section" className="w-full py-20 sm:py-28 bg-ivory-light text-charcoal border-y border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="SACRED ARCHITECTURE"
            title="Temples of Kashi"
            subtitle="Places where history, devotion and architecture meet — ancient stone shrines that have outlasted empires and continue to resonate with daily prayer."
          />

          <Link
            href="/explore?category=TEMPLES"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-charcoal hover:text-saffron transition-colors min-h-[44px]"
          >
            <span>All Temples</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {temples.map((temple: Place) => (
            <Link
              key={temple.id}
              href={`/explore/${temple.slug}`}
              className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal/10">
                <Image
                  src={temple.image}
                  alt={temple.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-charcoal/80 text-gold-light rounded-xs">
                    Temple
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1 bg-ivory-light">
                <div>
                  <h3 className="font-serif text-xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors mb-2">
                    {temple.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-2 mb-4">
                    {temple.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand/20 flex items-center justify-between text-xs font-semibold tracking-wider text-charcoal/80 uppercase">
                  <span>View Details</span>
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

// ==================== SECTION 10: SARNATH SECTION ====================
export function SarnathSection() {
  const sarnathPlaces = placesData.filter((p) => p.category === "Sarnath");

  return (
    <section id="sarnath-section" className="w-full py-20 sm:py-28 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold tracking-[0.28em] text-saffron uppercase inline-flex items-center gap-2.5">
              <span className="w-8 h-[1px] bg-saffron" />
              BEYOND KASHI
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-charcoal font-medium tracking-tight">
              Sarnath
            </h2>

            <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed max-w-2xl">
              Just beyond the energy of Kashi lies Sarnath, a place of quiet reflection and deep historical significance where Gautama Buddha delivered his first sermon and set the Wheel of Dharma into motion.
            </p>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end">
            <Link
              href="/explore?category=SARNATH"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-charcoal text-ivory font-medium text-sm tracking-wider uppercase hover:bg-charcoal-dark transition-all duration-300 min-h-[48px] shadow-sm"
            >
              <span>Explore Sarnath</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {sarnathPlaces.map((place: Place) => (
            <Link
              key={place.id}
              href={`/explore/${place.slug}`}
              className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal/10">
                <Image
                  src={place.image}
                  alt={place.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="p-5 flex flex-col justify-between flex-1 bg-ivory-light">
                <div>
                  <h3 className="font-serif text-xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors mb-2">
                    {place.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-2 mb-4">
                    {place.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand/20 flex items-center justify-between text-xs font-semibold tracking-wider text-charcoal/80 uppercase">
                  <span>View Details</span>
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

// ==================== SECTION 11: HIDDEN KASHI ====================
export function HiddenKashiSection() {
  const hiddenPlaces = placesData.filter(
    (p) => p.category === "Hidden Kashi" || p.category === "Markets"
  );

  return (
    <section id="hidden-kashi-section" className="w-full py-20 sm:py-28 bg-ivory-light text-charcoal border-y border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="SECRET CORNERS"
            title="Discover Hidden Kashi"
            subtitle="Beyond the places everyone knows — secret subterranean stepwells, centuries-old artisanal brass alleys, and tranquil courtyards untouched by time."
          />

          <Link
            href="/explore?category=HIDDEN%20KASHI"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-charcoal hover:text-saffron transition-colors min-h-[44px]"
          >
            <span>All Hidden Gems</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {hiddenPlaces.map((place: Place) => (
            <Link
              key={place.id}
              href={`/explore/${place.slug}`}
              className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal/10">
                <Image
                  src={place.image}
                  alt={place.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />

                {place.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-charcoal text-gold-light rounded-xs border border-gold/40 shadow-xs">
                      {place.badge}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col justify-between flex-1 bg-ivory-light">
                <div>
                  <h3 className="font-serif text-xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors mb-2">
                    {place.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-2 mb-4">
                    {place.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand/20 flex items-center justify-between text-xs font-semibold tracking-wider text-charcoal/80 uppercase">
                  <span>Discover Secret</span>
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
