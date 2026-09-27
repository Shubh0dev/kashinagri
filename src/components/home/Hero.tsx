"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HERO_IMAGE } from "@/data/kashi";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-end pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-charcoal">
      {/* Background Image with subtle scale animation */}
      <motion.div
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.88]"
        />

        {/* Sophisticated Editorial Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-charcoal/25" />
        <div className="absolute inset-0 bg-radial-[circle_at_25%_65%] from-transparent via-charcoal/30 to-charcoal/70" />
      </motion.div>

      {/* Hero Content Box (Left aligned, editorial composure) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-[0.28em] text-gold-light uppercase">
              <span className="w-8 h-[1px] bg-gold" />
              WELCOME TO KASHI
            </span>
          </motion.div>

          {/* Main Display Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.04] tracking-tight text-ivory mb-5 sm:mb-6"
          >
            DISCOVER <br className="hidden sm:inline" />
            <span className="italic font-normal text-gold-light">KASHI</span>
          </motion.h1>

          {/* Supporting Phrase */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-sand-light/90 font-light leading-relaxed max-w-xl mb-8 sm:mb-10"
          >
            A city you don't just visit. <br />
            <span className="text-ivory font-normal">You experience.</span>
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            <Link
              href="/explore"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-gold text-charcoal font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition-all duration-300 min-h-[48px] shadow-lg active:scale-[0.98]"
            >
              <span>Explore Kashi</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/plan"
              className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-charcoal/40 text-ivory backdrop-blur-sm border border-sand/30 font-medium text-sm tracking-wider uppercase hover:bg-white/10 hover:border-ivory transition-all duration-300 min-h-[48px] active:scale-[0.98]"
            >
              Plan My Trip
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal Animated Scroll Indicator */}
      <div className="absolute bottom-6 right-6 sm:right-10 z-10 hidden sm:flex flex-col items-center gap-2">
        <span className="text-[11px] font-medium tracking-[0.25em] text-sand-light/70 uppercase write-vertical">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, 6, 0],
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-5 h-8 border border-sand/40 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
