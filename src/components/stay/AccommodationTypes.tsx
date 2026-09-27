"use client";

import React from "react";
import Image from "next/image";
import { STAY_TYPE_FILTERS, type StayTypeFilterItem } from "@/data/stays";

interface AccommodationTypesProps {
  selectedType: string;
  onSelectType: (type: string) => void;
}

export function AccommodationTypes({
  selectedType,
  onSelectType,
}: AccommodationTypesProps) {
  return (
    <section className="w-full py-16 sm:py-20 bg-ivory-light border-b border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-semibold tracking-[0.24em] text-saffron uppercase block mb-2">
            ACCOMMODATION ARCHITECTURE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-charcoal">
            Types of stays in Kashi
          </h2>
          <p className="text-sm sm:text-base text-text-muted mt-2">
            From 200-year-old riverfront havelis with carved stone jharokhas to welcoming family-run homestays and vibrant backpacker rooftops.
          </p>
        </div>

        {/* Accommodation Type Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STAY_TYPE_FILTERS.map((item: StayTypeFilterItem) => {
            const isActive = selectedType.toLowerCase() === item.key.toLowerCase();

            return (
              <div
                key={item.id}
                onClick={() => onSelectType(isActive ? "ALL" : item.key)}
                className={`group cursor-pointer rounded-sm border overflow-hidden transition-all duration-300 bg-white flex flex-col justify-between ${
                  isActive
                    ? "border-gold ring-2 ring-gold/40 shadow-lg -translate-y-1"
                    : "border-sand/40 hover:border-gold/60 hover:shadow-md"
                }`}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-charcoal/10">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between">
                    <h3 className="font-serif text-xl font-medium text-ivory">
                      {item.label}
                    </h3>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-gold text-charcoal font-bold"
                          : "bg-white/20 text-ivory backdrop-blur-xs"
                      }`}
                    >
                      {isActive ? "Selected" : "Filter"}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-sand/20 text-xs">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-text-muted block mb-0.5">
                      Best For:
                    </span>
                    <span className="font-medium text-charcoal font-serif italic">
                      {item.bestFor}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
