"use client";

import React, { useState } from "react";
import { SlidersHorizontal, RotateCcw, ChevronDown, Check } from "lucide-react";

export interface WalkFilterState {
  time: string; // "ALL" | "<1h" | "1-2h" | "2-3h" | "halfday"
  interest: string; // "ALL" | "Food" | "Temples" | "Ganga" | "Heritage" | "Photography" | "Hidden"
  timeOfDay: string; // "ALL" | "Sunrise" | "Morning" | "Afternoon" | "Evening"
  difficulty: string; // "ALL" | "Easy" | "Moderate" | "Long"
}

interface WalkFiltersProps {
  filters: WalkFilterState;
  onChangeFilter: <K extends keyof WalkFilterState>(key: K, value: WalkFilterState[K]) => void;
  onResetFilters: () => void;
}

const TIME_OPTIONS = [
  { value: "ALL", label: "Any Duration" },
  { value: "<1h", label: "< 1 hour" },
  { value: "1-2h", label: "1–2 hours" },
  { value: "2-3h", label: "2–3 hours" },
  { value: "halfday", label: "Half day" },
];

const INTEREST_OPTIONS = [
  { value: "ALL", label: "All Interests" },
  { value: "Food", label: "🍜 Food" },
  { value: "Temples", label: "🛕 Temples" },
  { value: "Ganga", label: "🌊 Ganga" },
  { value: "Heritage", label: "🏛️ Heritage" },
  { value: "Photography", label: "📸 Photography" },
  { value: "Hidden", label: "👀 Hidden" },
];

const TIME_OF_DAY_OPTIONS = [
  { value: "ALL", label: "Any Time of Day" },
  { value: "Sunrise", label: "🌅 Sunrise" },
  { value: "Morning", label: "☀️ Morning" },
  { value: "Afternoon", label: "🌤️ Afternoon" },
  { value: "Evening", label: "🌙 Evening" },
];

const DIFFICULTY_OPTIONS = [
  { value: "ALL", label: "Any Difficulty" },
  { value: "Easy", label: "Easy" },
  { value: "Moderate", label: "Moderate" },
  { value: "Long", label: "Long" },
];

export function WalkFilters({
  filters,
  onChangeFilter,
  onResetFilters,
}: WalkFiltersProps) {
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const activeFilterCount =
    (filters.time !== "ALL" ? 1 : 0) +
    (filters.interest !== "ALL" ? 1 : 0) +
    (filters.timeOfDay !== "ALL" ? 1 : 0) +
    (filters.difficulty !== "ALL" ? 1 : 0);

  return (
    <div className="w-full bg-ivory-light border border-sand/30 rounded-sm p-4 sm:p-5">
      {/* Mobile Toggle Bar */}
      <div className="flex sm:hidden items-center justify-between">
        <button
          type="button"
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal py-2 focus:outline-none"
        >
          <SlidersHorizontal className="w-4 h-4 text-saffron" />
          <span>Filter Routes</span>
          {activeFilterCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-gold text-charcoal text-[10px] font-bold inline-flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isOpenMobile ? "rotate-180" : ""
            }`}
          />
        </button>

        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={onResetFilters}
            className="text-xs text-text-muted hover:text-saffron flex items-center gap-1 font-medium"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Filter Row: Always visible on desktop/tablet, collapsable on mobile */}
      <div
        className={`${
          isOpenMobile ? "block pt-4 mt-3 border-t border-sand/30" : "hidden"
        } sm:block space-y-4`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-sand/20">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal">
            <SlidersHorizontal className="w-3.5 h-3.5 text-saffron" />
            <span>Filter Criteria</span>
            {activeFilterCount > 0 && (
              <span className="text-[11px] text-text-muted font-normal lowercase">
                ({activeFilterCount} active)
              </span>
            )}
          </div>

          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-saffron transition-colors self-start md:self-auto cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear all filters</span>
            </button>
          )}
        </div>

        {/* 4 Multi-Select Criteria Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* TIME */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-1.5">
              Duration
            </label>
            <select
              value={filters.time}
              onChange={(e) => onChangeFilter("time", e.target.value)}
              className="w-full text-xs py-2.5 px-3 rounded-sm bg-white border border-sand/60 text-charcoal focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              {TIME_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* INTEREST */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-1.5">
              Primary Interest
            </label>
            <select
              value={filters.interest}
              onChange={(e) => onChangeFilter("interest", e.target.value)}
              className="w-full text-xs py-2.5 px-3 rounded-sm bg-white border border-sand/60 text-charcoal focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* TIME OF DAY */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-1.5">
              Time of Day
            </label>
            <select
              value={filters.timeOfDay}
              onChange={(e) => onChangeFilter("timeOfDay", e.target.value)}
              className="w-full text-xs py-2.5 px-3 rounded-sm bg-white border border-sand/60 text-charcoal focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              {TIME_OF_DAY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* DIFFICULTY */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-1.5">
              Pacing / Difficulty
            </label>
            <select
              value={filters.difficulty}
              onChange={(e) => onChangeFilter("difficulty", e.target.value)}
              className="w-full text-xs py-2.5 px-3 rounded-sm bg-white border border-sand/60 text-charcoal focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              {DIFFICULTY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
