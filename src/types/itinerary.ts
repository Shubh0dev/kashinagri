export type DurationOption =
  | "1-day"
  | "2-days"
  | "3-days"
  | "4-days"
  | "5-plus-days";

export type TravellerType =
  | "Solo"
  | "Couple"
  | "Friends"
  | "Family"
  | "Parents"
  | "Pilgrimage";

export type InterestType =
  | "temples"
  | "ganga"
  | "food"
  | "history"
  | "culture"
  | "photography"
  | "shopping"
  | "hidden"
  | "sunrise"
  | "evening";

export type PaceType = "slow" | "balanced" | "packed";

export type BudgetType = "budget" | "comfort" | "premium";

export type PriorityType =
  | "spirituality"
  | "food"
  | "ganga"
  | "culture"
  | "relaxation"
  | "discovery";

export type BaseAreaOption =
  | "assi-ghat"
  | "godowlia"
  | "old-kashi"
  | "sarnath"
  | "cantonment"
  | "lanka"
  | "not-decided";

export interface TripPreferences {
  duration: DurationOption;
  travellerType: TravellerType;
  interests: InterestType[];
  pace: PaceType;
  budget: BudgetType;
  priority: PriorityType;
  baseArea?: BaseAreaOption;
}

export interface ItineraryItem {
  id: string;
  time: string; // e.g. "06:00 AM", "08:30 AM"
  title: string;
  category:
    | "Ganga"
    | "Temple"
    | "Food"
    | "Heritage"
    | "Culture"
    | "Walk"
    | "Leisure"
    | "Shopping"
    | "Hidden";
  description: string;
  image: string;
  alt: string;
  location: string;
  duration: string; // e.g. "~1.5 hours", "~45 mins"
  placeSlug?: string;
  foodSlug?: string;
  walkSlug?: string;
  staySlug?: string;
  lat?: number | null;
  lng?: number | null;
  tags?: string[];
  tips?: string;
}

export interface DayPeriod {
  period: "MORNING" | "AFTERNOON" | "EVENING" | "NIGHT";
  timeSlot: string; // e.g. "06:00 AM – 11:30 AM"
  items: ItineraryItem[];
}

export interface Day {
  dayNumber: number;
  title: string;
  theme: string;
  summary: string;
  periods: DayPeriod[];
  routeFlow: string[]; // sequence of waypoints for visual flow
}

export interface RecommendationSummary {
  stayAreaRecommendation?: {
    name: string;
    slug: string;
    description: string;
    reason: string;
  };
  transportSuggestions: {
    mode: string;
    reason: string;
    tip: string;
    icon: "footprints" | "zap" | "bike" | "car" | "ship";
  }[];
  mustTryFoods: {
    name: string;
    slug: string;
    image: string;
    area: string;
    reason: string;
  }[];
  suggestedWalks: {
    name: string;
    slug: string;
    image: string;
    distance: string;
    duration: string;
    reason: string;
  }[];
  suggestedPlaces: {
    name: string;
    slug: string;
    image: string;
    category: string;
    reason: string;
  }[];
}

export interface Itinerary {
  id: string;
  createdAt: string;
  preferences: TripPreferences;
  title: string;
  subtitle: string;
  summary: {
    durationDays: number;
    travellerLabel: string;
    paceLabel: string;
    interestsLabels: string[];
    priorityLabel: string;
    baseAreaLabel?: string;
  };
  days: Day[];
  recommendations: RecommendationSummary;
}
