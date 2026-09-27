"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Route, Clock, ShieldCheck, MapPin, Footprints } from "lucide-react";
import type { Walk } from "@/data/walks";

interface WalkCardProps {
  walk: Walk;
}

export function WalkCard({ walk }: WalkCardProps) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Top Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/10">
        <Image
          src={walk.image}
          alt={walk.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
        />
        {/* Soft Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/15 to-transparent pointer-events-none" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-[11px] font-semibold tracking-wider uppercase bg-charcoal/90 backdrop-blur-md text-gold-light rounded-xs border border-gold/30 shadow-sm">
            {walk.category}
          </span>
        </div>

        {/* Featured Tag (if applicable) */}
        {walk.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-saffron text-white rounded-xs shadow-sm">
              FEATURED
            </span>
          </div>
        )}

        {/* Approximate Stops Count overlay */}
        <div className="absolute bottom-3 left-4 z-10 flex items-center gap-1.5 text-xs text-ivory/90 font-medium">
          <MapPin className="w-3.5 h-3.5 text-gold-light" />
          <span>{walk.stops.length} curated stops</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-ivory-light">
        <div>
          {/* Tagline */}
          <span className="text-[11px] font-semibold uppercase tracking-wider text-saffron block mb-1.5">
            {walk.tagline}
          </span>

          {/* Route Title */}
          <h3 className="font-serif text-2xl sm:text-[1.7rem] font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors leading-snug mb-3">
            <Link href={`/walks/${walk.slug}`} className="focus:outline-none">
              {walk.name}
            </Link>
          </h3>

          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4 text-xs text-charcoal/80">
            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-sand/25 border border-sand/40 font-medium"
              title="Approximate walking distance"
            >
              <Route className="w-3.5 h-3.5 text-saffron shrink-0" />
              <span>{walk.distance}</span>
            </div>

            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-sand/25 border border-sand/40 font-medium"
              title="Approximate duration"
            >
              <Clock className="w-3.5 h-3.5 text-ganga shrink-0" />
              <span>{walk.duration}</span>
            </div>

            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-sand/25 border border-sand/40 font-medium"
              title="Trail pacing difficulty"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-gold-dark shrink-0" />
              <span>{walk.difficulty}</span>
            </div>
          </div>

          {/* Short Narrative Description */}
          <p className="text-sm text-text-muted leading-relaxed mb-5 line-clamp-3">
            {walk.shortDescription || walk.description}
          </p>

          {/* Stops Preview Bar */}
          <div className="pt-3.5 border-t border-sand/20">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-text-muted uppercase block mb-1.5">
              ROUTE SEQUENCE:
            </span>
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-charcoal/75">
              {walk.stops.slice(0, 3).map((stop, i) => (
                <span
                  key={stop.id}
                  className="after:content-['→'] after:ml-1.5 after:text-gold-dark last:after:content-none"
                >
                  {stop.name}
                </span>
              ))}
              {walk.stops.length > 3 && (
                <span className="text-[11px] text-text-muted italic">
                  +{walk.stops.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Action Link */}
        <div className="mt-6 pt-4 border-t border-sand/20 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-wider text-charcoal uppercase group-hover:text-saffron transition-colors">
            Explore walk
          </span>
          <Link
            href={`/walks/${walk.slug}`}
            className="w-8 h-8 rounded-full bg-sand/25 flex items-center justify-center group-hover:bg-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label={`Explore ${walk.name}`}
          >
            <ArrowRight className="w-3.5 h-3.5 text-charcoal group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
