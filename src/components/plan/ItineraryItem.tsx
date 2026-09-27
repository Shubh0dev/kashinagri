"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowRight, Compass, Utensils, Footprints, Info } from "lucide-react";
import type { ItineraryItem as ItemType } from "@/types/itinerary";

interface ItineraryItemProps {
  item: ItemType;
}

export function ItineraryItem({ item }: ItineraryItemProps) {
  return (
    <div
      id={`item-${item.id}`}
      className="group bg-white rounded-sm border border-sand/40 hover:border-gold/60 transition-all duration-300 hover:shadow-md p-5 sm:p-6"
    >
      <div className="flex flex-col sm:flex-row gap-5 lg:gap-6">
        {/* Left: Activity Thumbnail */}
        <div className="relative aspect-[16/10] sm:w-52 sm:h-36 shrink-0 overflow-hidden rounded-xs bg-charcoal/10">
          <Image
            src={item.image}
            alt={item.alt || item.title}
            fill
            sizes="(max-width: 640px) 100vw, 220px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-charcoal/90 text-gold-light rounded-xs border border-gold/30">
              {item.category}
            </span>
          </div>
        </div>

        {/* Right: Activity Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* Time & Duration Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-saffron bg-saffron/10 px-2 py-0.5 rounded-xs">
                  {item.time}
                </span>
                <span className="text-text-muted text-xs">•</span>
                <div className="inline-flex items-center gap-1 text-xs text-text-muted">
                  <Clock className="w-3 h-3 text-ganga" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {item.location && (
                <div className="inline-flex items-center gap-1 text-[11px] text-text-muted">
                  <MapPin className="w-3 h-3 text-gold-dark shrink-0" />
                  <span className="line-clamp-1">{item.location}</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h4 className="font-serif text-xl sm:text-2xl font-medium text-charcoal group-hover:text-saffron transition-colors mb-2">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-light mb-3">
              {item.description}
            </p>

            {/* Practical Tip */}
            {item.tips && (
              <div className="flex items-start gap-1.5 p-2 rounded-xs bg-ivory text-[11px] text-charcoal/80 mb-3 border border-sand/20">
                <Info className="w-3.5 h-3.5 text-ganga shrink-0 mt-0.5" />
                <span className="italic">{item.tips}</span>
              </div>
            )}
          </div>

          {/* Connected Links */}
          <div className="pt-3 border-t border-sand/20 flex flex-wrap items-center gap-3">
            {item.placeSlug && (
              <Link
                href={`/explore/${item.placeSlug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors py-1"
              >
                <Compass className="w-3.5 h-3.5 text-gold-dark" />
                <span>Explore place</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            )}

            {item.foodSlug && (
              <Link
                href={`/eat/${item.foodSlug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-saffron hover:text-saffron-dark transition-colors py-1"
              >
                <Utensils className="w-3.5 h-3.5 text-saffron" />
                <span>Explore food</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            )}

            {item.walkSlug && (
              <Link
                href={`/walks/${item.walkSlug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ganga-dark hover:text-ganga transition-colors py-1"
              >
                <Footprints className="w-3.5 h-3.5 text-ganga" />
                <span>Explore walk</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
