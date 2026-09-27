"use client";

import React from "react";
import Link from "next/link";
import { neighbourhoodsData, type Neighbourhood } from "@/data/stays";
import { ArrowRight, Waves, Compass, Sparkles } from "lucide-react";

export function NeighbourhoodComparison() {
  return (
    <section className="w-full py-16 sm:py-24 bg-white text-charcoal border-b border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-[0.24em] text-saffron uppercase block mb-2">
            AT-A-GLANCE MATRIX
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-charcoal">
            Compare Kashi Neighbourhoods
          </h2>
          <p className="text-sm sm:text-base text-text-muted mt-2">
            See how each enclave compares on river proximity, old city maze density, and overall travel rhythm before making a booking decision.
          </p>
        </div>

        {/* Desktop Comparison Table (Hidden on small screens) */}
        <div className="hidden lg:block overflow-hidden rounded-sm border border-sand/40 bg-ivory-light">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-sand/40 bg-sand/15 text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted">
                <th className="p-4 pl-6">Neighbourhood</th>
                <th className="p-4">Atmosphere</th>
                <th className="p-4">Best For</th>
                <th className="p-4">Ganga Proximity</th>
                <th className="p-4">Old City Galis</th>
                <th className="p-4 pr-6">Trip Style</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand/30 text-xs sm:text-sm">
              {neighbourhoodsData.map((item: Neighbourhood) => (
                <tr
                  key={item.id}
                  className="hover:bg-sand/10 transition-colors group"
                >
                  <td className="p-4 pl-6 font-serif text-base font-medium text-charcoal">
                    <Link
                      href={`/stay/${item.slug}`}
                      className="hover:text-saffron transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </td>
                  <td className="p-4 text-text-muted italic font-serif max-w-[200px]">
                    {item.atmosphere}
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1 max-w-[190px]">
                      {item.bestFor.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-xs bg-sand/25 text-charcoal font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-ganga-dark">
                      <Waves className="w-3.5 h-3.5 text-ganga" />
                      {item.gangaAccess}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-charcoal">
                      <Compass className="w-3.5 h-3.5 text-gold" />
                      {item.oldCityAccess}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-text-muted font-medium">
                    {item.tripStyle}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Stacked Comparison Cards (Visible on mobile/tablet) */}
        <div className="lg:hidden space-y-4">
          {neighbourhoodsData.map((item: Neighbourhood) => (
            <div
              key={item.id}
              className="p-5 rounded-sm border border-sand/40 bg-ivory-light"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-serif text-xl font-medium text-charcoal">
                  {item.name}
                </h3>
                <Link
                  href={`/stay/${item.slug}`}
                  className="text-xs font-semibold uppercase tracking-wider text-saffron inline-flex items-center gap-1 min-h-[36px]"
                >
                  <span>Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <p className="text-xs text-gold-dark font-serif italic mb-4">
                &ldquo;{item.atmosphere}&rdquo;
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                <div className="p-2.5 rounded-xs bg-white border border-sand/30">
                  <span className="text-[10px] uppercase font-semibold text-text-muted block mb-1">
                    Ganga Access
                  </span>
                  <span className="font-medium text-ganga-dark flex items-center gap-1">
                    <Waves className="w-3 h-3" />
                    {item.gangaAccess}
                  </span>
                </div>

                <div className="p-2.5 rounded-xs bg-white border border-sand/30">
                  <span className="text-[10px] uppercase font-semibold text-text-muted block mb-1">
                    Old City Galis
                  </span>
                  <span className="font-medium text-charcoal flex items-center gap-1">
                    <Compass className="w-3 h-3" />
                    {item.oldCityAccess}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-semibold text-text-muted block mb-1.5">
                  Best For:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.bestFor.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-xs bg-sand/30 text-charcoal"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
