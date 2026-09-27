"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Compass } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FoodStreetInfo {
  id: string;
  slug: string;
  name: string;
  character: string;
  whatToLookFor: string;
  image: string;
  alt: string;
  tag: string;
}

export function FoodStreetsSection() {
  const foodStreets: FoodStreetInfo[] = [
    {
      id: "kachori-gali",
      slug: "kachori-gali",
      name: "Kachori Gali",
      character: "Known for the energy of old-city food lanes and traditional breakfast culture.",
      whatToLookFor: "Bubbling cauldrons of hing potato gravy, morning jalebis, and khoya sweets.",
      image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=1000&q=80",
      alt: "Historic breakfast halwai street in Kachori Gali",
      tag: "Dawn Breakfast",
    },
    {
      id: "godowlia-crossing",
      slug: "godowlia-crossing",
      name: "Godowlia Crossing",
      character: "The bustling intersection of evening chaat, rabdi, and legendary paan counters.",
      whatToLookFor: "Sizzling tamatar chaat, chhena dahi vada, Keshav thandai, and late-night paan.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
      alt: "Lively evening crowd and street food stalls at Godowlia",
      tag: "Evening Chaat",
    },
    {
      id: "vishwanath-gali",
      slug: "vishwanath-gali",
      name: "Vishwanath Gali",
      character: "Centuries-old pilgrimage lane filled with pedas, thandai, and street sweets.",
      whatToLookFor: "Pure mawa pedas, saffron milk, incense fragrance, and traditional prasad counters.",
      image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80",
      alt: "Vibrant pilgrimage street in Vishwanath Gali with sweet shops",
      tag: "Sacred Sweets",
    },
    {
      id: "assi-ghat-enclave",
      slug: "assi-ghat-enclave",
      name: "Assi Ghat Enclave",
      character: "Relaxed riverside food enclave famous for wood-fired pizza, cafés, and morning tea.",
      whatToLookFor: "Subah-e-Banaras morning ginger tea, river-view rooftop cafés, and thin-crust pizza.",
      image: "/images/kashi-sunrise-ghats.jpg",
      alt: "Peaceful riverside morning café views at Assi Ghat",
      tag: "Riverside & Cafés",
    },
    {
      id: "lanka-area",
      slug: "lanka-area",
      name: "Lanka & BHU Gate",
      character: "Youthful university vibe famous for cold coffee, samosas, and South Indian tiffin.",
      whatToLookFor: "Frothy cold coffee in tall glasses, Pahalwan lassi, crisp samosas, and dosas.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
      alt: "Lively student food stalls around Banaras Hindu University Lanka gate",
      tag: "University & Snacks",
    },
  ];

  return (
    <section id="food-streets-section" className="w-full py-20 sm:py-28 bg-ivory-light text-charcoal border-y border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-14 sm:mb-16">
          <SectionHeading
            eyebrow="CULINARY GEOGRAPHY"
            title="Follow the food streets"
            subtitle="In Kashi, every lane has a signature scent and specialty — from dawn breakfast alleys to twilight river enclaves."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {foodStreets.map((street) => (
            <div
              key={street.id}
              className="group flex flex-col justify-between overflow-hidden rounded-sm border border-sand/40 bg-white hover:border-gold/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/10">
                <Image
                  src={street.image}
                  alt={street.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-charcoal text-gold-light rounded-xs shadow-xs">
                    {street.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 bg-ivory-light space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-charcoal mb-2">
                    {street.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-3">
                    {street.character}
                  </p>

                  <div className="p-3 rounded-xs bg-sand/20 border border-sand/30">
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-text-muted block mb-1">
                      WHAT TO LOOK FOR:
                    </span>
                    <p className="text-xs font-medium text-charcoal leading-snug">
                      {street.whatToLookFor}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-sand/20">
                  <Link
                    href={`/eat/${street.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-charcoal group-hover:text-saffron transition-colors min-h-[44px]"
                  >
                    <span>Explore food around here</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
