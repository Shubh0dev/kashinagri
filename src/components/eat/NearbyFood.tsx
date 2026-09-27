"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getNearbyFood, type FoodItem } from "@/data/food";
import { FoodCard } from "./FoodCard";

interface NearbyFoodProps {
  nearbySlugs: string[];
  title?: string;
  subtitle?: string;
}

export function NearbyFood({
  nearbySlugs,
  title = "Explore more flavours nearby",
  subtitle = "Continue your culinary discovery through the neighbouring lanes.",
}: NearbyFoodProps) {
  const nearbyItems = getNearbyFood(nearbySlugs);

  if (nearbyItems.length === 0) return null;

  return (
    <section className="w-full py-16 sm:py-20 bg-ivory-light border-t border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
              CULINARY COMPANIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-text-muted mt-1">{subtitle}</p>
            )}
          </div>

          <Link
            href="/eat"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors min-h-[44px]"
          >
            <span>All Food</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearbyItems.map((food: FoodItem) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </section>
  );
}
