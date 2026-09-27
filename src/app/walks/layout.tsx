import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kashi Walks — Discover Kashi on Foot | KashiNagri",
  description:
    "Explore curated walking routes through Kashi's ghats, lanes, food streets, temples and heritage.",
};

export default function WalksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
