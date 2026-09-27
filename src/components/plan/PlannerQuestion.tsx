"use client";

import React from "react";
import { PreferenceCard } from "./PreferenceCard";
import type {
  TripPreferences,
  DurationOption,
  TravellerType,
  InterestType,
  PaceType,
  BudgetType,
  PriorityType,
  BaseAreaOption,
} from "@/types/itinerary";

interface PlannerQuestionProps {
  stepIndex: number;
  preferences: TripPreferences;
  onUpdatePreferences: (updates: Partial<TripPreferences>) => void;
}

export function PlannerQuestion({
  stepIndex,
  preferences,
  onUpdatePreferences,
}: PlannerQuestionProps) {
  // Question 1: Duration
  if (stepIndex === 0) {
    const options: { key: DurationOption; label: string; desc: string; badge?: string }[] = [
      { key: "1-day", label: "1 Day", desc: "Dawn rowboat, Vishwanath corridor & evening aarti" },
      { key: "2-days", label: "2 Days", desc: "Old Kashi, sacred ghats, temples & famous chaats", badge: "Popular" },
      { key: "3-days", label: "3 Days", desc: "Complete Kashi arc: River, ancient gallis & peaceful Sarnath", badge: "Recommended" },
      { key: "4-days", label: "4 Days", desc: "Unrushed immersion, royal Ramnagar fort & hidden quarters" },
      { key: "5-plus-days", label: "5+ Days", desc: "Deep cultural residency, silk weavers & classical arts" },
    ];

    return (
      <div>
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-saffron uppercase block mb-1">
            DURATION
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium">
            How long are you staying in Kashi?
          </h2>
          <p className="text-xs sm:text-sm text-text-muted mt-1.5 font-light">
            Choose your available time. We’ll proportion each day so you never feel hurried.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {options.map((opt) => (
            <PreferenceCard
              key={opt.key}
              id={opt.key}
              label={opt.label}
              description={opt.desc}
              badge={opt.badge}
              isSelected={preferences.duration === opt.key}
              onClick={() => onUpdatePreferences({ duration: opt.key })}
            />
          ))}
        </div>
      </div>
    );
  }

  // Question 2: Traveller Type
  if (stepIndex === 1) {
    const options: { key: TravellerType; label: string; desc: string; icon: string }[] = [
      { key: "Solo", label: "Solo Traveller", desc: "Quiet dawn walks, photography & personal reflection", icon: "🚶" },
      { key: "Couple", label: "Couple", desc: "Atmospheric rooftop dinners, sunrise boating & cafes", icon: "✨" },
      { key: "Family", label: "Family with Children", desc: "Comfortable pacing, reliable transport & open spaces", icon: "👨‍👩‍👧" },
      { key: "Parents", label: "Travelling with Parents", desc: "Gentle walking steps, wheelchair/rickshaw care & darshan ease", icon: "🙏" },
      { key: "Friends", label: "Group of Friends", desc: "Street food hopping, lively boat rides & evening ghats", icon: "🎒" },
      { key: "Pilgrimage", label: "Spiritual Pilgrimage", desc: "Jyotirlinga, sacred sankalpa, ritual baths & temples", icon: "🛕" },
    ];

    return (
      <div>
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-saffron uppercase block mb-1">
            TRAVEL PARTY
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium">
            Who are you travelling with?
          </h2>
          <p className="text-xs sm:text-sm text-text-muted mt-1.5 font-light">
            Helps us calibrate step walking distances, rickshaw access, and seating opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {options.map((opt) => (
            <PreferenceCard
              key={opt.key}
              id={opt.key}
              label={opt.label}
              description={opt.desc}
              icon={opt.icon}
              isSelected={preferences.travellerType === opt.key}
              onClick={() => onUpdatePreferences({ travellerType: opt.key })}
            />
          ))}
        </div>
      </div>
    );
  }

  // Question 3: Interests (Multiple Selections: Min 1, Max 6)
  if (stepIndex === 2) {
    const interestOptions: { key: InterestType; label: string; icon: string; desc: string }[] = [
      { key: "temples", label: "Temples", icon: "🛕", desc: "Ancient sanctums, Shiva Jyotirlinga & peaceful mutts" },
      { key: "ganga", label: "Ganga & Ghats", icon: "🌊", desc: "Riverboat rides, stone staircases & evening aartis" },
      { key: "food", label: "Food & Street Chaat", icon: "🍜", desc: "Kachori sabzi, tamatar chaat, malaiyo & lassi" },
      { key: "history", label: "History & Heritage", icon: "🏛️", desc: "Maratha havelis, astronomical palaces & Sarnath" },
      { key: "culture", label: "Living Culture", icon: "🎨", desc: "Classical vocal music, Ramcharitmanas & traditions" },
      { key: "photography", label: "Photography", icon: "📸", desc: "Sunrise side-light, texture of old alleys & river vistas" },
      { key: "shopping", label: "Shopping & Weaving", icon: "🛍️", desc: "Pure Banarasi silk sarees, brass craft & wooden toys" },
      { key: "hidden", label: "Hidden Kashi", icon: "👀", desc: "Bohemian lanes, secret shrines & quiet backstreets" },
      { key: "sunrise", label: "Sunrise Rituals", icon: "🌅", desc: "Subah-e-Banaras chanting, morning mist & yogis" },
      { key: "evening", label: "Evening Atmosphere", icon: "🌙", desc: "Glowing riverside brass lamps & cool evening breezes" },
    ];

    const currentInterests = preferences.interests || [];

    const handleToggleInterest = (key: InterestType) => {
      const exists = currentInterests.includes(key);
      if (exists) {
        // Only remove if at least 1 remains
        if (currentInterests.length > 1) {
          onUpdatePreferences({
            interests: currentInterests.filter((i) => i !== key),
          });
        }
      } else {
        // Add only if less than 6
        if (currentInterests.length < 6) {
          onUpdatePreferences({
            interests: [...currentInterests, key],
          });
        }
      }
    };

    return (
      <div>
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-saffron uppercase block mb-1">
              THEMES & EXPERIENCES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium">
              What do you want to experience?
            </h2>
            <p className="text-xs sm:text-sm text-text-muted mt-1.5 font-light">
              Select what excites you most. (Choose 1 to 6 interests).
            </p>
          </div>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sand/25 border border-sand/40 text-charcoal self-start sm:self-auto">
            {currentInterests.length} of 6 selected
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {interestOptions.map((opt) => {
            const isSelected = currentInterests.includes(opt.key);
            const isLimitReached = currentInterests.length >= 6 && !isSelected;

            return (
              <PreferenceCard
                key={opt.key}
                id={opt.key}
                label={opt.label}
                description={opt.desc}
                icon={opt.icon}
                isSelected={isSelected}
                disabled={isLimitReached}
                onClick={() => handleToggleInterest(opt.key)}
              />
            );
          })}
        </div>
      </div>
    );
  }

  // Question 4: Travel Pace
  if (stepIndex === 3) {
    const options: { key: PaceType; label: string; desc: string; badge: string }[] = [
      {
        key: "slow",
        label: "SLOW",
        desc: "Few places, more time. Ample moments to sit on stone steps, sip tea, and breathe.",
        badge: "2–3 activities / day",
      },
      {
        key: "balanced",
        label: "BALANCED",
        desc: "A thoughtful mix of key sightseeing, food stops, and afternoon downtime.",
        badge: "3–5 activities / day",
      },
      {
        key: "packed",
        label: "PACKED",
        desc: "Show me as much as possible. Early starts, continuous exploration, and deep coverage.",
        badge: "5–7 activities / day",
      },
    ];

    return (
      <div>
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-saffron uppercase block mb-1">
            TRAVEL RHYTHM
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium">
            How do you like to travel?
          </h2>
          <p className="text-xs sm:text-sm text-text-muted mt-1.5 font-light">
            Determines the volume of scheduled stops and free contemplation time each day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {options.map((opt) => (
            <PreferenceCard
              key={opt.key}
              id={opt.key}
              label={opt.label}
              description={opt.desc}
              badge={opt.badge}
              isSelected={preferences.pace === opt.key}
              onClick={() => onUpdatePreferences({ pace: opt.key })}
            />
          ))}
        </div>
      </div>
    );
  }

  // Question 5: Budget Style
  if (stepIndex === 4) {
    const options: { key: BudgetType; label: string; desc: string; badge: string }[] = [
      {
        key: "budget",
        label: "BUDGET",
        desc: "Comfortable and practical. Authentic street snacks, shared e-rickshaws, and honest local stays.",
        badge: "Practical & Local",
      },
      {
        key: "comfort",
        label: "COMFORT",
        desc: "Balanced comfort. Heritage boutique stays, private rowboats, and relaxed traditional dining.",
        badge: "Balanced Comfort",
      },
      {
        key: "premium",
        label: "PREMIUM",
        desc: "More comfort and experiences. Restored palace havelis, air-conditioned transit, and bespoke guides.",
        badge: "Refined Experience",
      },
    ];

    return (
      <div>
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-saffron uppercase block mb-1">
            STYLE & COMFORT
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium">
            What kind of trip are you planning?
          </h2>
          <p className="text-xs sm:text-sm text-text-muted mt-1.5 font-light">
            Guides accommodation, dining, and transit suggestions conceptually (no fixed prices).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {options.map((opt) => (
            <PreferenceCard
              key={opt.key}
              id={opt.key}
              label={opt.label}
              description={opt.desc}
              badge={opt.badge}
              isSelected={preferences.budget === opt.key}
              onClick={() => onUpdatePreferences({ budget: opt.key })}
            />
          ))}
        </div>
      </div>
    );
  }

  // Question 6: Priority
  if (stepIndex === 5) {
    const options: { key: PriorityType; label: string; desc: string; icon: string }[] = [
      { key: "spirituality", label: "SPIRITUALITY", desc: "Darshan, sacred rituals, peace & blessing", icon: "🛕" },
      { key: "ganga", label: "GANGA", desc: "Boating, ghat steps, dawn mist & holy waters", icon: "🌊" },
      { key: "food", label: "FOOD", desc: "Legendary generational recipes, sweets & tea", icon: "🍜" },
      { key: "culture", label: "CULTURE", desc: "Classical arts, Sanskrit chants & literature", icon: "🎨" },
      { key: "relaxation", label: "RELAXATION", desc: "Slow river views, rooftop cafes & unwinding", icon: "☕" },
      { key: "discovery", label: "DISCOVERY", desc: "Unmarked alleys, weavers & secret corners", icon: "👀" },
    ];

    return (
      <div>
        <div className="mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-saffron uppercase block mb-1">
            CORE ESSENCE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium">
            If you had to choose one thing, what matters most?
          </h2>
          <p className="text-xs sm:text-sm text-text-muted mt-1.5 font-light">
            Your single gravitational focus that will anchor the highlight of every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {options.map((opt) => (
            <PreferenceCard
              key={opt.key}
              id={opt.key}
              label={opt.label}
              description={opt.desc}
              icon={opt.icon}
              isSelected={preferences.priority === opt.key}
              onClick={() => onUpdatePreferences({ priority: opt.key })}
            />
          ))}
        </div>
      </div>
    );
  }

  // Optional Question 7: Starting Point / Base Area
  if (stepIndex === 6) {
    const options: { key: BaseAreaOption; label: string; desc: string }[] = [
      { key: "assi-ghat", label: "Assi Ghat", desc: "Southern ghats, serene mornings & cultural cafes" },
      { key: "godowlia", label: "Godowlia & Chowk", desc: "Central old city, 5 mins from Vishwanath Corridor" },
      { key: "old-kashi", label: "Old Kashi Havelis", desc: "Pedestrian riverfront stone alleys" },
      { key: "sarnath", label: "Sarnath", desc: "Peaceful northern Buddhist garden enclave" },
      { key: "cantonment", label: "Cantonment", desc: "Spacious hotels, green avenues & train station access" },
      { key: "lanka", label: "Lanka & BHU", desc: "University precinct, south Varanasi & Sankat Mochan" },
      { key: "not-decided", label: "Not decided yet", desc: "We'll suggest the best base for your plan" },
    ];

    return (
      <div>
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-saffron uppercase block mb-1">
              OPTIONAL BASE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-medium">
              Where will you be staying?
            </h2>
            <p className="text-xs sm:text-sm text-text-muted mt-1.5 font-light">
              Helps us organize route flows from your morning doorstep. You can skip this if undecided.
            </p>
          </div>

          <span className="text-xs text-text-muted italic">
            Optional question
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {options.map((opt) => (
            <PreferenceCard
              key={opt.key}
              id={opt.key}
              label={opt.label}
              description={opt.desc}
              isSelected={preferences.baseArea === opt.key}
              onClick={() => onUpdatePreferences({ baseArea: opt.key })}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
}
