"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { kashiFoods, type KashiFood } from "@/data/kashi";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FoodPreview() {
  return (
    <section
      id="taste"
      className="w-full py-20 sm:py-28 lg:py-32 bg-charcoal text-ivory border-y border-sand/15 relative overflow-hidden"
    >
      {/* Subtle Atmospheric Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-saffron/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="CULINARY TRADITIONS"
            title="Taste Kashi"
            subtitle="Come hungry. Leave with stories — from dawn kachoris steeped in hing to evening clay-kulhad chaats and the legend of winter malaiyo."
            theme="dark"
          />

          <Link
            href="/eat"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-gold-light hover:text-ivory transition-colors min-h-[44px]"
          >
            <span>Explore Kashi Food</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* 6 Food Cards Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {kashiFoods.map((food: KashiFood) => (
            <Link
              key={food.id}
              href={`/eat/${food.id}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-sm bg-charcoal-surface border border-sand/15 hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-charcoal">
                <Image
                  src={food.image}
                  alt={food.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-surface via-transparent to-transparent pointer-events-none" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-charcoal/80 text-gold-light rounded-xs backdrop-blur-xs border border-gold/30 shadow-sm">
                    {food.category}
                  </span>
                </div>

                {/* Highlight Badge */}
                <div className="absolute bottom-3 right-4 z-10">
                  <span className="text-xs text-sand-light/90 font-medium tracking-wide">
                    {food.highlight}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-ivory group-hover:text-gold-light transition-colors mb-2">
                    {food.name}
                  </h3>

                  <p className="text-sm text-sand-light/75 leading-relaxed mb-4">
                    {food.description}
                  </p>
                </div>

                {/* Location Footnote */}
                <div className="pt-4 border-t border-sand/15 flex items-center justify-between text-xs text-sand/80">
                  <div className="flex items-center gap-2 truncate">
                    <MapPin className="w-3.5 h-3.5 text-saffron shrink-0" />
                    <span className="truncate">{food.location}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-light group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA on Mobile/Tablet */}
        <div className="mt-12 text-center sm:hidden">
          <Link
            href="/eat"
            className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-sm bg-gold text-charcoal font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition-all min-h-[48px]"
          >
            <span>Explore Kashi Food</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
