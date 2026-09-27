"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Bed } from "lucide-react";
import { StayCard } from "./StayCard";
import type { Stay } from "@/data/stays";

interface NearbyStayProps {
  title?: string;
  subtitle?: string;
  stays: Stay[];
  viewAllLink?: string;
}

export function NearbyStay({
  title = "Handpicked Stays in this Area",
  subtitle = "Selected accommodations within comfortable walking distance of key sights and riverfront access.",
  stays,
  viewAllLink = "/stay",
}: NearbyStayProps) {
  if (stays.length === 0) return null;

  return (
    <section className="w-full py-16 sm:py-20 bg-ivory border-t border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-[0.24em] text-saffron uppercase block mb-2">
              CURATED ACCOMMODATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-charcoal">
              {title}
            </h2>
            <p className="text-sm text-text-muted mt-1 max-w-xl">
              {subtitle}
            </p>
          </div>

          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors self-start sm:self-auto min-h-[36px]"
          >
            <span>Browse All Kashi Stays</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stays.map((stay) => (
            <StayCard key={stay.id} stay={stay} />
          ))}
        </div>
      </div>
    </section>
  );
}
