"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  Utensils,
  Bed,
  Sparkles,
  Footprints,
  Navigation,
  ArrowRight,
} from "lucide-react";
import { experienceCategories, type ExperienceCategory } from "@/data/kashi";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Map icon names to Lucide icons
const iconMap = {
  compass: Compass,
  utensils: Utensils,
  bed: Bed,
  sparkles: Sparkles,
  footprints: Footprints,
  navigation: Navigation,
};

export function ExperienceSelector() {
  return (
    <section
      id="experiences-selector"
      className="w-full py-20 sm:py-28 bg-ivory text-charcoal border-b border-sand/30"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <SectionHeading
            eyebrow="WAYS TO EXPLORE"
            title="What do you want to experience?"
            subtitle="Find your own way through Kashi — from quiet dawn rowboats to sacred evening fires and hidden spice gallis."
          />
        </div>

        {/* 6 Visual Cards Grid: 3x2 desktop, 2x3 tablet, responsive grid/horizontal-scroll mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {experienceCategories.map((item: ExperienceCategory, index: number) => {
            const Icon = iconMap[item.iconName];

            return (
              <Link
                key={item.id}
                href={item.href}
                className="group relative flex flex-col justify-between p-7 sm:p-8 bg-ivory-light border border-sand/40 hover:border-gold/60 rounded-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 min-h-[220px]"
              >
                {/* Top: Icon and subtle tag */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-sand/20 border border-sand/30 flex items-center justify-center text-saffron group-hover:bg-saffron group-hover:text-ivory transition-colors duration-300">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-text-muted/70">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors duration-200 mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Arrow indicator */}
                <div className="pt-6 mt-4 border-t border-sand/20 flex items-center justify-between text-xs font-semibold tracking-wider text-charcoal/70 group-hover:text-charcoal uppercase">
                  <span>Discover</span>
                  <div className="w-8 h-8 rounded-full bg-sand/15 flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
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
