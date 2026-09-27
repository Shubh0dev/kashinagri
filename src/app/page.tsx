import React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/home/Hero";
import { ExperienceSelector } from "@/components/home/ExperienceSelector";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { KashiStory } from "@/components/home/KashiStory";
import { ExplorePreview } from "@/components/home/ExplorePreview";
import { FoodPreview } from "@/components/home/FoodPreview";
import { WalksPreview } from "@/components/home/WalksPreview";
import { StayPreview } from "@/components/home/StayPreview";
import { TransportPreview } from "@/components/home/TransportPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-ivory text-charcoal flex flex-col selection:bg-saffron selection:text-white">
      {/* Sticky Responsive Navbar */}
      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. Cinematic Hero Section */}
        <Hero />

        {/* 2. "What do you want to experience?" Category Selector */}
        <ExperienceSelector />

        {/* 3. Featured Kashi Experiences (Asymmetrical Editorial Grid) */}
        <ExperienceSection />

        {/* 4. Kashi Introduction / Story Section */}
        <KashiStory />

        {/* 5. Explore Kashi Preview (Places, Ghats, Temples, Heritage) */}
        <ExplorePreview />

        {/* 6. Taste Kashi Food Preview (Deep Charcoal mood change) */}
        <FoodPreview />

        {/* 7. Walk Kashi Preview (Curated routes with metadata) */}
        <WalksPreview />

        {/* 8. Where Should You Stay Preview (Neighbourhood guide) */}
        <StayPreview />

        {/* 9. Move Around Kashi (Transportation options discovery) */}
        <TransportPreview />

        {/* 10. Dramatic Final CTA */}
        <FinalCTA />
      </main>

      {/* 11. Premium Editorial Footer */}
      <Footer />
    </div>
  );
}
