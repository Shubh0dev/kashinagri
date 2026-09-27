"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Compass, Sparkles } from "lucide-react";
import { navigationLinks } from "@/data/kashi";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50 lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-charcoal text-ivory z-50 flex flex-col p-6 sm:p-8 justify-between border-l border-sand/20 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Header with Brand & Close Button */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-sand/15">
                <div className="flex items-center gap-2">
                  {/* Subtle Ganga Wave Mark */}
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gold"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 7C4 3 6 3 9 7C12 11 14 11 19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M1 12C4 8 6 8 9 12C12 16 14 16 19 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeOpacity="0.6"
                    />
                  </svg>
                  <span className="font-serif tracking-[0.2em] text-lg font-medium text-ivory">
                    KASHINAGRI
                  </span>
                </div>

                <button
                  onClick={onClose}
                  className="p-3 text-sand-light hover:text-ivory rounded-full hover:bg-white/5 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Tagline */}
              <p className="text-xs text-sand-light/60 tracking-wider uppercase mt-4 mb-8">
                Discover Kashi. Experience the soul.
              </p>

              {/* Nav Links */}
              <nav className="flex flex-col space-y-2">
                {navigationLinks.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between py-3.5 px-3 text-lg font-serif text-ivory hover:text-gold transition-colors rounded-sm min-h-[44px]"
                    >
                      <span className="tracking-wide">{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-sand/40 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Bottom Section */}
            <div className="pt-6 border-t border-sand/15 space-y-4">
              <Link
                href="/plan"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm bg-gold text-charcoal font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition-all min-h-[44px]"
              >
                <Sparkles className="w-4 h-4 text-charcoal" />
                <span>Plan My Trip</span>
              </Link>

              <div className="text-center text-xs text-sand/50">
                A city you don't just visit. You experience.
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
