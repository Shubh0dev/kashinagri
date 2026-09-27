import React from "react";
import Link from "next/link";
import { ArrowRight, Navigation, Info } from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { transportModes } from "@/data/kashi";

export const metadata = {
  title: "Move Around Kashi — Transit & Navigation Guide | KashiNagri",
  description: "Practical guide to getting around Kashi by foot, e-rickshaw, boat, scooty and car.",
};

export default function MovePage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col selection:bg-saffron selection:text-white">
      <Navbar />

      <main className="flex-1 w-full pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-semibold tracking-[0.28em] text-saffron uppercase inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-saffron" />
              CITY TRANSIT GUIDE
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-charcoal mb-4">
              Move around <br />
              <span className="italic font-normal text-gold-dark">Kashi.</span>
            </h1>
            <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
              Kashi is best experienced through a combination of slow walking in the ancient lanes, green e-rickshaws for short hops, and timeless wooden boats across the water.
            </p>
          </div>

          {/* Transit Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {transportModes.map((mode) => (
              <div
                key={mode.id}
                className="p-6 sm:p-7 rounded-sm bg-white border border-sand/40 hover:border-gold/60 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-2xl font-medium text-charcoal">
                      {mode.title}
                    </h3>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-saffron">
                      {mode.bestFor}
                    </span>
                  </div>

                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {mode.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand/20 flex items-start gap-2 text-xs text-text-muted">
                  <Info className="w-3.5 h-3.5 text-ganga shrink-0 mt-0.5" />
                  <span className="italic">{mode.tip}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Banner */}
          <div className="p-8 sm:p-12 bg-charcoal text-ivory rounded-sm text-center max-w-3xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ivory">
              Live Transit Tracking Coming Soon
            </h2>
            <p className="text-sand-light/80 text-sm sm:text-base max-w-xl mx-auto">
              Real-time ferry schedules, verified e-rickshaw rate charts, and parking intelligence will roll out in upcoming platform updates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/walks"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-light transition-colors min-h-[44px]"
              >
                <span>Explore Kashi Walks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/explore"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border border-sand/30 text-ivory text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-charcoal-surface transition-colors min-h-[44px]"
              >
                <span>Discover Places to Visit</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
