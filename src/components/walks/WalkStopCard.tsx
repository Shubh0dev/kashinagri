"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Utensils, Compass } from "lucide-react";
import type { WalkStop } from "@/data/walks";

interface WalkStopCardProps {
  stop: WalkStop;
  isFirst?: boolean;
  isLast?: boolean;
}

export function WalkStopCard({ stop, isFirst, isLast }: WalkStopCardProps) {
  const formattedOrder = stop.order < 10 ? `0${stop.order}` : `${stop.order}`;

  return (
    <div
      id={`stop-${stop.slug}`}
      className="group bg-white rounded-sm border border-sand/40 hover:border-gold/70 transition-all duration-300 hover:shadow-lg p-5 sm:p-6"
    >
      <div className="flex flex-col md:flex-row gap-5 lg:gap-6">
        {/* Stop Thumbnail Image */}
        <div className="relative aspect-[16/10] md:w-56 md:h-40 shrink-0 overflow-hidden rounded-xs bg-charcoal/10">
          <Image
            src={stop.image}
            alt={stop.name}
            fill
            sizes="(max-width: 768px) 100vw, 240px"
            className="object-cover transition-transform duration-700 group-hover:scale-106"
          />
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-charcoal/90 text-gold-light rounded-xs border border-gold/30">
              STOP {formattedOrder}
            </span>
          </div>

          {stop.approximateDuration && (
            <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-1 text-[11px] font-medium text-ivory bg-charcoal/80 backdrop-blur-xs px-2 py-0.5 rounded-xs">
              <Clock className="w-3 h-3 text-ganga-light" />
              <span>{stop.approximateDuration}</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-saffron">
                {stop.category}
              </span>
              {stop.tags && stop.tags.length > 0 && (
                <div className="flex items-center gap-1.5 text-[11px] text-text-muted">
                  {stop.tags.slice(0, 2).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-xs bg-sand/20">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <h4 className="font-serif text-xl sm:text-2xl font-medium text-charcoal group-hover:text-saffron transition-colors mb-2">
              {stop.name}
            </h4>

            <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
              {stop.description}
            </p>
          </div>

          {/* Connected Action Links */}
          <div className="pt-3 border-t border-sand/20 flex flex-wrap items-center gap-3">
            {stop.placeSlug && (
              <Link
                href={`/explore/${stop.placeSlug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors py-1"
              >
                <Compass className="w-3.5 h-3.5 text-gold-dark" />
                <span>Explore place</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            )}

            {stop.foodSlug && (
              <Link
                href={`/eat/${stop.foodSlug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-saffron hover:text-saffron-dark transition-colors py-1"
              >
                <Utensils className="w-3.5 h-3.5 text-saffron" />
                <span>Explore food</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
