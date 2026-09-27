"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Footprints, Sparkles, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface WalksHeroProps {
  onExploreClick?: () => void;
  onRecommendationClick?: () => void;
}

export function WalksHero({
  onExploreClick,
  onRecommendationClick,
}: WalksHeroProps) {
  const scrollToExplore = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById("walk-discovery");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRecommendation = () => {
    if (onRecommendationClick) {
      onRecommendationClick();
    } else {
      const el = document.getElementById("walk-recommendation");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center bg-charcoal text-ivory overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background Photography with Editorial Atmospheric Layers */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=2400&q=85"
          alt="Intimate stone lane in old Kashi with morning light and arched doorways"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.72] scale-102 transition-transform duration-1000"
        />
        {/* Editorial Gradients: Charcoal vignettes and warm sand-gold rim */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-charcoal/40 to-charcoal/90" />
      </div>

      {/* Decorative Traditional Subtle Geometric Wave / River motif */}
      <div className="absolute top-1/4 right-8 w-64 h-64 border border-gold/15 rounded-full blur-[1px] pointer-events-none hidden lg:block" />
      <div className="absolute bottom-16 left-12 w-48 h-48 border border-ganga/20 rounded-full blur-[1px] pointer-events-none hidden lg:block" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-charcoal/60 backdrop-blur-md border border-gold/30 text-gold-light text-xs font-semibold uppercase tracking-[0.28em] mb-6 sm:mb-8"
        >
          <Footprints className="w-3.5 h-3.5 text-saffron" />
          <span>KASHI WALKS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <span className="text-[11px] text-sand-light/80">CURATED TRAILS</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-medium leading-[1.08] tracking-tight text-ivory max-w-4xl mb-6"
        >
          Walk Kashi. <br />
          <span className="italic font-normal text-gold-light">One lane at a time.</span>
        </motion.h1>

        {/* Supporting Narrative Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-sand-light/90 font-light leading-relaxed max-w-2xl mb-10 sm:mb-12"
        >
          Some of Kashi’s best stories are hidden between the places you came to see. Step away from wheels into thousand-year-old flagstones, morning bells, and quiet river staircases.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button
            variant="gold"
            size="lg"
            onClick={scrollToExplore}
            className="w-full sm:w-auto shadow-lg hover:shadow-gold/20"
          >
            <span>Explore walks</span>
            <ArrowDown className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-y-0.5" />
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={scrollToRecommendation}
            className="w-full sm:w-auto bg-charcoal/70 text-ivory border-sand/30 hover:bg-charcoal hover:border-gold/60"
          >
            <Sparkles className="w-4 h-4 text-gold mr-1.5" />
            <span>Find a walk for me</span>
          </Button>
        </motion.div>

        {/* Subtle Quick Meta Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 sm:mt-16 pt-8 border-t border-sand/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center"
        >
          <div>
            <div className="text-xl sm:text-2xl font-serif font-medium text-gold-light">6+</div>
            <div className="text-[11px] uppercase tracking-wider text-sand-light/70 mt-0.5">Curated Trails</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-medium text-gold-light">38+</div>
            <div className="text-[11px] uppercase tracking-wider text-sand-light/70 mt-0.5">Documented Stops</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-medium text-gold-light">100%</div>
            <div className="text-[11px] uppercase tracking-wider text-sand-light/70 mt-0.5">Foot-Accessible</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-medium text-gold-light">Zero</div>
            <div className="text-[11px] uppercase tracking-wider text-sand-light/70 mt-0.5">Motor Vehicle Noise</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
