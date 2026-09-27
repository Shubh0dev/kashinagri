"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Sparkles, Bed, HelpCircle, MapPin } from "lucide-react";

export function StayHero() {
  return (
    <section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-28 bg-charcoal text-ivory overflow-hidden border-b border-sand/20">
      {/* Subtle background ambient gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,120,50,0.12),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(184,155,94,0.08),transparent_50%)] pointer-events-none" />

      {/* Decorative textured grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sand/10 border border-sand/20 text-xs font-semibold tracking-[0.24em] text-sand-light uppercase mb-6"
          >
            <Compass className="w-3.5 h-3.5 text-saffron" />
            <span>KASHI NEIGHBOURHOOD & HAVELI GUIDE</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-ivory leading-[1.08] mb-6"
          >
            Find your place in{" "}
            <span className="italic font-normal text-gold-light">Kashi.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-sand-light/85 font-light leading-relaxed mb-8 max-w-2xl"
          >
            Varanasi is not a generic city of chain hotels — it is an ancient quilt of 
            neighbourhoods, each with its own riverfront tempo, morning rituals, alley 
            accessibility, and sensory soul.
          </motion.p>

          {/* Core Philosophy Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="p-4 sm:p-5 rounded-sm bg-sand/5 border border-gold/30 mb-8 backdrop-blur-sm"
          >
            <p className="text-xs sm:text-sm text-sand-light/90 font-serif italic leading-relaxed">
              <span className="text-gold font-sans font-semibold tracking-wider uppercase not-italic mr-2">
                KashiNagri Rule:
              </span>
              &ldquo;Choose your neighbourhood first. Understand the galis, accessibility, and riverfront distance. Then select your stay.&rdquo;
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#neighbourhoods"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold text-charcoal text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all min-h-[44px]"
            >
              <MapPin className="w-4 h-4 text-charcoal" />
              <span>Explore 7 Enclaves</span>
            </a>

            <a
              href="#quiz"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-ivory border border-sand/30 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-sm hover:bg-white/20 hover:border-gold/60 transition-all min-h-[44px]"
            >
              <HelpCircle className="w-4 h-4 text-saffron" />
              <span>Take Base Quiz</span>
            </a>

            <a
              href="#stays"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sand-light text-xs sm:text-sm font-semibold uppercase tracking-wider hover:text-white transition-colors min-h-[44px]"
            >
              <Bed className="w-4 h-4 text-gold" />
              <span>Browse All Stays</span>
            </a>
          </motion.div>
        </div>

        {/* Feature Highlights / Quality Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-sand/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-sand-light/80 text-xs tracking-wider uppercase font-medium"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-saffron" />
            <span>7 Local Enclaves</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span>14 Handpicked Stays</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ganga-light" />
            <span>Gali Luggage Reality Checks</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sand" />
            <span>Zero Fabricated Ratings</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
