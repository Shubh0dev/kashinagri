"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bed, MapPin } from "lucide-react";
import { getNeighbourhoodBySlug, type Neighbourhood } from "@/data/stays";

interface NearbyStayProps {
  staySlugs: string[];
}

export function NearbyStay({ staySlugs }: NearbyStayProps) {
  const neighbourhoods = staySlugs
    .map((slug) => getNeighbourhoodBySlug(slug))
    .filter((n): n is Neighbourhood => Boolean(n));

  if (neighbourhoods.length === 0) return null;

  return (
    <section className="w-full py-12 sm:py-16 bg-ivory border-t border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
              CONNECTED NEIGHBOURHOODS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium">
              Where should you stay nearby?
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mt-1 font-light">
              Ideal quarters and historic areas to base yourself if you want immediate access to this trail.
            </p>
          </div>

          <Link
            href="/stay"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors"
          >
            <span>All stay areas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Neighbourhood Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighbourhoods.map((n) => (
            <Link
              key={n.id}
              href={`/stay/${n.slug}`}
              className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/70 transition-all duration-300 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/10">
                <Image
                  src={n.image}
                  alt={n.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-charcoal/90 text-gold-light rounded-xs border border-gold/30">
                    {n.atmosphere}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-serif text-xl font-medium text-charcoal group-hover:text-saffron transition-colors mb-2">
                    {n.name}
                  </h4>

                  <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-4">
                    {n.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {n.bestFor.slice(0, 2).map((bf) => (
                      <span
                        key={bf}
                        className="text-[10px] px-2 py-0.5 rounded-xs bg-sand/20 text-charcoal/75"
                      >
                        {bf}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-sand/20 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-charcoal">
                  <span>Explore neighbourhood</span>
                  <ArrowRight className="w-3.5 h-3.5 text-saffron group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
