import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Your Kashi Trip — KashiNagri",
  description:
    "Build a personalized Kashi itinerary based on your time, interests and travel style.",
};

export default function PlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
