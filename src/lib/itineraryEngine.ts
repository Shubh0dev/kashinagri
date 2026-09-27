import { placesData, type Place } from "@/data/places";
import { foodItemsData, type FoodItem } from "@/data/food";
import { walksData, type Walk } from "@/data/walks";
import { neighbourhoodsData } from "@/data/stays";
import type {
  TripPreferences,
  Itinerary,
  Day,
  DayPeriod,
  ItineraryItem,
  DurationOption,
  RecommendationSummary,
} from "@/types/itinerary";

// Helper: Map duration option to integer days count
export function parseDurationDays(duration: DurationOption): number {
  switch (duration) {
    case "1-day":
      return 1;
    case "2-days":
      return 2;
    case "3-days":
      return 3;
    case "4-days":
      return 4;
    case "5-plus-days":
      return 5;
    default:
      return 3;
  }
}

// Scoring: Score places based on preferences
export function scorePlace(place: Place, prefs: TripPreferences): number {
  let score = 0;

  // 1. Matches user interests
  prefs.interests.forEach((interest) => {
    if (interest === "temples" && place.category === "Temple") score += 6;
    if (interest === "ganga" && place.category === "Ghat") score += 6;
    if (interest === "history" && (place.category === "Heritage" || place.category === "Sarnath")) score += 5;
    if (interest === "culture" && (place.category === "Culture" || place.tags.includes("Cultural"))) score += 5;
    if (interest === "photography" && (place.tags.includes("Photography") || place.category === "Ghat")) score += 4;
    if (interest === "hidden" && place.category === "Hidden Kashi") score += 6;
    if (interest === "shopping" && place.category === "Markets") score += 5;
  });

  // 2. Priority boost
  if (prefs.priority === "spirituality" && place.category === "Temple") score += 8;
  if (prefs.priority === "ganga" && place.category === "Ghat") score += 8;
  if (prefs.priority === "discovery" && place.category === "Hidden Kashi") score += 7;
  if (prefs.priority === "culture" && (place.category === "Heritage" || place.category === "Culture")) score += 7;

  // 3. Traveller type nuances
  if ((prefs.travellerType === "Parents" || prefs.travellerType === "Pilgrimage") && place.category === "Temple") {
    score += 5;
  }
  if (prefs.travellerType === "Solo" && (place.category === "Hidden Kashi" || place.category === "Ghat")) {
    score += 4;
  }

  // 4. Base area proximity boost
  if (prefs.baseArea && place.nearbySlugs.some((slug) => slug.includes(prefs.baseArea!))) {
    score += 3;
  }

  // 5. Featured landmark weight
  if (place.featured) score += 3;

  return score;
}

// Scoring: Score foods based on preferences
export function scoreFood(food: FoodItem, prefs: TripPreferences): number {
  let score = 0;

  if (prefs.interests.includes("food")) score += 5;
  if (prefs.priority === "food") score += 8;

  if (prefs.budget === "budget" && food.priceLabel.includes("₹")) score += 3;
  if (prefs.budget === "premium" && (food.type === "restaurant" || food.type === "cafe")) score += 3;

  if (food.featured) score += 2;
  return score;
}

// Scoring: Score walks based on preferences
export function scoreWalk(walk: Walk, prefs: TripPreferences): number {
  let score = 0;

  if (prefs.interests.includes("sunrise") && walk.timeOfDay.includes("Sunrise")) score += 5;
  if (prefs.interests.includes("food") && walk.category === "Food") score += 6;
  if (prefs.interests.includes("temples") && walk.category === "Spiritual") score += 6;
  if (prefs.interests.includes("hidden") && walk.category === "Hidden Kashi") score += 6;
  if (prefs.interests.includes("history") && walk.category === "Heritage") score += 6;

  if (prefs.pace === "slow" && walk.difficulty === "Easy") score += 4;
  if (prefs.pace === "packed" && (walk.stops.length >= 7 || walk.difficulty === "Moderate")) score += 3;

  return score;
}

// Format readable labels for trip summary
function getReadableSummary(prefs: TripPreferences, daysCount: number) {
  const interestMap: Record<string, string> = {
    temples: "Temples",
    ganga: "Ganga",
    food: "Food",
    history: "History",
    culture: "Culture",
    photography: "Photography",
    shopping: "Shopping",
    hidden: "Hidden Kashi",
    sunrise: "Sunrise",
    evening: "Evening",
  };

  const areaMap: Record<string, string> = {
    "assi-ghat": "Assi Ghat",
    godowlia: "Godowlia",
    "old-kashi": "Old Kashi",
    sarnath: "Sarnath",
    cantonment: "Cantonment",
    lanka: "Lanka",
    "not-decided": "Flexible / Not Decided",
  };

  return {
    durationDays: daysCount,
    travellerLabel: prefs.travellerType,
    paceLabel:
      prefs.pace === "slow"
        ? "Slow & Relaxed"
        : prefs.pace === "packed"
        ? "Packed & Immersive"
        : "Balanced & Comfortable",
    interestsLabels: prefs.interests.map((i) => interestMap[i] || i),
    priorityLabel: prefs.priority.toUpperCase(),
    baseAreaLabel: prefs.baseArea ? areaMap[prefs.baseArea] : undefined,
  };
}

// Helper: Build structured days
function buildDays(prefs: TripPreferences, daysCount: number): Day[] {
  const isPaceSlow = prefs.pace === "slow";
  const isPacePacked = prefs.pace === "packed";
  const isSeniorOrFamily =
    prefs.travellerType === "Parents" || prefs.travellerType === "Family";

  const days: Day[] = [];

  // ==================== DAY 1: SACRED GANGA & OLD CITY ====================
  const day1Morning: ItineraryItem[] = [
    {
      id: "d1-item-1",
      time: "05:45 AM",
      title: "Sunrise Wooden Rowboat & Subah-e-Banaras",
      category: "Ganga",
      description:
        "Watch the morning mist lift as golden dawn rays wash over eighty-four stone ghats. Priests blow conch shells and pilgrims offer marigold diyas into the sacred stream.",
      image: "/images/kashi-sunrise-ghats.jpg",
      alt: "Quiet wooden rowboat drifting along the Varanasi ghats at sunrise",
      location: "Assi Ghat to Dashashwamedh Ghat",
      duration: "~1.5 hours",
      placeSlug: "assi-ghat",
      tags: ["Dawn", "River", "Iconic"],
      tips: "Pre-book a traditional wooden rowboat rather than a noisy motorboat for pure tranquility.",
    },
    {
      id: "d1-item-2",
      time: "08:00 AM",
      title: "Traditional Kadai Kachori & Jalebi Breakfast",
      category: "Food",
      description:
        "Savour freshly fried hing-potato lentil kachoris served with piping hot coiled jalebis fried in desi ghee straight from the iron cauldron.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
      alt: "Hot fresh kachori and syrupy jalebis in an old Varanasi food lane",
      location: "Thatheri Bazar / Kachori Gali",
      duration: "~45 mins",
      foodSlug: "kachori-sabzi",
      tags: ["Breakfast", "Signature Flavours"],
    },
  ];

  if (!isPaceSlow) {
    day1Morning.push({
      id: "d1-item-3",
      time: "09:30 AM",
      title: "Kashi Vishwanath Dham Corridor",
      category: "Temple",
      description:
        "Pay reverence at the golden-spired Jyotirlinga of Lord Shiva. Walk through the newly restored sandstone promenade linking the inner sanctum directly to the river steps.",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80",
      alt: "Golden dome and grand sandstone courtyard of Kashi Vishwanath Dham",
      location: "Vishwanath Corridor, Lahori Tola",
      duration: "~1.5 hours",
      placeSlug: "kashi-vishwanath",
      tags: ["Jyotirlinga", "Sacred", "Corridor"],
      tips: "Secure lockers are available outside. Avoid carrying bags or electronic gadgets.",
    });
  }

  const day1Afternoon: ItineraryItem[] = [];
  if (isPacePacked) {
    day1Afternoon.push({
      id: "d1-item-3b",
      time: "01:30 PM",
      title: "Rustic Baati Chokha Lunch",
      category: "Food",
      description:
        "Sattu-filled wheat dough balls baked over charcoal coals, crushed into pure desi ghee and served alongside smoky charred brinjal chokha.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
      alt: "Traditional Baati Chokha meal served with desi ghee",
      location: "Sigra / Godowlia quarter",
      duration: "~1 hour",
      foodSlug: "baati-chokha",
      tags: ["Lunch", "Traditional"],
    });
  }

  day1Afternoon.push({
    id: "d1-item-4",
    time: isPacePacked ? "03:15 PM" : "03:30 PM",
    title: "Old Kashi Galli Stroll & Silk Weaving Quarters",
    category: "Walk",
    description:
      "Stroll the thousand-year-old stone lanes where motor vehicles cannot enter. Browse brass metalcraft shops and watch family silk handlooms at work.",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=1000&q=80",
    alt: "Narrow pedestrian galli of old Varanasi with historical buildings",
    location: "Chaukhamba to Godowlia",
    duration: "~1.5 hours",
    walkSlug: "old-kashi-walk",
    placeSlug: "godowlia-market",
    tags: ["Old City", "Gallis", "Heritage"],
  });

  const day1Evening: ItineraryItem[] = [
    {
      id: "d1-item-5",
      time: "06:30 PM",
      title: "Grand Evening Ganga Aarti at Dashashwamedh",
      category: "Ganga",
      description:
        "Witness the synchronized choreography of multi-tiered brass oil lamps, wafting sandalwood incense, and rhythmic Vedic chants ringing across the holy river.",
      image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80",
      alt: "Evening Ganga Aarti ceremony with illuminated brass lamps at Dashashwamedh Ghat",
      location: "Dashashwamedh Ghat",
      duration: "~1 hour",
      placeSlug: "dashashwamedh-ghat",
      tags: ["Aarti", "Evening", "Sacred Ritual"],
      tips: "Arrive 45 minutes early for front stone steps, or rent a quiet stationary wooden boat on the river.",
    },
    {
      id: "d1-item-6",
      time: "08:15 PM",
      title: "Sizzling Banarasi Tamatar Chaat & Meetha Paan",
      category: "Food",
      description:
        "Indulge in mashed spiced tomatoes sizzling in ghee, topped with crispy namakpare wafers, followed by an aromatic silver-leaf Maghai paan.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
      alt: "Authentic Banarasi Tamatar Chaat served in terracotta bowl",
      location: "Godowlia Crossing",
      duration: "~45 mins",
      foodSlug: "tamatar-chaat",
      tags: ["Street Food", "Dinner Delight"],
    },
  ];

  days.push({
    dayNumber: 1,
    title: "Sacred Dawn & The Heart of the Old City",
    theme: "Riverfront sunrise, timeless gallis, and grand evening aarti",
    summary:
      "Begin with misty sunrise boating along the stone ghats, explore Vishwanath corridor, and finish with the world-renowned Ganga Aarti.",
    periods: [
      { period: "MORNING", timeSlot: "05:45 AM – 12:00 PM", items: day1Morning },
      { period: "AFTERNOON", timeSlot: "01:00 PM – 05:00 PM", items: day1Afternoon },
      { period: "EVENING", timeSlot: "06:00 PM – 09:30 PM", items: day1Evening },
    ],
    routeFlow: [
      "Assi Ghat",
      "Kachori Gali",
      "Kashi Vishwanath",
      "Chaukhamba",
      "Dashashwamedh Ghat",
    ],
  });

  if (daysCount >= 2) {
    // ==================== DAY 2: TEMPLES, MUSIC & CULINARY TRAIL ====================
    const day2Morning: ItineraryItem[] = [
      {
        id: "d2-item-1",
        time: "07:30 AM",
        title: "Kal Bhairav Temple Darshan",
        category: "Temple",
        description:
          "Seek the protective blessings of the Kotwal (divine magistrate) of Kashi. Receive the sacred black silk thread blessed at the ancient sanctum.",
        image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=1000&q=80",
        alt: "Atmospheric sanctum of Kal Bhairav Temple with devotees and lamps",
        location: "Maidagin / Visheshwarganj",
        duration: "~1 hour",
        placeSlug: "kal-bhairav",
        tags: ["Kotwal", "Ancient Guardian"],
      },
      {
        id: "d2-item-2",
        time: "09:00 AM",
        title: "Clay-Kulhad Malai Lassi & Peda",
        category: "Food",
        description:
          "Thick, hand-churned sweet curd served in earthen pots, crowned with generous thick rabdi cream and crushed pistachios.",
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=1000&q=80",
        alt: "Thick creamy Banarasi lassi in an earthenware kulhad",
        location: "Chowk / Blue Lassi lane",
        duration: "~45 mins",
        foodSlug: "banarasi-lassi",
        tags: ["Lassi", "Chowk"],
      },
    ];

    if (!isPaceSlow) {
      day2Morning.push({
        id: "d2-item-2b",
        time: "10:15 AM",
        title: "Sankat Mochan Hanuman Temple",
        category: "Temple",
        description:
          "Founded by saint-poet Goswami Tulsidas. Listen to serene continuous Ramayana chanting under old sacred neem trees and sample pure besan laddoos.",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80",
        alt: "Peaceful temple courtyard with devotees at Sankat Mochan",
        location: "Saket Nagar, Lanka",
        duration: "~1 hour",
        placeSlug: "sankat-mochan",
        tags: ["Hanuman", "Tulsidas", "Serene"],
      });
    }

    const day2Afternoon: ItineraryItem[] = [
      {
        id: "d2-item-3",
        time: "02:30 PM",
        title: "Man Mandir Astronomical Palace & Jantar Mantar",
        category: "Heritage",
        description:
          "Explore the 16th-century Rajput palace with rooftop astronomical dials erected by Maharaja Sawai Jai Singh overlooking the curving Ganga.",
        image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80",
        alt: "Historic rooftop masonry observatory overlooking the holy river",
        location: "Man Mandir Ghat",
        duration: "~1 hour",
        placeSlug: "man-mandir-ghat",
        walkSlug: "heritage-walk",
        tags: ["Observatory", "Rajput Heritage"],
      },
    ];

    if (isPacePacked || prefs.interests.includes("shopping")) {
      day2Afternoon.push({
        id: "d2-item-3b",
        time: "04:00 PM",
        title: "Authentic Banarasi Brocade Silk Workshop",
        category: "Shopping",
        description:
          "Visit generational master weavers creating handloom sarees with silver and gold zari threads in ancient family workshop havelis.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
        alt: "Banarasi silk weaving on traditional wooden jacquard loom",
        location: "Madanpura / Chowk weavers quarter",
        duration: "~1 hour",
        tags: ["Handloom", "Silk", "Artisan"],
      });
    }

    const day2Evening: ItineraryItem[] = [
      {
        id: "d2-item-4",
        time: "05:45 PM",
        title: "Twilight Heritage Walk & Scindia Leaning Temple",
        category: "Walk",
        description:
          "Walk past picturesque Manikarnika and Scindia ghats as dusk sets in. Admire the partially submerged Shiva temple tilted gently into the river.",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=80",
        alt: "Scindia Ghat leaning temple silhouetted against twilight river",
        location: "Scindia to Panchganga Ghats",
        duration: "~1.5 hours",
        walkSlug: "heritage-walk",
        placeSlug: "scindia-ghat",
        tags: ["Leaning Temple", "Twilight"],
      },
      {
        id: "d2-item-5",
        time: "07:45 PM",
        title: "Assi Ghat Rooftop Dinner & Classical Music",
        category: "Culture",
        description:
          "Dine overlooking the southern river bend while listening to acoustic sitar and tabla recitals that echo Varanasi's classical musical pedigree.",
        image: "/images/kashi-sunrise-ghats.jpg",
        alt: "Gentle lamps and riverside atmosphere at Assi Ghat in the evening",
        location: "Assi Ghat Riverfront",
        duration: "~1.5 hours",
        placeSlug: "assi-ghat",
        tags: ["Music", "Dinner", "River Breeze"],
      },
    ];

    days.push({
      dayNumber: 2,
      title: "Guardian Sanctums & Palace Architecture",
      theme: "Ancient city guardians, astronomical marvels, and silk craftsmanship",
      summary:
        "Seek Kal Bhairav's blessings, explore the astronomical Jantar Mantar palace, discover silk looms, and experience peaceful southern ghats.",
      periods: [
        { period: "MORNING", timeSlot: "07:30 AM – 12:00 PM", items: day2Morning },
        { period: "AFTERNOON", timeSlot: "01:30 PM – 05:00 PM", items: day2Afternoon },
        { period: "EVENING", timeSlot: "05:45 PM – 09:30 PM", items: day2Evening },
      ],
      routeFlow: [
        "Kal Bhairav",
        "Chowk Lassi",
        "Man Mandir",
        "Scindia Ghat",
        "Assi Ghat",
      ],
    });
  }

  if (daysCount >= 3) {
    // ==================== DAY 3: SARNATH ENLIGHTENMENT & ARTISANS ====================
    const day3Morning: ItineraryItem[] = [
      {
        id: "d3-item-1",
        time: "08:30 AM",
        title: "Sarnath Dhamek Stupa & Deer Park Pilgrimage",
        category: "Heritage",
        description:
          "Visit the tranquil deer park where Lord Buddha gave his First Sermon over 2,500 years ago, turning the Wheel of Dharma (Dharmachakra).",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80",
        alt: "Towering ancient stone Dhamek Stupa in Sarnath surrounded by green gardens",
        location: "Sarnath (10 km north)",
        duration: "~2 hours",
        placeSlug: "dhamek-stupa",
        tags: ["Buddha", "Stupa", "Peaceful"],
        tips: "A calm contrast to the high energy of old Kashi ghats.",
      },
      {
        id: "d3-item-2",
        time: "11:00 AM",
        title: "Sarnath Archaeological Museum & Ashoka Lion Capital",
        category: "Heritage",
        description:
          "Examine India’s national emblem — the polished sandstone Lion Capital of Ashoka from 250 BCE, alongside masterwork Buddhist stone sculptures.",
        image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80",
        alt: "Carved ancient Ashoka pillar and artefacts at Sarnath museum",
        location: "Museum Road, Sarnath",
        duration: "~1.5 hours",
        placeSlug: "sarnath-museum",
        tags: ["Museum", "History", "National Emblem"],
      },
    ];

    const day3Afternoon: ItineraryItem[] = [
      {
        id: "d3-item-3",
        time: "02:30 PM",
        title: "Thai & Tibetan Monasteries Walk",
        category: "Culture",
        description:
          "Stroll through quiet international monasteries featuring serene golden Buddha statues, painted Tibetan thangkas, and fragrant incense gardens.",
        image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=1000&q=80",
        alt: "Intricately decorated Buddhist monastery pagoda and temple bells in Sarnath",
        location: "Sarnath monastic quarter",
        duration: "~1 hour",
        placeSlug: "tibetan-monastery",
        tags: ["Monastery", "Serene"],
      },
    ];

    const day3Evening: ItineraryItem[] = [
      {
        id: "d3-item-4",
        time: "05:00 PM",
        title: "Chet Singh Fort Ghat & Sunset Overlook",
        category: "Heritage",
        description:
          "Observe the grand fortress ramparts constructed by Maharaja Chet Singh in the 18th century, lit with amber hues by the setting sun.",
        image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80",
        alt: "Monumental stone fortress of Chet Singh rising beside the Ganga",
        location: "Chet Singh Ghat",
        duration: "~1 hour",
        placeSlug: "chet-singh-ghat",
        walkSlug: "sunrise-ganga-walk",
        tags: ["Fort", "Sunset"],
      },
      {
        id: "d3-item-5",
        time: "07:00 PM",
        title: "Quiet Subah-e-Banaras Ghat Aarti at Assi",
        category: "Ganga",
        description:
          "Conclude your 3-day pilgrimage with the intimate, quieter evening river aarti at Assi Ghat, reflecting on your transformative journey.",
        image: "/images/kashi-sunrise-ghats.jpg",
        alt: "Devotees gathering peacefully by the river steps at dusk",
        location: "Assi Ghat",
        duration: "~1.5 hours",
        placeSlug: "assi-ghat",
        foodSlug: "banarasi-tea",
        tags: ["Aarti", "Farewell Reflection"],
      },
    ];

    days.push({
      dayNumber: 3,
      title: "Buddhist Wisdom, Monasteries & Serene Fortresses",
      theme: "The serenity of Sarnath, ancient stupas, and peaceful sunset ghats",
      summary:
        "Travel to Sarnath where Buddha gave his first sermon, examine Ashoka’s lion capital, and enjoy a quiet sunset at Chet Singh fort.",
      periods: [
        { period: "MORNING", timeSlot: "08:30 AM – 01:00 PM", items: day3Morning },
        { period: "AFTERNOON", timeSlot: "02:30 PM – 04:30 PM", items: day3Afternoon },
        { period: "EVENING", timeSlot: "05:00 PM – 08:30 PM", items: day3Evening },
      ],
      routeFlow: [
        "Dhamek Stupa",
        "Sarnath Museum",
        "Tibetan Monastery",
        "Chet Singh Ghat",
        "Assi Ghat",
      ],
    });
  }

  if (daysCount >= 4) {
    // ==================== DAY 4: ROYAL FORTS & DEEP HERITAGE ====================
    days.push({
      dayNumber: 4,
      title: "Royal Fortresses & River Confluences",
      theme: "Across the river to Ramnagar Fort, antique carriages, and sacred confluences",
      summary:
        "Cross the pontoon bridge to the 18th-century royal seat of the Kashi Naresh at Ramnagar, view royal vintage cars, and explore Panchganga Ghat.",
      periods: [
        {
          period: "MORNING",
          timeSlot: "09:00 AM – 01:00 PM",
          items: [
            {
              id: "d4-item-1",
              time: "09:30 AM",
              title: "Ramnagar Fort & Royal Armoury Museum",
              category: "Heritage",
              description:
                "The sandstone stronghold of the Maharajas of Varanasi across the river. Houses vintage ivory palanquins, bejewelled swords, and a 19th-century astronomical clock.",
              image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80",
              alt: "Sandstone river fort of Ramnagar with wooden boats moored below",
              location: "Ramnagar, across the Ganga",
              duration: "~2.5 hours",
              tags: ["Royal", "Fortress", "Museum"],
            },
            {
              id: "d4-item-2",
              time: "12:15 PM",
              title: "Shivprasad Lassi of Ramnagar",
              category: "Food",
              description:
                "The legendary roadside shop renowned for thick cream lassi served in massive clay handis with pure rabdi.",
              image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=1000&q=80",
              alt: "Rich traditional lassi served outside Ramnagar fort",
              location: "Outside Ramnagar Fort Gate",
              duration: "~30 mins",
              foodSlug: "banarasi-lassi",
              tags: ["Lassi", "Iconic Stop"],
            },
          ],
        },
        {
          period: "AFTERNOON",
          timeSlot: "02:30 PM – 05:00 PM",
          items: [
            {
              id: "d4-item-3",
              time: "03:00 PM",
              title: "Panchganga Ghat & Confluence Steps",
              category: "Ganga",
              description:
                "Where five sacred rivers meet according to lore. Climb the stone flights beneath the grand stone terrace of Alamgir Mosque.",
              image: "/images/kashi-sunrise-ghats.jpg",
              alt: "Stone pavilions and soaring temple steps along the northern ghats",
              location: "Panchganga Ghat",
              duration: "~1.5 hours",
              placeSlug: "panchganga-ghat",
              walkSlug: "heritage-walk",
              tags: ["Confluence", "Heritage"],
            },
          ],
        },
        {
          period: "EVENING",
          timeSlot: "05:30 PM – 08:30 PM",
          items: [
            {
              id: "d4-item-4",
              time: "06:00 PM",
              title: "Sunset Wooden Boat from North to South Ghats",
              category: "Ganga",
              description:
                "Float past the entire 5 km river crescent at sunset as temple spires silhouette against purple twilight skies.",
              image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=80",
              alt: "Panoramic sunset view over Varanasi ghats and temple spires",
              location: "Panchganga to Assi Ghat",
              duration: "~1.5 hours",
              placeSlug: "dashashwamedh-ghat",
              tags: ["Sunset Boat", "Panoramic"],
            },
          ],
        },
      ],
      routeFlow: [
        "Ramnagar Fort",
        "Ramnagar Lassi",
        "Panchganga Ghat",
        "Sunset River Voyage",
      ],
    });
  }

  if (daysCount >= 5) {
    // ==================== DAY 5: HIDDEN GALLIS & MUSICAL LEGACY ====================
    days.push({
      dayNumber: 5,
      title: "Artisans, Mystics & Secret Courtyards",
      theme: "Kabir’s verses, classical music academies, and bohemian lanes",
      summary:
        "Dive into Bengali Tola's artistic cafes, visit the ancient monastic courtyard of Jangambari Mutt, and explore Kabir Chaura's musical heritage.",
      periods: [
        {
          period: "MORNING",
          timeSlot: "08:00 AM – 12:00 PM",
          items: [
            {
              id: "d5-item-1",
              time: "08:30 AM",
              title: "Jangambari Mutt & Lingam Courtyard",
              category: "Hidden",
              description:
                "Visit one of the oldest monasteries in Kashi housing thousands of centuries-old stone Shiva lingams preserved in a quiet garden cloister.",
              image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80",
              alt: "Monastery cloister with thousands of stone Shiva lingams",
              location: "Jangambari, Godowlia",
              duration: "~1.5 hours",
              walkSlug: "hidden-kashi-walk",
              placeSlug: "jangambari-mutt",
              tags: ["Monastery", "Hidden", "Quiet"],
            },
            {
              id: "d5-item-2",
              time: "10:30 AM",
              title: "Bengali Tola Artists' Galli & Antiquarian Bookshops",
              category: "Walk",
              description:
                "Browse eclectic old bookstores, meet classical painters, and sip lemon ginger chai at tiny courtyard cafes tucked into bohemian lanes.",
              image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=80",
              alt: "Picturesque lane in Bengali Tola with artisan studios and painted doorways",
              location: "Bengali Tola Lane",
              duration: "~1.5 hours",
              walkSlug: "hidden-kashi-walk",
              placeSlug: "bengali-tola",
              tags: ["Art", "Books", "Bohemian"],
            },
          ],
        },
        {
          period: "AFTERNOON",
          timeSlot: "01:30 PM – 05:00 PM",
          items: [
            {
              id: "d5-item-3",
              time: "02:30 PM",
              title: "Kabir Chaura Classical Musicians' Quarter",
              category: "Culture",
              description:
                "Walk the ancestral home neighbourhood of saint-poet Kabir and legendary classical tabla and vocal maestros of the Banaras Gharana.",
              image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=1000&q=80",
              alt: "Historic musical heritage alley in Varanasi with carved stone doors",
              location: "Kabir Chaura",
              duration: "~1.5 hours",
              walkSlug: "hidden-kashi-walk",
              tags: ["Kabir", "Classical Music", "Gharana"],
            },
          ],
        },
        {
          period: "EVENING",
          timeSlot: "05:30 PM – 08:30 PM",
          items: [
            {
              id: "d5-item-4",
              time: "06:00 PM",
              title: "Farewell Ganga Contemplation & Floating Lamps",
              category: "Ganga",
              description:
                "Light a marigold and camphor lamp, offering your grateful prayers into the quiet waters of the Ganga as temple bells chime across the river.",
              image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80",
              alt: "Glowing evening river lamps floating gently on the holy Ganga",
              location: "Kedareswar Ghat steps",
              duration: "~1.5 hours",
              placeSlug: "kedar-ghat",
              tags: ["Farewell", "Diya", "Reflection"],
            },
          ],
        },
      ],
      routeFlow: [
        "Jangambari Mutt",
        "Bengali Tola",
        "Kabir Chaura",
        "Kedar Ghat Farewell",
      ],
    });
  }

  return days;
}

// Build contextual recommendations based on user selections
function buildRecommendations(
  prefs: TripPreferences,
  daysCount: number
): RecommendationSummary {
  // 1. Stay Area Recommendation
  let stayArea: RecommendationSummary["stayAreaRecommendation"];

  if (prefs.baseArea && prefs.baseArea !== "not-decided") {
    const found = neighbourhoodsData.find((n) => n.slug === prefs.baseArea);
    if (found) {
      stayArea = {
        name: found.name,
        slug: found.slug,
        description: found.tagline,
        reason: `Matches your chosen starting base for easy morning & evening access.`,
      };
    }
  } else {
    // Recommend based on traveller type & pace
    if (prefs.travellerType === "Parents" || prefs.travellerType === "Family") {
      stayArea = {
        name: "Godowlia & Central Ghats",
        slug: "godowlia",
        description: "Close to Kashi Vishwanath with easiest auto and rickshaw drop-off.",
        reason: "Recommended for family comfort, flat walking routes, and central access.",
      };
    } else if (prefs.travellerType === "Solo" || prefs.interests.includes("hidden")) {
      stayArea = {
        name: "Old Kashi & Central Ghats",
        slug: "old-kashi",
        description: "Deep within the pedestrian havelis thirty paces from the Ganga.",
        reason: "Recommended for immersive culture, quiet morning bells, and direct riverfront living.",
      };
    } else {
      stayArea = {
        name: "Assi Ghat & Southern Varanasi",
        slug: "assi-ghat",
        description: "Lively mornings, peaceful evenings, cafes, and open river access.",
        reason: "Recommended for slow mornings, cultural concerts, and relaxed riverfront access.",
      };
    }
  }

  // 2. Transport suggestions
  const transportSuggestions: RecommendationSummary["transportSuggestions"] = [];
  if (prefs.pace === "slow" || prefs.travellerType === "Solo") {
    transportSuggestions.push({
      mode: "Foot & Gentle Walking",
      reason: "Old city lanes and riverfront ghats are strictly pedestrian.",
      tip: "Wear comfortable walking shoes with good traction on polished stone.",
      icon: "footprints",
    });
    transportSuggestions.push({
      mode: "E-Rickshaw",
      reason: "Green, silent, and ideal for connecting hotel zones to pedestrian barriers.",
      tip: "Negotiate friendly shared rides or use app-guided landmarks.",
      icon: "zap",
    });
  } else {
    transportSuggestions.push({
      mode: "E-Rickshaw & Auto",
      reason: "Fastest way to traverse main roads between Godowlia, Sarnath, and Cantt.",
      tip: "Ask to drop off at Girjaghar crossing if approaching Godowlia.",
      icon: "zap",
    });
    transportSuggestions.push({
      mode: "Traditional Wooden Boat",
      reason: "Avoid street traffic completely by moving north-to-south via the Ganga.",
      tip: "Rowboats offer quiet serenity; motor boats are faster for longer hops.",
      icon: "ship",
    });
  }

  // 3. Must try foods (3 curated items)
  const mustTryFoods = [
    {
      name: "Kachori Sabzi & Jalebi",
      slug: "kachori-sabzi",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      area: "Thatheri Bazar",
      reason: "Essential Banarasi breakfast fried fresh in desi ghee.",
    },
    {
      name: "Banarasi Tamatar Chaat",
      slug: "tamatar-chaat",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      area: "Godowlia Crossing",
      reason: "A uniquely Banarasi savoury masterpiece served sizzling in clay donas.",
    },
    {
      name: "Clay-Kulhad Malai Lassi",
      slug: "banarasi-lassi",
      image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
      area: "Chowk & Assi",
      reason: "Velvety hand-churned sweet curd topped with thick rabdi.",
    },
  ];

  // 4. Suggested walks (2 items)
  const suggestedWalks = walksData
    .map((w) => ({
      name: w.name,
      slug: w.slug,
      image: w.image,
      distance: w.distance,
      duration: w.duration,
      score: scoreWalk(w, prefs),
      reason: `Tailored for your interest in ${w.category.toLowerCase()} and ${prefs.pace} pace.`,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);

  // 5. Suggested places
  const suggestedPlaces = placesData
    .map((p) => ({
      name: p.name,
      slug: p.slug,
      image: p.image,
      category: p.category,
      score: scorePlace(p, prefs),
      reason: `Highlights your preference for ${p.category.toLowerCase()} and cultural heritage.`,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return {
    stayAreaRecommendation: stayArea,
    transportSuggestions,
    mustTryFoods,
    suggestedWalks,
    suggestedPlaces,
  };
}

// Master deterministic generation function
export function generateItinerary(prefs: TripPreferences): Itinerary {
  const daysCount = parseDurationDays(prefs.duration);
  const summary = getReadableSummary(prefs, daysCount);
  const days = buildDays(prefs, daysCount);
  const recommendations = buildRecommendations(prefs, daysCount);

  const durationTitles: Record<number, string> = {
    1: "1 Day in Kashi",
    2: "2 Days in Kashi",
    3: "3 Days in Kashi",
    4: "4 Days in Kashi",
    5: "5 Days in Kashi",
  };

  const title = durationTitles[daysCount] || `${daysCount} Days in Kashi`;
  const subtitle = `${summary.paceLabel} • ${summary.travellerLabel} • ${summary.interestsLabels.slice(0, 3).join(" + ")}`;

  return {
    id: `kashi-trip-${Date.now()}`,
    createdAt: new Date().toISOString(),
    preferences: prefs,
    title,
    subtitle,
    summary,
    days,
    recommendations,
  };
}

// Quick Starter Plan Generator (No questions needed)
export function getQuickItinerary(days: 1 | 2 | 3): Itinerary {
  const durationKey: DurationOption =
    days === 1 ? "1-day" : days === 2 ? "2-days" : "3-days";

  const defaultPrefs: TripPreferences = {
    duration: durationKey,
    travellerType: "Couple",
    interests: ["temples", "ganga", "food", "history"],
    pace: "balanced",
    budget: "comfort",
    priority: "spirituality",
    baseArea: "godowlia",
  };

  return generateItinerary(defaultPrefs);
}
