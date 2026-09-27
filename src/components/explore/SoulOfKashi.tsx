"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SoulOfKashi() {
  const soulCategories = [
    {
      id: "ghats",
      title: "GHATS",
      phrase: "Watch the city wake up beside the Ganga.",
      description:
        "Eighty-four stone stairways carving a crescent along the sacred river. From quiet dawn rowboats to evening fire rituals, the ghats are Kashi's open-air temple.",
      image:
        "/images/kashi-sunrise-ghats.jpg",
      alt: "Sunrise over the iconic stone ghats of Varanasi",
      filterCategory: "Ghat",
    },
    {
      id: "lanes",
      title: "LANES",
      phrase: "Walk through streets where every turn has a story.",
      description:
        "Centuries-old gallis where sunlight barely kisses cobblestones. Labyrinths of silk looms, brass forges, hidden Shiva lingams, and the aroma of morning kachori.",
      image:
        "/images/explore/hidden/chaukhamba-lanes.jpg",
      alt: "Atmospheric narrow old city lane in Kashi with ancient brick walls and sunlit stone",
      filterCategory: "Hidden Kashi",
    },
    {
      id: "temples",
      title: "TEMPLES",
      phrase: "Discover centuries of devotion woven into the city.",
      description:
        "Over two thousand sacred shrines spanning millennia of faith. From the golden spire of Kashi Vishwanath to quiet neighborhood mutts guarded by ancient peepal trees.",
      image:
        "/images/explore/temples/kashi-vishwanath.jpg",
      alt: "Golden dome and sandstone spire of Kashi Vishwanath Temple in Varanasi",
      filterCategory: "Temple",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-charcoal text-ivory border-y border-sand/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-semibold tracking-[0.28em] text-gold-light uppercase inline-flex items-center gap-2.5 mb-3">
            <span className="w-8 h-[1px] bg-gold" />
            EDITORIAL ESSAY
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium tracking-tight text-ivory mb-4">
            The soul of Kashi lives <br />
            <span className="italic font-normal text-gold-light">
              in its details.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-sand-light/80 font-light leading-relaxed">
            Beyond the monuments lies an interwoven living rhythm of sacred
            waters, timeless alleyways, and profound spiritual devotion that has
            remained unbroken for three thousand years.
          </p>
        </div>

        {/* 3 Magazine-Style Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {soulCategories.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-sm bg-charcoal-surface border border-sand/15 hover:border-gold/50 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Full-width Image */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-charcoal">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-surface via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-5 left-5 z-10">
                  <span className="text-xs font-semibold tracking-[0.25em] text-gold-light uppercase px-3 py-1 bg-charcoal/80 rounded-xs border border-gold/30">
                    {item.title}
                  </span>
                </div>
              </div>

              {/* Editorial Copy */}
              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-2xl sm:text-[1.65rem] text-ivory font-medium tracking-tight group-hover:text-gold-light transition-colors mb-3 leading-snug">
                    {item.phrase}
                  </h3>

                  <p className="text-sm text-sand-light/75 leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-sand/15 flex items-center justify-between text-xs font-semibold tracking-wider text-gold-light uppercase">
                  <span>Explore {item.title}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
