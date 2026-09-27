"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Utensils, MapPin } from "lucide-react";
import { getNearbyFood, type FoodItem } from "@/data/food";

interface NearbyFoodProps {
  foodSlugs: string[];
}

export function NearbyFood({ foodSlugs }: NearbyFoodProps) {
  const foods = getNearbyFood(foodSlugs);

  if (foods.length === 0) return null;

  return (
    <section className="w-full py-12 sm:py-16 bg-white border-t border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
              CONNECTED CULINARY TRAIL
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium">
              Try local flavours along this walk
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mt-1 font-light">
              Legendary eateries and authentic street delicacies situated directly along or near this route.
            </p>
          </div>

          <Link
            href="/eat"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors"
          >
            <span>All Kashi food</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food) => (
            <Link
              key={food.id}
              href={`/eat/${food.slug}`}
              className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-ivory-light hover:border-gold/70 transition-all duration-300 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/10">
                <Image
                  src={food.image}
                  alt={food.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-charcoal/90 text-gold-light rounded-xs border border-gold/30">
                    {food.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1 text-[11px] text-text-muted mb-1">
                    <MapPin className="w-3 h-3 text-saffron" />
                    <span>{food.location.area}</span>
                  </div>

                  <h4 className="font-serif text-xl font-medium text-charcoal group-hover:text-saffron transition-colors mb-2">
                    {food.name}
                  </h4>

                  <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-4">
                    {food.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand/20 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-charcoal">
                  <span>Explore dish & spots</span>
                  <ArrowRight className="w-3.5 h-3.5 text-saffron group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
