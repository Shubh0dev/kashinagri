"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Compass, Bed, Sparkles, MapPin } from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { StayHero } from "@/components/stay/StayHero";
import { TravellerSelector } from "@/components/stay/TravellerSelector";
import { NeighbourhoodSection } from "@/components/stay/NeighbourhoodSection";
import { NeighbourhoodComparison } from "@/components/stay/NeighbourhoodComparison";
import { StayQuiz } from "@/components/stay/StayQuiz";
import { AccommodationTypes } from "@/components/stay/AccommodationTypes";
import { StayExplorer } from "@/components/stay/StayExplorer";
import { StayByTripStyle } from "@/components/stay/StayByTripStyle";
import { BudgetSection } from "@/components/stay/BudgetSection";

function StayContent() {
  const searchParams = useSearchParams();
  const [selectedArea, setSelectedArea] = useState("ALL");
  const [selectedType, setSelectedType] = useState("ALL");
  const [selectedTraveller, setSelectedTraveller] = useState("ALL");

  // Sync params from URL
  useEffect(() => {
    const areaParam = searchParams.get("area");
    const typeParam = searchParams.get("type");
    const travellerParam = searchParams.get("traveller");

    if (areaParam) setSelectedArea(areaParam);
    if (typeParam) setSelectedType(typeParam);
    if (travellerParam) setSelectedTraveller(travellerParam);
  }, [searchParams]);

  const handleSelectArea = (areaSlug: string) => {
    setSelectedArea(areaSlug);
    const staysSection = document.getElementById("stays");
    if (staysSection) {
      staysSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectType = (typeKey: string) => {
    setSelectedType(typeKey);
    const staysSection = document.getElementById("stays");
    if (staysSection) {
      staysSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectTraveller = (travellerType: string) => {
    setSelectedTraveller(travellerType);
    const staysSection = document.getElementById("stays");
    if (staysSection) {
      staysSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col selection:bg-saffron selection:text-white">
      <Navbar />

      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <StayHero />

        {/* 2. Traveller Type Selector */}
        <TravellerSelector
          selectedTraveller={selectedTraveller}
          onSelectTraveller={handleSelectTraveller}
        />

        {/* 3. Neighbourhood Section (7 Enclaves) */}
        <NeighbourhoodSection onSelectArea={handleSelectArea} />

        {/* 4. Neighbourhood Comparison Matrix */}
        <NeighbourhoodComparison />

        {/* 5. Stay Base Quiz */}
        <StayQuiz onSelectArea={handleSelectArea} />

        {/* 6. Accommodation Architecture Types */}
        <AccommodationTypes
          selectedType={selectedType}
          onSelectType={handleSelectType}
        />

        {/* 7. Live Filterable Stays Explorer */}
        <StayExplorer
          initialArea={selectedArea}
          initialType={selectedType}
          initialTraveller={selectedTraveller}
        />

        {/* 8. Stay By Trip Style */}
        <StayByTripStyle />

        {/* 9. Transparent Value & Budget Guidance */}
        <BudgetSection />

        {/* 10. Editorial Call to Action Banner */}
        <section className="w-full py-20 sm:py-28 bg-charcoal text-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,120,50,0.15),transparent_60%)] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
            <span className="text-xs font-semibold tracking-[0.28em] text-gold uppercase inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE LIVING CITY CALLS</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-ivory">
              Awaken to the sound of temple bells and the sacred river.
            </h2>
            <p className="text-base sm:text-lg text-sand-light/85 max-w-2xl mx-auto font-light leading-relaxed">
              Whichever neighbourhood you choose, remember that Kashi rewards those who rise early. 
              Step out onto the stone ghats at dawn, board a wooden rowboat, and let the city reveal itself.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/explore"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-light hover:shadow-lg transition-all min-h-[44px]"
              >
                <span>Explore Ghats & Temples</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/eat"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-ivory border border-sand/30 text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-white/20 transition-all min-h-[44px]"
              >
                <span>Discover Kashi Food</span>
                <ArrowRight className="w-4 h-4 text-saffron" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function StayPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-ivory flex items-center justify-center">
          <div className="text-xs uppercase tracking-[0.24em] font-semibold text-text-muted">
            Loading Kashi Stays...
          </div>
        </div>
      }
    >
      <StayContent />
    </Suspense>
  );
}
