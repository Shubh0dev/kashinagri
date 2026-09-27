"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowDown, Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PlanHeroProps {
  onStartPlanning: () => void;
}

export function PlanHero({ onStartPlanning }: PlanHeroProps) {
  const handleScrollToPlanner = () => {
    onStartPlanning();
    const el = document.getElementById("planner-card");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[58vh] sm:min-h-[64vh] flex items-center justify-center bg-charcoal text-ivory overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20">
      {/* Background Photography with Warm Editorial Layers */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=2400&q=85"
          alt="Golden sunset reflection over ancient stone ghats and temple spires in Kashi"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.70] scale-102"
        />
        {/* Soft Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-charcoal/30 to-charcoal/85" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal/70 backdrop-blur-md border border-gold/30 text-gold-light text-xs font-semibold uppercase tracking-[0.25em] mb-4 sm:mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-saffron" />
          <span>PLAN YOUR KASHI</span>
        </motion.div>

        {/* Main Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-medium leading-[1.1] tracking-tight text-ivory max-w-3xl mb-4 sm:mb-5"
        >
          Your Kashi, <br />
          <span className="italic font-normal text-gold-light">your way.</span>
        </motion.h1>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-sand-light/90 font-light leading-relaxed max-w-xl mx-auto mb-8 sm:mb-9"
        >
          Tell us how you travel. We’ll help you shape your time in Kashi — from quiet dawn riverboats to sacred temple corridors and generational food spots.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            variant="gold"
            size="lg"
            onClick={handleScrollToPlanner}
            className="shadow-xl hover:shadow-gold/25 cursor-pointer"
          >
            <span>Build My Trip</span>
            <ArrowDown className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-y-0.5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
