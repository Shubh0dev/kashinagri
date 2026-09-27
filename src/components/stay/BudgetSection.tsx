"use client";

import React from "react";
import { ShieldCheck, Info, Sparkles, Bed, Check } from "lucide-react";

export function BudgetSection() {
  const budgetTiers = [
    {
      tier: "Budget-friendly",
      badge: "HOSTELS & VALUE GUESTHOUSES",
      description:
        "Ideal for solo travellers, digital nomads, and mindful backpackers seeking clean dorms or simple private rooms with community vibes.",
      features: [
        "Social rooftop cafes and morning yoga meetups",
        "Air-conditioned bunk pods or modest ensuite rooms",
        "Assi Ghat & Bhelupur cluster with walkable chai corners",
        "Great value for long stays of 5 to 14 days",
      ],
      areas: "Assi Ghat, Bhelupur, Godowlia outer ring",
    },
    {
      tier: "Mid-range",
      badge: "HERITAGE HOMESTAYS & GUESTHOUSES",
      description:
        "Characterful historic family homes and boutique guesthouses tucked just behind the riverfront with genuine Banarasi hospitality.",
      features: [
        "Home-cooked sattvic breakfasts and personal host tips",
        "Private heritage balconies and leafy inner courtyards",
        "Within 2 to 5 minutes walk of active ghat life",
        "Balancing historical charm with modern hot water and Wi-Fi",
      ],
      areas: "Assi Ghat, Dashashwamedh, Sarnath",
    },
    {
      tier: "Premium",
      badge: "BOUTIQUE RESIDENCES & RIVER HAVELIS",
      description:
        "Restored stone havelis with antique furniture, hand-carved jharokhas, and unobstructed sunrise perspectives over Mother Ganga.",
      features: [
        "Private balconies facing the river sunrise",
        "Curated cultural evenings, classical sarod and flute recitals",
        "Gourmet regional Awadhi & Banarasi thalis",
        "Private boat pickup coordination directly from the ghat",
      ],
      areas: "Direct Riverfront, Dashashwamedh & Assi",
    },
    {
      tier: "Luxury",
      badge: "ROYAL PALACES & COLONIAL RESORTS",
      description:
        "World-renowned 5-star properties offering royal Maharaja-era luxury on the river or peaceful colonial garden estates in the Cantonment.",
      features: [
        "Private royal boat transfers across the sacred river",
        "Acres of manicured lawns, swimming pools, and Ayurvedic spas",
        "Flawless white-glove butler service and heritage architecture",
        "Effortless car and airport access away from old-city congestion",
      ],
      areas: "Darbhanga Ghat (Direct Riverfront), Cantonment",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-ivory-light text-charcoal border-b border-sand/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-[0.24em] text-saffron uppercase block mb-2">
            TRANSPARENT VALUE PERSPECTIVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-charcoal">
            Find your comfort zone
          </h2>
          <p className="text-sm sm:text-base text-text-muted mt-2">
            Varanasi offers stays spanning humble pilgrims’ dharamsalas to century-old Maharaja palaces. 
            Here is what to realistically expect across each qualitative tier.
          </p>
        </div>

        {/* 4 Budget Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {budgetTiers.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm bg-white border border-sand/40 hover:border-gold/60 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-saffron block mb-1">
                  {item.badge}
                </span>
                <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">
                  {item.tier}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 mb-6">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-charcoal">
                      <Check className="w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-sand/20 text-xs">
                <span className="text-[10px] uppercase font-semibold text-text-muted block mb-1">
                  Typical Neighbourhoods:
                </span>
                <span className="font-medium text-charcoal">{item.areas}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Rule #29 Transparency Alert */}
        <div className="p-5 sm:p-6 bg-sand/15 rounded-sm border border-gold/30 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-2.5 rounded-full bg-sand/30 text-gold-dark shrink-0">
            <ShieldCheck className="w-5 h-5 text-charcoal" />
          </div>
          <div className="text-xs sm:text-sm text-text-muted leading-relaxed">
            <strong className="text-charcoal font-semibold block sm:inline mr-1">
              The KashiNagri Integrity Guarantee:
            </strong>
            We do not publish volatile, machine-generated room prices or fabricated 5-star review numbers. 
            Rates in Kashi fluctuate dramatically during Dev Deepawali, Shivratri, and peak winter. 
            We provide verified qualitative profiles and neighbourhood context so you can make informed decisions directly.
          </div>
        </div>
      </div>
    </section>
  );
}
