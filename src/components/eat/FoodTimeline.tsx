"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { foodTimeline, type TimelineMeal } from "@/data/food";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FoodTimeline() {
  return (
    <section className="w-full py-20 sm:py-28 bg-charcoal text-ivory border-y border-sand/20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-saffron/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-semibold tracking-[0.28em] text-gold-light uppercase inline-flex items-center gap-2.5 mb-3">
            <span className="w-8 h-[1px] bg-gold" />
            A CULINARY ITINERARY
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08] font-medium tracking-tight text-ivory mb-4">
            A day of eating in <br />
            <span className="italic font-normal text-gold-light">Kashi.</span>
          </h2>

          <p className="text-base sm:text-lg text-sand-light/85 font-light leading-relaxed">
            The city awakens with bubbling cauldrons of hing and closes under the gentle fold of sweet Maghai paan. Try letting your appetite follow the rhythmic arc of the day.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="space-y-12 sm:space-y-16">
          {foodTimeline.map((item: TimelineMeal, index: number) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={item.period}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image Side */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative p-2 bg-charcoal-surface border border-sand/20 rounded-sm shadow-xl">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-charcoal">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 hover:scale-104 filter brightness-[0.92]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-surface/80 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-sand-light/90">
                        <span className="font-medium">📍 {item.recommendedPlaces}</span>
                        <span className="text-[11px] font-semibold text-gold tracking-wider">
                          STEP 0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative Side */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isEven ? "lg:order-1 lg:pr-6" : "lg:order-2 lg:pl-6"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase px-3 py-1 bg-charcoal-surface border border-saffron/30 rounded-xs">
                      {item.period}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs text-sand-light/70">
                      <Clock className="w-3.5 h-3.5 text-gold-light" />
                      <span>{item.timeWindow}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-medium">
                    Try {item.dish}
                  </h3>

                  <p className="text-xs sm:text-sm font-serif italic text-gold-light">
                    “{item.vibe}”
                  </p>

                  <p className="text-sm sm:text-base text-sand-light/80 leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/eat/${item.dishSlug}`}
                      className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-light hover:text-ivory transition-colors min-h-[44px]"
                    >
                      <span>Explore this dish</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
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
