"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Footprints, Route, ShieldCheck } from "lucide-react";
import { kashiWalks, type KashiWalk } from "@/data/kashi";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WalksPreview() {
  return (
    <section id="walks" className="w-full py-20 sm:py-28 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="ON FOOT TRAILS"
            title="Walk Kashi"
            subtitle="The best way to discover the old city is one lane at a time — where motorized wheels stop and centuries-old stories begin."
          />

          <Link
            href="/walks"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-charcoal hover:text-saffron transition-colors min-h-[44px]"
          >
            <span>Explore Kashi Walks</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* 3 Walking Route Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {kashiWalks.map((walk: KashiWalk) => {
            const walkSlug =
              walk.id === "sunrise-walk"
                ? "sunrise-ganga-walk"
                : walk.id === "food-walk"
                ? "kashi-food-walk"
                : walk.id;

            return (
              <Link
                key={walk.id}
                href={`/walks/${walkSlug}`}
                className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-ivory-light hover:border-gold/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image & Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/10">
                  <Image
                    src={walk.image}
                    alt={walk.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent pointer-events-none" />

                  {/* Route Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-charcoal text-ivory rounded-xs shadow-sm">
                      {walk.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors mb-4">
                      {walk.name}
                    </h3>

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-5 text-xs text-charcoal/80">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-sand/25 border border-sand/30 font-medium">
                        <Route className="w-3.5 h-3.5 text-saffron" />
                        <span>{walk.distance}</span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-sand/25 border border-sand/30 font-medium">
                        <Clock className="w-3.5 h-3.5 text-ganga" />
                        <span>{walk.duration}</span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-sand/25 border border-sand/30 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-gold-dark" />
                        <span>{walk.difficulty}</span>
                      </div>
                    </div>

                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                      {walk.description}
                    </p>

                    {/* Key Highlights Stops */}
                    <div className="space-y-1.5 pt-4 border-t border-sand/20">
                      <span className="text-[11px] font-semibold tracking-[0.2em] text-text-muted uppercase block">
                        Trail Highlights:
                      </span>
                      <div className="flex flex-wrap gap-1.5 text-xs text-charcoal/75">
                        {walk.stops.slice(0, 3).map((stop) => (
                          <span
                            key={stop}
                            className="after:content-['•'] after:ml-1.5 after:text-sand-dark last:after:content-none"
                          >
                            {stop}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-8 pt-4 border-t border-sand/20 flex items-center justify-between text-xs font-semibold tracking-wider text-charcoal uppercase">
                    <span className="group-hover:text-saffron transition-colors">
                      View Route Guide
                    </span>
                    <div className="w-8 h-8 rounded-full bg-sand/20 flex items-center justify-center group-hover:bg-gold transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-charcoal group-hover:translate-x-0.5 transition-transform" />
                    </div>
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
