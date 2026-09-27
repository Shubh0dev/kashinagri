"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { foodItemsData, type FoodItem } from "@/data/food";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MustTrySection() {
  const mustTryItems = foodItemsData
    .filter((f) => f.category === "Must Try" || f.featured)
    .slice(0, 7);

  return (
    <section id="must-try-section" className="w-full py-20 sm:py-28 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="FOUNDATIONAL FLAVOURS"
            title="What should you try in Kashi?"
            subtitle="Start with the flavours that locals and travellers associate with the city — culinary rituals refined across generations."
          />

          <Link
            href="/eat?category=MUST%20TRY"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-charcoal hover:text-saffron transition-colors min-h-[44px]"
          >
            <span>All Must-Try Dishes</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* Asymmetric & Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {mustTryItems.map((food: FoodItem, idx: number) => {
            const isWide = idx === 0;

            return (
              <Link
                key={food.id}
                href={`/eat/${food.slug}`}
                className={`group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isWide ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden bg-charcoal ${
                    isWide ? "aspect-[16/9] sm:aspect-[21/10]" : "aspect-[16/11]"
                  }`}
                >
                  <Image
                    src={food.image}
                    alt={food.alt}
                    fill
                    sizes={
                      isWide
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-106 filter brightness-[0.92]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-gold text-charcoal rounded-xs shadow-xs">
                      {food.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-sand-light">
                    <span className="font-medium truncate">{food.location.area}</span>
                    <span className="uppercase text-[10px] tracking-wider text-gold-light bg-charcoal/80 px-2 py-0.5 rounded-xs">
                      {food.priceLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1 bg-ivory-light">
                  <div>
                    {food.hindiName && (
                      <span className="text-xs text-text-muted/80 block font-serif tracking-wider mb-0.5">
                        {food.hindiName}
                      </span>
                    )}
                    <h3 className="font-serif text-2xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors mb-2">
                      {food.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-2 mb-4">
                      {food.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-sand/20 flex items-center justify-between text-xs font-semibold tracking-wider text-charcoal uppercase">
                    <span>Discover</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sand-dark group-hover:text-saffron group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
