import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Waves,
  Compass,
  Check,
  CheckCircle2,
  Info,
  ShieldCheck,
  Bed,
  Sparkles,
  Users,
  Eye,
} from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { NearbyStay } from "@/components/stay/NearbyStay";
import { StayCard } from "@/components/stay/StayCard";
import {
  neighbourhoodsData,
  staysData,
  getNeighbourhoodBySlug,
  getStayBySlug,
  getStaysByArea,
  type Neighbourhood,
  type Stay,
} from "@/data/stays";

export async function generateStaticParams() {
  const neighbourhoodParams = neighbourhoodsData.map((n) => ({ slug: n.slug }));
  const stayParams = staysData.map((s) => ({ slug: s.slug }));
  return [...neighbourhoodParams, ...stayParams];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const neighbourhood = getNeighbourhoodBySlug(slug);
  if (neighbourhood) {
    return {
      title: `${neighbourhood.name} — Kashi Neighbourhood Guide | KashiNagri`,
      description: neighbourhood.tagline,
    };
  }

  const stay = getStayBySlug(slug);
  if (stay) {
    return {
      title: `${stay.name} (${stay.area}) — Stay Kashi | KashiNagri`,
      description: stay.shortDescription,
    };
  }

  return {
    title: "Stay Not Found — KashiNagri",
  };
}

export default async function StayDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const neighbourhood = getNeighbourhoodBySlug(slug);
  const stay = getStayBySlug(slug);

  if (!neighbourhood && !stay) {
    notFound();
  }

  // ==========================================
  // VIEW 1: NEIGHBOURHOOD DETAIL VIEW
  // ==========================================
  if (neighbourhood) {
    const areaStays = getStaysByArea(neighbourhood.slug);
    const otherNeighbourhoods = neighbourhoodsData.filter(
      (n) => n.slug !== neighbourhood.slug
    );

    return (
      <div className="min-h-screen bg-ivory text-charcoal flex flex-col selection:bg-saffron selection:text-white">
        <Navbar />

        <main className="flex-1 w-full pt-20 sm:pt-24">
          {/* Breadcrumbs */}
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4 border-b border-sand/25 text-xs text-text-muted">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="hover:text-charcoal transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/stay" className="hover:text-charcoal transition-colors">
                Stay
              </Link>
              <span>/</span>
              <span className="text-charcoal font-medium">{neighbourhood.name}</span>
            </nav>
          </div>

          {/* Hero Header */}
          <section className="w-full py-12 sm:py-16 bg-white border-b border-sand/30">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold tracking-[0.24em] text-saffron uppercase">
                  NEIGHBOURHOOD PROFILE
                </span>
                <span className="text-sand-dark">•</span>
                <span className="px-2.5 py-0.5 rounded-full bg-sand/25 text-charcoal text-[11px] font-medium">
                  {neighbourhood.atmosphere}
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="max-w-3xl">
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-charcoal mb-3">
                    {neighbourhood.name}
                  </h1>
                  <p className="text-lg sm:text-xl text-gold-dark font-serif italic leading-relaxed">
                    &ldquo;{neighbourhood.tagline}&rdquo;
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#area-stays"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-light transition-colors min-h-[44px]"
                  >
                    <Bed className="w-4 h-4" />
                    <span>View Stays ({areaStays.length})</span>
                  </a>
                  <Link
                    href="/stay"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-sand/40 text-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-sand/15 transition-colors min-h-[44px]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>All Areas</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Media & Key Indicators */}
          <section className="w-full py-10 sm:py-14 bg-ivory">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Hero Photo */}
                <div className="lg:col-span-8">
                  <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-charcoal/10 border border-sand/40 shadow-sm">
                    <Image
                      src={neighbourhood.image}
                      alt={neighbourhood.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 text-ivory">
                      <p className="text-xs sm:text-sm text-sand-light/90 italic font-serif">
                        {neighbourhood.alt}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enclave Vitals Sidebar */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-6 rounded-sm bg-white border border-sand/40 shadow-xs space-y-5">
                    <h3 className="font-serif text-xl font-medium text-charcoal pb-3 border-b border-sand/20">
                      Enclave Vitals
                    </h3>

                    <div className="space-y-4 text-xs">
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-text-muted block mb-1">
                          River Ganga Proximity
                        </span>
                        <div className="flex items-center gap-2 font-medium text-ganga-dark">
                          <Waves className="w-4 h-4 text-ganga" />
                          <span>{neighbourhood.gangaAccess}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-semibold text-text-muted block mb-1">
                          Old City Gali Labyrinth
                        </span>
                        <div className="flex items-center gap-2 font-medium text-charcoal">
                          <Compass className="w-4 h-4 text-gold" />
                          <span>{neighbourhood.oldCityAccess}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-semibold text-text-muted block mb-1">
                          Approximate Location
                        </span>
                        <div className="flex items-center gap-2 font-medium text-charcoal">
                          <MapPin className="w-4 h-4 text-saffron" />
                          <span>{neighbourhood.approxLocation}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-semibold text-text-muted block mb-1">
                          Ideal Trip Style
                        </span>
                        <p className="font-medium text-charcoal font-serif italic text-sm">
                          {neighbourhood.tripStyle}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-sand/20">
                      <span className="text-[10px] uppercase font-semibold text-text-muted block mb-2">
                        Best Suited For
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {neighbourhood.bestFor.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded-xs bg-sand/25 text-charcoal text-xs font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Atmosphere & Reality Check Essay */}
          <section className="w-full py-12 sm:py-16 bg-white border-y border-sand/30">
            <div className="max-w-4xl mx-auto px-5 sm:px-8">
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-saffron uppercase block mb-2">
                    LIVING ATMOSPHERE
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-charcoal mb-4">
                    What it feels like to stay in {neighbourhood.name}
                  </h2>
                  <p className="text-base sm:text-lg text-charcoal/90 font-serif leading-relaxed mb-6">
                    {neighbourhood.whatItFeelsLike}
                  </p>
                  <p className="text-sm sm:text-base text-text-muted leading-relaxed font-light">
                    {neighbourhood.description}
                  </p>
                </div>

                {/* Practical Things to Consider (Gali Reality Check) */}
                <div className="p-6 rounded-sm bg-sand/15 border border-gold/40 space-y-4">
                  <div className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-saffron" />
                    <h3 className="font-serif text-xl font-medium text-charcoal">
                      Gali & Accessibility Reality Check
                    </h3>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-text-muted">
                    {neighbourhood.thingsToConsider.map((note, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 shrink-0" />
                        <span className="leading-relaxed">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Stays in this Neighbourhood */}
          <section id="area-stays" className="w-full py-16 sm:py-24 bg-ivory">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                <div>
                  <span className="text-xs font-semibold tracking-[0.24em] text-saffron uppercase block mb-2">
                    ACCOMMODATION DIRECTORY
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-charcoal">
                    Stays in {neighbourhood.name}
                  </h2>
                  <p className="text-sm text-text-muted mt-1">
                    Carefully verified properties situated directly within this enclave.
                  </p>
                </div>

                <Link
                  href="/stay"
                  className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-saffron transition-colors"
                >
                  Explore All 14 Kashi Stays →
                </Link>
              </div>

              {areaStays.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {areaStays.map((stayItem) => (
                    <StayCard key={stayItem.id} stay={stayItem} />
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center bg-white border border-sand/40 rounded-sm">
                  <p className="text-sm text-text-muted">
                    More boutique havelis and guesthouses in {neighbourhood.name} are currently undergoing local verification.
                  </p>
                  <Link
                    href="/stay"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-saffron uppercase"
                  >
                    <span>Browse other neighbourhoods</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* Other Neighbourhoods Carousel / Grid */}
          <section className="w-full py-16 sm:py-20 bg-ivory-light border-t border-sand/30">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
              <div className="max-w-2xl mb-8">
                <span className="text-xs font-semibold tracking-[0.24em] text-saffron uppercase block mb-1">
                  EXPLORE ALTERNATIVE BASES
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
                  Other Kashi Enclaves
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                {otherNeighbourhoods.map((other) => (
                  <Link
                    key={other.id}
                    href={`/stay/${other.slug}`}
                    className="p-4 rounded-sm bg-white border border-sand/40 hover:border-gold/60 transition-all text-left flex flex-col justify-between group min-h-[110px]"
                  >
                    <span className="font-serif text-base font-medium text-charcoal group-hover:text-saffron transition-colors">
                      {other.name}
                    </span>
                    <span className="text-[10px] text-text-muted line-clamp-1 italic font-serif">
                      {other.atmosphere}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  // ==========================================
  // VIEW 2: STAY / ACCOMMODATION DETAIL VIEW
  // ==========================================
  const currentStay = stay as Stay;
  const otherStaysInArea = staysData.filter(
    (s) => s.areaSlug === currentStay.areaSlug && s.slug !== currentStay.slug
  );

  const priceColor = {
    "Budget-friendly": "bg-emerald-50 text-emerald-800 border-emerald-200",
    "Mid-range": "bg-blue-50 text-blue-800 border-blue-200",
    "Premium": "bg-amber-50 text-amber-900 border-amber-200",
    "Luxury": "bg-purple-50 text-purple-900 border-purple-200",
  }[currentStay.priceLevel] || "bg-sand/30 text-charcoal border-sand/40";

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col selection:bg-saffron selection:text-white">
      <Navbar />

      <main className="flex-1 w-full pt-20 sm:pt-24">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4 border-b border-sand/25 text-xs text-text-muted">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <Link href="/" className="hover:text-charcoal transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/stay" className="hover:text-charcoal transition-colors">
              Stay
            </Link>
            <span>/</span>
            <Link
              href={`/stay/${currentStay.areaSlug}`}
              className="hover:text-charcoal transition-colors"
            >
              {currentStay.area}
            </Link>
            <span>/</span>
            <span className="text-charcoal font-medium">{currentStay.name}</span>
          </nav>
        </div>

        {/* Stay Hero Banner */}
        <section className="w-full py-10 sm:py-16 bg-white border-b border-sand/30">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-sand/30 text-charcoal text-[11px] font-semibold uppercase tracking-wider">
                {currentStay.type}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-medium ${priceColor}`}>
                {currentStay.priceLevel}
              </span>
              {currentStay.badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-gold text-charcoal text-[11px] font-bold uppercase tracking-wider">
                  {currentStay.badge}
                </span>
              )}
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-charcoal mb-3">
                  {currentStay.name}
                </h1>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <MapPin className="w-4 h-4 text-saffron" />
                  <Link
                    href={`/stay/${currentStay.areaSlug}`}
                    className="text-charcoal font-medium hover:underline"
                  >
                    {currentStay.area}
                  </Link>
                  <span className="text-sand-dark">•</span>
                  <span className="italic font-serif">{currentStay.atmosphere}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/stay/${currentStay.areaSlug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-sand/40 text-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-sand/15 transition-colors min-h-[44px]"
                >
                  <Compass className="w-4 h-4 text-gold" />
                  <span>Explore {currentStay.area}</span>
                </Link>
                <Link
                  href="/stay"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-light transition-colors min-h-[44px]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>All Stays</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Media and Overview Layout */}
        <section className="w-full py-10 sm:py-14 bg-ivory">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Media Section */}
              <div className="lg:col-span-8 space-y-8">
                <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-charcoal/10 border border-sand/40 shadow-sm">
                  <Image
                    src={currentStay.image}
                    alt={currentStay.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 text-ivory">
                    <p className="text-xs sm:text-sm text-sand-light/90 italic font-serif">
                      {currentStay.alt}
                    </p>
                  </div>
                </div>

                {/* Editorial Story */}
                <div className="bg-white p-6 sm:p-8 rounded-sm border border-sand/40 space-y-6">
                  <div>
                    <span className="text-xs font-semibold tracking-[0.2em] text-saffron uppercase block mb-2">
                      EDITORIAL PROFILE
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal mb-4">
                      About {currentStay.name}
                    </h2>
                    <p className="text-sm sm:text-base text-text-muted leading-relaxed font-light">
                      {currentStay.description}
                    </p>
                  </div>

                  {/* Why Stay Here Highlights */}
                  <div className="pt-4 border-t border-sand/20">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-3">
                      Why travellers choose this stay:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentStay.whyStayHere.map((reason, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xs bg-ivory-light border border-sand/30 text-xs"
                        >
                          <Check className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                          <span className="text-charcoal leading-snug">{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Information & Practical Vitals Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                {/* Stay Facts Card */}
                <div className="p-6 rounded-sm bg-white border border-sand/40 shadow-xs space-y-5">
                  <h3 className="font-serif text-xl font-medium text-charcoal pb-3 border-b border-sand/20">
                    Property Insights
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-text-muted block mb-1">
                        Neighbourhood
                      </span>
                      <Link
                        href={`/stay/${currentStay.areaSlug}`}
                        className="text-sm font-serif font-medium text-saffron hover:underline inline-flex items-center gap-1"
                      >
                        <span>{currentStay.area}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-semibold text-text-muted block mb-1">
                        Value Perspective
                      </span>
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full border font-medium ${priceColor}`}>
                          {currentStay.priceLevel}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-semibold text-text-muted block mb-1.5">
                        Suited For Groups
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentStay.travellerTypes.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-full bg-sand/25 text-charcoal text-[11px] font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-semibold text-text-muted block mb-2">
                        Key Amenities & Services
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentStay.amenities.map((amenity) => (
                          <span
                            key={amenity}
                            className="px-2.5 py-1 rounded-xs bg-ivory-light border border-sand/30 text-charcoal text-[11px]"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Practical Arrival & Booking Guidance (Rule #29 Compliant) */}
                <div className="p-6 rounded-sm bg-sand/15 border border-gold/40 space-y-4 text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-saffron" />
                    <h4 className="font-semibold text-charcoal uppercase tracking-wider text-[11px]">
                      Arrival & Booking Advice
                    </h4>
                  </div>
                  <p className="text-text-muted leading-relaxed">
                    Due to the narrow medieval stone alleys of central Kashi, auto-rickshaws and taxis cannot pull directly to riverside properties.
                  </p>
                  <div className="p-3 bg-white/80 rounded-xs border border-sand/30 text-charcoal">
                    <strong className="block mb-1 font-medium">Local Recommendation:</strong>
                    Coordinate with the property 24 hours before your arrival to arrange a boat transfer from the nearest vehicle drop point or a local luggage porter (coolie).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Stays in the Same Neighbourhood */}
        {otherStaysInArea.length > 0 && (
          <NearbyStay
            title={`More Accommodations in ${currentStay.area}`}
            subtitle="Alternative vetted places to stay in this enclave."
            stays={otherStaysInArea}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
