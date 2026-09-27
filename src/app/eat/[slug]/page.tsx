import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Sparkles,
  CheckCircle2,
  Info,
  Utensils,
  Share2,
  Compass,
} from "lucide-react";
import {
  foodItemsData,
  getFoodBySlug,
  getNearbyFood,
  type FoodItem,
} from "@/data/food";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { NearbyFood } from "@/components/eat/NearbyFood";

// Pre-render all food items at build time
export async function generateStaticParams() {
  return foodItemsData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const food = getFoodBySlug(slug);

  if (!food) {
    return {
      title: "Food Item Not Found — KashiNagri",
    };
  }

  return {
    title: `${food.name} — Eat Kashi | KashiNagri`,
    description: food.shortDescription,
  };
}

export default async function FoodDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const food = getFoodBySlug(slug);

  if (!food) {
    notFound();
  }

  const isFoodType = food.type === "food";

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col selection:bg-saffron selection:text-white">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 w-full pt-20 sm:pt-24">
        {/* Breadcrumbs Header */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4 border-b border-sand/25 text-xs text-text-muted">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link
              href="/"
              className="hover:text-charcoal transition-colors hover:underline"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/eat"
              className="hover:text-charcoal transition-colors hover:underline"
            >
              Eat
            </Link>
            <span>/</span>
            <span className="text-charcoal font-medium truncate max-w-[200px] sm:max-w-none">
              {food.name}
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative w-full h-[50vh] sm:h-[60vh] min-h-[360px] max-h-[600px] bg-charcoal text-ivory overflow-hidden">
          <Image
            src={food.image}
            alt={food.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.80]"
          />

          {/* Vignette Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/30 pointer-events-none" />

          {/* Content Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14">
            <div className="max-w-3xl">
              {/* Category & Badge */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase bg-gold text-charcoal rounded-xs shadow-sm">
                  {food.category}
                </span>

                {food.badge && (
                  <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-charcoal/80 text-sand-light rounded-xs border border-sand/30">
                    {food.badge}
                  </span>
                )}

                {food.priceLabel && (
                  <span className="px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider bg-charcoal/60 text-gold-light rounded-xs border border-gold/30">
                    {food.priceLabel}
                  </span>
                )}
              </div>

              {/* Hindi & English Name */}
              {food.hindiName && (
                <span className="text-sm sm:text-base font-serif text-sand-light/80 block mb-1">
                  {food.hindiName}
                </span>
              )}

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ivory mb-3 leading-[1.08]">
                {food.name}
              </h1>

              <p className="text-base sm:text-xl text-sand-light/95 font-light leading-relaxed max-w-2xl">
                {food.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content & Sticky Sidebar Grid */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Culinary Narrative */}
            <div className="lg:col-span-8 space-y-12">
              {/* Introduction */}
              <section className="space-y-4">
                <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block">
                  {isFoodType ? "THE CULINARY HERITAGE" : "ABOUT THIS VENUE"}
                </span>
                <p className="text-lg sm:text-xl text-charcoal font-light leading-relaxed">
                  {food.description}
                </p>
              </section>

              {/* What It Is */}
              {food.whatItIs && (
                <section className="p-7 bg-ivory-light border border-sand/40 rounded-sm space-y-3">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted block">
                    {isFoodType ? "WHAT IT IS" : "THE SPECIALTY"}
                  </span>
                  <p className="text-base sm:text-lg text-charcoal leading-relaxed font-serif">
                    "{food.whatItIs}"
                  </p>
                </section>
              )}

              {/* WHY TRY IT */}
              {food.whyTry.length > 0 && (
                <section className="p-7 sm:p-9 bg-white border border-sand/40 rounded-sm space-y-6 shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-gold-dark" />
                    <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                      Why Experience It
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {food.whyTry.map((reason, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 bg-ivory-light rounded-xs border border-sand/30"
                      >
                        <CheckCircle2 className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                        <span className="text-sm text-charcoal/90 leading-snug">
                          {reason}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* WHERE TO FIND IT / LOCATION */}
              <section className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-saffron" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                    Where to Look for It
                  </h2>
                </div>

                <div className="p-6 bg-ivory-light border border-sand/40 rounded-sm space-y-4">
                  <div className="text-sm sm:text-base text-charcoal">
                    <strong className="font-medium text-text-muted block text-xs uppercase tracking-wider mb-1">
                      Primary Area:
                    </strong>
                    {food.location.area}
                  </div>

                  {food.whereToFind.length > 0 && (
                    <div className="space-y-2 pt-3 border-t border-sand/20">
                      <span className="text-xs font-semibold uppercase tracking-wider text-text-muted block">
                        Recommended Halwais & Stalls:
                      </span>
                      <ul className="space-y-2 text-sm text-text-muted">
                        {food.whereToFind.map((place, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
                            <span>{place}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>

              {/* BEST PAIRED WITH */}
              {food.bestPairedWith.length > 0 && (
                <section className="space-y-3">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted block">
                    BEST PAIRED WITH
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {food.bestPairedWith.map((pair, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xs bg-sand/20 border border-sand/35 text-xs font-medium text-charcoal"
                      >
                        + {pair}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* EXPLORER TIPS */}
              {food.explorerTips.length > 0 && (
                <section className="p-6 bg-ivory-light border border-sand/40 rounded-sm space-y-3">
                  <div className="flex items-center gap-2 text-charcoal">
                    <Info className="w-4 h-4 text-ganga" />
                    <h3 className="font-serif text-xl font-medium">
                      Food Explorer Tips
                    </h3>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-text-muted">
                    {food.explorerTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-gold mt-0.5">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Right Column: Sticky Sidebar Info Card */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 p-7 bg-white rounded-sm border border-sand/40 shadow-sm space-y-6">
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-text-muted uppercase block mb-1">
                    FLAVOUR SUMMARY
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal font-medium">
                    {food.name}
                  </h3>
                </div>

                <div className="space-y-4 text-sm border-y border-sand/20 py-5">
                  <div>
                    <span className="text-xs text-text-muted block mb-0.5">
                      Best For
                    </span>
                    <span className="font-medium text-charcoal">
                      {food.bestFor}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-text-muted block mb-0.5">
                      Category
                    </span>
                    <span className="font-medium text-charcoal">
                      {food.category}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-text-muted block mb-0.5">
                      Price Level
                    </span>
                    <span className="font-medium text-charcoal">
                      {food.priceLabel}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-text-muted block mb-1.5">
                      Flavour Tags
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {food.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-xs bg-sand/25 text-xs text-charcoal/80"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <Link
                    href="/eat"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm bg-gold text-charcoal font-semibold text-xs tracking-wider uppercase hover:bg-gold-light transition-all min-h-[44px]"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Food Guide</span>
                  </Link>

                  <Link
                    href="/explore"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-sm bg-ivory text-charcoal border border-sand/50 font-medium text-xs tracking-wider uppercase hover:bg-white transition-all min-h-[44px]"
                  >
                    <span>Explore Places Nearby</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Section 18: NEARBY FOOD */}
        <NearbyFood nearbySlugs={food.nearbySlugs} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
