"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Tag } from "lucide-react";
import { type FoodItem } from "@/data/food";

interface FoodCardProps {
  food: FoodItem;
  variant?: "standard" | "featured";
}

export function FoodCard({ food, variant = "standard" }: FoodCardProps) {
  const isFeatured = variant === "featured";

  const badgeColorMap = {
    SIGNATURE: "bg-gold text-charcoal font-semibold",
    "STREET ICON": "bg-saffron text-ivory",
    HISTORIC: "bg-charcoal text-gold-light border border-gold/40",
    "LOCAL SECRET": "bg-ganga-dark text-sand-light",
    "GANGA VIEW": "bg-ganga text-ivory",
  };

  return (
    <Link
      href={`/eat/${food.slug}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/70 transition-all duration-400 hover:shadow-xl hover:-translate-y-1 ${
        isFeatured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* Image Container */}
      <div
        className={`relative w-full overflow-hidden bg-charcoal ${
          isFeatured ? "aspect-[16/9] sm:aspect-[21/10]" : "aspect-[16/11]"
        }`}
      >
        <Image
          src={food.image}
          alt={food.alt}
          fill
          sizes={
            isFeatured
              ? "(max-width: 768px) 100vw, 66vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-104 filter brightness-[0.92]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent pointer-events-none" />

        {/* Category & Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-ivory/95 text-charcoal rounded-xs shadow-xs">
            {food.category}
          </span>

          {food.badge && (
            <span
              className={`px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-xs shadow-xs ${
                badgeColorMap[food.badge] || "bg-charcoal text-ivory"
              }`}
            >
              {food.badge}
            </span>
          )}
        </div>

        {/* Price Label on top right */}
        {food.priceLabel && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-2.5 py-1 text-[10px] font-medium tracking-wide uppercase bg-charcoal/80 text-sand-light rounded-xs border border-sand/30 shadow-xs">
              {food.priceLabel}
            </span>
          </div>
        )}

        {/* Best For tag on bottom right of image */}
        {food.bestFor && (
          <div className="absolute bottom-3 right-4 z-10 hidden sm:block max-w-[75%] text-right">
            <span className="text-[11px] text-sand-light/95 font-medium tracking-wide drop-shadow-sm truncate block">
              {food.bestFor}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-ivory-light">
        <div>
          {/* Hindi Name & English Title */}
          <div className="mb-2">
            {food.hindiName && (
              <span className="text-xs text-text-muted/80 block font-serif tracking-wider mb-0.5">
                {food.hindiName}
              </span>
            )}
            <h3
              className={`font-serif text-charcoal group-hover:text-saffron transition-colors font-medium tracking-tight ${
                isFeatured
                  ? "text-2xl sm:text-3xl lg:text-4xl"
                  : "text-2xl sm:text-[1.65rem]"
              }`}
            >
              {food.name}
            </h3>
          </div>

          <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
            {food.shortDescription}
          </p>

          {/* Location Area */}
          <div className="flex items-center gap-1.5 text-xs text-text-muted/90 mb-4">
            <MapPin className="w-3.5 h-3.5 text-saffron shrink-0" />
            <span className="truncate">{food.location.area}</span>
          </div>
        </div>

        {/* Card Footer Action */}
        <div className="pt-4 border-t border-sand/25 flex items-center justify-between text-xs font-semibold tracking-wider text-charcoal uppercase">
          <div className="flex items-center gap-1.5">
            {food.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-xs bg-sand/25 text-[10px] text-charcoal/70"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-1.5 text-charcoal group-hover:text-saffron transition-colors">
            <span>Discover</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
