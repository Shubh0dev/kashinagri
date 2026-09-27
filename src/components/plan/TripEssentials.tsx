"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Utensils, Footprints, Compass, MapPin } from "lucide-react";
import type { RecommendationSummary, TripPreferences } from "@/types/itinerary";

interface TripEssentialsProps {
  recommendations: RecommendationSummary;
  preferences: TripPreferences;
}

export function TripEssentials({
  recommendations,
  preferences,
}: TripEssentialsProps) {
  const { mustTryFoods, suggestedWalks, suggestedPlaces } = recommendations;

  return (
    <section className="w-full py-12 sm:py-16 border-t border-sand/30 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
        {/* Header */}
        <div>
          <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
            CURATED FOR YOUR JOURNEY
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
            Your Kashi essentials
          </h3>
          <p className="text-sm text-text-muted mt-1.5 font-light">
            Because you prioritized{" "}
            <span className="font-semibold text-charcoal capitalize">
              {preferences.priority}
            </span>{" "}
            and selected{" "}
            <span className="font-semibold text-charcoal">
              {preferences.interests.slice(0, 3).join(", ")}
            </span>
            .
          </p>
        </div>

        {/* 1. Curated Places Grid */}
        {suggestedPlaces && suggestedPlaces.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-serif text-xl sm:text-2xl text-charcoal font-medium flex items-center gap-2">
                <Compass className="w-4 h-4 text-gold-dark" />
                <span>Places to explore</span>
              </h4>
              <Link
                href="/explore"
                className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors"
              >
                All places →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedPlaces.map((place) => (
                <Link
                  key={place.slug}
                  href={`/explore/${place.slug}`}
                  className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/70 transition-all duration-300 hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/10">
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-106"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-charcoal/90 text-gold-light rounded-xs border border-gold/30">
                        {place.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h5 className="font-serif text-xl font-medium text-charcoal group-hover:text-saffron transition-colors mb-1.5">
                        {place.name}
                      </h5>
                      <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-3">
                        {place.reason}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-sand/20 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-charcoal">
                      <span>Explore Place</span>
                      <ArrowRight className="w-3.5 h-3.5 text-saffron group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 2. Curated Food Grid */}
        {mustTryFoods && mustTryFoods.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-serif text-xl sm:text-2xl text-charcoal font-medium flex items-center gap-2">
                <Utensils className="w-4 h-4 text-saffron" />
                <span>Flavours to try</span>
              </h4>
              <Link
                href="/eat"
                className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors"
              >
                All Kashi food →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mustTryFoods.map((food) => (
                <Link
                  key={food.slug}
                  href={`/eat/${food.slug}`}
                  className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/70 transition-all duration-300 hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/10">
                    <Image
                      src={food.image}
                      alt={food.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-106"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-charcoal/90 text-gold-light rounded-xs border border-gold/30">
                        {food.area}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h5 className="font-serif text-xl font-medium text-charcoal group-hover:text-saffron transition-colors mb-1.5">
                        {food.name}
                      </h5>
                      <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-3">
                        {food.reason}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-sand/20 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-charcoal">
                      <span>Discover Dish</span>
                      <ArrowRight className="w-3.5 h-3.5 text-saffron group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 3. Curated Walks Grid */}
        {suggestedWalks && suggestedWalks.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-serif text-xl sm:text-2xl text-charcoal font-medium flex items-center gap-2">
                <Footprints className="w-4 h-4 text-ganga" />
                <span>Walks to consider</span>
              </h4>
              <Link
                href="/walks"
                className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors"
              >
                All walks →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suggestedWalks.map((walk) => (
                <Link
                  key={walk.slug}
                  href={`/walks/${walk.slug}`}
                  className="group flex flex-col sm:flex-row justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/70 transition-all duration-300 hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] sm:w-52 sm:h-auto shrink-0 overflow-hidden bg-charcoal/10">
                    <Image
                      src={walk.image}
                      alt={walk.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 220px"
                      className="object-cover transition-transform duration-700 group-hover:scale-106"
                    />
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-text-muted mb-1">
                        <span>{walk.distance}</span>
                        <span>•</span>
                        <span>{walk.duration}</span>
                      </div>

                      <h5 className="font-serif text-xl font-medium text-charcoal group-hover:text-saffron transition-colors mb-2">
                        {walk.name}
                      </h5>

                      <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-3">
                        {walk.reason}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-sand/20 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-charcoal">
                      <span>Explore Walk Trail</span>
                      <ArrowRight className="w-3.5 h-3.5 text-saffron group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
