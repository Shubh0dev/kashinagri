export interface ExperienceCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: "compass" | "utensils" | "bed" | "sparkles" | "footprints" | "navigation";
  href: string;
}

export interface FeaturedExperience {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  badge?: string;
  href: string;
}

export interface ExplorePlace {
  id: string;
  title: string;
  count: string;
  description: string;
  image: string;
  alt: string;
  tag: string;
  href: string;
}

export interface KashiFood {
  id: string;
  name: string;
  category: string;
  location: string;
  description: string;
  image: string;
  alt: string;
  highlight: string;
}

export interface KashiWalk {
  id: string;
  name: string;
  subtitle: string;
  distance: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  description: string;
  stops: string[];
  image: string;
  alt: string;
}

export interface StayArea {
  id: string;
  name: string;
  vibe: string;
  description: string;
  bestFor: string;
  image: string;
  alt: string;
  highlights: string[];
}

export interface TransportMode {
  id: string;
  title: string;
  bestFor: string;
  description: string;
  tip: string;
  icon: "footprints" | "zap" | "bike" | "shield" | "car" | "ship";
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Visual Photography of Varanasi / Kashi
export const HERO_IMAGE = {
  src: "/images/kashi-sunrise-ghats.jpg",
  alt: "Sunrise over the sacred Ganga with traditional wooden boats at Varanasi ghats",
};

export const STORY_IMAGE = {
  src: "/images/ancient-gallis-varanasi.jpg",
  alt: "Atmospheric view of ancient narrow stone lanes of old Kashi at twilight",
};

export const FINAL_CTA_IMAGE = {
  src: "/images/dashashwamedh-ghat-aarti.jpg",
  alt: "Spectacular evening Ganga Aarti ceremony at Dashashwamedh Ghat with golden lamps and twilight sky",
};

export const navigationLinks: NavItem[] = [
  { label: "Explore", href: "/explore" },
  { label: "Eat", href: "/eat" },
  { label: "Stay", href: "/stay" },
  { label: "Move", href: "/move" },
  { label: "Walks", href: "/walks" },
];

export const experienceCategories: ExperienceCategory[] = [
  {
    id: "explore",
    title: "EXPLORE",
    tagline: "Sacred & Historic",
    description: "Temples, ghats, heritage and hidden corners.",
    iconName: "compass",
    href: "/explore",
  },
  {
    id: "eat",
    title: "EAT",
    tagline: "Culinary Heritage",
    description: "Discover the flavours that make Kashi unforgettable.",
    iconName: "utensils",
    href: "/eat",
  },
  {
    id: "stay",
    title: "STAY",
    tagline: "Character Stays",
    description: "Find the neighbourhood that fits your journey.",
    iconName: "bed",
    href: "/stay",
  },
  {
    id: "experience",
    title: "EXPERIENCE",
    tagline: "Immersion & Chants",
    description: "Boats, aarti, music, culture and more.",
    iconName: "sparkles",
    href: "#experiences",
  },
  {
    id: "walk",
    title: "WALK",
    tagline: "Curated Trails",
    description: "Follow curated routes through the old city.",
    iconName: "footprints",
    href: "/walks",
  },
  {
    id: "move",
    title: "MOVE",
    tagline: "City Transit",
    description: "Find the easiest way around Kashi.",
    iconName: "navigation",
    href: "/move",
  },
];

export const featuredExperiences: FeaturedExperience[] = [
  {
    id: "sunrise-ganga",
    category: "RIVER VOYAGE",
    title: "Sunrise on the Ganga",
    description: "Drift in a quiet wooden rowboat at dawn as the first amber rays ignite 84 stone ghats, morning chants echo across the mist, and pilgrims greet the rising sun.",
    image: "/images/sunrise-on-the-ganga.jpg",
    alt: "Sunrise over Ganga river with traditional wooden boats along the stone ghats",
    badge: "Must Experience",
    href: "#explore",
  },
  {
    id: "ganga-aarti",
    category: "SACRED RITUAL",
    title: "Ganga Aarti at Dashashwamedh",
    description: "Synchronized brass lamps, wafting sandalwood incense, conch shells, and rhythmic chants rising together in twilight homage.",
    image: "/images/dashashwamedh-ganga-aarti.jpg",
    alt: "Priests holding tall multi-tiered brass oil lamps during the Ganga Aarti ceremony",
    href: "#explore",
  },
  {
    id: "walk-old-city",
    category: "LANE DISCOVERY",
    title: "Walk the Ancient Gallis",
    description: "Lose yourself in a thousand-year-old maze of narrow stone lanes where fragrant spice shops, tiny shrines, and silk weavers converse.",
    image: "/images/ancient-gallis-varanasi.jpg",
    alt: "Narrow historical alley in old Kashi with textured walls and sunlight filtering down",
    href: "#walks",
  },
  {
    id: "banarasi-culture",
    category: "LIVING HERITAGE",
    title: "Discover Banarasi Culture",
    description: "From classical Hindustani ragas at sunrise to master weavers creating heirloom Banarasi Katan silk on rhythmic wooden pit looms.",
    image: "/images/banarasi-ghat-culture.jpg",
    alt: "Artisan handcrafting intricate golden zari patterns into traditional Banarasi silk",
    href: "#explore",
  },
];

export const explorePlaces: ExplorePlace[] = [
  {
    id: "ghats",
    title: "Ghats of Kashi",
    count: "84 Ghats",
    tag: "Riverfront",
    description: "From the grand steps of Dashashwamedh and Assi to the timeless silence of Manikarnika.",
    image: "/images/kashi-sunrise-ghats.jpg",
    alt: "The stone steps of Kashi ghats descending to the river Ganga",
    href: "#",
  },
  {
    id: "temples",
    title: "Sacred Temples",
    count: "200+ Shrines",
    tag: "Spiritual",
    description: "Kashi Vishwanath Jyotirlinga, Sankat Mochan, Annapurna, and ancient neighborhood deities.",
    image: "/images/kashi-vishwanath-temples.jpg",
    alt: "Intricate golden spire of an ancient Kashi temple",
    href: "#",
  },
  {
    id: "sarnath",
    title: "Sarnath Monasteries",
    count: "Buddhist Heritage",
    tag: "Peaceful",
    description: "Where Buddha delivered his first sermon; ancient Dhamek Stupa and peaceful deer park.",
    image: "/images/sarnath-monastery-stupa.jpg",
    alt: "Historic Buddhist stupa at Sarnath enveloped in quiet morning greenery",
    href: "#",
  },
  {
    id: "heritage",
    title: "Architecture & Haveli",
    count: "Living History",
    tag: "Culture",
    description: "Maratha palaces, Nepalese pagodas, stone jaalis, and centuries-old riverside mutts.",
    image: "/images/architecture-haveli.jpg",
    alt: "Grand Maratha riverside palace facade and Nepalese pagoda at Varanasi ghats at sunset",
    href: "#",
  },
  {
    id: "hidden",
    title: "Hidden Kashi",
    count: "Secret Corners",
    tag: "Discovery",
    description: "Submerged temples, clandestine courtyards, subterranean kunds, and forgotten viewpoints.",
    image: "/images/hidden-kashi-kund.jpg",
    alt: "Ancient subterranean stone stepwell kund with temple spires reflected in water",
    href: "#",
  },
  {
    id: "markets",
    title: "Bazaars & Weaving",
    count: "Artisanal Hubs",
    tag: "Trade & Craft",
    description: "Thatheri Bazar brasscraft, Chowk perfume lanes, and world-renowned silk emporiums.",
    image: "/images/bazaars-thatheri-brasscraft.jpg",
    alt: "Artisan crafting brassware in Thatheri Bazar with temple spire in the background",
    href: "#",
  },
];

export const kashiFoods: KashiFood[] = [
  {
    id: "kachori-sabzi",
    name: "Kachori Sabzi & Jalebi",
    category: "Morning Breakfast",
    location: "Thatheri Bazar & Kachori Gali",
    description: "Crisp, lentil-stuffed golden puris served with slow-simmered spiced hing aloo curry and hot syrupy jalebis straight from the kadai.",
    image: "/images/kachori-sabzi-jalebi.jpg",
    alt: "Hot fresh kachoris served with spicy potato curry and syrupy jalebis",
    highlight: "Served fresh from 6:30 AM",
  },
  {
    id: "tamatar-chaat",
    name: "Banarasi Tamatar Chaat",
    category: "Evening Street Food",
    location: "Kashi Chaat Bhandar, Godowlia",
    description: "A Kashi original: ripe tomatoes mashed with hing, ginger, cumin, green chillies, drowned in desi ghee and sweet hing syrup, garnished with crisp namakpare.",
    image: "/images/banarasi-tamatar-chaat.jpg",
    alt: "Banarasi Tamatar Chaat garnished with sev and coriander served in an earthen dona at sunset",
    highlight: "Unique to Varanasi",
  },
  {
    id: "banarasi-lassi",
    name: "Clay-Kulhad Banarasi Lassi",
    category: "Refreshing Drink",
    location: "Blue Lassi & Pehalwan, Chowk",
    description: "Thick hand-churned curd sweetened to perfection, crowned with a dense dollop of fresh rabdi, malai cream, and chopped roasted pistachios.",
    image: "/images/banarasi-kulhad-lassi.jpg",
    alt: "Rich and creamy sweet lassi served in an authentic earthen kulhad topped with rabdi and pistachios",
    highlight: "Topped with fresh rabdi",
  },
  {
    id: "malaiyo",
    name: "Winter Malaiyo",
    category: "Seasonal Sweet",
    location: "Chaukhamba & Gopal Mandir",
    description: "An ethereal cloud made from raw milk left overnight under winter dew, frothed into a featherlight saffron-cardamom cloud with pistachios.",
    image: "/images/winter-malaiyo-kashi.jpg",
    alt: "Ethereal saffron winter malaiyo foam garnished with pistachios in an earthen bowl",
    highlight: "Available Nov - Feb only",
  },
  {
    id: "banarasi-paan",
    name: "Meetha Banarasi Paan",
    category: "After-Meal Tradition",
    location: "Keshav Tambool Bhandar, Assi",
    description: "Tender Maghai betel leaf masterfully folded with perfumed gulkand, kattha, fennel seeds, dry dates, silver vark, and soothing menthol.",
    image: "/images/meetha-banarasi-paan.jpg",
    alt: "Masterfully folded Banarasi meetha paan garnished with silver leaf and rose petals",
    highlight: "Cultural staple",
  },
  {
    id: "baati-chokha",
    name: "Baati Chokha",
    category: "Rustic Dining",
    location: "Teliabagh & Sigra",
    description: "Whole wheat balls stuffed with spiced sattu and roasted over dried cow-dung cakes, cracked open and soaked in pure ghee alongside roasted eggplant mash.",
    image: "/images/baati-chokha-platter.jpg",
    alt: "Crisp baatis soaked in ghee served with roasted eggplant chokha platter",
    highlight: "Smoky coal baked",
  },
];

export const kashiWalks: KashiWalk[] = [
  {
    id: "old-kashi-walk",
    name: "OLD KASHI WALK",
    subtitle: "Food + lanes + temples",
    distance: "2.8 km",
    duration: "2–3 hours",
    difficulty: "Easy",
    description: "Wander through centuries of layered mythology, visiting spice quarters, 300-year-old mutts, traditional silk looms, and hidden Shiva temples tucked away from the main streets.",
    stops: ["Godowlia Crossing", "Kachori Gali", "Thatheri Spice Bazar", "Golden Temple Corridor", "Manikarnika Overlook"],
    image: "/images/old-kashi-walk-lanes.jpg",
    alt: "Pilgrims and walkers navigating the ancient stone-paved lanes and spice shops of old Kashi toward the ghats",
  },
  {
    id: "sunrise-walk",
    name: "SUNRISE WALK",
    subtitle: "Ganga + ghats + morning life",
    distance: "3.5 km",
    duration: "2 hours",
    difficulty: "Easy",
    description: "Watch Kashi stir to life in the golden morning light. Walk uninterrupted along the river crescent as sadhus meditate, classical vocalists rehearse, and bells ring out across the water.",
    stops: ["Assi Ghat", "Tulsi Ghat", "Chet Singh Fort", "Harishchandra Ghat", "Dashashwamedh Ghat"],
    image: "/images/kashi-sunrise-ghats.jpg",
    alt: "Morning riverfront walk along the stone ghats during sunrise",
  },
  {
    id: "food-walk",
    name: "FOOD WALK",
    subtitle: "Local food + famous streets + hidden spots",
    distance: "1.9 km",
    duration: "2.5 hours",
    difficulty: "Moderate",
    description: "A curated gastronomic pilgrimage through Kashi's oldest culinary dynasties. Taste authentic chaat, velvety lassi, freshly fried kachoris, and artisanal sweets handed down across 4 generations.",
    stops: ["Kashi Chaat Godowlia", "Chowk Lassi Depot", "Vishwanath Gali Malaiyo", "Deena Chaat", "Keshav Paan Assi"],
    image: "/images/kachori-sabzi-jalebi.jpg",
    alt: "Legendary Banarasi street food spread with sizzling kachoris and fresh jalebis",
  },
];

export const stayAreas: StayArea[] = [
  {
    id: "assi-ghat",
    name: "Assi Ghat",
    vibe: "Relaxed mornings, cafés and Ganga views.",
    description: "The southern terminus of the ghats, celebrated for its youthful bohemian vibe, yoga workshops, riverside cafés, and easy accessibility by road.",
    bestFor: "Slow travellers / backpackers / young travellers",
    highlights: ["Subah-e-Banaras morning music", "Walking distance to BHU", "River-view rooftop cafés"],
    image: "/images/assi-ghat-morning.jpg",
    alt: "Morning yoga and peaceful wide stone steps at Assi Ghat with wooden rowboats",
  },
  {
    id: "old-kashi",
    name: "Old Kashi & Central Ghats",
    vibe: "Timeless labyrinth, temple bells and pure heritage.",
    description: "Sleep inside restored centuries-old havelis where you wake to temple conches and can walk down directly to the sacred river within 30 paces.",
    bestFor: "Heritage lovers / culture seekers / immersive stays",
    highlights: ["Direct riverfront access", "Immersive old galli atmosphere", "Dashashwamedh Aarti access"],
    image: "/images/old-kashi-walk-lanes.jpg",
    alt: "Historic riverside haveli architecture and ancient galli entrance along the central ghats",
  },
  {
    id: "godowlia",
    name: "Godowlia & Chowk",
    vibe: "Vibrant energy, central accessibility and endless street life.",
    description: "The energetic commercial pulse of Kashi. Stay here for unbeatable proximity to the Kashi Vishwanath temple, famous chaat joints, and silk markets.",
    bestFor: "First-time visitors / active families / foodies",
    highlights: ["Closest to Vishwanath Corridor", "Epicenter of street gastronomy", "Easy rickshaw and taxi pickup"],
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=85",
    alt: "Vibrant bustling street energy and shopping scene around the Godowlia crossing",
  },
  {
    id: "sarnath",
    name: "Sarnath & Cantonment",
    vibe: "Tranquil monasteries, green gardens and quiet contemplation.",
    description: "Located 10 km north of the ghats, offering wide tree-lined boulevards, peaceful Buddhist temples, manicured parks, and luxury heritage hotels away from the frenzy.",
    bestFor: "Quiet seekers / meditators / history enthusiasts",
    highlights: ["Dhamek Stupa & Deer Park", "Peaceful monastery gardens", "Spacious heritage properties"],
    image: "/images/sarnath-monastery-stupa.jpg",
    alt: "Serene Buddhist stupa and manicured green gardens at Sarnath monastery",
  },
];

export const transportModes: TransportMode[] = [
  {
    id: "walk",
    title: "Walk",
    bestFor: "Old City, Ghats & Lanes",
    description: "The supreme way to encounter Kashi. Cars cannot enter the inner gallis, making your feet the ultimate vehicle for authentic discovery.",
    tip: "Wear slip-on shoes for frequent temple visits.",
    icon: "footprints",
  },
  {
    id: "e-rickshaw",
    title: "E-Rickshaw",
    bestFor: "Short City Hops",
    description: "Silent, zero-emission green vehicles operating seamlessly between Godowlia, Assi, Lanka, and the railway stations.",
    tip: "Fixed shared rates or negotiate private hire upfront.",
    icon: "zap",
  },
  {
    id: "scooty",
    title: "Scooty",
    bestFor: "Independent Explorers",
    description: "Effortlessly thread through outer city avenues, ring roads, and cross the pontoon bridges to the eastern sandy bank of the Ganga.",
    tip: "Best for early morning runs before traffic peaks.",
    icon: "bike",
  },
  {
    id: "boat",
    title: "Boat (Bajra / Rowboat)",
    bestFor: "River Panorama",
    description: "Experience the grand amphitheatrical crescent of the ghats from water level. Choose traditional oarsmen or electric silent boats.",
    tip: "Book early dawn or twilight 30 minutes before Aarti.",
    icon: "ship",
  },
  {
    id: "bike",
    title: "Bicycle",
    bestFor: "BHU Campus & Riverfront",
    description: "Pedal along the lush tree canopies of Banaras Hindu University or tranquil morning river roads from Assi to Samne Ghat.",
    tip: "Rentals available around Assi Ghat promenade.",
    icon: "shield",
  },
  {
    id: "car",
    title: "Car / Taxi",
    bestFor: "Airport & Day Excursions",
    description: "Essential for smooth Lal Bahadur Shastri airport transfers, full-day visits to Sarnath, Ramnagar Fort, and Chunar Fort.",
    tip: "Arrange drop-offs at Godowlia gate or Assi intersection.",
    icon: "car",
  },
];

export const footerLinks = {
  explore: [
    { label: "Places to Visit", href: "/explore" },
    { label: "Ghats of Kashi", href: "/explore?category=GHATS" },
    { label: "Ancient Temples", href: "/explore?category=TEMPLES" },
    { label: "Hidden Kashi", href: "/explore?category=HIDDEN%20KASHI" },
  ],
  discover: [
    { label: "Taste Kashi (Food)", href: "/eat" },
    { label: "Kashi Walks", href: "/walks" },
    { label: "Art & Handloom Culture", href: "#experiences" },
    { label: "Sacred Experiences", href: "#experiences" },
  ],
  plan: [
    { label: "Where to Stay", href: "/stay" },
    { label: "City Transportation", href: "/move" },
    { label: "Trip Planner", href: "/plan" },
    { label: "Best Time to Visit", href: "/plan" },
  ],
  company: [
    { label: "About KashiNagri", href: "#" },
    { label: "Editorial Philosophy", href: "#" },
    { label: "Local Community", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
};
