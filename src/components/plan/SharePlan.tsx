"use client";

import React, { useState } from "react";
import { Share2, Printer, Check, Copy } from "lucide-react";
import type { Itinerary } from "@/types/itinerary";

interface SharePlanProps {
  itinerary: Itinerary;
}

export function SharePlan({ itinerary }: SharePlanProps) {
  const [copied, setCopied] = useState(false);

  const formatPlanText = () => {
    let text = `${itinerary.title}\n`;
    text += `${itinerary.subtitle}\n\n`;

    itinerary.days.forEach((day) => {
      text += `--- DAY ${day.dayNumber}: ${day.title} ---\n`;
      text += `${day.theme}\n`;
      day.periods.forEach((p) => {
        text += `\n[${p.period} (${p.timeSlot})]\n`;
        p.items.forEach((item) => {
          text += `• ${item.time} - ${item.title} (${item.location}) [${item.duration}]\n`;
        });
      });
      text += `\n`;
    });

    text += `Curated with KashiNagri (kashinagri.com/plan)`;
    return text;
  };

  const handleShare = async () => {
    const shareData = {
      title: itinerary.title,
      text: formatPlanText(),
      url: typeof window !== "undefined" ? window.location.href : "https://kashinagri.com/plan",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share failed, fallback to copy
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    const text = formatPlanText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Share / Copy Button */}
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white border border-sand/40 text-charcoal text-xs font-semibold uppercase tracking-wider hover:border-gold hover:text-saffron transition-all cursor-pointer shadow-xs min-h-[40px]"
        aria-label="Share your Kashi itinerary"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-green-600 stroke-[3]" />
            <span className="text-green-700 font-bold">Plan copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5 text-gold-dark" />
            <span>Share my plan</span>
          </>
        )}
      </button>

      {/* Print / Save PDF Button */}
      <button
        type="button"
        onClick={handlePrint}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white border border-sand/40 text-charcoal text-xs font-semibold uppercase tracking-wider hover:border-gold hover:text-saffron transition-all cursor-pointer shadow-xs min-h-[40px]"
        aria-label="Print or save PDF of your itinerary"
      >
        <Printer className="w-3.5 h-3.5 text-gold-dark" />
        <span>Print / Save</span>
      </button>
    </div>
  );
}
