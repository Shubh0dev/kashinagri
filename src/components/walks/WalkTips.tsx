"use client";

import React from "react";
import {
  Footprints,
  Compass,
  Users,
  Layers,
  Utensils,
  Sparkles,
  Waves,
  CheckCircle,
  ShieldCheck,
  Smartphone,
  Droplet,
  HeartHandshake,
  Eye,
  Lock,
} from "lucide-react";

const EXPECTATIONS = [
  {
    title: "Walking",
    description: "Pedestrian only. Old Kashi was built for footsteps. Take a leisurely pace and soak in the ambiance.",
    icon: Footprints,
  },
  {
    title: "Lanes",
    description: "Ancient stone alleys (gallis) twist naturally. Getting briefly turned around is part of the charm.",
    icon: Compass,
  },
  {
    title: "Crowds",
    description: "Spiritual devotees, flower merchants, and pilgrims converge gently. The energy is warm and shared.",
    icon: Users,
  },
  {
    title: "Steps",
    description: "Ghats feature stone stairways leading to the river. Wear shoes with reliable traction on smoothed stone.",
    icon: Layers,
  },
  {
    title: "Food Stops",
    description: "Freshly prepared kachoris, hot jalebis, and tea stalls appear at almost every second corner.",
    icon: Utensils,
  },
  {
    title: "Temples",
    description: "Remove shoes at sanctum thresholds. Small copper bells ring out frequently from stone alcoves.",
    icon: Sparkles,
  },
  {
    title: "Riverfront",
    description: "Cool river breezes bring refreshing balance to narrow shaded alleys. Settle on the steps to rest anytime.",
    icon: Waves,
  },
];

const PRACTICAL_TIPS = [
  {
    icon: Footprints,
    tip: "Wear comfortable footwear with good grip on polished flagstones and ghat steps.",
  },
  {
    icon: Droplet,
    tip: "Carry a reusable water bottle to stay well-hydrated throughout your walk.",
  },
  {
    icon: Smartphone,
    tip: "Keep your phone charged. Offline photos and references are handy in narrow lanes.",
  },
  {
    icon: Users,
    tip: "Allow extra unhurried time for crowded temple alleys during morning and evening aartis.",
  },
  {
    icon: Sparkles,
    tip: "Respect temple sanctums by following local guidelines regarding footwear and photography.",
  },
  {
    icon: HeartHandshake,
    tip: "Be mindful and ask politely when photographing local residents, priests, or artisans.",
  },
  {
    icon: Lock,
    tip: "Keep valuables and small belongings securely zipped in a cross-body bag or pocket.",
  },
  {
    icon: CheckCircle,
    tip: "Check current river levels and temple darshan timings locally before setting out.",
  },
];

export function WalkTips() {
  return (
    <section className="w-full py-12 sm:py-16 border-t border-sand/30 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
        {/* 1. What to Expect */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
              EXPERIENCE ESSENTIALS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium">
              What to expect
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mt-1.5 font-light">
              Walking Kashi’s ancient corridors is a sensory journey unlike any modern city.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {EXPECTATIONS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-5 rounded-sm border border-sand/40 hover:border-gold/60 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-sand/20 text-saffron flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-charcoal mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Before You Start (Practical Walking Tips) */}
        <div className="bg-ivory-light border border-sand/35 rounded-sm p-6 sm:p-10">
          <div className="mb-8 max-w-xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
              PRACTICAL GUIDANCE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
              Before you start
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mt-1 font-light">
              Sensible preparation to ensure a smooth, rewarding, and respectful walk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PRACTICAL_TIPS.map((tip, idx) => {
              const TipIcon = tip.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-sm bg-white border border-sand/30"
                >
                  <div className="w-7 h-7 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center shrink-0 mt-0.5">
                    <TipIcon className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs text-charcoal/80 leading-relaxed">
                    {tip.tip}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
