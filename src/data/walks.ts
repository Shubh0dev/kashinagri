export interface WalkStop {
  id: string;
  order: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  approximateDuration?: string;
  placeSlug?: string;
  foodSlug?: string;
  tags?: string[];
}

export interface TransportOption {
  mode: string;
  description: string;
  tip: string;
  icon?: "footprints" | "zap" | "bike" | "car" | "ship";
}

export interface Walk {
  id: string;
  slug: string;
  name: string;
  category: "Sunrise" | "Spiritual" | "Food" | "Heritage" | "Photography" | "Ganga" | "Evening" | "Hidden Kashi";
  tagline: string;
  description: string;
  shortDescription: string;
  image: string;
  alt: string;
  distance: string; // e.g. "~2.8 km"
  duration: string; // e.g. "~2–3 hours"
  difficulty: "Easy" | "Moderate" | "Long";
  bestTime: string;
  timeOfDay: ("Sunrise" | "Morning" | "Afternoon" | "Evening")[];
  interests: ("Food" | "Temples" | "Ganga" | "Heritage" | "Photography" | "Hidden" | "Spiritual")[];
  tags: string[];
  stops: WalkStop[];
  nearbyStay: string[]; // neighbourhood or stay slugs
  nearbyFood: string[]; // food slugs
  transportToStart: {
    startLocation: string;
    options: TransportOption[];
  };
  featured?: boolean;
  storyHeading?: string;
  story: string;
}

export interface WalkCategoryItem {
  id: string;
  label: string;
  icon: string;
  categoryKey: Walk["category"] | "ALL";
}

export const WALK_CATEGORIES: WalkCategoryItem[] = [
  { id: "all", label: "ALL WALKS", icon: "🧭", categoryKey: "ALL" },
  { id: "sunrise", label: "SUNRISE", icon: "🌅", categoryKey: "Sunrise" },
  { id: "spiritual", label: "SPIRITUAL", icon: "🛕", categoryKey: "Spiritual" },
  { id: "food", label: "FOOD", icon: "🍜", categoryKey: "Food" },
  { id: "heritage", label: "HERITAGE", icon: "🏛️", categoryKey: "Heritage" },
  { id: "photography", label: "PHOTOGRAPHY", icon: "📸", categoryKey: "Photography" },
  { id: "ganga", label: "GANGA", icon: "🌊", categoryKey: "Ganga" },
  { id: "evening", label: "EVENING", icon: "🌙", categoryKey: "Evening" },
  { id: "hidden", label: "HIDDEN KASHI", icon: "👀", categoryKey: "Hidden Kashi" },
];

export const walksData: Walk[] = [
  // 1. OLD KASHI WALK
  {
    id: "old-kashi-walk",
    slug: "old-kashi-walk",
    name: "Old Kashi Walk",
    category: "Heritage",
    tagline: "Through the lanes of the old city.",
    shortDescription: "A journey through 3,000 years of living history in the stone labyrinth of old Varanasi.",
    description: "Wander through centuries of layered mythology, visiting spice quarters, 300-year-old mutts, traditional brass craft lanes, and hidden Shiva shrines tucked away from motorized streets.",
    image: "/images/old-kashi-walk-lanes.jpg",
    alt: "Narrow stone-paved lanes and spice quarters of old Kashi leading to the ghats",
    distance: "~2.8 km",
    duration: "~2–3 hours",
    difficulty: "Easy",
    bestTime: "Morning / Late Afternoon",
    timeOfDay: ["Morning", "Afternoon", "Evening"],
    interests: ["Heritage", "Temples", "Ganga", "Hidden"],
    tags: ["Old City", "Gallis", "Heritage", "Temples", "Living Culture"],
    featured: true,
    storyHeading: "Why take this walk?",
    story: "The old city is not something to rush through. Its narrow lanes, temple bells, small shops and sudden glimpses of the Ganga reveal themselves slowly. Here, motor vehicles cannot enter. Every flagstone has been polished by millions of feet over millennia, leading you past family sweet shops, sacred bulls, centuries-old shrines, and the perpetual scent of burning camphor and marigolds.",
    stops: [
      {
        id: "stop-okw-1",
        order: 1,
        name: "Godowlia Crossing",
        slug: "godowlia-crossing",
        category: "Gateway & Market",
        description: "The bustling pedestrian threshold where the outer city ends and the ancient pedestrian labyrinth begins. Cycle-rickshaws, flower sellers, and bell chimes create an unforgettable entrance.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~15 mins",
        placeSlug: "godowlia-market",
        tags: ["Gateway", "Market", "Vibrant"],
      },
      {
        id: "stop-okw-2",
        order: 2,
        name: "Vishwanath Gali",
        slug: "vishwanath-gali",
        category: "Sacred Lane",
        description: "One of the most famous gallis in northern India. Lined with shops selling brass pooja bells, rudraksha rosaries, Varanasi silk scarves, and fresh flower garlands.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~25 mins",
        placeSlug: "godowlia-market",
        foodSlug: "kachori-sabzi",
        tags: ["Shopping", "Spiritual", "Gallis"],
      },
      {
        id: "stop-okw-3",
        order: 3,
        name: "Kashi Vishwanath Dham Area",
        slug: "kashi-vishwanath-area",
        category: "Sanctum Sanctorum",
        description: "The sacred epicenter of Shiva's city. Notice the harmonious blend of ancient stone spires and the sweeping sandstone corridor that opens directly toward the Ganga.",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~45 mins",
        placeSlug: "kashi-vishwanath",
        tags: ["Jyotirlinga", "Sacred", "Corridor"],
      },
      {
        id: "stop-okw-4",
        order: 4,
        name: "Thatheri Spice & Brass Bazar",
        slug: "thatheri-bazar",
        category: "Artisanal Quarter",
        description: "Follow the rhythmic clink of metal hammer on brass. The metalsmiths and spice traders here have maintained their traditional family storefronts for over four centuries.",
        image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~20 mins",
        foodSlug: "malaiyo",
        tags: ["Craft", "Heritage", "Spice"],
      },
      {
        id: "stop-okw-5",
        order: 5,
        name: "Chaukhamba Gallis & Hidden Shrines",
        slug: "chaukhamba-gallis",
        category: "Ancient Neighborhood",
        description: "Deep within the Chaukhamba quarter, light filters through overhanging wooden balconies and ancient stone lintels where hidden neighborhood Shiva lingams are worshipped daily.",
        image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~25 mins",
        placeSlug: "chaukhamba-lanes",
        tags: ["Architecture", "Hidden", "Alleyways"],
      },
      {
        id: "stop-okw-6",
        order: 6,
        name: "Manikarnika Ghat Overlook",
        slug: "manikarnika-overlook",
        category: "Sacred Cremation Riverbank",
        description: "Observe respectfully from the upper stone pavilions as the eternal fires burn without pause, embodying the ultimate Hindu philosophy of liberation (Moksha) on the riverbank.",
        image: "/images/kashi-sunrise-ghats.jpg",
        approximateDuration: "~20 mins",
        placeSlug: "manikarnika-ghat",
        tags: ["Moksha", "Sacred", "Riverbank"],
      },
      {
        id: "stop-okw-7",
        order: 7,
        name: "Scindia & Mir Ghats",
        slug: "scindia-mir-ghats",
        category: "Riverside Architecture",
        description: "Emerge from the shadowed alleys onto the vast stone steps. View the iconic partially submerged Shiva temple of Scindia Ghat tilted into the sacred waters.",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~20 mins",
        placeSlug: "scindia-ghat",
        tags: ["Riverside", "Stone Steps", "Iconic"],
      },
      {
        id: "stop-okw-8",
        order: 8,
        name: "Dashashwamedh Ghat Riverfront",
        slug: "dashashwamedh-riverfront",
        category: "Grand Finale",
        description: "Conclude your walk at the grand amphitheater of Kashi life. Settle on the wide stone steps as the afternoon softens and the river breeze brings relief.",
        image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~25 mins",
        placeSlug: "dashashwamedh-ghat",
        foodSlug: "tamatar-chaat",
        tags: ["Ghat", "Evening", "Finale"],
      },
    ],
    nearbyStay: ["old-kashi", "godowlia"],
    nearbyFood: ["kachori-sabzi", "malaiyo", "tamatar-chaat"],
    transportToStart: {
      startLocation: "Godowlia Crossing",
      options: [
        {
          mode: "Walk",
          description: "If staying in Old Kashi or near Dashashwamedh, simply walk down toward the clock tower.",
          tip: "Easiest and most atmospheric way to arrive.",
          icon: "footprints",
        },
        {
          mode: "E-rickshaw",
          description: "E-rickshaws run continuously from Cantt Railway Station and Sigra to the Godowlia pedestrian barrier.",
          tip: "Disembark at Girjaghar crossing if traffic is heavy.",
          icon: "zap",
        },
        {
          mode: "Auto / Taxi",
          description: "Autos drop passengers at the Girjaghar church intersection, 300m before Godowlia proper.",
          tip: "Motor vehicles are restricted beyond Girjaghar during daytime.",
          icon: "car",
        },
      ],
    },
  },

  // 2. SUNRISE GANGA WALK
  {
    id: "sunrise-ganga-walk",
    slug: "sunrise-ganga-walk",
    name: "Sunrise Ganga Walk",
    category: "Sunrise",
    tagline: "Dawn over the stone crescent of the sacred river.",
    shortDescription: "Experience Kashi awakening as amber light washes over the ghats, sadhus pray, and boatmen push off into the river.",
    description: "Watch Kashi stir to life in the quiet golden morning light. Walk uninterrupted along the river crescent as sadhus meditate, classical vocalists rehearse, and bells ring out across the mist.",
    image: "/images/kashi-sunrise-ghats.jpg",
    alt: "Peaceful morning glow over the holy Ganga river at Assi Ghat during sunrise",
    distance: "~3.5 km",
    duration: "~2 hours",
    difficulty: "Easy",
    bestTime: "Sunrise (5:15 AM – 7:30 AM)",
    timeOfDay: ["Sunrise", "Morning"],
    interests: ["Ganga", "Photography", "Spiritual", "Heritage"],
    tags: ["Sunrise", "Ghats", "Subah-e-Banaras", "Morning Chants", "River"],
    featured: true,
    storyHeading: "Why take this walk?",
    story: "Mark Twain remarked that Benares is older than history itself, but its true magic is reborn every morning. Walking the ghats at dawn lets you feel the city breathing. The water reflects shimmering pink and gold, priests light brass lamps for Subah-e-Banaras, wrestlers practice in the traditional akharas, and rowboats drift quietly into the misty horizon without motor noise.",
    stops: [
      {
        id: "stop-sgw-1",
        order: 1,
        name: "Assi Ghat at First Light",
        slug: "assi-ghat-dawn",
        category: "Subah-e-Banaras",
        description: "Arrive before sunrise for the morning Vedic chants, youth yogis stretching on stone platforms, and classical flute melodies filling the cool river air.",
        image: "/images/kashi-sunrise-ghats.jpg",
        approximateDuration: "~25 mins",
        placeSlug: "assi-ghat",
        foodSlug: "banarasi-tea",
        tags: ["Dawn", "Yogic", "Spiritual"],
      },
      {
        id: "stop-sgw-2",
        order: 2,
        name: "Tulsi Ghat & Akhara",
        slug: "tulsi-ghat-akhara",
        category: "Literary & Traditional Wrestling",
        description: "The sanctuary where poet Goswami Tulsidas composed the Ramcharitmanas. Glance into the red-soil Swaminath Akhara where traditional wrestlers train at dawn.",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~20 mins",
        placeSlug: "tulsi-ghat",
        tags: ["Literature", "Akhara", "Heritage"],
      },
      {
        id: "stop-sgw-3",
        order: 3,
        name: "Chet Singh Fort Ghat",
        slug: "chet-singh-ghat",
        category: "Fortress Ramparts",
        description: "Towering castellated stone bastions rising dramatically above the riverbank. The dramatic masonry looks spectacular in the morning side-light.",
        image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~15 mins",
        placeSlug: "chet-singh-ghat",
        tags: ["Fort", "Historic", "Photo Spot"],
      },
      {
        id: "stop-sgw-4",
        order: 4,
        name: "Harishchandra Ghat",
        slug: "harishchandra-ghat",
        category: "Ancient Riverbank",
        description: "One of the two sacred cremation ghats of Kashi, named after legendary King Harishchandra who served here for the sake of truth.",
        image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~15 mins",
        placeSlug: "harishchandra-ghat",
        tags: ["Sacred", "Mythology"],
      },
      {
        id: "stop-sgw-5",
        order: 5,
        name: "Kedar Ghat & Red-White Striped Steps",
        slug: "kedar-ghat",
        category: "Southern Pilgrim Sanctuary",
        description: "Instantly recognizable by its vivid red and white painted steps and South Indian architectural shrines dedicated to Lord Kedareshwar.",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~20 mins",
        placeSlug: "kedar-ghat",
        tags: ["Colours", "Devotion", "South Indian"],
      },
      {
        id: "stop-sgw-6",
        order: 6,
        name: "Man Mandir Ghat & Observatory",
        slug: "man-mandir-ghat",
        category: "Astronomical Heritage",
        description: "Built by Raja Man Singh of Amber in 1600. Look up at the delicate stone jharokhas and Sawai Jai Singh's sun dials catching the early light.",
        image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~15 mins",
        placeSlug: "man-mandir-ghat",
        tags: ["Astronomy", "Palace", "Architecture"],
      },
      {
        id: "stop-sgw-7",
        order: 7,
        name: "Dashashwamedh Ghat Morning Finish",
        slug: "dashashwamedh-ghat-morning",
        category: "Grand Conclusion",
        description: "End your morning route where the city gathers. Sip a hot clay kulhad chai on the stone steps while watching the river bathed in brilliant golden sun.",
        image: "/images/kashi-sunrise-ghats.jpg",
        approximateDuration: "~20 mins",
        placeSlug: "dashashwamedh-ghat",
        foodSlug: "banarasi-lassi",
        tags: ["Riverfront", "Morning Chai", "Arrival"],
      },
    ],
    nearbyStay: ["assi-ghat", "old-kashi"],
    nearbyFood: ["banarasi-lassi", "kachori-sabzi"],
    transportToStart: {
      startLocation: "Assi Ghat Riverfront",
      options: [
        {
          mode: "Walk",
          description: "If staying in the Assi or Nagwa neighbourhoods, stroll directly down the paved street into the ghat arena.",
          tip: "Assi is very walkable with wide approach streets.",
          icon: "footprints",
        },
        {
          mode: "Auto / E-rickshaw",
          description: "Ask any auto or e-rickshaw for 'Assi Ghat Chowk'. The drop-off is merely 40 metres from the river steps.",
          tip: "Very quiet at 5:00 AM; pre-book or use hotel-assisted rickshaws.",
          icon: "zap",
        },
        {
          mode: "Wooden Rowboat",
          description: "If staying along central ghats, take a sunrise rowboat down to Assi and begin walking northward.",
          tip: "A magnificent way to combine boat ride and walking.",
          icon: "ship",
        },
      ],
    },
  },

  // 3. KASHI FOOD WALK
  {
    id: "kashi-food-walk",
    slug: "kashi-food-walk",
    name: "Kashi Food Walk",
    category: "Food",
    tagline: "Taste the flavours that define the ancient soul.",
    shortDescription: "A curated gastronomic pilgrimage through four generations of secret spice blends, crisp kachoris, and creamy rabdi.",
    description: "A curated gastronomic pilgrimage through Kashi's oldest culinary dynasties. Taste authentic chaat, velvety lassi, freshly fried kachoris, and artisanal sweets handed down across 4 generations.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85",
    alt: "Legendary Banarasi street food spread with sizzling kachoris and clay pots",
    distance: "~2.2 km",
    duration: "~2.5–3 hours",
    difficulty: "Moderate",
    bestTime: "Morning (7:30 AM – 10:30 AM) or Evening (5:00 PM – 8:30 PM)",
    timeOfDay: ["Morning", "Evening"],
    interests: ["Food", "Heritage", "Hidden"],
    tags: ["Street Food", "Chaat", "Lassi", "Kachori", "Malaiyo", "Paan"],
    featured: true,
    storyHeading: "Why take this walk?",
    story: "In Kashi, eating is not a casual routine — it is a daily ceremony steeped in pure desi ghee, clay kulhads, and handed-down recipes that haven't shifted an ounce in eighty years. Every lane has its own champion: one family fries the crispest lentil kachori, another churns sweet dahi so dense a spoon stands upright, and an alleyway sweet maker whips winter morning dew into ethereal saffron clouds.",
    stops: [
      {
        id: "stop-kfw-1",
        order: 1,
        name: "Kachori Gali Morning Kadai",
        slug: "kachori-gali-kadai",
        category: "Breakfast Institution",
        description: "Watch master halwais drop puffed lentil puris into giant bubbling iron kadais. Served piping hot with spicy hing-aloo sabzi and sweet jalebis.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~30 mins",
        foodSlug: "kachori-sabzi",
        tags: ["Kachori", "Breakfast", "Desi Ghee"],
      },
      {
        id: "stop-kfw-2",
        order: 2,
        name: "Thatheri Gali Artisanal Sweets",
        slug: "thatheri-gali-sweets",
        category: "Confectionery Quarter",
        description: "Taste traditional launglata — a crisp clove-pinned pastry oozing hot mawa syrup, alongside fresh warm rabdi served in terracotta cups.",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~25 mins",
        foodSlug: "malaiyo",
        tags: ["Sweets", "Rabdi", "Traditional"],
      },
      {
        id: "stop-kfw-3",
        order: 3,
        name: "Chowk & Blue Lassi Quarter",
        slug: "chowk-blue-lassi",
        category: "Velvety Refreshment",
        description: "Hand-whipped curd served thick in porous clay pots, piled high with rich malai cream and sliced pistachios. Refreshing and deeply satisfying.",
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~25 mins",
        foodSlug: "banarasi-lassi",
        tags: ["Lassi", "Clay Pots", "Chowk"],
      },
      {
        id: "stop-kfw-4",
        order: 4,
        name: "Chaukhamba Winter Malaiyo Lane",
        slug: "chaukhamba-malaiyo-lane",
        category: "Seasonal Marvel",
        description: "The holy grail of winter treats: raw milk frothed under open night dew into a featherlight cloud scented with saffron and cardamom.",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~20 mins",
        placeSlug: "chaukhamba-lanes",
        foodSlug: "malaiyo",
        tags: ["Malaiyo", "Winter Only", "Dessert"],
      },
      {
        id: "stop-kfw-5",
        order: 5,
        name: "Godowlia Chaat Hub (Kashi Chaat & Deena)",
        slug: "godowlia-chaat-hub",
        category: "Evening Culinary Icon",
        description: "Savour authentic Banarasi Tamatar Chaat — mashed spiced tomatoes sizzling in ghee, topped with crisp namakpare and lemon water syrup.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~35 mins",
        foodSlug: "tamatar-chaat",
        placeSlug: "godowlia-market",
        tags: ["Tamatar Chaat", "Spicy", "Godowlia"],
      },
      {
        id: "stop-kfw-6",
        order: 6,
        name: "Traditional Thandai Stop",
        slug: "traditional-thandai-stop",
        category: "Herbal Elixir",
        description: "Chilled milk ground with almonds, fennel, black pepper, rose petals, and watermelon seeds, pounded manually on heavy stone sil-batta.",
        image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~15 mins",
        foodSlug: "banarasi-lassi",
        tags: ["Thandai", "Herbal", "Traditional"],
      },
      {
        id: "stop-kfw-7",
        order: 7,
        name: "Keshav Paan Bhandar",
        slug: "keshav-paan-bhandar",
        category: "The Ceremonial Finish",
        description: "No food walk in Kashi is complete without a freshly folded Maghai meetha paan with gulkand, kattha, menthol, and silver foil, dissolving in your mouth.",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~15 mins",
        foodSlug: "banarasi-paan",
        tags: ["Paan", "Tradition", "Finish"],
      },
    ],
    nearbyStay: ["godowlia", "old-kashi"],
    nearbyFood: ["kachori-sabzi", "tamatar-chaat", "banarasi-lassi", "malaiyo", "banarasi-paan"],
    transportToStart: {
      startLocation: "Godowlia Roundabout",
      options: [
        {
          mode: "Walk",
          description: "Step right out of old-city accommodation straight into the food quarters.",
          tip: "Come on an empty stomach.",
          icon: "footprints",
        },
        {
          mode: "E-rickshaw",
          description: "Hop on an e-rickshaw from any station or hotel to Godowlia Chowk.",
          tip: "Most food stops are within pedestrian-only alleyways.",
          icon: "zap",
        },
      ],
    },
  },

  // 4. TEMPLE WALK
  {
    id: "temple-walk",
    slug: "temple-walk",
    name: "Temple Walk",
    category: "Spiritual",
    tagline: "Sacred spaces and ancient sanctums of the holy city.",
    shortDescription: "A reverent path connecting Kashi's primordial energy centres, from the Kotwal of Kashi to the golden spire of Vishwanath.",
    description: "Connect deeply with the sacred energy grid of Varanasi. Walk between the fiercest guardians and most gentle mother goddesses tucked inside centuries-old stone sanctums.",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=85",
    alt: "Intricately carved stone temple sanctum and flickering oil lamps in Kashi",
    distance: "~2.5 km",
    duration: "~2–3 hours",
    difficulty: "Easy",
    bestTime: "Early Morning (6:00 AM – 9:00 AM)",
    timeOfDay: ["Morning"],
    interests: ["Temples", "Spiritual", "Heritage"],
    tags: ["Temples", "Shiva", "Kal Bhairav", "Annapurna", "Jyotirlinga"],
    featured: false,
    storyHeading: "Why take this walk?",
    story: "Kashi is conceived as a living mandala of cosmic energies. Tradition holds that before entering the sanctum of Vishwanath, one must first seek permission from Kal Bhairav — the divine magistrate or Kotwal of the city. Walking this spiritual trail takes you off the noisy thoroughfares into peaceful inner courtyards echoing with Sanskrit chants, sacred conch sounds, and the scent of wild bilva leaves.",
    stops: [
      {
        id: "stop-tw-1",
        order: 1,
        name: "Kal Bhairav Temple",
        slug: "kal-bhairav-temple",
        category: "Guardian Sanctum",
        description: "The Kotwal (police chief) of Kashi. According to belief, all who visit Varanasi must register their presence here and receive the protective black thread.",
        image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~30 mins",
        placeSlug: "kal-bhairav",
        tags: ["Kotwal", "Fierce Guardian", "Spiritual"],
      },
      {
        id: "stop-tw-2",
        order: 2,
        name: "Maha Mritunjaya Temple",
        slug: "maha-mritunjaya-temple",
        category: "Sanctuary of Healing",
        description: "An ancient shrine dedicated to Shiva as the conqueror of death, where eternal lamps burn and devotees pray for vitality and recovery.",
        image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~20 mins",
        tags: ["Healing", "Ancient Mantras"],
      },
      {
        id: "stop-tw-3",
        order: 3,
        name: "Gopal Mandir Heritage Lane",
        slug: "gopal-mandir-lane",
        category: "Vaishnava Haven",
        description: "A serene Krishna sanctum located amidst the old Gujarati merchant settlement, showcasing distinct Haveli architecture and sweet devotion.",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~20 mins",
        tags: ["Krishna", "Haveli", "Quiet"],
      },
      {
        id: "stop-tw-4",
        order: 4,
        name: "Maa Annapurna Mandir",
        slug: "maa-annapurna-mandir",
        category: "Goddess of Nourishment",
        description: "The shrine of the benevolent mother goddess who feeds every living being in Kashi so that no soul in the holy city goes hungry.",
        image: "/images/kashi-sunrise-ghats.jpg",
        approximateDuration: "~25 mins",
        placeSlug: "annapurna-mandir",
        tags: ["Goddess", "Nourishment", "Sacred"],
      },
      {
        id: "stop-tw-5",
        order: 5,
        name: "Kashi Vishwanath Jyotirlinga",
        slug: "kashi-vishwanath-jyotirlinga",
        category: "Spiritual Climax",
        description: "The golden summit of your spiritual pilgrimage. Offer water and bilva leaves at the timeless lingam of Lord Vishweshwara.",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~40 mins",
        placeSlug: "kashi-vishwanath",
        tags: ["Jyotirlinga", "Gold Dome", "Epicenter"],
      },
      {
        id: "stop-tw-6",
        order: 6,
        name: "Sakshi Vinayak & Lalita Ghat Exit",
        slug: "sakshi-vinayak-lalita",
        category: "Witness of the Pilgrimage",
        description: "Conclude at the Ganesha shrine who serves as the eternal witness verifying that your pilgrimage to Kashi has been completed successfully.",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~20 mins",
        placeSlug: "lalita-ghat",
        tags: ["Ganesha", "Witness", "River Exit"],
      },
    ],
    nearbyStay: ["old-kashi", "godowlia"],
    nearbyFood: ["kachori-sabzi", "banarasi-lassi"],
    transportToStart: {
      startLocation: "Maidagin Chowk",
      options: [
        {
          mode: "E-rickshaw",
          description: "Take an e-rickshaw directly to Maidagin Post Office / Kal Bhairav turnoff.",
          tip: "Early mornings before 7:00 AM have the lightest traffic.",
          icon: "zap",
        },
        {
          mode: "Auto",
          description: "Drop off at Maidagin Crossing, then proceed on foot for 250m to the temple entrance.",
          tip: "Leave mobile phones and leather accessories in your hotel or safe lockers.",
          icon: "car",
        },
      ],
    },
  },

  // 5. HERITAGE WALK
  {
    id: "heritage-walk",
    slug: "heritage-walk",
    name: "Heritage Walk",
    category: "Heritage",
    tagline: "Centuries of Maratha, Rajput, and Mughal architecture.",
    shortDescription: "Uncover stone palaces, royal cenotaphs, and astronomical pavilions lining the riverfront.",
    description: "Explore the extraordinary architectural tapestry of Varanasi — where Rajasthani kings, Maratha queens, and Bengali nobles built grand riverside bastions and havelis along the Ganga.",
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=85",
    alt: "Grand historic stone architecture and carved arches overlooking the Ganga at sunset",
    distance: "~3.2 km",
    duration: "~2.5–3 hours",
    difficulty: "Moderate",
    bestTime: "Morning or Late Afternoon (3:30 PM – 6:00 PM)",
    timeOfDay: ["Morning", "Afternoon"],
    interests: ["Heritage", "Photography", "Ganga"],
    tags: ["Architecture", "Palaces", "Maratha", "Observatory", "History"],
    featured: true,
    storyHeading: "Why take this walk?",
    story: "Varanasi's riverfront is not just a sacred space; it is one of the world's most dramatic continuous architectural facades. Over four centuries, princely states from across the subcontinent competed to leave their mark. Ahilyabai Holkar of Indore carved grand red stone steps, Sawai Jai Singh erected astronomical instruments on palace rooftops, and Nepali monarchs built intricate wooden pagodas reminiscent of Kathmandu.",
    stops: [
      {
        id: "stop-hw-1",
        order: 1,
        name: "Man Mandir Palace & Observatory",
        slug: "man-mandir-palace",
        category: "Mughal-Rajput Wonder",
        description: "Built in 1600 by Amber's Maharaja Man Singh, featuring delicate stone carved brackets and the rooftop Jantar Mantar observatory built in 1737.",
        image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~30 mins",
        placeSlug: "man-mandir-ghat",
        tags: ["Observatory", "Rajput", "Carved Stone"],
      },
      {
        id: "stop-hw-2",
        order: 2,
        name: "Nepali Temple Pagoda",
        slug: "nepali-temple",
        category: "Kathmandu Valley Woodcraft",
        description: "A tranquil wooden pagoda built by the King of Nepal in the 19th century, constructed with terracotta brick and intricately carved sal wood roof struts.",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~25 mins",
        placeSlug: "nepali-temple",
        tags: ["Woodcarving", "Pagoda", "Peaceful"],
      },
      {
        id: "stop-hw-3",
        order: 3,
        name: "Scindia Leaning Temple",
        slug: "scindia-leaning-temple",
        category: "Engineering Anomaly",
        description: "The 150-year-old Shiva temple that sank partially into the river silt during construction, leaning picturesquely like Varanasi's own Tower of Pisa.",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~20 mins",
        placeSlug: "scindia-ghat",
        tags: ["Leaning Temple", "Curiosity", "Stone"],
      },
      {
        id: "stop-hw-4",
        order: 4,
        name: "Ram Mandir at Bhosle Ghat",
        slug: "bhosle-ghat",
        category: "Maratha Royalty",
        description: "The monumental stone facade erected by the Maratha rulers of Nagpur in 1795, showcasing imposing defensive walls and exquisite artistic window arches.",
        image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~20 mins",
        placeSlug: "bhosale-ghat",
        tags: ["Maratha", "Stately", "Riverside"],
      },
      {
        id: "stop-hw-5",
        order: 5,
        name: "Panchganga Ghat & Alamgir Mosque",
        slug: "panchganga-alamgir",
        category: "Confluence of Streams & Empires",
        description: "Where five sacred underground streams are said to meet. Look up at the soaring minarets of Aurangzeb's mosque perched atop the high stone bluff.",
        image: "/images/kashi-sunrise-ghats.jpg",
        approximateDuration: "~25 mins",
        placeSlug: "panchganga-ghat",
        tags: ["Confluence", "Mosque", "Panoramic"],
      },
      {
        id: "stop-hw-6",
        order: 6,
        name: "Dharahara & Ancient Havelis",
        slug: "dharahara-havelis",
        category: "Aristocratic Mansions",
        description: "Venture behind the river steps into quiet stone lanes featuring carved teak doors, massive iron knockers, and secluded courtyards of merchant families.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~20 mins",
        placeSlug: "chaukhamba-lanes",
        tags: ["Courtyards", "Teak", "Historic"],
      },
      {
        id: "stop-hw-7",
        order: 7,
        name: "Trilochana Ghat Riverside",
        slug: "trilochana-ghat",
        category: "Quiet Northern Finish",
        description: "Far removed from the central tourist crowds, this serene ancient ghat offers quiet stone platforms for watching the evening sun set over the curved Ganga.",
        image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~20 mins",
        tags: ["Serene", "Sunset", "Quiet"],
      },
    ],
    nearbyStay: ["old-kashi"],
    nearbyFood: ["malaiyo", "banarasi-lassi"],
    transportToStart: {
      startLocation: "Dashashwamedh Chowk / Man Mandir Gate",
      options: [
        {
          mode: "Walk",
          description: "From Godowlia, walk 400m east straight toward Dashashwamedh Ghat, turning left onto the river promenade.",
          tip: "Wear sturdy shoes with good grip on stone steps.",
          icon: "footprints",
        },
        {
          mode: "E-rickshaw",
          description: "Arrive at Godowlia barrier, then walk through the market lane.",
          tip: "Start at 3:30 PM for magnificent afternoon golden light on the stone palaces.",
          icon: "zap",
        },
      ],
    },
  },

  // 6. HIDDEN KASHI WALK
  {
    id: "hidden-kashi-walk",
    slug: "hidden-kashi-walk",
    name: "Hidden Kashi Walk",
    category: "Hidden Kashi",
    tagline: "Lesser-known streets, secret shrines, and local soul.",
    shortDescription: "Leave the popular guidebooks behind to uncover quiet silk weavers, artisan courtyards, and forgotten legends.",
    description: "Venture beyond the popular tourist corridors into the atmospheric backstreets of Bengali Tola, Kabir Chaura, and hidden river alcoves where Varanasi lives its most intimate daily life.",
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=85",
    alt: "Secluded narrow lane in Kashi bathed in soft morning light with rustic doorways",
    distance: "~2.6 km",
    duration: "~2 hours",
    difficulty: "Easy",
    bestTime: "Morning (8:00 AM – 11:00 AM) or Late Afternoon",
    timeOfDay: ["Morning", "Afternoon"],
    interests: ["Hidden", "Heritage", "Photography"],
    tags: ["Hidden Gems", "Bengali Tola", "Weavers", "Artisans", "Quiet"],
    featured: false,
    storyHeading: "Why take this walk?",
    story: "Behind the grand riverfront stone steps lies an entirely different dimension of Kashi: an intimate labyrinth of neighbourhood addas, traditional sitar makers, and community shrines where tourists rarely step. Here, elders gather on stone platforms to discuss philosophy over two-rupee cups of chai, while handloom shuttles clack rhythmically in open courtyard workshops.",
    stops: [
      {
        id: "stop-hkw-1",
        order: 1,
        name: "Bengali Tola Lane Entry",
        slug: "bengali-tola-entry",
        category: "Intellectual & Artistic Galli",
        description: "Enter the bohemian artery of Varanasi. Filled with second-hand bookshops, classical music academies, small home cafés, and vibrant painted walls.",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~25 mins",
        placeSlug: "bengali-tola",
        tags: ["Art", "Books", "Bohemian"],
      },
      {
        id: "stop-hkw-2",
        order: 2,
        name: "Jangambari Mutt & Ancient Courtyard",
        slug: "jangambari-mutt",
        category: "Centuries-Old Monastery",
        description: "One of the oldest surviving monastic institutions in Kashi, housing a tranquil courtyard containing thousands of stone Shiva lingams donated over centuries.",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~25 mins",
        placeSlug: "jangambari-mutt",
        tags: ["Monastery", "Lingams", "Serene"],
      },
      {
        id: "stop-hkw-3",
        order: 3,
        name: "Kabir Chaura Artisan Quarter",
        slug: "kabir-chaura",
        category: "Musical & Poet Heritage",
        description: "The historical neighborhood of saint-poet Kabir and legendary Banaras Gharana classical musicians. Listen for sarangi, tabla, and sitar practice echoing from upper windows.",
        image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~25 mins",
        tags: ["Music", "Kabir", "Heritage"],
      },
      {
        id: "stop-hkw-4",
        order: 4,
        name: "Chintamani Ganesh Shrine",
        slug: "chintamani-ganesh",
        category: "Secret Local Shrine",
        description: "A small, revered local shrine tucked into an ancient doorway, beloved by local shopkeepers and neighborhood residents for morning blessings.",
        image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~15 mins",
        tags: ["Local Shrine", "Quiet"],
      },
      {
        id: "stop-hkw-5",
        order: 5,
        name: "Old Silk Weaver Looms of Madanpura",
        slug: "madanpura-silk-looms",
        category: "Living Textile Craft",
        description: "Observe master weavers manually operating wooden jacquard looms, weaving pure zari silver and gold threads into world-famous Banarasi silk sarees.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
        approximateDuration: "~30 mins",
        tags: ["Silk", "Weaving", "Artisans"],
      },
      {
        id: "stop-hkw-6",
        order: 6,
        name: "Shivala Ghat & Hidden River Garden",
        slug: "shivala-hidden-garden",
        category: "Peaceful Riverfront Conclusion",
        description: "Conclude at the quiet southern ghats where local boat repairers work and ancient peepal trees provide shade over tranquil stone steps.",
        image: "/images/kashi-sunrise-ghats.jpg",
        approximateDuration: "~20 mins",
        placeSlug: "shivala-ghat",
        tags: ["River Breeze", "Quiet Ghat", "Arrival"],
      },
    ],
    nearbyStay: ["assi-ghat", "old-kashi"],
    nearbyFood: ["banarasi-tea", "banarasi-lassi"],
    transportToStart: {
      startLocation: "Bengali Tola Lane Entry (near Sonarpura / Godowlia)",
      options: [
        {
          mode: "Walk",
          description: "Easily reached on foot from Sonarpura or Godowlia along Pandey Ghat road.",
          tip: "Look for the small archway leading into Bengali Tola.",
          icon: "footprints",
        },
        {
          mode: "E-rickshaw",
          description: "Ask for 'Sonarpura Crossing', then walk 100m east into the lane.",
          tip: "Motor cycles are rarely able to navigate Bengali Tola, making it peaceful.",
          icon: "zap",
        },
      ],
    },
  },
];

// Helper Functions
export function getAllWalks(): Walk[] {
  return walksData;
}

export function getWalkBySlug(slug: string): Walk | undefined {
  // Support both canonical slugs and legacy/alternate slugs
  const cleanSlug = slug.toLowerCase().trim();
  const directMatch = walksData.find((w) => w.slug === cleanSlug || w.id === cleanSlug);
  if (directMatch) return directMatch;

  // Fallback alias mappings
  if (cleanSlug === "sunrise-walk") return walksData.find((w) => w.slug === "sunrise-ganga-walk");
  if (cleanSlug === "food-walk") return walksData.find((w) => w.slug === "kashi-food-walk");

  return undefined;
}

export function getFeaturedWalks(): Walk[] {
  return walksData.filter((w) => w.featured);
}

export function getWalksByCategory(category: string): Walk[] {
  if (!category || category === "ALL") return walksData;
  return walksData.filter(
    (w) => w.category.toLowerCase() === category.toLowerCase()
  );
}

export function getWalksForPlace(placeSlug: string): Walk[] {
  if (!placeSlug) return [];
  const clean = placeSlug.toLowerCase().trim();
  return walksData.filter((walk) =>
    walk.stops.some(
      (stop) =>
        stop.placeSlug?.toLowerCase() === clean ||
        stop.slug.toLowerCase().includes(clean)
    )
  );
}

// Rule-based Recommendation Matcher
export interface RecommendationAnswers {
  time?: string;      // "30-60min" | "1-2hours" | "2-3hours" | "halfday"
  interest?: string;  // "food" | "temples" | "ganga" | "history" | "photography" | "hidden"
  timeOfDay?: string; // "sunrise" | "morning" | "afternoon" | "evening"
  activity?: string;  // "relaxed" | "moderate" | "long"
}

export function getRecommendedWalks(answers: RecommendationAnswers): Walk[] {
  const scored = walksData.map((walk) => {
    let score = 0;

    // Time matching
    if (answers.time) {
      if (answers.time === "30-60min" && (walk.distance.includes("1.") || walk.distance.includes("2."))) score += 2;
      if (answers.time === "1-2hours" && (walk.duration.includes("2") || walk.duration.includes("1"))) score += 3;
      if (answers.time === "2-3hours" && (walk.duration.includes("2–3") || walk.duration.includes("2.5"))) score += 3;
      if (answers.time === "halfday" && (walk.distance.includes("3.") || walk.stops.length >= 7)) score += 3;
    }

    // Interest matching
    if (answers.interest) {
      const matchMap: Record<string, string[]> = {
        food: ["Food"],
        temples: ["Temples", "Spiritual"],
        ganga: ["Ganga"],
        history: ["Heritage"],
        photography: ["Photography", "Ganga", "Heritage"],
        hidden: ["Hidden", "Hidden Kashi"],
      };
      const desired = matchMap[answers.interest] || [];
      if (desired.some((d) => (walk.interests as string[]).includes(d) || walk.category.toLowerCase().includes(d.toLowerCase()))) {
        score += 5;
      }
    }

    // Time of day matching
    if (answers.timeOfDay) {
      const cap = (answers.timeOfDay.charAt(0).toUpperCase() + answers.timeOfDay.slice(1)) as any;
      if (walk.timeOfDay.includes(cap)) {
        score += 4;
      }
    }

    // Activity matching
    if (answers.activity) {
      if (answers.activity === "relaxed" && walk.difficulty === "Easy") score += 3;
      if (answers.activity === "moderate" && (walk.difficulty === "Easy" || walk.difficulty === "Moderate")) score += 3;
      if (answers.activity === "long" && (walk.difficulty === "Moderate" || walk.distance.includes("3."))) score += 3;
    }

    return { walk, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 2).map((s) => s.walk);
}
