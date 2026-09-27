import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Sparkles,
  Compass,
  CheckCircle2,
  Info,
  Calendar,
  Share2,
} from "lucide-react";
import {
  placesData,
  getPlaceBySlug,
  getNearbyPlaces,
  type Place,
} from "@/data/places";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PlaceCard } from "@/components/explore/PlaceCard";
import { getWalksForPlace } from "@/data/walks";
import { WalkCard } from "@/components/walks/WalkCard";

// Pre-render all places at build time
export async function generateStaticParams() {
  return placesData.map((place) => ({
    slug: place.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);

  if (!place) {
    return {
      title: "Place Not Found — KashiNagri",
    };
  }

  return {
    title: `${place.name} — Explore Kashi | KashiNagri`,
    description: place.shortDescription,
  };
}

export default async function PlaceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);

  if (!place) {
    notFound();
  }

  const nearbyPlaces = getNearbyPlaces(place.nearbySlugs);
  const relatedWalks = getWalksForPlace(place.slug);

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col selection:bg-saffron selection:text-white">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 w-full pt-20 sm:pt-24">
        {/* Subtle Breadcrumbs Header */}
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
              href="/explore"
              className="hover:text-charcoal transition-colors hover:underline"
            >
              Explore
            </Link>
            <span>/</span>
            <span className="text-charcoal font-medium truncate max-w-[200px] sm:max-w-none">
              {place.name}
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative w-full h-[52vh] sm:h-[62vh] min-h-[380px] max-h-[640px] bg-charcoal text-ivory overflow-hidden">
          <Image
            src={place.image}
            alt={place.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.82]"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/30 pointer-events-none" />

          {/* Content Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14">
            <div className="max-w-3xl">
              {/* Category & Badge */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase bg-gold text-charcoal rounded-xs shadow-sm">
                  {place.category}
                </span>

                {place.badge && (
                  <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase bg-charcoal/80 text-sand-light rounded-xs border border-sand/30">
                    {place.badge}
                  </span>
                )}
              </div>

              {/* Hindi & English Name */}
              {place.hindiName && (
                <span className="text-sm sm:text-base font-serif text-sand-light/80 block mb-1">
                  {place.hindiName}
                </span>
              )}

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ivory mb-3 leading-[1.08]">
                {place.name}
              </h1>

              <p className="text-base sm:text-xl text-sand-light/95 font-light leading-relaxed max-w-2xl">
                {place.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content & Sticky Sidebar Grid */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Main Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Introduction */}
              <section className="space-y-4">
                <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block">
                  ABOUT THIS DESTINATION
                </span>
                <p className="text-lg sm:text-xl text-charcoal font-light leading-relaxed">
                  {place.description}
                </p>
              </section>

              {/* WHY VISIT Section */}
              <section className="p-7 sm:p-9 bg-ivory-light border border-sand/40 rounded-sm space-y-6">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-gold-dark" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                    Why Visit
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {place.whyVisit.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 bg-white/70 rounded-xs border border-sand/30"
                    >
                      <CheckCircle2 className="w-4 h-4 text-saffron shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal/90 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* WHAT TO EXPERIENCE Section */}
              <section className="space-y-5">
                <div className="flex items-center gap-2.5">
                  <Compass className="w-5 h-5 text-ganga" />
                  <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                    What to Experience
                  </h2>
                </div>

                <ul className="space-y-3">
                  {place.whatToExperience.map((exp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-base text-text-muted leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-2.5 shrink-0" />
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Gallery Preview Placeholder */}
              <section className="space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
                  Atmosphere & Perspectives
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xs bg-charcoal/10 border border-sand/30">
                    <Image
                      src={place.image}
                      alt={place.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover hover:scale-104 transition-transform duration-700"
                    />
                  </div>

                  <div className="relative aspect-[16/10] overflow-hidden rounded-xs bg-charcoal/10 border border-sand/30">
                    <Image
                      src={
                        place.gallery?.[1] ||
                        "/images/kashi-sunrise-ghats.jpg"
                      }
                      alt={`Atmospheric view near ${place.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover hover:scale-104 transition-transform duration-700"
                    />
                  </div>
                </div>
              </section>

              {/* Location & Arrival Advice */}
              <section className="p-7 bg-ivory-light border border-sand/40 rounded-sm space-y-4">
                <div className="flex items-center gap-2 text-charcoal">
                  <MapPin className="w-5 h-5 text-saffron" />
                  <h3 className="font-serif text-2xl font-medium">
                    Location & Practical Guidance
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                  <strong className="text-charcoal font-medium">Address:</strong>{" "}
                  {place.location}
                </p>

                <div className="space-y-2 pt-2 border-t border-sand/20">
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted block">
                    Explorer Tips:
                  </span>
                  {place.practicalTips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-text-muted">
                      <Info className="w-3.5 h-3.5 text-ganga shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: Sticky Sidebar Info Card */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 p-7 bg-white rounded-sm border border-sand/40 shadow-sm space-y-6">
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-text-muted uppercase block mb-1">
                    DESTINATION SUMMARY
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal font-medium">
                    {place.name}
                  </h3>
                </div>

                <div className="space-y-4 text-sm border-y border-sand/20 py-5">
                  <div>
                    <span className="text-xs text-text-muted block mb-0.5">
                      Best For
                    </span>
                    <span className="font-medium text-charcoal">
                      {place.bestFor}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-text-muted block mb-0.5">
                      Category
                    </span>
                    <span className="font-medium text-charcoal">
                      {place.category}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-text-muted block mb-1.5">
                      Tags
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {place.tags.map((t) => (
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
                    href="/plan"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm bg-gold text-charcoal font-semibold text-xs tracking-wider uppercase hover:bg-gold-light transition-all min-h-[44px]"
                  >
                    <span>Add to Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/explore"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-sm bg-ivory text-charcoal border border-sand/50 font-medium text-xs tracking-wider uppercase hover:bg-white transition-all min-h-[44px]"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Explore</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Section 16: EXPLORE AS PART OF A WALK */}
        {relatedWalks.length > 0 && (
          <section className="w-full py-16 sm:py-20 bg-ivory border-t border-sand/30">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
                    CURATED WALKING ITINERARIES
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
                    Explore this place as part of a walk
                  </h2>
                  <p className="text-xs sm:text-sm text-text-muted mt-1 font-light">
                    See {place.name} along with surrounding ghats, sacred temples, and old-city lanes.
                  </p>
                </div>

                <Link
                  href="/walks"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors"
                >
                  <span>All Curated Walks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedWalks.map((walk) => (
                  <WalkCard key={walk.id} walk={walk} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 17: EXPLORE NEARBY */}
        {nearbyPlaces.length > 0 && (
          <section className="w-full py-16 sm:py-20 bg-ivory-light border-t border-sand/30">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <span className="text-xs font-semibold tracking-[0.25em] text-saffron uppercase block mb-1">
                    CONTINUE THE TRAIL
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
                    Explore nearby
                  </h2>
                </div>

                <Link
                  href="/explore"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors"
                >
                  <span>All Places</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {nearbyPlaces.map((nearPlace) => (
                  <PlaceCard key={nearPlace.id} place={nearPlace} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
