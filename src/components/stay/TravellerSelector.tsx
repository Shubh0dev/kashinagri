"use client";

import React from "react";
import { TRAVELLER_TYPES, type TravellerTypeItem } from "@/data/stays";
import { Users, X } from "lucide-react";

interface TravellerSelectorProps {
  selectedTraveller: string;
  onSelectTraveller: (type: string) => void;
}

export function TravellerSelector({
  selectedTraveller,
  onSelectTraveller,
}: TravellerSelectorProps) {
  return (
    <section className="w-full py-12 sm:py-16 bg-ivory-light border-b border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-[0.24em] text-saffron uppercase block mb-2">
              PERSONALISED RECOMMENDATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-charcoal">
              Who are you travelling with?
            </h2>
            <p className="text-sm text-text-muted mt-2 max-w-xl">
              Luggage handling, evening street quietness, and stair climbs differ widely across Kashi. Select your group style to highlight the most suitable stays.
            </p>
          </div>

          {selectedTraveller !== "ALL" && (
            <button
              onClick={() => onSelectTraveller("ALL")}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal hover:text-saffron uppercase tracking-wider transition-colors self-start md:self-auto py-1 px-3 rounded-full bg-sand/30 hover:bg-sand/50"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Selection</span>
            </button>
          )}
        </div>

        {/* 6 Traveller Type Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {TRAVELLER_TYPES.map((item: TravellerTypeItem) => {
            const isActive = selectedTraveller.toLowerCase() === item.travellerType.toLowerCase();

            return (
              <button
                key={item.id}
                onClick={() =>
                  onSelectTraveller(isActive ? "ALL" : item.travellerType)
                }
                className={`flex flex-col items-start p-4 sm:p-5 text-left rounded-sm border transition-all duration-300 min-h-[140px] justify-between group ${
                  isActive
                    ? "bg-charcoal text-ivory border-gold shadow-md shadow-charcoal/10 -translate-y-1"
                    : "bg-white text-charcoal border-sand/40 hover:border-gold/60 hover:bg-sand/10"
                }`}
              >
                <div>
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3
                    className={`font-serif text-lg font-medium tracking-wide mb-1 ${
                      isActive ? "text-gold-light" : "text-charcoal"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    isActive ? "text-sand-light/80" : "text-text-muted"
                  }`}
                >
                  {item.tagline}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
