"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface WalkSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount?: number;
}

export function WalkSearch({
  searchQuery,
  onSearchChange,
  resultCount,
}: WalkSearchProps) {
  return (
    <div className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 w-4 h-4 text-text-muted pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search walks by lane, food, ghat, theme..."
          className="w-full pl-10 pr-9 py-2.5 rounded-sm bg-white border border-sand/60 text-sm text-charcoal placeholder:text-text-muted/70 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors min-h-[44px]"
          aria-label="Search curated walks"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-2.5 p-1 rounded-xs text-text-muted hover:text-charcoal hover:bg-sand/20 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {resultCount !== undefined && searchQuery.trim() !== "" && (
        <span className="block text-[11px] text-text-muted mt-1.5 pl-1">
          Found {resultCount} {resultCount === 1 ? "route" : "routes"} matching &ldquo;{searchQuery}&rdquo;
        </span>
      )}
    </div>
  );
}
