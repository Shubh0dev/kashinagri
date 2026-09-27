export interface Neighbourhood {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  atmosphere: string;
  bestFor: string[];
  tags: string[];
  image: string;
  alt: string;
  gangaAccess: "Direct Riverfront" | "Short Walk" | "Moderate / Transit" | "Further Away";
  oldCityAccess: "Inside Old City" | "Adjacent / Easy Walk" | "Short Rickshaw Ride" | "Further Away";
  tripStyle: string;
  whatItFeelsLike: string;
  thingsToConsider: string[];
  nearbyTemples: string[];
  nearbyGhats: string[];
  nearbyFood: string[];
  nearbyWalks: string[];
  approxLocation: string;
}

export interface Stay {
  id: string;
  slug: string;
  name: string;
  type: "Hotel" | "Hostel" | "Homestay" | "Guesthouse" | "Boutique" | "Luxury";
  area: string;
  areaSlug: string;
  shortDescription: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  travellerTypes: ("Solo" | "Couple" | "Family" | "Friends" | "Backpacker" | "Pilgrim")[];
  priceLevel: "Budget-friendly" | "Mid-range" | "Premium" | "Luxury";
  atmosphere: string;
  whyStayHere: string[];
  amenities: string[];
  nearbyPlaces: string[];
  nearbyFood: string[];
  nearbyWalks: string[];
  featured?: boolean;
  badge?: "HERITAGE PALACE" | "BACKPACKER FAVOURITE" | "GANGA VIEW" | "PEACEFUL RETREAT" | "BUDGET PICK";
}

export interface TravellerTypeItem {
  id: string;
  title: string;
  travellerType: "Solo" | "Couple" | "Family" | "Friends" | "Backpacker" | "Pilgrim";
  tagline: string;
  icon: string;
}

export interface StayTypeFilterItem {
  id: string;
  label: string;
  key: string;
  image: string;
  description: string;
  bestFor: string;
}

export interface TripStyleItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  recommendedArea: string;
  areaSlug: string;
  image: string;
  alt: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    weights: Record<string, number>; // Maps areaSlug to points
  }[];
}

export const TRAVELLER_TYPES: TravellerTypeItem[] = [
  {
    id: "solo",
    title: "SOLO",
    travellerType: "Solo",
    tagline: "Explore at your own pace.",
    icon: "🚶",
  },
  {
    id: "couple",
    title: "COUPLE",
    travellerType: "Couple",
    tagline: "Slow mornings, cafés and experiences.",
    icon: "✨",
  },
  {
    id: "family",
    title: "FAMILY",
    travellerType: "Family",
    tagline: "Comfort, convenience and easy access.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    id: "friends",
    title: "FRIENDS",
    travellerType: "Friends",
    tagline: "Food, exploration and city energy.",
    icon: "🎒",
  },
  {
    id: "backpacker",
    title: "BACKPACKER",
    travellerType: "Backpacker",
    tagline: "Local atmosphere and budget-friendly stays.",
    icon: "🗺️",
  },
  {
    id: "pilgrim",
    title: "PILGRIM",
    travellerType: "Pilgrim",
    tagline: "Stay close to important spiritual destinations.",
    icon: "🛕",
  },
];

export const STAY_TYPES: StayTypeFilterItem[] = [
  {
    id: "all",
    label: "ALL STAYS",
    key: "ALL",
    image: "/images/kashi-sunrise-ghats.jpg",
    description: "Browse all curated accommodations across Kashi's neighbourhoods.",
    bestFor: "Every traveler and budget style",
  },
  {
    id: "riverside",
    label: "RIVERSIDE / HAVELI",
    key: "Boutique",
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
    description: "Restored historic stone mansions with direct river ghat access.",
    bestFor: "Atmospheric heritage & sunrise river views",
  },
  {
    id: "hostel",
    label: "HOSTEL",
    key: "Hostel",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80",
    description: "Social hubs with rooftop common rooms, dorms, and organized walks.",
    bestFor: "Backpackers & solo explorers",
  },
  {
    id: "guesthouse",
    label: "GUESTHOUSE / HOMESTAY",
    key: "Guesthouse",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    description: "Family-run heritage residences offering homecooked local meals.",
    bestFor: "Cultural immersion & warm hospitality",
  },
  {
    id: "hotel",
    label: "HOTEL",
    key: "Hotel",
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
    description: "Comfortable properties with air conditioning, elevators, and room service.",
    bestFor: "Families & first-time travellers",
  },
  {
    id: "luxury",
    label: "LUXURY",
    key: "Luxury",
    image: "/images/kashi-sunrise-ghats.jpg",
    description: "Palatial riverside residences and 5-star oasis estates with manicured gardens.",
    bestFor: "Uncompromising comfort & royal heritage",
  },
];
export const STAY_TYPE_FILTERS = STAY_TYPES;

export const neighbourhoodsData: Neighbourhood[] = [
  {
    id: "assi-ghat",
    slug: "assi-ghat",
    name: "Assi Ghat",
    tagline: "Relaxed mornings, river views and a slower side of Kashi.",
    description: "The southern anchor of the ghats, Assi is celebrated for its open-air riverside promenade, Subah-e-Banaras morning ragas, and vibrant bohemian café culture. It offers a gentler introduction to Varanasi than the dense central core.",
    atmosphere: "RELAXED & ARTISTIC",
    bestFor: ["Slow travellers", "Backpackers", "Cafés & Yoga", "Ganga views"],
    tags: ["Ganga", "Cafés", "Relaxed", "Backpacker-Friendly"],
    image: "/images/kashi-sunrise-ghats.jpg",
    alt: "Morning rowboats swaying peacefully at Assi Ghat",
    gangaAccess: "Direct Riverfront",
    oldCityAccess: "Short Rickshaw Ride",
    tripStyle: "Slow, creative, and scenic",
    whatItFeelsLike: "Waking up to sitar strains and Vedic chanting, walking directly down stone steps to morning yoga, and spending afternoons writing in rooftop cafés overlooking the water.",
    thingsToConsider: [
      "Located about 3 km south of Kashi Vishwanath and Godowlia",
      "Easy road and auto access directly to the ghat without luggage hauling through narrow lanes",
      "Very lively at dawn during Subah-e-Banaras; serene and peaceful by late evening"
    ],
    nearbyTemples: ["kashi-vishwanath", "sankat-mochan", "durga-temple"],
    nearbyGhats: ["assi-ghat", "tulsi-ghat", "chet-singh-ghat"],
    nearbyFood: ["banarasi-paan", "pizzeria-vaatika", "banarasi-lassi"],
    nearbyWalks: ["sunrise-walk"],
    approxLocation: "Southern Varanasi, 3 km south of Dashashwamedh",
  },
  {
    id: "godowlia",
    slug: "godowlia",
    name: "Godowlia & Chowk",
    tagline: "Vibrant energy, central accessibility and endless street food.",
    description: "The commercial heartbeat of the city where all major roads converge. Godowlia places you steps from the Kashi Vishwanath Corridor, iconic street chaats, and silk emporiums.",
    atmosphere: "VIBRANT & LIVELY",
    bestFor: ["First-time visitors", "Active families", "Food lovers", "Central accessibility"],
    tags: ["Central", "Food", "Lively", "Convenient"],
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=85",
    alt: "Vibrant evening crowds and street food energy around Godowlia",
    gangaAccess: "Short Walk",
    oldCityAccess: "Inside Old City",
    tripStyle: "Energetic, practical, and food-centric",
    whatItFeelsLike: "Stepping directly into the sensory kaleidoscope of Varanasi — cycle rickshaws, the sizzle of evening chaat tawas, and immediate pedestrian access to the Vishwanath temple.",
    thingsToConsider: [
      "Can be crowded and loud during morning and evening rush hours",
      "Private cars and large taxis are restricted during evening hours",
      "Unbeatable location for exploring on foot without relying on transit"
    ],
    nearbyTemples: ["kashi-vishwanath", "annapurna-mandir", "kal-bhairav"],
    nearbyGhats: ["dashashwamedh-ghat", "manikarnika-ghat"],
    nearbyFood: ["tamatar-chaat", "kachori-sabzi", "kashi-thandai"],
    nearbyWalks: ["old-kashi-walk", "food-walk"],
    approxLocation: "Central Old Varanasi, 400m from Dashashwamedh Ghat",
  },
  {
    id: "old-kashi",
    slug: "old-kashi",
    name: "Old Kashi & Central Ghats",
    tagline: "Timeless labyrinth, direct river access and temple bells.",
    description: "The thousand-year-old pedestrian stone labyrinth hugging the riverfront. Stay inside centuries-old havelis where motor vehicles cannot enter and the sacred river is thirty paces from your door.",
    atmosphere: "HERITAGE & IMMERSIVE",
    bestFor: ["Heritage lovers", "Photographers", "Culture seekers", "River immersion"],
    tags: ["Heritage", "Ganga", "Pedestrian", "Historic"],
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=85",
    alt: "Ancient stone arches and ghat pavilions in old Kashi",
    gangaAccess: "Direct Riverfront",
    oldCityAccess: "Inside Old City",
    tripStyle: "Deeply historic, authentic, and unplugged",
    whatItFeelsLike: "Navigating quiet stone alleys where cows rest, temple bells ring from hidden alcoves, and rooftop windows open to sweeping views of the sunrise across the Ganga.",
    thingsToConsider: [
      "Strictly pedestrian — you must walk with luggage through narrow alleys or arrange boat drop-offs",
      "Navigating the maze can feel disorienting on the first day",
      "Unmatched authentic historic atmosphere that hotel zones cannot replicate"
    ],
    nearbyTemples: ["kashi-vishwanath", "annapurna-mandir"],
    nearbyGhats: ["scindia-ghat", "manikarnika-ghat", "panchganga-ghat"],
    nearbyFood: ["malaiyo", "kachori-sabzi"],
    nearbyWalks: ["old-kashi-walk", "sunrise-walk"],
    approxLocation: "Riverfront between Dashashwamedh and Panchganga Ghats",
  },
  {
    id: "dashashwamedh",
    slug: "dashashwamedh-area",
    name: "Dashashwamedh Area",
    tagline: "The beating heart of Aarti, boats and pilgrims.",
    description: "The epicenter of Varanasi's spiritual theatre. Staying here puts you seconds from the evening Ganga Aarti and dawn wooden boat rides.",
    atmosphere: "SPIRITUAL & ACTIVE",
    bestFor: ["Pilgrims", "Photographers", "Aarti enthusiasts", "Short stays"],
    tags: ["Aarti", "Ganga", "Spiritual", "Epicenter"],
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=85",
    alt: "Evening lamps glowing during Ganga Aarti at Dashashwamedh",
    gangaAccess: "Direct Riverfront",
    oldCityAccess: "Adjacent / Easy Walk",
    tripStyle: "Devotional, dynamic, and prime riverfront",
    whatItFeelsLike: "Walking straight down to the evening Aarti without fighting traffic, watching thousands gather by boat, and falling asleep to river chants.",
    thingsToConsider: [
      "Extremely crowded around 6:00 PM – 8:00 PM during Aarti hours",
      "Very high energy and continuous movement",
      "Ideal for travellers on tight 1-2 day itineraries wanting to see maximum sights"
    ],
    nearbyTemples: ["kashi-vishwanath", "annapurna-mandir"],
    nearbyGhats: ["dashashwamedh-ghat", "manikarnika-ghat"],
    nearbyFood: ["tamatar-chaat", "kashi-thandai"],
    nearbyWalks: ["sunrise-walk", "old-kashi-walk"],
    approxLocation: "Central Riverfront at the end of Dashashwamedh Road",
  },
  {
    id: "sarnath",
    slug: "sarnath",
    name: "Sarnath",
    tagline: "Tranquil monasteries, green gardens and quiet contemplation.",
    description: "Located 10 km northeast of the city frenzy, Sarnath is a peaceful Buddhist pilgrimage enclave surrounded by landscaped archaeological parks and international monasteries.",
    atmosphere: "SERENE & CONTEMPLATIVE",
    bestFor: ["Quiet seekers", "Meditators", "History enthusiasts", "Spiritual retreat"],
    tags: ["Peaceful", "Buddhist", "Greenery", "Quiet"],
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=85",
    alt: "Dhamek Stupa surrounded by peaceful green lawns in Sarnath",
    gangaAccess: "Further Away",
    oldCityAccess: "Further Away",
    tripStyle: "Peaceful, introspective, and restorative",
    whatItFeelsLike: "Hearing monks chant at dusk, walking through tree-shaded ruins without crowds, and sleeping in profound silence.",
    thingsToConsider: [
      "Approx. 35–45 minutes by taxi or auto from the Varanasi ghats",
      "Limited nightlife or late dining options compared to the city center",
      "Ideal as a quiet 1-2 night retreat before or after exploring the old city"
    ],
    nearbyTemples: ["dhamek-stupa", "sarnath-museum", "chaukhandi-stupa"],
    nearbyGhats: [],
    nearbyFood: [],
    nearbyWalks: [],
    approxLocation: "10 km Northeast of Varanasi city center",
  },
  {
    id: "cantonment",
    slug: "cantonment",
    name: "Cantonment (Cantt)",
    tagline: "Spacious avenues, modern luxury and peaceful retreats.",
    description: "The upscale, British-era diplomatic and colonial enclave of Varanasi. Characterized by wide tree-lined boulevards, luxury 5-star hotel estates, and proximity to the main railway station.",
    atmosphere: "SPACIOUS & LUXURIOUS",
    bestFor: ["Luxury travellers", "Business visitors", "Families seeking calm", "Comfort-first stays"],
    tags: ["Luxury", "Spacious", "Modern", "Comfort"],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85",
    alt: "Tranquil garden avenues and colonial elegance in Varanasi Cantonment",
    gangaAccess: "Moderate / Transit",
    oldCityAccess: "Short Rickshaw Ride",
    tripStyle: "Refined, comfortable, and tranquil",
    whatItFeelsLike: "Returning from the chaotic old city lanes to lush garden estates, swimming pools, serene verandahs, and multi-cuisine fine dining.",
    thingsToConsider: [
      "About 5–6 km from the central ghats (20–30 minutes by cab/auto)",
      "High level of Western amenities, security, and peaceful sleep",
      "Close to Varanasi Cantt Railway Station and convenient for airport transit"
    ],
    nearbyTemples: ["bharat-mata-temple"],
    nearbyGhats: [],
    nearbyFood: [],
    nearbyWalks: [],
    approxLocation: "Northwest Varanasi, near Cantt Railway Station",
  },
  {
    id: "lanka",
    slug: "lanka",
    name: "Lanka (BHU Campus)",
    tagline: "Youthful university vibe, tree-lined roads and budget comfort.",
    description: "Adjacent to the sprawling green 1,300-acre Banaras Hindu University (BHU) campus, Lanka is a vibrant student hub filled with bookstores, South Indian joints, and affordable guesthouses.",
    atmosphere: "YOUTHFUL & BALANCED",
    bestFor: ["Budget travellers", "Academics", "Youthful explorers", "Tree-canopied walks"],
    tags: ["University", "Budget", "Youthful", "Greenery"],
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=85",
    alt: "Lively university entrance road and tree canopies at Lanka Gate",
    gangaAccess: "Short Walk",
    oldCityAccess: "Short Rickshaw Ride",
    tripStyle: "Laid-back, academic, and economical",
    whatItFeelsLike: "Cycling beneath massive banyan trees on university boulevards, sipping cold coffee at VT, and walking 10 minutes down to Assi Ghat.",
    thingsToConsider: [
      "Very budget-friendly with numerous economical hotels and student eateries",
      "Convenient pedestrian access to Assi Ghat via Ravidas Park road",
      "A great balance of green open spaces and energetic street life"
    ],
    nearbyTemples: ["new-vishwanath-bhu", "sankat-mochan"],
    nearbyGhats: ["assi-ghat"],
    nearbyFood: ["banarasi-lassi"],
    nearbyWalks: ["sunrise-walk"],
    approxLocation: "Southern Varanasi, surrounding the BHU main gate",
  },
];

export const staysData: Stay[] = [
  {
    id: "brijrama-palace",
    slug: "brijrama-palace",
    name: "BrijRama Palace",
    type: "Luxury",
    area: "Old Kashi & Central Ghats",
    areaSlug: "old-kashi",
    shortDescription: "A 210-year-old Maratha stone palace perched directly on Darbhanga Ghat.",
    description: "One of the oldest structures along the sacred riverfront, BrijRama Palace was originally constructed in 1812 by the royal minister of Nagpur. Guests arrive exclusively by traditional wooden boat from the river, stepping onto a historic stone terrace before ascending to royal suites adorned with hand-carved sandstone, silver furnishings, and private river views.",
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80",
    alt: "Majestic stone river facade of BrijRama Palace at Darbhanga Ghat",
    tags: ["Heritage", "Ganga View", "Boutique", "Historic"],
    travellerTypes: ["Couple", "Family"],
    priceLevel: "Luxury",
    atmosphere: "Palatial & Royal Heritage",
    whyStayHere: [
      "Arrive by private ceremonial wooden boat along the Ganga",
      "Unmatched front-row sunrise views across the 84 ghats from royal balconies",
      "Vegetarian fine dining accompanied by live sitar and flute recitals",
      "Meticulously restored Maratha architectural stone carvings"
    ],
    amenities: ["River-facing Suites", "Ayurvedic Spa", "Boat Transfer", "Live Classical Music", "Rooftop Terrace"],
    nearbyPlaces: ["dashashwamedh-ghat", "manikarnika-ghat", "kashi-vishwanath"],
    nearbyFood: ["tamatar-chaat", "kachori-sabzi"],
    nearbyWalks: ["sunrise-walk"],
    featured: true,
    badge: "HERITAGE PALACE",
  },
  {
    id: "stops-hostel-varanasi",
    slug: "stops-hostel-varanasi",
    name: "goSTOPS Varanasi (Assi)",
    type: "Hostel",
    area: "Assi Ghat",
    areaSlug: "assi-ghat",
    shortDescription: "Vibrant community hostel with colourful common rooms and organized morning walking tours.",
    description: "A legendary hub for global backpackers and independent solo explorers, located a short 5-minute walk from Assi Ghat. Features comfortable air-conditioned bunk dorms, private rooms, a colourful courtyard with beanbags, and daily walking tours through the old city lanes.",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=1000&q=80",
    alt: "Lively backpacker common area with books and artistic Varanasi murals",
    tags: ["Hostel", "Backpacker", "Solo", "Social"],
    travellerTypes: ["Solo", "Backpacker", "Friends"],
    priceLevel: "Budget-friendly",
    atmosphere: "Social & Youthful",
    whyStayHere: [
      "Daily curated dawn walking tours and evening street food trails",
      "Vibrant social terrace to meet fellow global travellers",
      "High-speed Wi-Fi, air-conditioned dorms, and secure lockers",
      "Walking distance to Subah-e-Banaras and Assi riverside cafés"
    ],
    amenities: ["AC Dorms & Privates", "High-speed Wi-Fi", "Common Kitchen", "Daily Walks", "Laundry"],
    nearbyPlaces: ["assi-ghat", "tulsi-ghat", "sankat-mochan"],
    nearbyFood: ["banarasi-paan", "pizzeria-vaatika"],
    nearbyWalks: ["sunrise-walk"],
    featured: true,
    badge: "BACKPACKER FAVOURITE",
  },
  {
    id: "ganpati-guest-house",
    slug: "ganpati-guest-house",
    name: "Ganpati Guest House",
    type: "Guesthouse",
    area: "Old Kashi & Central Ghats",
    areaSlug: "old-kashi",
    shortDescription: "Colourful riverfront heritage guesthouse at Meer Ghat with panoramic rooftop views.",
    description: "Famous for its vibrant hand-painted courtyard frescoes and multi-level terraces overlooking the river at Meer Ghat. Ganpati offers clean private rooms with balconies opening right above the stone steps, giving guests an intimate window into daily Kashi rituals.",
    image: "/images/kashi-sunrise-ghats.jpg",
    alt: "Colourful courtyard balconies overlooking the Ganga at Ganpati Guest House",
    tags: ["Guesthouse", "Ganga View", "Heritage"],
    travellerTypes: ["Couple", "Solo", "Friends"],
    priceLevel: "Mid-range",
    atmosphere: "Warm, Colourful & Riverside",
    whyStayHere: [
      "Wake up directly to temple bells and dawn boat oars",
      "Multi-tiered rooftop café with panoramic views of the river crescent",
      "Prime pedestrian location between Dashashwamedh and Manikarnika"
    ],
    amenities: ["River View Balconies", "Rooftop Restaurant", "Wi-Fi", "Yoga Sessions"],
    nearbyPlaces: ["dashashwamedh-ghat", "kashi-vishwanath"],
    nearbyFood: ["kachori-sabzi", "tamatar-chaat"],
    nearbyWalks: ["old-kashi-walk"],
    featured: true,
    badge: "GANGA VIEW",
  },
  {
    id: "taj-ganges-varanasi",
    slug: "taj-ganges-varanasi",
    name: "Taj Ganges, Varanasi",
    type: "Luxury",
    area: "Cantonment (Cantt)",
    areaSlug: "cantonment",
    shortDescription: "A luxurious 12-acre verdant garden sanctuary in the tranquil Cantonment area.",
    description: "Nestled in 12 acres of lush, landscaped gardens in the peaceful colonial Cantonment, Taj Ganges offers a world-class tranquil sanctuary. Features refined suites, swimming pool, luxury spa, and award-winning dining, offering maximum comfort away from the city bustle.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    alt: "Serene swimming pool and verdant garden lawns at Taj Ganges",
    tags: ["Luxury", "Peaceful", "Gardens", "Comfort"],
    travellerTypes: ["Family", "Couple"],
    priceLevel: "Luxury",
    atmosphere: "Refined, Peaceful Oasis",
    whyStayHere: [
      "Extensive 12-acre private parkland shielding guests from city noise",
      "Top-tier culinary dining with both regional and global menus",
      "Full-service Jiva Spa and outdoor swimming pool",
      "Convenient for airport and railway connections"
    ],
    amenities: ["Swimming Pool", "Jiva Spa", "Valet Parking", "Fitness Center", "Fine Dining"],
    nearbyPlaces: ["bharat-mata-temple", "sarnath"],
    nearbyFood: [],
    nearbyWalks: [],
    featured: true,
    badge: "PEACEFUL RETREAT",
  },
  {
    id: "amritara-suryauday-haveli",
    slug: "amritara-suryauday-haveli",
    name: "Amritara Suryauday Haveli",
    type: "Boutique",
    area: "Assi Ghat",
    areaSlug: "assi-ghat",
    shortDescription: "20th-century riverside haveli built by the Royal Family of Nepal at Shivala Ghat.",
    description: "Constructed in the early 20th century by the Maharani of Nepal as a spiritual retreat on Shivala Ghat, Suryauday Haveli features restored open-to-sky courtyards, stone arches, and a quiet riverside terrace just a brief stroll north of Assi Ghat.",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80",
    alt: "Historic riverside sandstone haveli with shaded arches at Shivala Ghat",
    tags: ["Boutique", "Heritage", "Ganga View"],
    travellerTypes: ["Couple", "Family", "Pilgrim"],
    priceLevel: "Premium",
    atmosphere: "Aristocratic, Serene & Authentic",
    whyStayHere: [
      "Step directly from the inner stone courtyard onto the ghat steps",
      "Morning yoga and classical music recitals on the riverfront terrace",
      "Warm traditional Indian vegetarian dining"
    ],
    amenities: ["Direct Ghat Access", "Courtyard Dining", "Wi-Fi", "Boat Excursions"],
    nearbyPlaces: ["assi-ghat", "chet-singh-ghat"],
    nearbyFood: ["pizzeria-vaatika", "banarasi-paan"],
    nearbyWalks: ["sunrise-walk"],
    badge: "GANGA VIEW",
  },
  {
    id: "kashi-rest-house",
    slug: "kashi-rest-house",
    name: "Kashi Rest House",
    type: "Hotel",
    area: "Godowlia & Chowk",
    areaSlug: "godowlia",
    shortDescription: "Dependable, centrally located budget hotel within easy reach of the Golden Temple.",
    description: "A clean, straightforward family-run budget property situated close to Godowlia Crossing. Offers air-conditioned rooms, elevator access, and unmatched proximity to the Kashi Vishwanath corridor and famous street food stalls.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    alt: "Clean modern budget hotel room in central Godowlia",
    tags: ["Budget", "Hotel", "Central"],
    travellerTypes: ["Family", "Pilgrim", "Solo"],
    priceLevel: "Budget-friendly",
    atmosphere: "Practical & Central",
    whyStayHere: [
      "Short 5-minute walk to Kashi Vishwanath Temple entrance",
      "Surrounded by legendary chaat and kachori stalls",
      "Clean, economical rooms with private bathrooms and Wi-Fi"
    ],
    amenities: ["AC Rooms", "Elevator", "24hr Front Desk", "Luggage Storage"],
    nearbyPlaces: ["kashi-vishwanath", "dashashwamedh-ghat"],
    nearbyFood: ["tamatar-chaat", "kachori-sabzi"],
    nearbyWalks: ["old-kashi-walk"],
    badge: "BUDGET PICK",
  },
  {
    id: "via-varanasi-boutique",
    slug: "via-varanasi-boutique",
    name: "Via Varanasi Boutique Stay",
    type: "Boutique",
    area: "Assi Ghat",
    areaSlug: "assi-ghat",
    shortDescription: "Contemporary boutique guesthouse with handcrafted Banarasi silk decor.",
    description: "Blends modern minimalist design with rich handloom Banarasi silk accents, brass fixtures, and curated art pieces. Located in a quiet residential lane behind Assi Ghat with comfortable beds and a rooftop garden café.",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=1000&q=80",
    alt: "Chic boutique bedroom with handloom Banarasi textiles and natural wood decor",
    tags: ["Boutique", "Modern", "Design"],
    travellerTypes: ["Couple", "Solo", "Friends"],
    priceLevel: "Mid-range",
    atmosphere: "Artistic & Contemporary",
    whyStayHere: [
      "Quiet residential neighbourhood away from street honking",
      "Chic boutique rooms inspired by Banaras weaving culture",
      "Rooftop breakfast cafe serving fresh espresso and pancakes"
    ],
    amenities: ["Artisanal Breakfast", "Wi-Fi", "AC", "Terrace Garden"],
    nearbyPlaces: ["assi-ghat", "sankat-mochan"],
    nearbyFood: ["pizzeria-vaatika"],
    nearbyWalks: ["sunrise-walk"],
  },
  {
    id: "sarnath-monastery-retreat",
    slug: "sarnath-monastery-retreat",
    name: "Sarnath Heritage Retreat",
    type: "Guesthouse",
    area: "Sarnath",
    areaSlug: "sarnath",
    shortDescription: "Tranquil guesthouse near the Deer Park, ideal for meditation and quiet stays.",
    description: "Set in a quiet leafy lane minutes from Dhamek Stupa, this serene retreat caters to visitors seeking peaceful contemplation, meditation, and quiet morning walks around the Buddhist ruins.",
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=80",
    alt: "Peaceful guesthouse verandah surrounded by green trees in Sarnath",
    tags: ["Guesthouse", "Peaceful", "Buddhist"],
    travellerTypes: ["Solo", "Couple", "Pilgrim"],
    priceLevel: "Budget-friendly",
    atmosphere: "Serene & Meditative",
    whyStayHere: [
      "Walking distance to Dhamek Stupa and Sarnath Museum",
      "Completely shielded from the vehicle horns of central Varanasi",
      "Tranquil rooftop for morning yoga and meditation"
    ],
    amenities: ["Garden", "Wi-Fi", "Homecooked Meals", "Meditation Space"],
    nearbyPlaces: ["sarnath"],
    nearbyFood: [],
    nearbyWalks: [],
    badge: "PEACEFUL RETREAT",
  },
];

export const tripStyles: TripStyleItem[] = [
  {
    id: "first-time",
    title: "FIRST TIME IN KASHI",
    tagline: "Stay where exploring the city feels effortless.",
    description: "Choose Godowlia or the Dashashwamedh corridor. You can step outside directly into ancient lanes, morning kachori shops, and walk to the Aarti within minutes.",
    recommendedArea: "Godowlia & Dashashwamedh",
    areaSlug: "godowlia",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    alt: "Vibrant and accessible central street in Godowlia",
  },
  {
    id: "slow-kashi",
    title: "SLOW KASHI",
    tagline: "Wake up near the Ganga and take the day slowly.",
    description: "Stay around Assi Ghat. Enjoy sunrise sitar recitals, yoga on the stone steps, riverside rooftop cafés, and unhurried afternoons with a book.",
    recommendedArea: "Assi Ghat Enclave",
    areaSlug: "assi-ghat",
    image: "/images/kashi-sunrise-ghats.jpg",
    alt: "Morning river reflection and quiet wooden boats at Assi",
  },
  {
    id: "temple-journey",
    title: "TEMPLE JOURNEY",
    tagline: "Stay close to the spiritual heart of the city.",
    description: "Old Kashi and central ghat havelis place you right beside Kashi Vishwanath, Annapurna Temple, and Manikarnika for early morning rituals.",
    recommendedArea: "Old Kashi & Central Ghats",
    areaSlug: "old-kashi",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    alt: "Golden spire of temple against early dawn sky",
  },
  {
    id: "food-and-city",
    title: "FOOD & OLD CITY",
    tagline: "Be close to the lanes where Kashi comes alive.",
    description: "Godowlia and Chowk surround you with multi-generational halwais, sizzling tamatar chaat, and the aroma of roasted hing and rabdi.",
    recommendedArea: "Godowlia & Chowk",
    areaSlug: "godowlia",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    alt: "Traditional street food and kachori frying in old city",
  },
  {
    id: "quiet-escape",
    title: "QUIET ESCAPE",
    tagline: "Step away from the busiest parts of the city.",
    description: "Opt for Sarnath's monastery gardens or Cantonment's 12-acre luxury estates to enjoy restful green silence after daytime explorations.",
    recommendedArea: "Sarnath & Cantonment",
    areaSlug: "cantonment",
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
    alt: "Peaceful green trees and manicured lawns",
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What's your travel style?",
    subtitle: "Select the pace that feels right for your trip.",
    options: [
      {
        label: "Solo / Backpacker",
        description: "Social hostels, walking tours, and independent roaming.",
        weights: { "assi-ghat": 4, "lanka": 3, "old-kashi": 2 },
      },
      {
        label: "Couple / Slow Traveler",
        description: "Riverside cafés, boutique havelis, and sunrise vistas.",
        weights: { "assi-ghat": 4, "old-kashi": 3, "cantonment": 2 },
      },
      {
        label: "Family with Children or Elders",
        description: "Comfort, vehicle access, elevators, and ease of transit.",
        weights: { "cantonment": 4, "godowlia": 3, "lanka": 2 },
      },
      {
        label: "Pilgrim / Devotional Journey",
        description: "Proximity to Kashi Vishwanath, sacred ghats, and morning aarti.",
        weights: { "dashashwamedh-area": 4, "old-kashi": 3, "godowlia": 3 },
      },
    ],
  },
  {
    id: 2,
    question: "What matters most to you?",
    subtitle: "Choose your primary priority for this stay.",
    options: [
      {
        label: "Direct Ganga River View",
        description: "Watching dawn mist from the terrace and stepping directly to boats.",
        weights: { "old-kashi": 4, "assi-ghat": 3, "dashashwamedh-area": 3 },
      },
      {
        label: "Temple Proximity & Aarti",
        description: "Walking distance to the Golden Corridor and evening rituals.",
        weights: { "godowlia": 4, "dashashwamedh-area": 4, "old-kashi": 2 },
      },
      {
        label: "Quiet & Greenery",
        description: "Sleeping in silence, away from vehicle horns and crowds.",
        weights: { "sarnath": 4, "cantonment": 4 },
      },
      {
        label: "Food, Street Life & Budget",
        description: "Surrounded by chaat stalls, student cafés, and cheap transit.",
        weights: { "godowlia": 3, "lanka": 4, "assi-ghat": 2 },
      },
    ],
  },
  {
    id: 3,
    question: "What's your preferred atmosphere?",
    subtitle: "How should your stay feel when you return each evening?",
    options: [
      {
        label: "Relaxed & Bohemian",
        description: "Sitar music, rooftop espresso, and artistic conversations.",
        weights: { "assi-ghat": 5, "lanka": 2 },
      },
      {
        label: "Authentic & Historic",
        description: "Centuries-old stone courtyards and labyrinthine heritage.",
        weights: { "old-kashi": 5, "dashashwamedh-area": 2 },
      },
      {
        label: "Spacious & Modern Luxury",
        description: "Lush lawns, swimming pools, and Western amenities.",
        weights: { "cantonment": 5 },
      },
      {
        label: "Peaceful & Contemplative",
        description: "Buddhist monasteries, chanting, and quiet gardens.",
        weights: { "sarnath": 5 },
      },
    ],
  },
];
export const TRIP_STYLES = tripStyles;
export const QUIZ_QUESTIONS = quizQuestions;

// Query helper functions
export function getAllNeighbourhoods(): Neighbourhood[] {
  return neighbourhoodsData;
}

export function getNeighbourhoodBySlug(slug: string): Neighbourhood | undefined {
  return neighbourhoodsData.find((n) => n.slug === slug);
}

export function getAllStays(): Stay[] {
  return staysData;
}

export function getStayBySlug(slug: string): Stay | undefined {
  return staysData.find((s) => s.slug === slug);
}

export function getStaysByArea(areaSlug: string): Stay[] {
  return staysData.filter((s) => s.areaSlug === areaSlug);
}

export function searchStays(
  query: string,
  area: string = "ALL",
  type: string = "ALL",
  traveller: string = "ALL"
): Stay[] {
  const normalizedQuery = query.toLowerCase().trim();

  return staysData.filter((stay) => {
    // 1. Area filter
    if (area !== "ALL" && stay.areaSlug !== area) {
      return false;
    }

    // 2. Type filter
    if (type !== "ALL" && stay.type.toLowerCase() !== type.toLowerCase()) {
      return false;
    }

    // 3. Traveller filter
    if (
      traveller !== "ALL" &&
      !stay.travellerTypes.some((t) => t.toLowerCase() === traveller.toLowerCase())
    ) {
      return false;
    }

    // 4. Text search query
    if (!normalizedQuery) return true;

    const matchesName = stay.name.toLowerCase().includes(normalizedQuery);
    const matchesArea = stay.area.toLowerCase().includes(normalizedQuery);
    const matchesType = stay.type.toLowerCase().includes(normalizedQuery);
    const matchesDesc = stay.description.toLowerCase().includes(normalizedQuery);
    const matchesTags = stay.tags.some((t) => t.toLowerCase().includes(normalizedQuery));

    return matchesName || matchesArea || matchesType || matchesDesc || matchesTags;
  });
}

export function recommendNeighbourhoods(
  scores: Record<string, number>
): Neighbourhood[] {
  const sortedSlugs = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([slug]) => slug);

  const topSlugs = sortedSlugs.slice(0, 2);
  const results = neighbourhoodsData.filter((n) => topSlugs.includes(n.slug));

  // Fallback to Assi Ghat if no score
  return results.length > 0 ? results : [neighbourhoodsData[0]];
}
