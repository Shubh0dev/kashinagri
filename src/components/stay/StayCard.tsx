"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, Check, Bed } from "lucide-react";
import type { Stay } from "@/data/stays";

interface StayCardProps {
  stay: Stay;
}

export function StayCard({ stay }: StayCardProps) {
  // Price level color accents
  const priceColor = {
    "Budget-friendly": "bg-emerald-50 text-emerald-800 border-emerald-200",
    "Mid-range": "bg-blue-50 text-blue-800 border-blue-200",
    "Premium": "bg-amber-50 text-amber-900 border-amber-200",
    "Luxury": "bg-purple-50 text-purple-900 border-purple-200",
  }[stay.priceLevel] || "bg-sand/30 text-charcoal border-sand/40";

  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Media Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/10">
        <Image
          src={stay.image}
          alt={stay.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-full bg-charcoal/80 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-wider text-sand-light border border-sand/30 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-saffron" />
            {stay.area}
          </span>

          {stay.badge && (
            <span className="px-2.5 py-1 rounded-full bg-gold/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-charcoal shadow-sm">
              {stay.badge}
            </span>
          )}
        </div>

        {/* Bottom Atmosphere Quote */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <span className="text-xs text-sand-light font-serif italic line-clamp-1">
            &ldquo;{stay.atmosphere}&rdquo;
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          {/* Header Row: Type and Price Level */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-saffron">
              {stay.type}
            </span>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${priceColor}`}>
              {stay.priceLevel}
            </span>
          </div>

          {/* Stay Title */}
          <h3 className="font-serif text-2xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors mb-2">
            <Link href={`/stay/${stay.slug}`} className="hover:underline">
              {stay.name}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
            {stay.shortDescription}
          </p>

          {/* Why Stay Here Highlights */}
          <div className="space-y-1.5 mb-5 bg-ivory-light p-3 rounded-xs border border-sand/30">
            {stay.whyStayHere.slice(0, 2).map((reason, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-charcoal">
                <Check className="w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5" />
                <span className="line-clamp-1">{reason}</span>
              </div>
            ))}
          </div>

          {/* Traveller Types Badges */}
          <div className="flex flex-wrap gap-1 mb-5">
            {stay.travellerTypes.map((type) => (
              <span
                key={type}
                className="text-[10px] px-2 py-0.5 rounded-full bg-sand/20 text-text-muted font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="pt-4 border-t border-sand/20 flex items-center justify-between text-xs font-semibold tracking-wider uppercase">
          <Link
            href={`/stay/${stay.slug}`}
            className="inline-flex items-center gap-1.5 text-charcoal group-hover:text-saffron transition-colors min-h-[36px]"
          >
            <span>View Stay Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href={`/stay/${stay.areaSlug}`}
            className="text-[11px] text-text-muted hover:text-charcoal transition-colors underline-offset-4 hover:underline"
          >
            Area Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
