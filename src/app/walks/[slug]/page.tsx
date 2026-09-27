import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { walksData, getWalkBySlug } from "@/data/walks";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { WalkDetail } from "@/components/walks/WalkDetail";

// Pre-render all walks at build time
export async function generateStaticParams() {
  return walksData.map((walk) => ({
    slug: walk.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const walk = getWalkBySlug(slug);

  if (!walk) {
    return {
      title: "Walk Not Found — KashiNagri",
    };
  }

  return {
    title: `${walk.name} — Kashi Walks | KashiNagri`,
    description: walk.shortDescription || walk.description,
  };
}

export default async function WalkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const walk = getWalkBySlug(slug);

  if (!walk) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col selection:bg-saffron selection:text-white">
      {/* Sticky Global Navigation */}
      <Navbar />

      <main className="flex-1 w-full pt-16 sm:pt-20">
        <WalkDetail walk={walk} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
