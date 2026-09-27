export interface Place {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  category: "Ghat" | "Temple" | "Heritage" | "Sarnath" | "Hidden Kashi" | "Markets" | "Culture";
  tagline: string;
  shortDescription: string;
  description: string;
  image: string;
  alt: string;
  location: string;
  bestFor: string;
  tags: string[];
  featured?: boolean;
  whyVisit: string[];
  whatToExperience: string[];
  practicalTips: string[];
  nearbySlugs: string[];
  gallery?: string[];
  badge?: "LOCAL FAVOURITE" | "HIDDEN" | "CULTURAL" | "PHOTOGRAPHY" | "MUST VISIT";
}

export interface CategoryItem {
  id: string;
  label: string;
  categoryKey: Place["category"] | "ALL";
}

export interface MoodTag {
  id: string;
  label: string;
  icon: string;
  tag: string;
}

export const CATEGORIES: CategoryItem[] = [
  { id: "all", label: "ALL", categoryKey: "ALL" },
  { id: "temples", label: "TEMPLES", categoryKey: "Temple" },
  { id: "ghats", label: "GHATS", categoryKey: "Ghat" },
  { id: "sarnath", label: "SARNATH", categoryKey: "Sarnath" },
  { id: "heritage", label: "HERITAGE", categoryKey: "Heritage" },
  { id: "markets", label: "MARKETS", categoryKey: "Markets" },
  { id: "hidden", label: "HIDDEN KASHI", categoryKey: "Hidden Kashi" },
  { id: "culture", label: "CULTURE", categoryKey: "Culture" },
];

export const MOOD_TAGS: MoodTag[] = [
  { id: "spiritual", label: "Spiritual", icon: "🛕", tag: "Spiritual" },
  { id: "peaceful", label: "Peaceful", icon: "🌅", tag: "Peaceful" },
  { id: "photogenic", label: "Photogenic", icon: "📸", tag: "Photogenic" },
  { id: "food", label: "Food", icon: "🍜", tag: "Food" },
  { id: "history", label: "History", icon: "🏛️", tag: "History" },
  { id: "culture", label: "Culture", icon: "🎨", tag: "Culture" },
  { id: "evening", label: "Evening", icon: "🌙", tag: "Evening" },
  { id: "hidden", label: "Hidden", icon: "👀", tag: "Hidden" },
];

export const placesData: Place[] = [
  // ==================== FEATURED & MAJOR ICONS ====================
  {
    id: "kashi-vishwanath",
    slug: "kashi-vishwanath",
    name: "Kashi Vishwanath Temple",
    hindiName: "काशी विश्वनाथ मंदिर",
    category: "Temple",
    tagline: "The golden spiritual epicenter of Kashi and one of the 12 sacred Jyotirlingas.",
    shortDescription: "One of the most revered Shiva temples and a spiritual heart of Kashi.",
    description: "Revered since ancient antiquity, Kashi Vishwanath stands as the gravitational heart of Varanasi. Enclosed within the restored Vishwanath Dham Corridor connecting directly to the Ganga, the sanctum enshrines the sacred Jyotirlinga topped with its iconic gold-plated spire donated by Maharaja Ranjit Singh in 1839.",
    image: "/images/explore/temples/kashi-vishwanath.jpg",
    alt: "Golden dome and spire of Kashi Vishwanath Temple viewed through the sandstone corridor with devotees",
    location: "Lahori Tola / Vishwanath Corridor, Varanasi",
    bestFor: "Devotion + ancient spirituality + corridor architecture",
    tags: ["Spiritual", "History", "Must Visit", "Morning"],
    featured: true,
    badge: "MUST VISIT",
    whyVisit: [
      "One of the 12 sacred Jyotirlingas of Lord Shiva in India",
      "Magnificent gold-plated dome containing nearly 800 kg of pure gold",
      "Stunning newly constructed corridor extending directly to the Manikarnika and Lalita Ghats",
      "Immerse in the timeless vibration of dawn Mangala Aarti"
    ],
    whatToExperience: [
      "Walk through the polished red sandstone corridor from the river to the sanctum",
      "Witness early morning devotees carrying holy Ganga water in copper vessels",
      "Observe the ancient Gyanvapi well and historical stone inscriptions",
      "Sample fresh hot pedas from traditional sweet shops outside the gate"
    ],
    practicalTips: [
      "Electronic devices, leather belts, and large bags are strictly restricted inside; secure lockers are available.",
      "Early morning (before 7:00 AM) or late evening visits offer a calmer atmosphere.",
      "Carry government-issued ID proof for identity verification."
    ],
    nearbySlugs: ["dashashwamedh-ghat", "manikarnika-ghat", "godowlia-market", "chaukhamba-lanes"],
    gallery: [
      "/images/explore/temples/kashi-vishwanath.jpg",
      "/images/explore/ghats/dashashwamedh-ghat.jpg",
      "/images/kashi-sunrise-ghats.jpg"
    ]
  },
  {
    id: "dashashwamedh-ghat",
    slug: "dashashwamedh-ghat",
    name: "Dashashwamedh Ghat",
    hindiName: "दशाश्वमेध घाट",
    category: "Ghat",
    tagline: "The beating cultural pulse of Varanasi and home to the world-renowned evening Ganga Aarti.",
    shortDescription: "One of Kashi's most vibrant ghats and the setting for the famous evening Ganga Aarti.",
    description: "According to Hindu mythology, Lord Brahma performed the grand Ten-Horse Sacrifice (Dasa-Ashwamedha) on this very riverbank. Today, Dashashwamedh is the grand amphitheater of Kashi life — teeming with priests under bamboo umbrellas, flower sellers stringing marigolds, and thousands gathering each evening for the sacred synchronized brass Aarti.",
    image: "/images/explore/ghats/dashashwamedh-ghat.jpg",
    alt: "Priests performing the spectacular evening Ganga Aarti with synchronized brass lamps at Dashashwamedh Ghat",
    location: "Dashashwamedh Road, Old Varanasi",
    bestFor: "Ganga Aarti + evening atmosphere + riverboats",
    tags: ["Spiritual", "Evening", "Culture", "Photogenic", "Must Visit"],
    featured: true,
    badge: "MUST VISIT",
    whyVisit: [
      "The world-famous evening Maha Aarti with synchronized brass lamps and conch sounds",
      "Pivotal historical ghat mentioned in early Puranic texts",
      "Prime boarding point for morning wooden boat rides across the crescent riverfront",
      "Vibrant human tapestry of ascetics, artists, pilgrims, and musicians"
    ],
    whatToExperience: [
      "Arrive 45 minutes before dusk to secure a step seat or hire a wooden boat on the water",
      "Float a leaf-boat diya (earthen lamp with petals) down the tranquil river",
      "Watch morning bathers offering water to the rising sun during Subah-e-Banaras",
      "Taste spiced Banarasi lemon tea served in fresh kulhads right on the stone steps"
    ],
    practicalTips: [
      "Arrive by 5:30 PM in winter or 6:30 PM in summer for optimal Aarti viewing.",
      "Watch out for touts; agree on boat prices beforehand.",
      "Slip-resistant shoes are recommended when walking near the water's edge."
    ],
    nearbySlugs: ["kashi-vishwanath", "manikarnika-ghat", "godowlia-market", "kedar-ghat"],
    gallery: [
      "/images/explore/ghats/dashashwamedh-ghat.jpg",
      "/images/kashi-sunrise-ghats.jpg",
      "/images/dashashwamedh-ganga-aarti.jpg"
    ]
  },
  {
    id: "assi-ghat",
    slug: "assi-ghat",
    name: "Assi Ghat",
    hindiName: "अस्सी घाट",
    category: "Ghat",
    tagline: "The southern terminus where morning classical ragas, riverfront yoga, and youthful cafés blend seamlessly.",
    shortDescription: "A lively riverside space known for sunrise, cafés and a relaxed atmosphere.",
    description: "Marking the sacred confluence of the ancient River Assi with the Ganga, Assi Ghat is the soulful favorite of writers, philosophers, students from Banaras Hindu University, and slow-travelers. Every dawn begins with 'Subah-e-Banaras' — a cultural dawn tribute of Vedic hymns, sitar ragas, and community yoga.",
    image: "/images/explore/ghats/assi-ghat.jpg",
    alt: "Morning yoga practitioners and wooden rowboats at the wide stone steps of Assi Ghat during sunrise",
    location: "Assi, Southern Riverfront, Varanasi",
    bestFor: "Sunrise + cafés + relaxed mornings + yoga",
    tags: ["Peaceful", "Culture", "Photogenic", "Morning", "Food"],
    featured: true,
    badge: "LOCAL FAVOURITE",
    whyVisit: [
      "Subah-e-Banaras: free daily morning Vedic chants and classical Hindustani music",
      "Hub of artistic rooftop cafés serving apple pies, espresso, and wood-fired pizzas",
      "Wide, pedestrian-friendly stone promenade ideal for leisurely walks",
      "Close proximity to the lush tree-lined avenues of Banaras Hindu University"
    ],
    whatToExperience: [
      "Sit on the stone steps at 5:30 AM to watch the sun rise across the eastern sandbanks",
      "Participate in sunrise public yoga sessions conducted right on the ghat",
      "Rent a classic bicycle to explore southern ghat paths and university campus",
      "Enjoy artisanal coffee while overlooking traditional rowboats swaying on the water"
    ],
    practicalTips: [
      "One of the easiest ghats to access directly by autorickshaw or car without long walks through narrow lanes.",
      "Great base for long-stay travelers with numerous homestays and heritage guesthouses.",
      "Visit Pizzeria Vaatika Café right beside the ghat for their signature apple pie."
    ],
    nearbySlugs: ["tulsi-ghat", "chet-singh-ghat", "sankat-mochan", "kedar-ghat"],
    gallery: [
      "/images/explore/ghats/assi-ghat.jpg",
      "/images/kashi-sunrise-ghats.jpg"
    ]
  },
  {
    id: "sarnath-heritage",
    slug: "sarnath",
    name: "Sarnath Deer Park & Stupas",
    hindiName: "सारनाथ",
    category: "Sarnath",
    tagline: "The cradle of Buddhist thought where Gautama Buddha delivered his first sermon.",
    shortDescription: "An important Buddhist site where Gautama Buddha delivered his first sermon.",
    description: "Located just 10 kilometers northeast of Varanasi, Sarnath is one of Buddhism's four primary pilgrimage sites. Here in the serene Deer Park (Isipatana), Buddha set into motion the Wheel of Dharma (Dharmachakra Pravartana) after attaining enlightenment. The tranquil grounds boast the colossal 43-meter Dhamek Stupa, Ashokan pillars, and international monasteries.",
    image: "/images/explore/sarnath/sarnath-deer-park.jpg",
    alt: "Ancient Dhamek Stupa and peaceful deer park lawns at Sarnath with visiting monks",
    location: "Sarnath, 10 km North of Varanasi City",
    bestFor: "Buddhist heritage + peaceful gardens + ancient museum",
    tags: ["Peaceful", "History", "Culture", "Must Visit"],
    featured: true,
    badge: "MUST VISIT",
    whyVisit: [
      "Site of Buddha’s historic first sermon: the Four Noble Truths and Eightfold Path",
      "Magnificent 5th-century Gupta-period Dhamek Stupa with floral stone arabesques",
      "Sarnath Archaeological Museum housing India’s National Emblem — the Lion Capital of Ashoka",
      "Peaceful international monasteries representing Japan, Tibet, Thailand, and Sri Lanka"
    ],
    whatToExperience: [
      "Circumambulate the massive Dhamek Stupa amidst chanting maroon-robed monks",
      "Inspect the exquisitely polished 3rd-century BCE Ashokan sandstone capital",
      "Stroll the quiet manicured lawns of the ancient Deer Park",
      "Hear temple bells chime from the Thai Temple's 80-foot standing Buddha"
    ],
    practicalTips: [
      "Allocate 3-4 hours; best reached by auto or taxi from Varanasi central (30-40 min ride).",
      "Archaeological Museum is closed on Fridays.",
      "Visit early morning or late afternoon to avoid midday sun."
    ],
    nearbySlugs: ["dhamek-stupa", "sarnath-museum", "chaukhandi-stupa", "mulagandha-kuti"],
    gallery: [
      "/images/explore/sarnath/sarnath-deer-park.jpg",
      "/images/explore/sarnath/dhamek-stupa.jpg"
    ]
  },
  {
    id: "manikarnika-ghat",
    slug: "manikarnika-ghat",
    name: "Manikarnika Ghat",
    hindiName: "मणिकर्णिका घाट",
    category: "Ghat",
    tagline: "The great cremation ground of Kashi, where death is embraced as the ultimate liberation (Moksha).",
    shortDescription: "One of the oldest and most significant ghats on the Ganga.",
    description: "Known reverently as the 'Mahashamshana' (Great Cremation Ground), Manikarnika is where the eternal sacred fire is said to have burned without extinguishing for thousands of years. Hindus believe that dying or being cremated here releases the soul from the cycle of rebirth directly into Moksha. It is a deeply humbling, philosophical confrontation with mortality.",
    image: "/images/explore/ghats/manikarnika-ghat.jpg",
    alt: "Historic stone pavilions and sacred cremation ghat atmosphere at Manikarnika Ghat along the holy Ganga",
    location: "Old City Riverfront, Between Dashashwamedh and Scindia",
    bestFor: "Philosophical contemplation + timeless spiritual rituals",
    tags: ["Spiritual", "History", "Culture"],
    featured: true,
    badge: "CULTURAL",
    whyVisit: [
      "Kashi’s most sacred cremation ghat representing transcendence over mortality",
      "Ancient Manikarnika Kund (Chakra-Pushkarini) dug by Lord Vishnu before the river arrived",
      "Observation of raw, solemn spiritual dignity untouched by commercial tourism",
      "Centuries-old stone towers leaning dramatically toward the river"
    ],
    whatToExperience: [
      "Observe the quiet, solemn proceedings respectfully from a distance or from a passing boat",
      "Witness boatloads of sacred wood logs stacked in monumental tiers along the stone steps",
      "Reflect on the impermanence of material life alongside meditating sadhus",
      "Walk the ancient upper galleries leading into Chaukhamba lane"
    ],
    practicalTips: [
      "Photography is strictly forbidden and considered deeply disrespectful to grieving families.",
      "Beware of persistent scammers demanding donations for wood.",
      "Best observed quietly from a moving boat on the river or from upper designated balconies."
    ],
    nearbySlugs: ["kashi-vishwanath", "dashashwamedh-ghat", "scindia-ghat", "chaukhamba-lanes"],
    gallery: [
      "/images/explore/ghats/manikarnika-ghat.jpg",
      "/images/explore/ghats/scindia-ghat.jpg"
    ]
  },
  {
    id: "sankat-mochan",
    slug: "sankat-mochan",
    name: "Sankat Mochan Hanuman Temple",
    hindiName: "संकट मोचन हनुमान मंदिर",
    category: "Temple",
    tagline: "The temple of the Reliever of Troubles, founded by Goswami Tulsidas.",
    shortDescription: "A historic temple dedicated to Hanuman and an important spiritual destination in Kashi.",
    description: "Nestled in a peaceful forested enclosure near the southern edges of the city, Sankat Mochan ('Reliever of Distress') was founded in the early 16th century by poet-saint Goswami Tulsidas, author of the Ramcharitmanas. Dedicated to Lord Hanuman, the temple is famed for its tranquil spiritual energy, resident monkeys, and the annual Sangeet Samaroh festival.",
    image: "/images/explore/temples/sankat-mochan.jpg",
    alt: "Historic arched entrance gate and neem-shaded courtyard of Sankat Mochan Hanuman Temple with visiting devotees",
    location: "Sankat Mochan Road, Near Saket Nagar, Varanasi",
    bestFor: "Quiet devotion + classical music heritage + besan laddoos",
    tags: ["Spiritual", "Peaceful", "Culture", "History"],
    featured: true,
    badge: "LOCAL FAVOURITE",
    whyVisit: [
      "Historic sanctum established where saint Tulsidas had a vision of Lord Hanuman",
      "Famed for mouth-watering pure-ghee orange besan laddoos distributed as sacred prasad",
      "Venue of the world-famous Sankat Mochan Sangeet Samaroh, attracting master Indian classical maestros",
      "A peaceful green compound shielding pilgrims from city street horns"
    ],
    whatToExperience: [
      "Chant the Hanuman Chalisa in the open pillared veranda alongside hundreds of devotees",
      "Collect warm besan laddoos freshly made in the temple sweet counter",
      "Observe the mischievous troop of resident temple langurs and macaques in the trees",
      "Visit on Tuesday or Saturday evenings to witness peak devotional energy"
    ],
    practicalTips: [
      "Mobile phones and bags must be deposited in cloakrooms at the entrance gate.",
      "Keep food items concealed from monkeys within the premises.",
      "Evenings on Tuesdays and Saturdays can be busy; weekday mornings are serene."
    ],
    nearbySlugs: ["assi-ghat", "durga-temple", "tulsi-manas-temple", "tulsi-ghat"],
    gallery: [
      "/images/explore/temples/sankat-mochan.jpg",
      "/images/explore/temples/durga-temple.jpg"
    ]
  },

  // ==================== 8 DEDICATED GHATS ====================
  {
    id: "chet-singh-ghat",
    slug: "chet-singh-ghat",
    name: "Chet Singh Ghat",
    category: "Ghat",
    tagline: "A fortress by the water and site of a historic rebellion against Warren Hastings.",
    shortDescription: "A striking fortified ghat featuring majestic stone turrets and battlements.",
    description: "Unlike the open steps of typical ghats, Chet Singh resembles an imposing medieval river fortress. In 1781, Maharaja Chet Singh was besieged here by troops under British Governor-General Warren Hastings before escaping dramatically through a river-facing window into a waiting boat.",
    image: "/images/explore/ghats/chet-singh-ghat.jpg",
    alt: "Imposing 18th-century stone fortress turrets and battlements of Chet Singh Ghat rising majestically above the Ganga",
    location: "Southern Ghats, between Shivala and Niranjani Ghat",
    bestFor: "Fortress architecture + dramatic history + photography",
    tags: ["History", "Photogenic", "Culture"],
    whyVisit: [
      "Rare fortified palace facade along the riverside",
      "Site of the famous 1781 rebellion against the British East India Company",
      "Dramatic backdrop for river sunset photographs"
    ],
    whatToExperience: ["View the high fortified bastions from a boat", "Inspect the stone battlements"],
    gallery: [
      "/images/explore/ghats/chet-singh-ghat.jpg",
      "/images/kashi-sunrise-ghats.jpg"
    ],
    practicalTips: ["Quiet ghat with fewer crowds, ideal for contemplative morning photography."],
    nearbySlugs: ["assi-ghat", "tulsi-ghat", "kedar-ghat"]
  },
  {
    id: "scindia-ghat",
    slug: "scindia-ghat",
    name: "Scindia Ghat",
    category: "Ghat",
    tagline: "Home to the famous partially submerged Shiva temple tilting gracefully into the river.",
    shortDescription: "Picturesque ghat celebrated for its dramatically leaning 150-year-old stone temple.",
    description: "Constructed in 1830 by the Maratha Gwalior dynasty, Scindia Ghat collapsed partially under its own immense stone weight into the soft river silt. The resulting Ratneshwar Mahadev temple leans at a staggering 9-degree angle — greater than the Leaning Tower of Pisa.",
    image: "/images/explore/ghats/scindia-ghat.jpg",
    alt: "Iconic partially submerged leaning stone spire of Ratneshwar Mahadev temple at Scindia Ghat in Varanasi",
    location: "North of Manikarnika Ghat, Central Kashi",
    bestFor: "Leaning temple + quiet mornings + maze of narrow alleys",
    tags: ["Photogenic", "Spiritual", "Hidden"],
    badge: "PHOTOGRAPHY",
    whyVisit: [
      "See the Ratneshwar Mahadev temple leaning 9 degrees into the water",
      "Birthplace legends of great Vedic scholars and saints",
      "Access point to the atmospheric maze of Siddha Kshetra alleys"
    ],
    whatToExperience: ["Photograph the spire reflections in calm dawn water", "Explore narrow uphill alleys"],
    gallery: [
      "/images/explore/ghats/scindia-ghat.jpg",
      "/images/explore/ghats/manikarnika-ghat.jpg"
    ],
    practicalTips: ["During monsoon high water, the temple's sanctum is completely submerged."],
    nearbySlugs: ["manikarnika-ghat", "panchganga-ghat", "kashi-vishwanath"]
  },
  {
    id: "kedar-ghat",
    slug: "kedar-ghat",
    name: "Kedar Ghat",
    category: "Ghat",
    tagline: "Vibrant red-and-white striped steps housing the revered southern shrine of Kedareshwar.",
    shortDescription: "Distinctive ghat with red-and-white banded stone steps and a bustling South Indian pilgrim quarter.",
    description: "Kedar Ghat is visually unmistakable due to its bold red and white horizontal striping, characteristic of South Indian Dravidian sacred architecture. The ancient Kedareshwar temple is considered an authentic southern substitute for the Himalayan Kedarnath shrine.",
    image: "/images/explore/ghats/kedar-ghat.jpg",
    alt: "Distinctive red and white striped sacred stone steps and temple shikhara of Kedar Ghat on the Ganges",
    location: "Central-South Riverfront, Kedar Gali",
    bestFor: "South Indian pilgrim culture + morning rituals + heritage food",
    tags: ["Spiritual", "Culture", "Photogenic"],
    whyVisit: [
      "Unique red-and-white striped ghat architecture",
      "Ancient Kedareshwar Shiva temple and Gauri Kund pool",
      "Delightful South Indian dining halls and filter coffee stalls nearby"
    ],
    whatToExperience: ["Taste crispy morning dosas in Kedar Gali", "Watch traditional morning bathing ceremonies"],
    gallery: [
      "/images/explore/ghats/kedar-ghat.jpg",
      "/images/kashi-sunrise-ghats.jpg"
    ],
    practicalTips: ["The steps are well-maintained and clean, making it a peaceful spot for sunrise meditation."],
    nearbySlugs: ["dashashwamedh-ghat", "assi-ghat", "chet-singh-ghat"]
  },
  {
    id: "tulsi-ghat",
    slug: "tulsi-ghat",
    name: "Tulsi Ghat",
    category: "Ghat",
    tagline: "Where saint Tulsidas composed the Ramcharitmanas and staged the first Ramlila.",
    shortDescription: "Historic, literary ghat honoring the poet-saint Goswami Tulsidas.",
    description: "Perched just north of Assi, Tulsi Ghat preserves the simple stone quarters where Goswami Tulsidas lived, wrote major sections of the Ramcharitmanas, and passed away in 1623. A small museum preserves his wooden clogs, pillow, and a fragment of his handwritten manuscript.",
    image: "/images/explore/ghats/tulsi-ghat.jpg",
    alt: "Historic riverside stone arches and steps of Tulsi Ghat where Goswami Tulsidas composed the Ramcharitmanas",
    location: "Immediately north of Assi Ghat",
    bestFor: "Literary history + Ramlila heritage + peaceful afternoons",
    tags: ["History", "Culture", "Peaceful"],
    whyVisit: [
      "Historic home where Tulsidas composed the Ramcharitmanas",
      "World's oldest continuing open-air theatrical Ramlila performance site",
      "Home to the active Sankat Mochan Foundation's Swachha Ganga ecological laboratory"
    ],
    whatToExperience: ["Visit the quiet Tulsi Akhada wrestling ring", "View the preserved relics of Tulsidas"],
    gallery: [
      "/images/explore/ghats/tulsi-ghat.jpg",
      "/images/explore/ghats/assi-ghat.jpg"
    ],
    practicalTips: ["Quiet and contemplative; easily walked to within 3 minutes from Assi Ghat."],
    nearbySlugs: ["assi-ghat", "chet-singh-ghat", "sankat-mochan"]
  },
  {
    id: "panchganga-ghat",
    slug: "panchganga-ghat",
    name: "Panchganga Ghat",
    category: "Ghat",
    tagline: "The mystical confluence of five rivers crowned by Aurangzeb's towering stone mosque.",
    shortDescription: "Majestic high-tiered ghat where five mythical subterranean streams meet the Ganga.",
    description: "Believed to be the sacred confluence of five sacred rivers (Ganga, Yamuna, Saraswati, Kirana, and Dhutpapa), Panchganga is crowned by the monumental Dharhara Mosque (Alamgir Mosque) built on the high bluffs overlooking the river bend. In the autumn month of Kartik, hundreds of wicker baskets with oil lamps are suspended on tall bamboo poles here.",
    image: "/images/explore/ghats/panchganga-ghat.jpg",
    alt: "Monumental stone tiers and historic riverfront architecture of Panchganga Ghat overlooking the Ganga",
    location: "Northern Ghats, Near Chaukhamba",
    bestFor: "Panoramas + Kartik lantern festival + syncretic architecture",
    tags: ["Culture", "History", "Photogenic", "Spiritual"],
    badge: "CULTURAL",
    whyVisit: [
      "Stunning elevated panoramic view of the entire 84-ghat river crescent",
      "Site where saint Kabir received spiritual initiation from Swami Ramananda",
      "Famous Kartik month sky-lantern festival (Akash Deep)"
    ],
    whatToExperience: ["Climb the stone steps to the high terrace for a breathtaking river view", "Walk to Kabir chaura"],
    gallery: [
      "/images/explore/ghats/panchganga-ghat.jpg",
      "/images/kashi-sunrise-ghats.jpg"
    ],
    practicalTips: ["Requires climbing several stone flights, so wear comfortable walking footwear."],
    nearbySlugs: ["scindia-ghat", "manikarnika-ghat", "chaukhamba-lanes"]
  },

  // ==================== 8 DEDICATED TEMPLES ====================
  {
    id: "kal-bhairav",
    slug: "kal-bhairav",
    name: "Kal Bhairav Temple",
    hindiName: "काल भैरव मंदिर",
    category: "Temple",
    tagline: "The fiery guardian deity and Kotwal (police chief) of Kashi.",
    shortDescription: "Ancient temple of Lord Shiva’s fierce aspect, the spiritual protector of Varanasi.",
    description: "Known as the Kotwal (Police Chief) of Kashi, Kal Bhairav is believed to maintain moral order in the holy city. Tradition dictates that anyone arriving or leaving Varanasi must pay homage here to receive spiritual 'visas' and blessings.",
    image: "/images/explore/temples/kal-bhairav.jpg",
    alt: "Ancient sanctum entrance adorned with brass bells, saffron marigold garlands, and oil lamps at Kal Bhairav Temple",
    location: "Visheshwarganj, North-Central Varanasi",
    bestFor: "Fierce spiritual energy + black thread blessings + old bazaar",
    tags: ["Spiritual", "Culture", "History"],
    whyVisit: [
      "Ancient traditional protector of Kashi according to centuries of lore",
      "Receive sacred black thread (ganda) tied on the wrist as protection",
      "Unique offerings including mustard oil and liquor handed to the deity"
    ],
    whatToExperience: ["Participate in the vigorous evening drum Aarti", "Explore nearby incense and copper bazaars"],
    gallery: [
      "/images/explore/temples/kal-bhairav.jpg",
      "/images/explore/temples/kashi-vishwanath.jpg"
    ],
    practicalTips: ["Expect vibrant, intense ritual activity in tight quarters."],
    nearbySlugs: ["kashi-vishwanath", "panchganga-ghat", "thatheri-bazar"]
  },
  {
    id: "durga-temple",
    slug: "durga-temple",
    name: "Durga Kund Mandir",
    hindiName: "दुर्गा कुंड मंदिर",
    category: "Temple",
    tagline: "The magnificent 18th-century ochre-red fortress temple beside a holy water tank.",
    shortDescription: "Distinctive multi-tiered red stone temple dedicated to Goddess Durga.",
    description: "Built in the 18th century by a Bengali Maharani, this striking temple features multi-tiered red shikharas in the Nagara style. Perched adjacent to the rectangular Durga Kund reservoir, it is dedicated to Goddess Durga and is famous for its vibrant festival celebrations during Navratri.",
    image: "/images/explore/temples/durga-temple.jpg",
    alt: "Striking multi-tiered ochre-red shikhara of Durga Kund Mandir reflected in the waters of the sacred Durga Kund",
    location: "Durga Kund, Near Bhelupur, Varanasi",
    bestFor: "Nagara red-stone architecture + holy reservoir + Navratri festivals",
    tags: ["Spiritual", "Photogenic", "History"],
    whyVisit: [
      "Remarkable ochre-stained red sandstone temple spires",
      "Historic rectangular water tank (Durga Kund)",
      "Vibrant spiritual energy during the nine nights of Navratri"
    ],
    whatToExperience: ["Feed sacred fish in the tank", "Observe intricate brass bells ringing in rhythm"],
    gallery: [
      "/images/explore/temples/durga-temple.jpg",
      "/images/explore/temples/sankat-mochan.jpg"
    ],
    practicalTips: ["Often referred to colloquially as the 'Monkey Temple' due to residents on the perimeter."],
    nearbySlugs: ["tulsi-manas-temple", "sankat-mochan", "assi-ghat"]
  },
  {
    id: "tulsi-manas-temple",
    slug: "tulsi-manas-temple",
    name: "Tulsi Manas Mandir",
    hindiName: "तुलसी मानस मंदिर",
    category: "Temple",
    tagline: "White marble sanctuary where the entire Ramcharitmanas is carved into walls.",
    shortDescription: "Serene marble temple with verses of Tulsidas's epic poetry engraved in stone.",
    description: "Constructed in 1964 from gleaming white Makrana marble, Tulsi Manas Temple stands on the sacred site where Tulsidas composed the Ramcharitmanas. Every wall of the inner sanctum is meticulously engraved with verse couplets (chaupais and dohas), alongside mechanical dioramas depicting epic scenes.",
    image: "/images/explore/temples/tulsi-manas-temple.jpg",
    alt: "Gleaming white marble temple facade and landscaped gardens of Tulsi Manas Mandir in Varanasi",
    location: "Durgakund Road, Near Sankat Mochan",
    bestFor: "Marble architecture + poetic inscriptions + tranquil gardens",
    tags: ["Peaceful", "Culture", "Spiritual"],
    whyVisit: [
      "The complete Ramcharitmanas epic carved into polished marble panels",
      "Quiet landscaped garden setting away from vehicle noise",
      "Historical spot where saint Tulsidas translated Valmiki's Ramayana into Awadhi"
    ],
    whatToExperience: ["Read philosophical verses on the walls", "Enjoy peaceful evening strolls in the garden"],
    gallery: [
      "/images/explore/temples/tulsi-manas-temple.jpg",
      "/images/explore/temples/durga-temple.jpg"
    ],
    practicalTips: ["Very clean and organized premises, ideal for families and elderly travelers."],
    nearbySlugs: ["durga-temple", "sankat-mochan", "assi-ghat"]
  },
  {
    id: "annapurna-mandir",
    slug: "annapurna-mandir",
    name: "Maa Annapurna Mandir",
    hindiName: "माँ अन्नपूर्णा मंदिर",
    category: "Temple",
    tagline: "The temple of the Goddess of Nourishment and abundance.",
    shortDescription: "Sacred shrine where Goddess Parvati feeds Shiva and blesses Kashi with endless food.",
    description: "Located steps from Kashi Vishwanath, this temple venerates Annapurna, Goddess of Food and Nourishment. Kashi tradition holds that no one within the holy city ever goes to sleep hungry thanks to her perpetual divine grace.",
    image: "/images/explore/temples/annapurna-mandir.jpg",
    alt: "Sacred inner courtyard and ornate shrine of Maa Annapurna Devi Mandir in the heart of old Kashi",
    location: "Vishwanath Gali, Old Varanasi",
    bestFor: "Abundance blessings + Annakoot festival + sacred prasad",
    tags: ["Spiritual", "Culture", "Food"],
    whyVisit: [
      "Famous solid gold idol of Goddess Annapurna unveiled only once a year on Annakoot",
      "Daily free wholesome community kitchen (Langar/Prasad)",
      "Traditional sanctum brimming with aromatic camphor and floral offerings"
    ],
    whatToExperience: ["Receive sacred blessed coins and rice grains for domestic prosperity", "Participate in mid-day bhog"],
    gallery: [
      "/images/explore/temples/annapurna-mandir.jpg",
      "/images/explore/temples/kashi-vishwanath.jpg"
    ],
    practicalTips: ["Accessible directly through the Vishwanath Gali pedestrian path."],
    nearbySlugs: ["kashi-vishwanath", "dashashwamedh-ghat", "chaukhamba-lanes"]
  },
  {
    id: "bharat-mata-temple",
    slug: "bharat-mata-temple",
    name: "Bharat Mata Temple",
    hindiName: "भारत माता मंदिर",
    category: "Temple",
    tagline: "A unique sanctuary where a three-dimensional marble map of undivided India is venerated.",
    shortDescription: "Inspirational patriotic temple inaugurated by Mahatma Gandhi in 1936.",
    description: "Inaugurated by Mahatma Gandhi in 1936 on the campus of Mahatma Gandhi Kashi Vidyapith, this unique temple contains no idols of gods or goddesses. Instead, the central sanctum houses a colossal topographical relief map of undivided India carved precisely from 762 pieces of Makrana marble, complete with scaled mountains, rivers, and oceans.",
    image: "/images/explore/temples/bharat-mata-temple.jpg",
    alt: "Unique topographical relief map of undivided India carved in pristine Makrana marble at Bharat Mata Mandir",
    location: "Vidyapeeth Road, Near Cantt Railway Station",
    bestFor: "Unique national heritage + marble cartography + peaceful campus",
    tags: ["History", "Culture", "Peaceful"],
    whyVisit: [
      "The only temple in India dedicated solely to the personification of Mother India",
      "Astonishing relief map showing Himalayan mountain contours and ocean depths to exact scale",
      "Inaugurated personally by Mahatma Gandhi and built by nationalist Babu Shiv Prasad Gupta"
    ],
    whatToExperience: ["Study scaled mountain ranges and river basins from the viewing balcony", "Read historical plaques"],
    gallery: [
      "/images/explore/temples/bharat-mata-temple.jpg",
      "/images/kashi-sunrise-ghats.jpg"
    ],
    practicalTips: ["Easily combined with arrival or departure at Varanasi Cantt Railway Station."],
    nearbySlugs: ["godowlia-market", "kashi-vishwanath"]
  },
  {
    id: "new-vishwanath-bhu",
    slug: "new-vishwanath-bhu",
    name: "New Vishwanath Temple (VT - BHU)",
    hindiName: "श्री विश्वनाथ मंदिर (बीएचयू)",
    category: "Temple",
    tagline: "The towering 77-meter marble masterpiece in the heart of Banaras Hindu University.",
    shortDescription: "Magnificent marble temple commissioned by the Birla family with one of the tallest spires in Asia.",
    description: "Commissioned by Madan Mohan Malaviya and the industrialist Birla family, the New Vishwanath Temple (fondly known as VT) stands inside the lush 1,300-acre Banaras Hindu University campus. Its soaring 77-meter (253 ft) white marble shikhara is among the tallest temple spires in Asia.",
    image: "/images/explore/temples/new-vishwanath-bhu.jpg",
    alt: "Soaring 77-meter tall white marble shikhara of New Vishwanath Temple (VT) at Banaras Hindu University",
    location: "Banaras Hindu University (BHU) Campus, Lanka",
    bestFor: "Grand architecture + student buzz + cold coffee and street chaat",
    tags: ["Peaceful", "Spiritual", "Photogenic", "Culture"],
    whyVisit: [
      "One of the tallest temple spires in Asia crafted in pristine white marble",
      "Open to all people regardless of caste, creed, or nationality",
      "Set amidst the verdant, peaceful tree-lined avenues of BHU campus"
    ],
    whatToExperience: ["Walk the open marble colonnades", "Sip famous cold coffee at the open-air VT cafe stalls"],
    gallery: [
      "/images/explore/temples/new-vishwanath-bhu.jpg",
      "/images/explore/temples/kashi-vishwanath.jpg"
    ],
    practicalTips: ["Rent a bicycle at Lanka gate to pedal through the picturesque university campus."],
    nearbySlugs: ["assi-ghat", "sankat-mochan"]
  },

  // ==================== SARNATH & HERITAGE ====================
  {
    id: "dhamek-stupa",
    slug: "dhamek-stupa",
    name: "Dhamek Stupa",
    category: "Sarnath",
    tagline: "The monumental 5th-century cylindrical stupa marking Buddha’s first teaching.",
    shortDescription: "Massive 43-meter cylindrical stone stupa adorned with delicate Gupta floral carvings.",
    description: "Built during the Gupta period around 500 CE over an earlier Mauryan foundation, Dhamek Stupa stands 43.6 meters tall. The lower stone band displays exquisitely preserved relief carvings of swastikas, lotus blooms, geometric arabesques, and birds.",
    image: "/images/explore/sarnath/dhamek-stupa.jpg",
    alt: "Massive ancient cylindrical brick Dhamek Stupa with intricate Gupta-period floral stone relief carvings at Sarnath",
    location: "Central Sarnath Complex",
    bestFor: "Gupta stonework + Buddhist meditation + history",
    tags: ["History", "Peaceful", "Culture", "Photogenic"],
    whyVisit: [
      "Historic landmark commemorating Buddha’s revelation of the Noble Eightfold Path",
      "Masterpiece of 5th-century Gupta decorative stone relief carving",
      "Meditative lawns frequented by international Buddhist delegations"
    ],
    whatToExperience: ["Perform traditional walking meditation around the stone base", "Examine lotus relief carvings"],
    gallery: [
      "/images/explore/sarnath/dhamek-stupa.jpg",
      "/images/explore/sarnath/sarnath-deer-park.jpg"
    ],
    practicalTips: ["Entry ticket covers both Dhamek Stupa and the surrounding monastery ruins."],
    nearbySlugs: ["sarnath", "sarnath-museum", "chaukhandi-stupa"]
  },
  {
    id: "sarnath-museum",
    slug: "sarnath-museum",
    name: "Sarnath Archaeological Museum",
    category: "Sarnath",
    tagline: "Treasury of antiquity holding the original 3rd-century BCE Lion Capital of Ashoka.",
    shortDescription: "India’s oldest site museum preserving priceless Buddhist and Mauryan sculptures.",
    description: "Completed in 1910, this sandstone museum holds the greatest treasures excavated from Sarnath, including the original polished Chunar sandstone Lion Capital of Ashoka (adopted as India’s National Emblem) and the 5th-century preaching Buddha statue.",
    image: "/images/explore/sarnath/sarnath-museum.jpg",
    alt: "Historic red sandstone facade and landscaped grounds of the Archaeological Museum at Sarnath",
    location: "Sarnath, Varanasi",
    bestFor: "National history + world-class ancient sculpture",
    tags: ["History", "Culture"],
    whyVisit: [
      "Houses the actual original Ashokan Lion Capital (Emblem of India)",
      "World-renowned 5th-century Dharmachakra Pravartana Buddha statue",
      "Intact Mauryan, Kushan, and Gupta terracotta relics"
    ],
    whatToExperience: ["Stand face-to-face with the mirror-polished Ashoka capital", "Explore five antique galleries"],
    gallery: [
      "/images/explore/sarnath/sarnath-museum.jpg",
      "/images/explore/sarnath/dhamek-stupa.jpg"
    ],
    practicalTips: ["Closed on Fridays. Photography inside requires adhering to archaeological regulations."],
    nearbySlugs: ["sarnath", "dhamek-stupa", "chaukhandi-stupa"]
  },
  {
    id: "chaukhandi-stupa",
    slug: "chaukhandi-stupa",
    name: "Chaukhandi Stupa",
    category: "Sarnath",
    tagline: "Terraced brick stupa crowned by an octagonal Mughal tower built by Emperor Akbar.",
    shortDescription: "Intriguing tiered monument marking where Buddha met his first five disciples.",
    description: "Originally constructed as a terraced brick monument between the 4th and 6th centuries, Chaukhandi was modified in the late 16th century when Govardhan, son of Raja Todar Mal, erected an octagonal Mughal pavilion on top to commemorate Emperor Humayun's visit.",
    image: "/images/explore/sarnath/chaukhandi-stupa.jpg",
    alt: "Ancient terraced brick stupa mound topped by the octagonal Mughal tower at Chaukhandi Stupa in Sarnath",
    location: "Sarnath, 1 km south of Deer Park",
    bestFor: "Syncretic Buddhist-Mughal architecture + quiet lawns",
    tags: ["History", "Culture", "Peaceful"],
    whyVisit: [
      "Unique union of ancient Buddhist terraced brick architecture with a Mughal tower",
      "Historical spot where Buddha reunited with his five ascetic companions",
      "Far fewer crowds than the central Deer Park"
    ],
    whatToExperience: ["Walk up the terraced ramp to view surrounding mango orchards", "Photograph the Mughal pavilion"],
    gallery: [
      "/images/explore/sarnath/chaukhandi-stupa.jpg",
      "/images/explore/sarnath/dhamek-stupa.jpg"
    ],
    practicalTips: ["Located on the main approach road into Sarnath, easily visited first before Deer Park."],
    nearbySlugs: ["sarnath", "dhamek-stupa", "sarnath-museum"]
  },
  {
    id: "mulagandha-kuti",
    slug: "mulagandha-kuti",
    name: "Mulagandha Kuti Vihara",
    category: "Sarnath",
    tagline: "Modern Buddhist temple celebrated for Japanese master Kosetsu Nosu's frescoes.",
    shortDescription: "Elegant modern temple housing sacred relics and magnificent life-of-Buddha wall frescoes.",
    description: "Built in 1931 by the Mahabodhi Society founder Anagarika Dharmapala, this monastery features high soaring spires and interior walls painted with luminous frescoes of Buddha’s life by celebrated Japanese artist Kosetsu Nosu.",
    image: "/images/explore/sarnath/mulagandha-kuti.jpg",
    alt: "Towering Buddhist spire and landscaped gardens of Mulagandha Kuti Vihara temple in Sarnath",
    location: "Deer Park Enclosure, Sarnath",
    bestFor: "Japanese Buddhist frescoes + evening chanting + Bodhi tree",
    tags: ["Peaceful", "Culture", "Spiritual"],
    whyVisit: [
      "Luminous interior frescoes illustrating Buddha's life by Japanese master Kosetsu Nosu",
      "Sacred silver casket enclosing authentic bone relics of Gautama Buddha",
      "A Bodhi tree planted in 1931 from a cutting of the Sri Maha Bodhi in Anuradhapura"
    ],
    whatToExperience: ["Sit inside during the 6:00 PM monks' chanting ceremony", "Walk around the sacred Bodhi tree"],
    gallery: [
      "/images/explore/sarnath/mulagandha-kuti.jpg",
      "/images/explore/sarnath/dhamek-stupa.jpg"
    ],
    practicalTips: ["Remove footwear at the entrance; photography of the frescoes without flash is permitted."],
    nearbySlugs: ["sarnath", "dhamek-stupa", "sarnath-museum"]
  },

  // ==================== HIDDEN KASHI ====================
  {
    id: "chaukhamba-lanes",
    slug: "chaukhamba-lanes",
    name: "Chaukhamba Old City Gallis",
    category: "Hidden Kashi",
    tagline: "The thousand-year-old beating heart of hidden residential Varanasi.",
    shortDescription: "An enchanting stone labyrinth of secret courtyards, winter malaiyo, and heritage mutts.",
    description: "Wandering into Chaukhamba is like stepping centuries backward. In this pedestrian-only maze, houses are linked by second-story stone bridges, courtyard shrines glow with oil lamps, and in winter, vendors whisk delicate saffron malaiyo out of earthenware vats.",
    image: "/images/explore/hidden/chaukhamba-lanes.jpg",
    alt: "Narrow sunlit ancient stone lane in Chaukhamba with heritage doorways and thousand-year-old walls",
    location: "North of Godowlia, Behind Kashi Vishwanath",
    bestFor: "Old architecture + photography + winter malaiyo + lost lanes",
    tags: ["Hidden", "Photogenic", "Food", "Culture"],
    badge: "HIDDEN",
    whyVisit: [
      "Pure, unfiltered heritage Kashi architecture preserved away from road traffic",
      "Winter haven for authentic malaiyo (saffron milk foam delicacy)",
      "Centuries-old private shrines and Maratha haveli doorways"
    ],
    whatToExperience: ["Get intentionally lost among the winding turns", "Taste fresh winter malaiyo in kulhads"],
    gallery: [
      "/images/explore/hidden/chaukhamba-lanes.jpg",
      "/images/ancient-gallis-varanasi.jpg"
    ],
    practicalTips: ["No vehicle can enter; carry a phone map or simply ask friendly shopkeepers for directions."],
    nearbySlugs: ["kashi-vishwanath", "manikarnika-ghat", "thatheri-bazar"]
  },
  {
    id: "thatheri-bazar",
    slug: "thatheri-bazar",
    name: "Thatheri Bazar & Brass Alley",
    category: "Markets",
    tagline: "The rhythmic clang of traditional metalsmiths beating brass and copper bells.",
    shortDescription: "Historic artisanal bazaar where master metalsmiths hand-craft brass temple bells and lamps.",
    description: "One of the oldest artisan bazaars in northern India, Thatheri Bazar echoes with the rhythmic tap-tap of craftsmen hand-hammering brass utensils, sacred water vessels, intricate lamps, and temple bells.",
    image: "/images/explore/markets/thatheri-bazar.jpg",
    alt: "Traditional metal craftsmen shaping brass vessels and lamps in the historic lanes of Thatheri Bazar",
    location: "Chowk Area, Near Kachori Gali",
    bestFor: "Artisanal metalcraft + authentic shopping + historic market smells",
    tags: ["Culture", "History", "Hidden"],
    badge: "LOCAL FAVOURITE",
    whyVisit: [
      "Living heritage of UNESCO-recognized artisanal brass craftsmanship",
      "Purchase genuine temple bells, hand-beaten copper thalis, and brass diyas",
      "Surrounded by Kashi's oldest morning kachori shops"
    ],
    whatToExperience: ["Watch artisans chisel designs into molten-poured brass", "Enjoy morning kachori sabzi"],
    gallery: [
      "/images/explore/markets/thatheri-bazar.jpg",
      "/images/explore/hidden/chaukhamba-lanes.jpg"
    ],
    practicalTips: ["Best visited between 10:00 AM and 4:00 PM when artisan workshops are in full swing."],
    nearbySlugs: ["chaukhamba-lanes", "kashi-vishwanath", "godowlia-market"]
  },
  {
    id: "godowlia-market",
    slug: "godowlia-market",
    name: "Godowlia & Vishwanath Bazaars",
    category: "Markets",
    tagline: "The lively sensory kaleidoscope of Banaras silk, chaat counters, and street energy.",
    shortDescription: "The energetic central crossing where street gastronomy and world-famous silks meet.",
    description: "Godowlia is the bustling commercial axis where all Kashi roads intersect. From famed chaat outlets to multi-generational Banarasi silk emporiums, this vibrant crossing is where the modern spirit of Varanasi celebrates its culinary and artisanal legacy.",
    image: "/images/explore/markets/godowlia-market.jpg",
    alt: "Bustling cycle rickshaws, pedestrians, and heritage market stalls at Godowlia crossing in Varanasi",
    location: "Godowlia Crossing, Old Varanasi",
    bestFor: "Banarasi silk shopping + legendary street chaat + central pulse",
    tags: ["Food", "Culture", "Evening"],
    whyVisit: [
      "Epicenter of Banarasi Tamatar Chaat and Palak Chaat at Kashi Chaat Bhandar",
      "Authentic handloom silk sari showrooms with pure golden zari work",
      "Gateway pedestrian zone leading directly to Dashashwamedh Ghat"
    ],
    whatToExperience: ["Order piping hot Tamatar Chaat in an earthen bowl", "Browse pure Katan silk fabrics"],
    gallery: [
      "/images/explore/markets/godowlia-market.jpg",
      "/images/explore/markets/thatheri-bazar.jpg"
    ],
    practicalTips: ["Vehicle entry is restricted during evening hours, making the stretch enjoyable on foot."],
    nearbySlugs: ["dashashwamedh-ghat", "kashi-vishwanath", "thatheri-bazar"]
  },
  {
    id: "lolark-kund",
    slug: "lolark-kund",
    name: "Lolark Kund",
    category: "Hidden Kashi",
    tagline: "An ancient subterranean stepwell dedicated to the Sun God.",
    shortDescription: "Fascinating subterranean water reservoir dedicated to Surya, dating back thousands of years.",
    description: "Tucked behind Tulsi Ghat lies Lolark Kund, an extraordinary subterranean stepwell dedicated to the Sun God (Lolark Aditya). Stepping down steep stone stairs into this 50-foot-deep stone chamber feels like entering an archaeological secret.",
    image: "/images/explore/hidden/lolark-kund.jpg",
    alt: "Steep ancient stone steps descending into the sacred subterranean sun-water well of Lolark Kund",
    location: "Near Tulsi Ghat, Southern Varanasi",
    bestFor: "Stepwell architecture + ancient sun worship + hidden history",
    tags: ["Hidden", "History", "Photogenic"],
    badge: "HIDDEN",
    whyVisit: [
      "One of the only remaining ancient sun-worship kunds from the Vedic period in Kashi",
      "Dramatic 50-foot-deep stone stairways descending into green waters",
      "Site of the historic Lolark Chhath festival"
    ],
    whatToExperience: ["Peer down into the silent geometric stone descent", "Learn lore from local neighborhood priests"],
    gallery: [
      "/images/explore/hidden/lolark-kund.jpg",
      "/images/explore/hidden/lolark-kund-alt.jpg"
    ],
    practicalTips: ["Quiet and undisturbed on regular days; walk through Tulsi Ghat alley to find the entrance."],
    nearbySlugs: ["tulsi-ghat", "assi-ghat", "chet-singh-ghat"]
  }
];

// Helper query functions
export function getAllPlaces(): Place[] {
  return placesData;
}

export function getFeaturedPlaces(): Place[] {
  return placesData.filter((p) => p.featured);
}

export function getPlaceBySlug(slug: string): Place | undefined {
  return placesData.find((p) => p.slug === slug);
}

export function getPlacesByCategory(category: Place["category"]): Place[] {
  return placesData.filter((p) => p.category === category);
}

export function getNearbyPlaces(nearbySlugs: string[]): Place[] {
  return placesData.filter((p) => nearbySlugs.includes(p.slug)).slice(0, 4);
}

export function searchPlaces(query: string, category: string = "ALL", moodTag: string = ""): Place[] {
  const normalizedQuery = query.toLowerCase().trim();

  return placesData.filter((place) => {
    // 1. Category Filter
    if (category !== "ALL" && place.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }

    // 2. Mood Tag Filter
    if (moodTag && !place.tags.some((t) => t.toLowerCase() === moodTag.toLowerCase())) {
      return false;
    }

    // 3. Text Search Query
    if (!normalizedQuery) return true;

    const matchesName = place.name.toLowerCase().includes(normalizedQuery);
    const matchesTagline = place.tagline.toLowerCase().includes(normalizedQuery);
    const matchesShortDesc = place.shortDescription.toLowerCase().includes(normalizedQuery);
    const matchesCategory = place.category.toLowerCase().includes(normalizedQuery);
    const matchesTags = place.tags.some((t) => t.toLowerCase().includes(normalizedQuery));
    const matchesLocation = place.location.toLowerCase().includes(normalizedQuery);

    return matchesName || matchesTagline || matchesShortDesc || matchesCategory || matchesTags || matchesLocation;
  });
}
