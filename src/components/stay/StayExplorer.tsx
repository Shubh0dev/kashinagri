"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal, RotateCcw, Bed, MapPin, Users } from "lucide-react";
import { StayCard } from "./StayCard";
import { staysData, neighbourhoodsData, searchStays, type Stay } from "@/data/stays";

interface StayExplorerProps {
  initialArea?: string;
  initialType?: string;
  initialTraveller?: string;
}

export function StayExplorer({
  initialArea = "ALL",
  initialType = "ALL",
  initialTraveller = "ALL",
}: StayExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState(initialArea);
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedTraveller, setSelectedTraveller] = useState(initialTraveller);

  // Sync when prop updates (e.g., from quiz recommendation or traveller selector)
  React.useEffect(() => {
    if (initialArea) setSelectedArea(initialArea);
  }, [initialArea]);

  React.useEffect(() => {
    if (initialType) setSelectedType(initialType);
  }, [initialType]);

  React.useEffect(() => {
    if (initialTraveller) setSelectedTraveller(initialTraveller);
  }, [initialTraveller]);

  // Filtered stays list
  const filteredStays = useMemo(() => {
    return searchStays(searchQuery, selectedArea, selectedType, selectedTraveller);
  }, [searchQuery, selectedArea, selectedType, selectedTraveller]);

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedArea !== "ALL" ||
    selectedType !== "ALL" ||
    selectedTraveller !== "ALL";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedArea("ALL");
    setSelectedType("ALL");
    setSelectedTraveller("ALL");
  };

  const accommodationTypes = [
    { key: "ALL", label: "All Types" },
    { key: "Boutique", label: "Boutique Haveli" },
    { key: "Luxury", label: "Luxury Palace & Hotel" },
    { key: "Homestay", label: "Homestay" },
    { key: "Guesthouse", label: "Guesthouse" },
    { key: "Hostel", label: "Hostel" },
    { key: "Hotel", label: "Hotel" },
  ];

  return (
    <section id="stays" className="w-full py-16 sm:py-24 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold tracking-[0.24em] text-saffron uppercase block mb-2">
            CURATED HAVELIS, STAYS & HOSTELS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-charcoal">
            Browse Accommodations
          </h2>
          <p className="text-base text-text-muted mt-2">
            Filter by neighbourhood, travel company, or stay style. Every property is selected for genuine location integrity, verified walkability, and local hospitality.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-5 sm:p-6 rounded-sm bg-white border border-sand/40 shadow-sm mb-10 space-y-5">
          {/* Search Input Row */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stays by name, area, vibe (e.g. rooftop, haveli, peaceful, Assi)..."
              className="w-full pl-11 pr-4 py-3 bg-ivory-light border border-sand/40 rounded-sm text-sm text-charcoal placeholder:text-text-muted focus:outline-hidden focus:border-gold transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-muted hover:text-charcoal px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills Grid */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2 border-t border-sand/20">
            {/* Neighbourhood Area Selector */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <span className="text-xs font-semibold uppercase text-text-muted tracking-wider shrink-0 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-saffron" />
                Area:
              </span>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-3 py-1.5 bg-ivory-light border border-sand/40 rounded-sm text-xs font-medium text-charcoal focus:outline-hidden focus:border-gold cursor-pointer"
              >
                <option value="ALL">All Neighbourhoods</option>
                {neighbourhoodsData.map((n) => (
                  <option key={n.slug} value={n.slug}>
                    {n.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Accommodation Type Selector */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <span className="text-xs font-semibold uppercase text-text-muted tracking-wider shrink-0 flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-gold" />
                Type:
              </span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-1.5 bg-ivory-light border border-sand/40 rounded-sm text-xs font-medium text-charcoal focus:outline-hidden focus:border-gold cursor-pointer"
              >
                {accommodationTypes.map((t) => (
                  <option key={t.key} value={t.key}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Traveller Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <span className="text-xs font-semibold uppercase text-text-muted tracking-wider shrink-0 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-ganga" />
                Traveller:
              </span>
              <select
                value={selectedTraveller}
                onChange={(e) => setSelectedTraveller(e.target.value)}
                className="px-3 py-1.5 bg-ivory-light border border-sand/40 rounded-sm text-xs font-medium text-charcoal focus:outline-hidden focus:border-gold cursor-pointer"
              >
                <option value="ALL">All Travellers</option>
                <option value="Solo">Solo</option>
                <option value="Couple">Couple</option>
                <option value="Family">Family</option>
                <option value="Friends">Friends</option>
                <option value="Backpacker">Backpacker</option>
                <option value="Pilgrim">Pilgrim</option>
              </select>
            </div>

            {/* Reset Button */}
            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-xs text-charcoal hover:text-saffron uppercase font-semibold tracking-wider transition-colors shrink-0 py-1.5 px-3 rounded-full bg-sand/25 hover:bg-sand/40"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Counter Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-medium text-text-muted tracking-wider uppercase">
            Showing <strong className="text-charcoal font-semibold">{filteredStays.length}</strong> verified Kashi stays
          </span>

          {(selectedArea !== "ALL" || selectedType !== "ALL" || selectedTraveller !== "ALL") && (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-text-muted">Filtered by:</span>
              {selectedArea !== "ALL" && (
                <span className="px-2 py-0.5 bg-sand/30 rounded-xs text-charcoal font-medium">
                  {neighbourhoodsData.find((n) => n.slug === selectedArea)?.name || selectedArea}
                </span>
              )}
              {selectedType !== "ALL" && (
                <span className="px-2 py-0.5 bg-sand/30 rounded-xs text-charcoal font-medium">
                  {selectedType}
                </span>
              )}
              {selectedTraveller !== "ALL" && (
                <span className="px-2 py-0.5 bg-sand/30 rounded-xs text-charcoal font-medium">
                  {selectedTraveller}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Stays Grid */}
        {filteredStays.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredStays.map((stay: Stay) => (
              <StayCard key={stay.id} stay={stay} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-6 bg-white border border-sand/40 rounded-sm max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-sand/30 flex items-center justify-center mx-auto text-charcoal">
              <Search className="w-6 h-6 text-text-muted" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-charcoal">
              No stays match your criteria
            </h3>
            <p className="text-xs sm:text-sm text-text-muted max-w-md mx-auto">
              Try adjusting your search terms or resetting filters to view all 14 curated accommodations across Kashi.
            </p>
            <div>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-light transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Show All 14 Stays</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
