"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Coffee, UtensilsCrossed, Wallet } from "lucide-react";
import { foodItemsData, type FoodItem } from "@/data/food";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function RestaurantSection() {
  const restaurants = foodItemsData.filter((f) => f.type === "restaurant");

  return (
    <section id="restaurants-section" className="w-full py-20 sm:py-28 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="SIT-DOWN DINING"
            title="Sit down and savour"
            subtitle="When you want more than street food — traditional multi-course thalis, regional Purvanchal specialties, and time-tested dining halls."
          />

          <Link
            href="/eat?category=RESTAURANTS"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-charcoal hover:text-saffron transition-colors min-h-[44px]"
          >
            <span>All Restaurants</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {restaurants.map((place: FoodItem) => (
            <Link
              key={place.id}
              href={`/eat/${place.slug}`}
              className="group flex flex-col sm:flex-row items-stretch overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative w-full sm:w-56 h-52 sm:h-auto shrink-0 bg-charcoal">
                <Image
                  src={place.image}
                  alt={place.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 250px"
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-charcoal text-gold-light rounded-xs">
                    {place.priceLabel}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 bg-ivory-light">
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors mb-2">
                    {place.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-2 mb-4">
                    {place.shortDescription}
                  </p>
                  <div className="text-xs text-text-muted font-medium mb-2">
                    📍 {place.location.area}
                  </div>
                </div>

                <div className="pt-3 border-t border-sand/20 flex items-center justify-between text-xs font-semibold tracking-wider text-charcoal uppercase">
                  <span>Explore Menu & Place</span>
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

export function CafeSection() {
  const cafes = foodItemsData.filter((f) => f.type === "cafe");

  return (
    <section id="cafes-section" className="w-full py-20 sm:py-28 bg-ivory-light text-charcoal border-y border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="RIVERSIDE & ROOFTOPS"
            title="Slow mornings & Ganga views"
            subtitle="Quiet corners, artisan espresso, wood-fired thin crusts, and reading balconies overlooking the water."
          />

          <Link
            href="/eat?category=CAF%C3%89S"
            className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-charcoal hover:text-saffron transition-colors min-h-[44px]"
          >
            <span>All Cafés</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cafes.map((cafe: FoodItem) => (
            <Link
              key={cafe.id}
              href={`/eat/${cafe.slug}`}
              className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal">
                <Image
                  src={cafe.image}
                  alt={cafe.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />

                {cafe.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-ganga text-ivory rounded-xs shadow-xs">
                      {cafe.badge}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-3 left-4 text-xs text-sand-light font-medium">
                  📍 {cafe.location.area}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 bg-ivory-light">
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-charcoal group-hover:text-saffron transition-colors mb-2">
                    {cafe.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                    {cafe.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand/20 flex items-center justify-between text-xs font-semibold tracking-wider text-charcoal uppercase">
                  <span>Explore Café</span>
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

export function BudgetFoodSection() {
  const budgetItems = [
    { title: "Breakfast", sample: "Kachori Sabzi & Jalebi at Kachori Gali", icon: "🌅" },
    { title: "Street Food", sample: "Tamatar Chaat & Chhena Dahi Vada at Godowlia", icon: "🌶️" },
    { title: "Snacks", sample: "Crisp Samosa & Choora Matar at Lanka", icon: "🥟" },
    { title: "Drinks", sample: "Clay-kulhad Masala Chai & Thick Lassi", icon: "☕" },
    { title: "Desserts", sample: "Winter Malaiyo & Hot Rabdi Jalebi", icon: "🍬" },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-12">
          <SectionHeading
            eyebrow="VALUE DISCOVERY"
            title="Eat well without spending much"
            subtitle="Kashi remains one of the world's greatest budget gastronomy paradises — where Michelin-level artisanal mastery costs little and satisfies completely."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {budgetItems.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-sm bg-ivory-light border border-sand/40 hover:border-gold/60 transition-all shadow-xs"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h4 className="font-serif text-xl font-medium text-charcoal mb-1">
                {item.title}
              </h4>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-saffron block mb-2">
                Budget-friendly
              </span>
              <p className="text-xs text-text-muted leading-relaxed">
                {item.sample}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
