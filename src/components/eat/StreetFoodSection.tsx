"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { foodItemsData, type FoodItem } from "@/data/food";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface StreetFoodSectionProps {
  onExploreStreetFood?: () => void;
}

export function StreetFoodSection({
  onExploreStreetFood,
}: StreetFoodSectionProps) {
  const streetItems = foodItemsData
    .filter((f) => f.category === "Street Food" || f.tags.includes("Street Food"))
    .slice(0, 6);

  return (
    <section id="street-food-section" className="w-full py-20 sm:py-28 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="LANES & TAWAS"
            title="Kashi, one bite at a time."
            subtitle="Follow the aromas through the city's lanes — bubbling cauldrons, stone-whisked curd, and clay bowls served hot."
          />

          <Link
            href="/eat?category=STREET%20FOOD"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-charcoal hover:text-saffron transition-colors min-h-[44px]"
          >
            <span>Explore street food</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {streetItems.map((item: FoodItem) => (
            <Link
              key={item.id}
              href={`/eat/${item.slug}`}
              className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-charcoal">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-saffron text-ivory rounded-xs shadow-xs">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 z-10 text-xs text-sand-light font-medium">
                  📍 {item.location.area}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 bg-ivory-light">
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-2 mb-4">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand/20 flex items-center justify-between text-xs font-semibold tracking-wider text-charcoal uppercase">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sand-dark group-hover:text-saffron group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
