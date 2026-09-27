"use client";

import React from "react";
import Link from "next/link";
import { Navigation, Footprints, Zap, Car, Ship, ArrowRight, Info } from "lucide-react";
import type { Walk } from "@/data/walks";

interface GettingToStartProps {
  transport: Walk["transportToStart"];
}

const iconMap = {
  footprints: Footprints,
  zap: Zap,
  car: Car,
  bike: Zap,
  ship: Ship,
};

export function GettingToStart({ transport }: GettingToStartProps) {
  return (
    <section className="w-full py-12 sm:py-16 bg-ivory-light border-t border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
              ARRIVAL & TRANSIT
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium">
              Getting to the start point
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mt-1 font-light">
              Starting point: <span className="font-semibold text-charcoal">{transport.startLocation}</span>
            </p>
          </div>

          <Link
            href="/move"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors"
          >
            <span>City transit guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Transport Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transport.options.map((opt, idx) => {
            const IconComponent = (opt.icon && iconMap[opt.icon]) || Navigation;

            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-sm border border-sand/40 hover:border-gold/60 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-xl font-medium text-charcoal">
                      {opt.mode}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-sand/20 text-saffron flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                    {opt.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand/20 flex items-start gap-2 text-xs text-charcoal/80 bg-ivory/50 p-2.5 rounded-xs">
                  <Info className="w-3.5 h-3.5 text-ganga shrink-0 mt-0.5" />
                  <span className="italic">{opt.tip}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
