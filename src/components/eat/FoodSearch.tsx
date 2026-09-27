"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface FoodSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function FoodSearch({ searchQuery, onSearchChange }: FoodSearchProps) {
  const popularSearches = [
    "Kachori",
    "Lassi",
    "Chaat",
    "Assi",
    "Street food",
    "Breakfast",
    "Paan",
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 sm:my-8 px-4">
      {/* Search Input Box */}
      <div className="relative flex items-center bg-white rounded-sm border border-sand/40 shadow-lg transition-all focus-within:ring-2 focus-within:ring-gold focus-within:border-gold">
        <div className="pl-4 sm:pl-5 text-charcoal/50">
          <Search className="w-5 h-5" aria-hidden="true" />
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="What are you craving?"
          className="w-full py-4 pl-3.5 pr-10 bg-transparent text-charcoal placeholder-text-muted text-sm sm:text-base focus:outline-none min-h-[52px]"
          aria-label="Search food in Kashi"
        />

        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-3 p-2 text-charcoal/50 hover:text-charcoal transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Clear search query"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Suggested chips */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs text-text-muted">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-saffron">
          Popular:
        </span>
        {popularSearches.map((term) => (
          <button
            key={term}
            type="button"
            onClick={() => onSearchChange(term)}
            className="px-2.5 py-1 rounded-xs bg-sand/20 hover:bg-gold/30 hover:text-charcoal transition-colors text-charcoal/80 cursor-pointer"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}
