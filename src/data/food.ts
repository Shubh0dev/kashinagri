export interface FoodLocation {
  area: string;
  address: string;
  lat: number | null;
  lng: number | null;
}

export interface FoodItem {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  type: "food" | "restaurant" | "cafe" | "street";
  category:
    | "Must Try"
    | "Street Food"
    | "Breakfast"
    | "Sweets"
    | "Drinks"
    | "Cafés"
    | "Restaurants"
    | "Food Streets"
    | "Budget";
  tagline: string;
  shortDescription: string;
  description: string;
  image: string;
  alt: string;
  location: FoodLocation;
  bestFor: string;
  tags: string[];
  moodTags: string[];
  priceLabel: string;
  whatItIs: string;
  whyTry: string[];
  whereToFind: string[];
  bestPairedWith: string[];
  explorerTips: string[];
  nearbySlugs: string[];
  featured?: boolean;
  badge?: "SIGNATURE" | "STREET ICON" | "HISTORIC" | "LOCAL SECRET" | "GANGA VIEW";
}

export interface FoodCategoryItem {
  id: string;
  label: string;
  key: string;
}

export interface FoodMoodItem {
  id: string;
  label: string;
  icon: string;
  tag: string;
}

export interface TimelineMeal {
  period: "EARLY MORNING" | "MORNING" | "AFTERNOON" | "EVENING" | "NIGHT";
  timeWindow: string;
  dish: string;
  dishSlug: string;
  vibe: string;
  description: string;
  image: string;
  alt: string;
  recommendedPlaces: string;
}

export const FOOD_CATEGORIES: FoodCategoryItem[] = [
  { id: "all", label: "ALL", key: "ALL" },
  { id: "must-try", label: "MUST TRY", key: "Must Try" },
  { id: "street-food", label: "STREET FOOD", key: "Street Food" },
  { id: "breakfast", label: "BREAKFAST", key: "Breakfast" },
  { id: "sweets", label: "SWEETS", key: "Sweets" },
  { id: "drinks", label: "DRINKS", key: "Drinks" },
  { id: "cafes", label: "CAFÉS", key: "Cafés" },
  { id: "restaurants", label: "RESTAURANTS", key: "Restaurants" },
  { id: "food-streets", label: "FOOD STREETS", key: "Food Streets" },
  { id: "budget", label: "BUDGET", key: "Budget" },
];

export const FOOD_MOODS: FoodMoodItem[] = [
  { id: "breakfast", label: "Early breakfast", icon: "🌅", tag: "Breakfast" },
  { id: "spicy", label: "Something spicy", icon: "🌶️", tag: "Spicy" },
  { id: "refreshing", label: "Something refreshing", icon: "🥤", tag: "Refreshing" },
  { id: "sweet", label: "Something sweet", icon: "🍬", tag: "Sweet" },
  { id: "cafe", label: "Slow café morning", icon: "☕", tag: "Café" },
  { id: "ganga", label: "Ganga-side food", icon: "🌊", tag: "Ganga View" },
  { id: "night", label: "Late evening bite", icon: "🌙", tag: "Evening" },
  { id: "budget", label: "Budget-friendly", icon: "💰", tag: "Budget" },
];

export const foodTimeline: TimelineMeal[] = [
  {
    period: "EARLY MORNING",
    timeWindow: "6:30 AM – 9:00 AM",
    dish: "Kachori Sabzi & Syrupy Jalebi",
    dishSlug: "kachori-sabzi",
    vibe: "Fresh from the iron kadai in the old lanes",
    description:
      "Crisp lentil-stuffed puris served with slow-cooked spicy hing-infused potato curry, followed immediately by hot, syrupy coil-jalebis fried in pure desi ghee.",
    image: "/images/kachori-sabzi-jalebi.jpg",
    alt: "Fresh crisp kachoris and golden syrupy jalebi in Varanasi",
    recommendedPlaces: "Thatheri Bazar & Kachori Gali",
  },
  {
    period: "MORNING",
    timeWindow: "9:30 AM – 11:30 AM",
    dish: "Clay-Kulhad Banarasi Lassi",
    dishSlug: "banarasi-lassi",
    vibe: "Cool, velvety refreshment after ghat walks",
    description:
      "Hand-churned thick sweet curd served in porous earthenware kulhads, piled generously with rabdi cream, saffron drizzle, and crushed pistachios.",
    image: "/images/banarasi-kulhad-lassi.jpg",
    alt: "Earthen kulhad filled with thick Banarasi lassi topped with malai",
    recommendedPlaces: "Chowk & Assi Ghat",
  },
  {
    period: "AFTERNOON",
    timeWindow: "1:00 PM – 3:30 PM",
    dish: "Rustic Baati Chokha or Pure Veg Thali",
    dishSlug: "baati-chokha",
    vibe: "Earthy, smoky lunch steeped in ghee",
    description:
      "Whole wheat dough balls packed with roasted gram flour (sattu) and herbs, wood-fire baked and crushed into pure ghee, alongside charred aubergine and tomato mash.",
    image: "/images/baati-chokha-platter.jpg",
    alt: "Smoky baati served with charred chokha and desi ghee",
    recommendedPlaces: "Sigra & Teliabagh",
  },
  {
    period: "EVENING",
    timeWindow: "5:30 PM – 8:30 PM",
    dish: "Banarasi Tamatar Chaat",
    dishSlug: "tamatar-chaat",
    vibe: "The ultimate savoury symphony of Godowlia",
    description:
      "A Varanasi invention: stewed tomatoes mashed with ginger, chillies, cumin, and hing, bathed in desi ghee, tangy lemon water, and crisp namakpare wafers.",
    image: "/images/banarasi-tamatar-chaat.jpg",
    alt: "Sizzling Banarasi tamatar chaat served in traditional clay dona",
    recommendedPlaces: "Godowlia Crossing",
  },
  {
    period: "NIGHT",
    timeWindow: "9:00 PM – 11:00 PM",
    dish: "Meetha Banarasi Paan & Winter Malaiyo",
    dishSlug: "banarasi-paan",
    vibe: "The celebratory full stop to a day in Kashi",
    description:
      "A tender Maghai betel leaf masterfully folded with gulkand, kattha, fennel, dates, and silver vark, or in winter, a cloud of dew-frothed saffron Malaiyo.",
    image: "/images/meetha-banarasi-paan.jpg",
    alt: "Artisanally folded Banarasi meetha paan garnished with silver leaf",
    recommendedPlaces: "Assi Crossing & Chaukhamba",
  },
];

export const foodItemsData: FoodItem[] = [
  // ==================== 7 MUST TRY ICONS ====================
  {
    id: "kachori-sabzi",
    slug: "kachori-sabzi",
    name: "Kachori Sabzi & Jalebi",
    hindiName: "कचौरी सब्ज़ी और जलेबी",
    type: "food",
    category: "Must Try",
    tagline: "The quintessential Banarasi dawn breakfast that has powered the city for centuries.",
    shortDescription: "Crisp lentil-stuffed golden puris served with slow-simmered spiced hing aloo curry and hot syrupy jalebis.",
    description: "Every morning before sunrise, giant iron kadais across the old lanes of Varanasi begin bubbling with oil. Two types of kachoris reign supreme: the smaller 'Badi Kachori' stuffed with seasoned urad dal paste, and the round 'Chhoti Kachori' packed with spicy sattu. Both are submerged in a fiery, fragrant gravy of potatoes simmered with asafetida (hing) and wild celery seeds (radhuni), then balanced immediately with spiral, syrupy jalebis fried in pure desi ghee.",
    image: "/images/kachori-sabzi-jalebi.jpg",
    alt: "Hot crisp kachoris served with spiced potato curry in Varanasi",
    location: {
      area: "Thatheri Bazar & Kachori Gali",
      address: "Kachori Gali, Chowk, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Early morning breakfast + street atmosphere",
    tags: ["Breakfast", "Street Food", "Spicy", "Must Try", "Budget"],
    moodTags: ["Breakfast", "Spicy", "Budget"],
    priceLabel: "Budget-friendly",
    whatItIs: "Crispy, deep-fried whole wheat dough pockets stuffed with spiced ground lentils, served alongside a naturally onion-and-garlic-free potato curry infused heavily with hing (asafetida) and dry mango powder.",
    whyTry: [
      "The undisputed breakfast champion of eastern Uttar Pradesh",
      "Authentic recipes that avoid onion and garlic yet produce profound depth of flavour",
      "The legendary contrast between savoury, spiced potato gravy and hot sweet jalebi",
      "Witnessing early morning community life in the narrow gallis as the city stirs"
    ],
    whereToFind: [
      "Ram Bhandar, Thatheri Bazar (Best before 9:00 AM)",
      "The traditional halwai stalls lining Kachori Gali near Chowk",
      "Chachi Ki Dukaan near Lanka (famous for rustic morning kachori)"
    ],
    bestPairedWith: ["Hot saffron Jalebi", "Kulhad Masala Chai"],
    explorerTips: [
      "Arrive before 8:30 AM; the freshest batches come straight out of the kadai early.",
      "Most traditional old-city halwais sell out of kachori by 10:30 AM.",
      "Ask for an extra splash of the tangy hing gravy if you enjoy intense spice."
    ],
    nearbySlugs: ["banarasi-lassi", "tamatar-chaat", "kachori-gali-street"],
    featured: true,
    badge: "SIGNATURE",
  },
  {
    id: "tamatar-chaat",
    slug: "tamatar-chaat",
    name: "Banarasi Tamatar Chaat",
    hindiName: "बनारसी टमाटर चाट",
    type: "food",
    category: "Must Try",
    tagline: "An inventive, tangy-spicy tomato mash created exclusively on the streets of Kashi.",
    shortDescription: "A Varanasi original: slow-cooked mashed tomatoes with hing, ginger, cumin and sweet hing syrup.",
    description: "Unlike chaats found anywhere else across India, Banarasi Tamatar Chaat is a culinary marvel unique to this sacred city. Fresh ripe tomatoes are stewed on large concave tawas with boiled potatoes, minced ginger, green chillies, roasted cumin, and black salt. The sizzling mash is transferred into small clay donas (bowls), drizzled with hot ghee and spiced sugar syrup infused with hing, then garnished with crunchy bite-sized namakpare wafers.",
    image: "/images/banarasi-tamatar-chaat.jpg",
    alt: "Sizzling Banarasi tamatar chaat served in earthen bowl",
    location: {
      area: "Godowlia Crossing",
      address: "Dashashwamedh Road, Godowlia, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Evening street food + unique local flavour",
    tags: ["Street Food", "Spicy", "Must Try", "Evening", "Budget"],
    moodTags: ["Spicy", "Evening", "Budget"],
    priceLabel: "Budget-friendly",
    whatItIs: "A warm, deeply flavourful spiced tomato puree served hot in an earthenware bowl, topped with crunchy savoury wafers and spiced hing syrup.",
    whyTry: [
      "Completely indigenous to Varanasi — cannot be found in traditional form in any other city",
      "Unbelievable balance of sweet, tangy, savoury, and piquant flavours in a single spoonful",
      "Served piping hot in biodegradable, earthy clay donas",
      "A comforting post-Aarti ritual enjoyed by thousands every evening"
    ],
    whereToFind: [
      "Kashi Chaat Bhandar, Godowlia Crossing (The pioneer of the dish)",
      "Deena Chaat Bhandar, Luxa Road",
      "Shri Rajbandhu Sweets, Kachori Gali"
    ],
    bestPairedWith: ["Palak Chaat", "Dahi Golgappa", "Kulhad Lassi"],
    explorerTips: [
      "Visit between 5:00 PM and 9:00 PM when the tawas are sizzling continuously.",
      "Expect a brief queue at Godowlia; service is fast and energetic.",
      "Let it cool for a minute before your first bite — the clay holds heat intensely."
    ],
    nearbySlugs: ["kachori-sabzi", "banarasi-lassi", "godowlia-food-street"],
    featured: true,
    badge: "SIGNATURE",
  },
  {
    id: "banarasi-lassi",
    slug: "banarasi-lassi",
    name: "Clay-Kulhad Banarasi Lassi",
    hindiName: "बनारसी कुल्हड़ लस्सी",
    type: "food",
    category: "Must Try",
    tagline: "Dense, hand-churned yogurt crowned with thick rabdi cream and pistachios.",
    shortDescription: "Thick churned sweet yogurt topped with dense rabdi, malai cream and roasted pistachios.",
    description: "In Kashi, lassi is not merely a beverage — it is a decadent dessert eaten with wooden spoons. Prepared from full-fat buffalo milk curd set in terracotta pots, the yogurt is hand-churned using wooden whisks (mathani). Poured into porous unglazed earthen cups, it is crowned with a velvety layer of fresh malai (clotted cream), a dollop of slow-simmered rabdi, and a sprinkling of crushed pistachios and saffron syrup.",
    image: "/images/banarasi-kulhad-lassi.jpg",
    alt: "Earthen kulhad filled with thick Banarasi lassi topped with rich malai and saffron",
    location: {
      area: "Chowk & Assi Ghat",
      address: "Near Manikarnika Ghat & Assi Crossing, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Cooling refreshment + dessert lovers",
    tags: ["Drinks", "Sweets", "Must Try", "Refreshing", "Budget"],
    moodTags: ["Refreshing", "Sweet", "Budget"],
    priceLabel: "Budget-friendly",
    whatItIs: "Hand-whisked sweet curd beverage with the consistency of custard, served in single-use clay cups and crowned with rich condensed milk cream (rabdi).",
    whyTry: [
      "The porous clay absorbs moisture, keeping the lassi naturally chilled and imparting an earthy aroma",
      "So dense that it is scooped with wooden flat sticks rather than sipped with a straw",
      "Flavours range from traditional saffron-rabdi to seasonal mango, pomegranate, and blueberry",
      "Essential revival after navigating the sunlit stone ghats"
    ],
    whereToFind: [
      "Blue Lassi Shop, Kunj Gali near Manikarnika Ghat (Famous heritage spot)",
      "Pahalwan Lassi, Lanka Gate near BHU",
      "Shiv Prasad Lassi, Assi Ghat Crossing"
    ],
    bestPairedWith: ["Samosa", "Morning Kachori"],
    explorerTips: [
      "Order 'Rabdi Wali Lassi' for the richest traditional experience.",
      "Traditional lassi in Varanasi is rich enough to serve as an entire mid-day meal."
    ],
    nearbySlugs: ["malaiyo", "kachori-sabzi", "assi-food-enclave"],
    featured: true,
    badge: "SIGNATURE",
  },
  {
    id: "malaiyo",
    slug: "malaiyo",
    name: "Winter Malaiyo",
    hindiName: "सर्दियों का मलइयो",
    type: "food",
    category: "Sweets",
    tagline: "An ethereal seasonal cloud of dew-frothed saffron milk foam available only in winter.",
    shortDescription: "Winter's most ethereal cloud dessert made from dew-frosted saffron milk foam.",
    description: "Malaiyo is one of the world's most delicate desserts, prepared only during the cool winter months between November and February. Raw milk is boiled and left on rooftop terraces overnight under the open winter sky to catch early morning dew. At dawn, halwais vigorously hand-whip the chilled milk into a featherlight, airy foam infused with saffron, cardamom, and rose water, spooned into earthen bowls and topped with almonds and pistachios.",
    image: "/images/winter-malaiyo-kashi.jpg",
    alt: "Airy golden froth of saffron Malaiyo served in clay kulhads",
    location: {
      area: "Chaukhamba & Gopal Mandir",
      address: "Chaukhamba Gali, Chowk, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Winter visitors + culinary poetry + sweet lovers",
    tags: ["Sweets", "Must Try", "Sweet", "Budget"],
    moodTags: ["Sweet", "Budget"],
    priceLabel: "Budget-friendly",
    whatItIs: "An incredibly light, fragrant milk foam that dissolves on the tongue instantly like sweet saffron-scented snow, leaving behind warm nutty undertones.",
    whyTry: [
      "Only exists during North India's short winter window (approx. Nov to Feb)",
      "An artisanal technique perfected over centuries that cannot be replicated with modern machines",
      "Tasting it is considered one of the poetic highlights of visiting Banaras in winter",
      "Served in warm morning sun among the ancient courtyards of Chaukhamba"
    ],
    whereToFind: [
      "Shriji Dairy, Chaukhamba Gali (The most celebrated master halwai)",
      "Stalls surrounding Gopal Mandir lane near Chowk",
      "Neelkanth area in the old city during early mornings"
    ],
    bestPairedWith: ["Morning tea", "Garam Kachori"],
    explorerTips: [
      "Only available from late November through mid-February.",
      "Must be consumed before 11:00 AM; afternoon sun causes the delicate foam to collapse into liquid milk."
    ],
    nearbySlugs: ["banarasi-paan", "kachori-sabzi", "chaukhamba-food-lanes"],
    featured: true,
    badge: "LOCAL SECRET",
  },
  {
    id: "banarasi-paan",
    slug: "banarasi-paan",
    name: "Meetha Banarasi Paan",
    hindiName: "मीठा बनारसी पान",
    type: "food",
    category: "Must Try",
    tagline: "The cultural symbol of Banaras — tender betel leaves folded with rose petal preserve.",
    shortDescription: "The legendary Maghai betel leaf folded with gulkand, kattha, fennel and edible silver vark.",
    description: "No feast, ceremony, or casual stroll in Kashi is complete without Banarasi Paan. Celebrated in poetry, song, and scripture, the Banarasi variant uses the paper-thin 'Maghai' or 'Jagannathi' betel leaf. For the non-tobacco Meetha (sweet) paan, the leaf is smeared with lime water and kattha, then packed with aromatic gulkand (sun-cooked rose petal jam), fennel seeds, crushed dry dates, cardamom, and cooling menthol, folded deftly into a triangle and crowned with pure silver leaf (vark).",
    image: "/images/meetha-banarasi-paan.jpg",
    alt: "Skillfully folded Banarasi sweet paan garnished with edible silver foil",
    location: {
      area: "Assi Ghat & Godowlia",
      address: "Assi Crossing & Godowlia Chowk, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Post-dinner tradition + cultural experience",
    tags: ["Street Food", "Sweets", "Must Try", "Evening", "Budget"],
    moodTags: ["Sweet", "Evening", "Budget"],
    priceLabel: "Budget-friendly",
    whatItIs: "An edible culinary emblem consisting of a folded aromatic betel leaf filled with sweet preserves, digestives, spices, and breath-fresheners.",
    whyTry: [
      "Ancient culinary art form recognized with a prestigious Geographical Indication (GI) tag",
      "Acts as a sublime natural digestive following rich street chaats and kachoris",
      "Melts gently in the mouth without chewing effort when made with tender Maghai leaves",
      "Watching the paan-maker's rhythmic hand motions is mesmerizing"
    ],
    whereToFind: [
      "Keshav Tambool Bhandar, Assi Crossing (Iconic spot serving royalty and visitors for decades)",
      "Paan corners around Godowlia Crossing",
      "Deepak Tambool Bhandar near Dashashwamedh"
    ],
    bestPairedWith: ["Post-dinner stroll", "Evening Ghat walk"],
    explorerTips: [
      "Ask specifically for 'Meetha Paan' without supari or tobacco for the pure dessert variant.",
      "Pop the entire folded triangle into your mouth at once — do not bite it in half."
    ],
    nearbySlugs: ["tamatar-chaat", "banarasi-lassi", "assi-food-enclave"],
    featured: true,
    badge: "SIGNATURE",
  },
  {
    id: "baati-chokha",
    slug: "baati-chokha",
    name: "Traditional Baati Chokha",
    hindiName: "पारंपरिक बाटी चोखा",
    type: "food",
    category: "Must Try",
    tagline: "Rustic, smoky baked wheat balls drenched in desi ghee with fire-roasted brinjal mash.",
    shortDescription: "Clay-oven baked wheat balls stuffed with spiced sattu, served with charred aubergine chokha.",
    description: "The ancient rustic staple of the Purvanchal and Bhojpuri heartland, Baati Chokha is earthy, comforting, and deeply satisfying. Crisp whole-wheat balls stuffed with seasoned sattu (roasted Bengal gram flour laced with pickle oil, ajwain, and garlic) are slow-baked over dried cow-dung or charcoal fires. The cracked baatis are submerged entirely in warm desi ghee and paired with charred aubergine, tomato, and potato chokha, garlic chutney, and spiced dal.",
    image: "/images/baati-chokha-platter.jpg",
    alt: "Smoky baati balls dipped in ghee served with charred aubergine chokha and lentils",
    location: {
      area: "Sigra & Teliabagh",
      address: "Near Sigra Stadium & Teliabagh, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Wholesome lunch + traditional dining + authentic regional flavours",
    tags: ["Restaurants", "Must Try", "Spicy", "Budget"],
    moodTags: ["Spicy", "Budget"],
    priceLabel: "Budget-friendly",
    whatItIs: "A complete regional meal centered around fire-roasted stuffed wheat dumplings crushed into pure ghee, accompanied by fire-charred vegetable mashes and thin spiced lentils.",
    whyTry: [
      "Authentic culinary soul food of rural eastern Uttar Pradesh",
      "Incredible smoky depth derived from traditional slow baking over earthen embers",
      "High in protein and wholesome nutrition thanks to roasted gram sattu stuffing",
      "Enjoyed with raw onions, green chillies, and homemade mango pickle"
    ],
    whereToFind: [
      "Baati Chokha Restaurant, Sigra (Atmospheric mud-walled village setting)",
      "Traditional street stalls near Teliabagh and Cantt Railway Station",
      "Local bhojanalayas around Godowlia"
    ],
    bestPairedWith: ["Desi ghee", "Green garlic chutney", "Buttermilk"],
    explorerTips: [
      "Crush the baati with your fingers before ladling dal and ghee over it.",
      "Makes an ideal heavy lunch between morning and evening ghat walks."
    ],
    nearbySlugs: ["baati-chokha-restaurant", "tamatar-chaat", "godowlia-food-street"],
    featured: true,
    badge: "SIGNATURE",
  },
  {
    id: "kashi-thandai",
    slug: "kashi-thandai",
    name: "Kashi Kesari Thandai",
    hindiName: "काशी केसरी ठंडाई",
    type: "food",
    category: "Drinks",
    tagline: "Sacred cooling elixir ground with fennel, almonds, melon seeds, and fragrant saffron.",
    shortDescription: "A cold spiced milk drink ground with almonds, fennel, poppy seeds and saffron.",
    description: "Thandai is deeply rooted in Kashi's spiritual folklore as an offering to Lord Shiva. Made by stone-grinding almonds, watermelon seeds, poppy seeds, black peppercorns, fennel, and green cardamom into a fragrant paste, it is blended with chilled full-cream milk and sweetened with sugar. The mixture is poured back and forth from great heights to aerate, served in clay kulhads garnished with rose petals and saffron strands.",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=1200&q=85",
    alt: "Saffron-tinted rich thandai in earthen cup garnished with pistachio and rose petals",
    location: {
      area: "Godowlia & Chowk",
      address: "Godowlia Crossing & Vishwanath Gali, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Cooling afternoon drink + spiritual heritage",
    tags: ["Drinks", "Must Try", "Refreshing", "Budget"],
    moodTags: ["Refreshing", "Sweet", "Budget"],
    priceLabel: "Budget-friendly",
    whatItIs: "An artisanal chilled spiced milk beverage flavoured with crushed nuts, cooling seeds, and whole spices.",
    whyTry: [
      "The black pepper provides an intriguing subtle warmth against chilled saffron milk",
      "Natural cooling properties that soothe the body after long walking hours in the sun",
      "Hand-ground fresh on stone slabs (sil-batta) in front of your eyes"
    ],
    whereToFind: [
      "Mishrambu Thandai, Godowlia Crossing (Operational since the early 20th century)",
      "Baba Thandai, near Godowlia Crossing",
      "Shops along the main road leading to Dashashwamedh Ghat"
    ],
    bestPairedWith: ["Meetha Paan", "Samosa"],
    explorerTips: [
      "Always specify 'Saada Thandai' (regular sweet version) unless you specifically intend to try festive bhang editions.",
      "Best enjoyed chilled during afternoon heat."
    ],
    nearbySlugs: ["tamatar-chaat", "banarasi-lassi", "godowlia-food-street"],
    featured: true,
    badge: "STREET ICON",
  },

  // ==================== STREET FOOD CLASSICS ====================
  {
    id: "chhena-dahi-vada",
    slug: "chhena-dahi-vada",
    name: "Chhena Dahi Vada",
    hindiName: "छेना दही वड़ा",
    type: "food",
    category: "Street Food",
    tagline: "Spongy fresh cottage-cheese dumplings soaked in spiced sweet curd.",
    shortDescription: "Delicate cottage-cheese vadas immersed in chilled thick yogurt with roasted cumin and tamarind chutney.",
    description: "Instead of traditional fried lentil vadas, Kashi crafts dahi vadas out of fresh chhena (curd cheese). The delicate, spongy dumplings absorb chilled sweetened yogurt and are dusted with roasted jeera, red chilli powder, black salt, and a splash of tangy tamarind saunth chutney.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
    alt: "Chhena Dahi Vada topped with roasted cumin and red tamarind chutney",
    location: {
      area: "Godowlia & Luxa",
      address: "Luxa Road, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Cooling afternoon snack + melt-in-mouth texture",
    tags: ["Street Food", "Refreshing", "Budget"],
    moodTags: ["Refreshing", "Budget"],
    priceLabel: "Budget-friendly",
    whatItIs: "A vegetarian delicacy combining fresh milk cottage cheese with creamy curd and vibrant chaat spices.",
    whyTry: [
      "Far lighter and silkier than standard fried lentil dahi vadas",
      "Unique sweet-tangy spice profile characteristic of Banarasi chaat artistry"
    ],
    whereToFind: ["Deena Chaat Bhandar, Luxa Road", "Kashi Chaat Bhandar, Godowlia"],
    bestPairedWith: ["Tamatar Chaat"],
    explorerTips: ["Order alongside hot tamatar chaat to experience the contrasting cold and hot temperatures."],
    nearbySlugs: ["tamatar-chaat", "godowlia-food-street"]
  },
  {
    id: "banarasi-golgappe",
    slug: "banarasi-golgappe",
    name: "Banarasi Golgappe (5 Flavours)",
    hindiName: "बनारसी गोलगप्पे",
    type: "food",
    category: "Street Food",
    tagline: "Crisp wheat puris served with five herbal waters from hing to mint.",
    shortDescription: "Featherlight crisp puris filled with spiced potato and chickpea mix, served with 5 distinct herbal waters.",
    description: "In Varanasi, golgappe (pani puri) are taken very seriously. Vendors serve crisp puris filled with a warm stuffing of potatoes and boiled white peas, dunked successively into distinct clay pots containing hing water, spicy mint water, tangy tamarind water, sweet cumin water, and lemon ginger water.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
    alt: "Crisp golgappe puris lined up next to herbal mint and tamarind water jars",
    location: {
      area: "Dashashwamedh & Godowlia",
      address: "Dashashwamedh Road, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Explosive flavour + spicy street snacking",
    tags: ["Street Food", "Spicy", "Budget"],
    moodTags: ["Spicy", "Budget"],
    priceLabel: "Budget-friendly",
    whatItIs: "Hollow crisp fried puris filled with spiced legumes and flooded with chilled herbal and spiced waters.",
    whyTry: ["Try the intense hing-infused water unique to Uttar Pradesh street stalls"],
    whereToFind: ["Kashi Chaat Bhandar", "Evening stalls on Dashashwamedh Road"],
    bestPairedWith: ["Tamatar Chaat"],
    explorerTips: ["Always ask for a dry 'papdi' at the finish to round off the spicy burst."],
    nearbySlugs: ["tamatar-chaat", "kashi-thandai"]
  },
  {
    id: "choora-matar",
    slug: "choora-matar",
    name: "Winter Choora Matar",
    hindiName: "चूड़ा मटर",
    type: "food",
    category: "Breakfast",
    tagline: "Flattened rice sautéed with sweet green peas, raisins, black pepper, and pure ghee.",
    shortDescription: "A seasonal breakfast dish of flattened rice tossed with tender green winter peas and spices.",
    description: "The Banarasi cousin of poha, Choora Matar is elevated into royal richness. Flattened rice soaked in milk is gently sautéed in desi ghee with sweet tender winter peas, ginger, green chillies, garam masala, raisins, and roasted cashews, garnished with fresh coriander leaves.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    alt: "Fragrant golden Choora Matar garnished with green peas and coriander",
    location: {
      area: "Godowlia & Assi",
      address: "Old City Breakfast Stalls, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Winter mornings + gentle spices + wholesome breakfast",
    tags: ["Breakfast", "Budget", "Street Food"],
    moodTags: ["Breakfast", "Budget"],
    priceLabel: "Budget-friendly",
    whatItIs: "A comforting breakfast dish of milk-softened beaten rice sautéed with winter peas, nuts, and desi ghee.",
    whyTry: ["Unique sweet-spicy flavour with zero artificial food colouring or heavy gravies"],
    whereToFind: ["Kashi Chaat Bhandar", "Neelu Kachori, Godowlia"],
    bestPairedWith: ["Kulhad Chai"],
    explorerTips: ["Available primarily during fresh green pea season (November to March)."],
    nearbySlugs: ["kachori-sabzi", "banarasi-lassi"]
  },
  {
    id: "launglata",
    slug: "launglata",
    name: "Garam Launglata",
    hindiName: "गरम लौंगलता",
    type: "food",
    category: "Sweets",
    tagline: "Flaky pastry stuffed with sweetened mawa, sealed with a clove and steeped in sugar syrup.",
    shortDescription: "Deep-fried crisp pastry pocket filled with rich khoya and nuts, clove-pinned and sugar glazed.",
    description: "A beloved traditional sweet of Varanasi, Launglata consists of pastry dough folded over a rich filling of reduced milk solids (khoya/mawa), grated coconut, cardamom, and chopped dry fruits. The parcel is sealed securely with a single whole clove (laung), deep-fried to golden perfection, and dunked into warm fragrant sugar syrup.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1000&q=80",
    alt: "Crisp golden Launglata pastries glazed with sugar syrup with a clove in the center",
    location: {
      area: "Kachori Gali & Vishwanath Gali",
      address: "Old City Bazar, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Evening sweet tooth + rich heritage pastry",
    tags: ["Sweets", "Street Food", "Sweet", "Budget"],
    moodTags: ["Sweet", "Budget"],
    priceLabel: "Budget-friendly",
    whatItIs: "A decadent, crisp-on-the-outside and soft-on-the-inside clove-scented stuffed pastry confection.",
    whyTry: ["The medicinal warmth of the clove cuts right through the rich sugar sweetness"],
    whereToFind: ["Traditional sweet counters along Vishwanath Gali and Kachori Gali"],
    bestPairedWith: ["Warm milk", "Kulhad Chai"],
    explorerTips: ["Always request a piece from the fresh, warm batch directly beside the syrup vat."],
    nearbySlugs: ["malaiyo", "kachori-gali-street"]
  },

  // ==================== 5 ICONIC FOOD STREETS ====================
  {
    id: "kachori-gali-street",
    slug: "kachori-gali",
    name: "Kachori Gali",
    hindiName: "कचौरी गली",
    type: "street",
    category: "Food Streets",
    tagline: "The legendary dawn lane where generations of halwais have perfected the morning fry.",
    shortDescription: "Known for the energy of old-city food lanes and traditional breakfast culture.",
    description: "Branching off near Chowk, Kachori Gali is a narrow, bustling cobblestone alley where early morning sunlight filters through overhanging wooden balconies onto sizzling cauldrons of desi ghee. Here, generational halwai families have kneaded and fried fresh kachoris, jalebis, and khoya sweets since the 1800s.",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=1000&q=80",
    alt: "Narrow historical alley of Kachori Gali in old Varanasi lined with traditional sweet shops",
    location: {
      area: "Chowk Area",
      address: "Kachori Gali, Govindpura, Chowk, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Dawn walking + authentic breakfast + heritage photography",
    tags: ["Food Streets", "Breakfast", "Street Food", "Must Try"],
    moodTags: ["Breakfast", "Budget"],
    priceLabel: "Budget-friendly",
    whatItIs: "An iconic narrow pedestrian culinary corridor dedicated to morning breakfast frying and artisanal sweets.",
    whyTry: [
      "The undisputed spiritual epicenter of Varanasi's breakfast culture",
      "Witnessing massive iron kadais tended by multi-generational halwais"
    ],
    whereToFind: ["Enter from Chowk crossing; follow the aroma of frying hing and sweet syrup"],
    bestPairedWith: ["Morning ghat walk"],
    explorerTips: ["Visit strictly between 7:00 AM and 9:30 AM for peak morning activity."],
    nearbySlugs: ["kachori-sabzi", "malaiyo", "launglata"]
  },
  {
    id: "godowlia-food-street",
    slug: "godowlia-crossing",
    name: "Godowlia Crossing Food Enclave",
    hindiName: "गोदौलिया चौराहा",
    type: "street",
    category: "Food Streets",
    tagline: "The buzzing twilight hub of legendary chaat stalls, thandai counters, and sweet paan.",
    shortDescription: "The bustling intersection of evening chaat, rabdi, and legendary paan counters.",
    description: "As the sun sets over the river, the Godowlia intersection transforms into the world's most vibrant open-air culinary theatre. Thousands of devotees returning from Dashashwamedh Aarti gather here to savour sizzling tamatar chaat, creamy thandai, and famous Maghai paan.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
    alt: "Lively evening crowd and street food stalls around Godowlia Crossing",
    location: {
      area: "Godowlia",
      address: "Godowlia Crossing, Dashashwamedh, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Evening energy + chaat tasting + post-aarti dining",
    tags: ["Food Streets", "Street Food", "Evening"],
    moodTags: ["Evening", "Spicy"],
    priceLabel: "Budget-friendly",
    whatItIs: "The commercial crossroad where Kashi's most famous street chaat and drink institutions cluster.",
    whyTry: ["Home to the legendary Kashi Chaat Bhandar and Mishrambu Thandai"],
    whereToFind: ["Central intersection leading down to Dashashwamedh Ghat"],
    bestPairedWith: ["Evening Ganga Aarti"],
    explorerTips: ["Vehicle entry is restricted during evening hours, making it convenient to explore on foot."],
    nearbySlugs: ["tamatar-chaat", "kashi-thandai", "chhena-dahi-vada"]
  },
  {
    id: "assi-food-enclave",
    slug: "assi-ghat-enclave",
    name: "Assi Ghat Food & Café Enclave",
    hindiName: "अस्सी घाट फूड एन्क्लेव",
    type: "street",
    category: "Food Streets",
    tagline: "Relaxed riverside food promenade blending authentic kulhad chai with wood-fired pizzas.",
    shortDescription: "Relaxed riverside food enclave famous for wood-fired pizza, cafés, and morning Subah-e-Banaras tea.",
    description: "At the southern terminal of the ghats, Assi offers an entirely different culinary temperament. Alongside early morning lemon tea vendors and Keshav's historic paan shop, this area houses international bakeries, wood-fired pizzerias, and peaceful rooftop cafés overlooking the river.",
    image: "/images/kashi-sunrise-ghats.jpg",
    alt: "Morning tea and food stalls overlooking the tranquil riverfront at Assi Ghat",
    location: {
      area: "Assi Ghat",
      address: "Assi Ghat Promenade, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Slow mornings + rooftop dining + coffee and pizza",
    tags: ["Food Streets", "Cafés", "Ganga View", "Breakfast"],
    moodTags: ["Café", "Ganga View", "Breakfast"],
    priceLabel: "Budget-friendly",
    whatItIs: "A laid-back riverside strip accommodating both traditional morning chai counters and modern traveller cafés.",
    whyTry: ["Sip hot ginger-lemon-honey tea on the stone steps at sunrise"],
    whereToFind: ["Assi Ghat entrance promenade extending along the southern riverfront"],
    bestPairedWith: ["Subah-e-Banaras morning music"],
    explorerTips: ["Pizzeria Vaatika and rooftop cafes are ideal for relaxed sunset dinners."],
    nearbySlugs: ["banarasi-paan", "pizzeria-vaatika", "banarasi-lassi"]
  },

  // ==================== RESTAURANTS ====================
  {
    id: "baati-chokha-restaurant",
    slug: "baati-chokha-restaurant",
    name: "Baati Chokha (Sigra)",
    hindiName: "बाटी चोखा रेस्टोरेंट",
    type: "restaurant",
    category: "Restaurants",
    tagline: "Atmospheric village-themed restaurant celebrating the authentic rustic cuisine of Purvanchal.",
    shortDescription: "Beloved traditional dining venue serving charcoal-baked baatis and authentic village thalis.",
    description: "Designed like a tranquil mud-plastered rural village complete with charpoys (string beds), brass bell decor, and folk music, this iconic institution celebrates the authentic flavours of the Purvanchal region. Food is served in traditional brass thalis and terracotta bowls.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
    alt: "Traditional brass thali with baati chokha, dal, chutney and sattu parathas",
    location: {
      area: "Sigra",
      address: "Anand Mandir Cinema Road, Sigra, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Family dining + authentic regional thali + rustic ambiance",
    tags: ["Restaurants", "Must Try", "Spicy"],
    moodTags: ["Spicy", "Budget"],
    priceLabel: "Budget-friendly",
    whatItIs: "A dedicated regional restaurant bringing village fireplace cooking into comfortable sit-down dining.",
    whyTry: [
      "Pure vegetarian dishes prepared without modern gas shortcuts",
      "Delicious Sattu Parathas and Kheer served in traditional clay pots"
    ],
    whereToFind: ["Sigra, easily reached by e-rickshaw or taxi from Godowlia (15 mins)"],
    bestPairedWith: ["Sattu sharbat", "Gulab jamun"],
    explorerTips: ["Advance arrival is recommended for weekend dinner as seats fill quickly."],
    nearbySlugs: ["baati-chokha", "godowlia-food-street"]
  },
  {
    id: "keshari-restaurant",
    slug: "keshari-restaurant",
    name: "Keshari Ruchikar Vyanjan",
    hindiName: "केशरी रुचिकर व्यंजन",
    type: "restaurant",
    category: "Restaurants",
    tagline: "Historic multi-generational family dining hall near Dashashwamedh Ghat.",
    shortDescription: "Long-standing vegetarian dining hall known for rich North Indian curries and thalis.",
    description: "Operating steps from the central ghats for decades, Keshari is a dependable sanctuary for weary pilgrims and travelers seeking clean, wholesome pure-vegetarian North Indian and Banarasi meals in air-conditioned comfort.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80",
    alt: "Clean traditional vegetarian dining hall with warm brass service",
    location: {
      area: "Godowlia / Dashashwamedh",
      address: "Near Dashashwamedh Ghat Road, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Post-temple family dining + clean wholesome meals",
    tags: ["Restaurants", "Budget"],
    moodTags: ["Budget"],
    priceLabel: "Budget-friendly",
    whatItIs: "A classic downtown vegetarian restaurant serving North Indian gravies, paneer specialties, and thalis.",
    whyTry: ["Convenient location when visiting Kashi Vishwanath and Dashashwamedh"],
    whereToFind: ["Walking distance from Godowlia Crossing heading towards the river"],
    bestPairedWith: ["Family lunch"],
    explorerTips: ["A great spot to cool down and eat a peaceful lunch during peak afternoon heat."],
    nearbySlugs: ["tamatar-chaat", "godowlia-food-street"]
  },

  // ==================== CAFÉS ====================
  {
    id: "pizzeria-vaatika",
    slug: "pizzeria-vaatika",
    name: "Pizzeria Vaatika Café",
    type: "cafe",
    category: "Cafés",
    tagline: "Riverside garden café famed for wood-fired thin-crust pizza and warm apple pie.",
    shortDescription: "Iconic open-air riverside garden café right beside Assi Ghat with Ganga views.",
    description: "Established in 1993, Pizzeria Vaatika sits right on the southern riverbank at Assi Ghat. Guests sit beneath flowering bougainvillea trees watching boats drift along the Ganga while enjoying thin-crust pizzas baked in outdoor brick ovens, homemade pastas, and their legendary warm apple pie with vanilla ice cream.",
    image: "/images/kashi-sunrise-ghats.jpg",
    alt: "Open-air riverside café tables overlooking the river Ganga at Assi Ghat",
    location: {
      area: "Assi Ghat",
      address: "B-1/178, Assi Ghat, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Ganga views + sunset dinners + wood-fired pizza + apple pie",
    tags: ["Cafés", "Ganga View", "Evening"],
    moodTags: ["Café", "Ganga View", "Evening"],
    priceLabel: "Budget-friendly",
    whatItIs: "An outdoor riverside dining haven combining Italian culinary traditions with Varanasi's river panorama.",
    whyTry: [
      "Unrivalled view of the Ganga while dining in relaxed garden seating",
      "Their famous warm apple pie with cinnamon and vanilla ice cream"
    ],
    whereToFind: ["Directly overlooking the steps of Assi Ghat"],
    bestPairedWith: ["Sunset boat ride", "Evening coffee"],
    explorerTips: ["Arrive around 5:30 PM to catch the sunset light changing over the water."],
    nearbySlugs: ["assi-food-enclave", "banarasi-paan", "aadha-aadha-cafe"],
    badge: "GANGA VIEW"
  },
  {
    id: "aadha-aadha-cafe",
    slug: "aadha-aadha-cafe",
    name: "Aadha-Aadha Café",
    type: "cafe",
    category: "Cafés",
    tagline: "Bohemian rooftop retreat for writers, good coffee, and quiet river contemplation.",
    shortDescription: "Artistic rooftop café offering specialty coffee, fresh salads and panoramic river views.",
    description: "Perched atop an old haveli near the central ghats, Aadha-Aadha is beloved by writers, solo travelers, and creatives seeking quiet respite from the crowded lanes below. Enjoy pour-over coffees, fresh hummus platters, and quiet reading hours overlooking the water.",
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80",
    alt: "Rooftop café seating with wooden chairs overlooking the river ghats",
    location: {
      area: "Old City Riverfront",
      address: "Near Meer Ghat, Varanasi",
      lat: null,
      lng: null,
    },
    bestFor: "Quiet mornings + remote work + artisanal coffee + panoramic views",
    tags: ["Cafés", "Ganga View", "Breakfast"],
    moodTags: ["Café", "Ganga View", "Breakfast"],
    priceLabel: "Budget-friendly",
    whatItIs: "A tranquil heritage rooftop sanctuary overlooking the river crescent.",
    whyTry: ["One of the best tranquil viewpoints in the old city to sit and journal"],
    whereToFind: ["Accessible through the stone alleys near Meer Ghat"],
    bestPairedWith: ["Book reading", "Morning espresso"],
    explorerTips: ["Bring a book; this is a peaceful space designed for slow lingering."],
    nearbySlugs: ["pizzeria-vaatika", "godowlia-food-street"],
    badge: "GANGA VIEW"
  }
];

// Query helper functions
export function getAllFood(): FoodItem[] {
  return foodItemsData;
}

export function getFeaturedFood(): FoodItem[] {
  return foodItemsData.filter((f) => f.featured);
}

export function getFoodBySlug(slug: string): FoodItem | undefined {
  return foodItemsData.find((f) => f.slug === slug);
}

export function getFoodByCategory(category: string): FoodItem[] {
  if (category === "ALL") return foodItemsData;
  return foodItemsData.filter(
    (f) => f.category.toLowerCase() === category.toLowerCase()
  );
}

export function getNearbyFood(nearbySlugs: string[]): FoodItem[] {
  return foodItemsData.filter((f) => nearbySlugs.includes(f.slug)).slice(0, 4);
}

export function searchFood(
  query: string,
  category: string = "ALL",
  moodTag: string = ""
): FoodItem[] {
  const normalizedQuery = query.toLowerCase().trim();

  return foodItemsData.filter((item) => {
    // 1. Category Filter
    if (category !== "ALL") {
      const matchCategory = item.category.toLowerCase() === category.toLowerCase();
      const matchType = item.type.toLowerCase() === category.toLowerCase();
      if (!matchCategory && !matchType) {
        return false;
      }
    }

    // 2. Mood Tag Filter
    if (moodTag && !item.moodTags.some((t) => t.toLowerCase() === moodTag.toLowerCase())) {
      return false;
    }

    // 3. Text Search Query
    if (!normalizedQuery) return true;

    const matchesName = item.name.toLowerCase().includes(normalizedQuery);
    const matchesTagline = item.tagline.toLowerCase().includes(normalizedQuery);
    const matchesShortDesc = item.shortDescription.toLowerCase().includes(normalizedQuery);
    const matchesCategory = item.category.toLowerCase().includes(normalizedQuery);
    const matchesType = item.type.toLowerCase().includes(normalizedQuery);
    const matchesLocation = item.location.area.toLowerCase().includes(normalizedQuery) || item.location.address.toLowerCase().includes(normalizedQuery);
    const matchesTags = item.tags.some((t) => t.toLowerCase().includes(normalizedQuery));

    return (
      matchesName ||
      matchesTagline ||
      matchesShortDesc ||
      matchesCategory ||
      matchesType ||
      matchesLocation ||
      matchesTags
    );
  });
}
