"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { featuredExperiences } from "@/data/kashi";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceSection() {
  const [heroExperience, ...secondaryExperiences] = featuredExperiences;

  return (
    <section
      id="experiences"
      className="w-full py-20 sm:py-28 bg-ivory text-charcoal"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="IMMERSIVE STORIES"
            title="Experience Kashi"
            subtitle="Some places are seen. Kashi is felt — through morning mist on water, sacred evening brass lamps, and living lineages of music."
          />

          <Link
            href="/explore"
            className="group hidden sm:inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-charcoal hover:text-saffron transition-colors"
          >
            <span>All Experiences</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column (Large Featured Anchor Card) */}
          <div className="lg:col-span-7 flex flex-col">
            <Link
              href={heroExperience.href}
              className="group relative flex-1 flex flex-col justify-end overflow-hidden rounded-sm border border-sand/40 bg-charcoal min-h-[480px] lg:min-h-[580px] transition-all duration-500 hover:shadow-xl"
            >
              {/* Image */}
              <Image
                src={heroExperience.image}
                alt={heroExperience.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88]"
              />

              {/* Editorial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent pointer-events-none" />

              {/* Badge */}
              {heroExperience.badge && (
                <div className="absolute top-6 left-6 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold text-charcoal text-xs font-semibold tracking-wider uppercase shadow-md">
                    <Sparkles className="w-3 h-3" />
                    {heroExperience.badge}
                  </span>
                </div>
              )}

              {/* Content overlay */}
              <div className="relative z-10 p-7 sm:p-10">
                <span className="text-xs font-semibold tracking-[0.25em] text-gold-light uppercase block mb-2">
                  {heroExperience.category}
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-medium tracking-tight mb-3 group-hover:text-gold-light transition-colors">
                  {heroExperience.title}
                </h3>

                <p className="text-sand-light/90 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
                  {heroExperience.description}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-ivory group-hover:text-gold transition-colors">
                  <span>Explore Experience</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column (Stacked Editorial Cards) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-7">
            {secondaryExperiences.map((exp) => (
              <Link
                key={exp.id}
                href={exp.href}
                className="group flex flex-col sm:flex-row lg:flex-row items-stretch overflow-hidden rounded-sm border border-sand/40 bg-ivory-light hover:border-gold/60 transition-all duration-300 hover:shadow-md"
              >
                {/* Thumbnail Image */}
                <div className="relative w-full sm:w-44 lg:w-48 h-48 sm:h-auto shrink-0 overflow-hidden bg-charcoal/10">
                  <Image
                    src={exp.image}
                    alt={exp.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 200px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-saffron uppercase block mb-1">
                      {exp.category}
                    </span>

                    <h4 className="font-serif text-xl sm:text-2xl text-charcoal font-medium tracking-tight group-hover:text-saffron transition-colors mb-2">
                      {exp.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-2">
                      {exp.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-sand/20 flex items-center justify-between text-xs font-semibold tracking-wider text-charcoal/80 uppercase">
                    <span>View Story</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sand-dark group-hover:text-saffron group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
