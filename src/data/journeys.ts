import type { Destination, Experience, GalleryItem } from '../types/travel';

export const IMAGES = {
  heroHimalayas: '/src/assets/images/hero_himalayas_1795583314654.jpg',
  kashmir: '/src/assets/images/dest_kashmir_1795583315347.jpg',
  ladakh: '/src/assets/images/dest_ladakh_1795583315996.jpg',
  himachal: '/src/assets/images/dest_himachal_1795583316656.jpg',
  bhutan: '/src/assets/images/dest_bhutan_1795583316663.jpg',
  nepal: '/src/assets/images/dest_nepal_1795583317347.jpg',
  luxuryCamp: '/src/assets/images/exp_luxury_camp_1795583318083.jpg',
  founderPortrait: '/src/assets/images/founder_portrait_1795583318282.jpg',
  alpinePass: '/src/assets/images/gallery_alpine_pass_1795583318518.jpg',
  teaTerrace: '/src/assets/images/gallery_tea_terrace_1795583319152.jpg',
};

export const DESTINATIONS: Destination[] = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    subtitle: 'Alpine Lakes & Luxury Retreats',
    terrain: 'Alpine Lakes & Valleys',
    elevationRange: '1,585 m – 3,900 m',
    bestSeason: 'April – October',
    image: IMAGES.kashmir,
    imageAlt: 'Wooden shikara gliding on an emerald alpine lake in Kashmir framed by misty pines and snow-dusted peaks',
    shortDescription:
      'Misty cedar valleys, private heritage houseboats on serene waters, and secluded meadow estates beneath the Pir Panjal.',
    editorialOverview:
      'Kashmir unfolds at an unhurried cadence: saffron-scented mornings on mirror-still alpine lakes, afternoon walks through centuries-old chinar groves, and private dinners by carved walnut hearths in Gulmarg and Pahalgam.',
    highlights: [
      'Private dawn shikara crossings on quiet backwater channels',
      'Restored cedarwood heritage suites overlooking Dal & Nigeen waters',
      'Guided wildflower meadow walks in Dachigam and Aru Valley',
      'Curated encounters with master Pashmina and papier-mâché artisans',
    ],
    featuredJourneyId: 'kashmir-alpine-sanctuary',
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    subtitle: 'High Altitude Adventures',
    terrain: 'High-Altitude Plateaus',
    elevationRange: '3,500 m – 5,359 m',
    bestSeason: 'May – September',
    image: IMAGES.ladakh,
    imageAlt: 'Whitewashed cliffside Buddhist monastery in Ladakh overlooking a turquoise glacial river valley',
    shortDescription:
      'Stark sculptural canyons, centuries-old cliffside monasteries, and mobile canvas camps beneath pristine high-desert stars.',
    editorialOverview:
      'Across the rain-shadow expanses of the Trans-Himalaya, Ladakh rewards thoughtful acclimatisation with profound silence. Traverse winding river gorges between Leh, Nubra, and Pangong in private 4x4 comfort, pausing for dawn chants at secluded gompas.',
    highlights: [
      'Gradual elevation pacing with private luxury camps in Ulley and Nubra',
      'Early-morning monastic access and butter-tea dialogues with scholars',
      'Trans-Himalayan overland crossings over high mountain passes',
      'Night-sky astronomy sessions at 4,200 metres above sea level',
    ],
    featuredJourneyId: 'ladakh-trans-himalayan-odyssey',
  },
  {
    id: 'himachal',
    name: 'Himachal',
    subtitle: 'Mountain Hideaways',
    terrain: 'Alpine Lakes & Valleys',
    elevationRange: '1,800 m – 4,100 m',
    bestSeason: 'March – June & Sept – Nov',
    image: IMAGES.himachal,
    imageAlt: 'Secluded timber and dry-stone mountain sanctuary glowing with warm lantern light inside a Himachal cedar forest',
    shortDescription:
      'Architectural timber sanctuaries tucked inside old-growth deodar forests, orchard estates, and high Spiti ridge trails.',
    editorialOverview:
      'From heritage stone villas perched above Kinnaur apple orchards to quiet forest chalets in Tirthan and Manali, Himachal pairs approachable mountain elevation with deeply restorative stillness.',
    highlights: [
      'Architect-designed stone and cedar retreats in secluded valleys',
      'Foraged Himalayan farm-to-table dining on open slate terraces',
      'Private naturalist-led birding and forest bathing trails',
      'Optional overland extension into the fossil-rich Spiti Valley',
    ],
    featuredJourneyId: 'himachal-cedar-retreat',
  },
  {
    id: 'bhutan',
    name: 'Bhutan',
    subtitle: 'Himalayan Heritage',
    terrain: 'Sacred Kingdoms',
    elevationRange: '1,200 m – 3,800 m',
    bestSeason: 'March – May & Sept – Nov',
    image: IMAGES.bhutan,
    imageAlt: 'Cliffside Bhutanese fortress monastery perched amid drifting morning clouds and emerald valleys',
    shortDescription:
      'Living spiritual heritage, untouched pine valleys from Paro to Gangtey, and refined lodge hospitality guided by quiet reverence.',
    editorialOverview:
      'In the Kingdom of Bhutan, architecture, forest conservation, and devotion remain woven together. Travel seamlessly between Paro, Punakha, and the glacial Phobjikha valley with scholars, textile historians, and private lodge hosts.',
    highlights: [
      'Private sunrise ascent to cliffside sanctuaries before day crowds arrive',
      'Traditional hot-stone cedar baths overlooking terraced paddy fields',
      'Curated weaving studio visits in Thimphu and Bumthang',
      'Black-necked crane habitat walks across the misty Gangtey valley',
    ],
    featuredJourneyId: 'bhutan-kingdom-of-clouds',
  },
  {
    id: 'nepal',
    name: 'Nepal',
    subtitle: 'Legendary Mountain Journeys',
    terrain: 'Sacred Kingdoms',
    elevationRange: '1,400 m – 4,800 m',
    bestSeason: 'March – May & Oct – Dec',
    image: IMAGES.nepal,
    imageAlt: 'Sunrise alpenglow illuminating jagged Himalayan peaks in Nepal above a sea of valley clouds',
    shortDescription:
      'Iconic ridge panoramas of the Annapurna and Everest massifs paired with heritage courtyards in Kathmandu and boutique mountain lodges.',
    editorialOverview:
      'Nepal balances towering glacial theatre with Newari architectural artistry. Pair serene ridge-line treks supported by veteran Sherpa guides with restorative evenings at intimate mountain lodges and restored Kathmandu courtyard residences.',
    highlights: [
      'Boutique lodge-to-lodge ridge treks facing the Annapurna massif',
      'Private sunrise charter flights skirting high Everest glaciers',
      'After-hours architectural walk through Patan and Bhaktapur courtyards',
      'Bespoke Sherpa support team with seasoned mountain safety leadership',
    ],
    featuredJourneyId: 'nepal-annapurna-ridge-expedition',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'kashmir-alpine-sanctuary',
    title: 'Lakes, Saffron & Pine: A Private Kashmir Sanctuary',
    destinationId: 'kashmir',
    destinationName: 'Kashmir',
    category: 'Luxury Escapes',
    duration: '7 Days / 6 Nights (Illustrative)',
    daysCount: 7,
    difficulty: 'Leisurely',
    indicativePriceInr: 285000,
    bestSeason: 'May – October',
    image: IMAGES.kashmir,
    imageAlt: 'Private wooden shikara floating across calm Kashmir lake at sunrise',
    shortSummary:
      'Unhurried days drifting through quiet Nigeen backwaters, meadow picnics in Pahalgam, and intimate hearthside evenings in Gulmarg.',
    overview:
      'Designed for travellers seeking unhurried elegance, this illustrative itinerary pairs restored lakeside heritage hospitality in Srinagar with secluded alpine stays in the Aru and Gulmarg highlands.',
    highlights: [
      'Private sunrise shikara journey along quiet willow-lined channels',
      'Three nights in an exclusive cedarwood estate overlooking Gulmarg meadows',
      'Traditional Wazwan feast prepared by a fifth-generation culinary family',
      'Private curator-led studio visit with master Kani shawl weavers',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar & Lake Sanctuary',
        location: 'Srinagar',
        summary:
          'Private tarmac greeting and transfer to a restored cedar heritage suite on Nigeen Lake. Sunset kahwa tea on a private shikara as the Zabarwan hills turn rose-gold.',
      },
      {
        day: 2,
        title: 'Mughal Gardens & Old City Craftsmanship',
        location: 'Srinagar',
        summary:
          'Early architectural walk through Nishat Bagh before opening hours, followed by a private afternoon in the workshops of master walnut-wood carvers and Pashmina artisans.',
      },
      {
        day: 3,
        title: 'Saffron Fields to Pahalgam Meadows',
        location: 'Pahalgam',
        summary:
          'Scenic chauffeured drive past Pampore saffron plateaus into the Lidder river valley. Check into a secluded riverside estate surrounded by silver firs.',
      },
      {
        day: 4,
        title: 'Aru Valley Alpine Picnic',
        location: 'Aru Valley',
        summary:
          'Gentle guided morning walk along alpine streams leading to an exclusive linen-set picnic overlooking snow-streaked ridges.',
      },
      {
        day: 5,
        title: 'Ascent to the Meadows of Gulmarg',
        location: 'Gulmarg',
        summary:
          'Cross into the high meadows of Gulmarg. Afternoon leisure beside the stone fireplace or an optional private naturalist ridge walk.',
      },
      {
        day: 6,
        title: 'Apharwat Panorama & Farewell Wazwan',
        location: 'Gulmarg',
        summary:
          'Morning cable ascent for uninterrupted views across the Pir Panjal range, followed by an intimate multi-course Kashmiri Wazwan dinner.',
      },
      {
        day: 7,
        title: 'Morning Mist & Departure',
        location: 'Srinagar Airport',
        summary:
          'Leisurely highland breakfast before a private transfer to Srinagar Airport for your onward flight.',
      },
    ],
    included: [
      '6 nights in illustrative luxury heritage suites and mountain estates',
      'Private chauffeured SUV throughout the valley',
      'All breakfasts, curated lunches, and signature Wazwan dinner',
      'Dedicated local cultural host and naturalist guide',
      'Private shikara charters and monument entry passes',
    ],
    excluded: [
      'Domestic airfare to and from Srinagar',
      'Personal travel insurance and medical evacuation cover',
      'Gratuities, laundry, and personal craft acquisitions',
    ],
    featured: true,
  },
  {
    id: 'ladakh-trans-himalayan-odyssey',
    title: 'Monasteries & High Passes: Trans-Himalayan Ladakh',
    destinationId: 'ladakh',
    destinationName: 'Ladakh',
    category: 'Himalayan Expeditions',
    duration: '9 Days / 8 Nights (Illustrative)',
    daysCount: 9,
    difficulty: 'Moderate',
    indicativePriceInr: 365000,
    bestSeason: 'June – September',
    image: IMAGES.ladakh,
    imageAlt: 'Ancient whitewashed Ladakhi monastery perched above turquoise Indus river',
    shortSummary:
      'A meticulously acclimatised overland expedition linking ancient Indus monasteries, Nubra dunes, and private luxury canvas camps.',
    overview:
      'Crafted with medical-grade altitude pacing, this illustrative expedition traces the ancient silk-route corridors of Ladakh from Sham Valley and Leh through Khardung La into Nubra and remote Turtuk.',
    highlights: [
      'Two gentle acclimatisation nights in lower-elevation Sham Valley',
      'Dawn prayer attendance at Thiksey Monastery with private breakfast',
      'Two nights at a bespoke luxury tented camp beneath Nubra stars',
      'Expedition-prepped 4x4 fleet with supplemental oxygen carried throughout',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Leh Arrival & Immediate Descent to Sham',
        location: 'Sham Valley',
        summary:
          'Private transfer directly from Leh to a lower-altitude apricot orchard lodge in Uletokpo for effortless first-day acclimatisation.',
      },
      {
        day: 2,
        title: 'Alchi Murals & Quiet Valley Walks',
        location: 'Alchi & Likir',
        summary:
          'Guided exploration of Alchi’s 11th-century wooden temple murals with an art conservationist, followed by a restful afternoon.',
      },
      {
        day: 3,
        title: 'Sangam Confluence to Leh Heritage Quarter',
        location: 'Leh',
        summary:
          'Drive along the Indus river confluence into Leh. Check into a restored stone heritage residence and enjoy an unhurried evening.',
      },
      {
        day: 4,
        title: 'Dawn Chants at Thiksey & Hemis',
        location: 'Indus Valley',
        summary:
          'Pre-dawn arrival at Thiksey Monastery for morning horn prayers, followed by rooftop butter tea and a private tour of Hemis archives.',
      },
      {
        day: 5,
        title: 'Crossing Khardung La into Nubra',
        location: 'Nubra Valley',
        summary:
          'Cross the dramatic high mountain pass in 4x4 comfort, descending into the sand dunes and willow groves of Nubra’s luxury tented camp.',
      },
      {
        day: 6,
        title: 'Balti Heritage in Turtuk',
        location: 'Turtuk',
        summary:
          'Full-day excursion along the Shyok river to the stone-walled Balti village of Turtuk, with orchard lunch hosted by a local family.',
      },
      {
        day: 7,
        title: 'Diskit Ridge & High-Desert Stargazing',
        location: 'Nubra Valley',
        summary:
          'Quiet morning ridge walk above Diskit, afternoon reading on your pavilion deck, and late-evening telescope astronomy session.',
      },
      {
        day: 8,
        title: 'Return to Leh & Private Curator Dinner',
        location: 'Leh',
        summary:
          'Afternoon return over the pass to Leh for a celebratory Ladakhi tasting menu featuring sea-buckthorn and local barley delicacies.',
      },
      {
        day: 9,
        title: 'Highland Farewell & Departure',
        location: 'Leh Airport',
        summary:
          'Early morning private transfer to Kushok Bakula Rimpochee Airport.',
      },
    ],
    included: [
      '8 nights across boutique heritage lodges and private canvas camps',
      'Private expedition 4x4 vehicle with oxygen & medical kit',
      'All meals, mineral hydration, and monastic access permits',
      'Dedicated Ladakh historian and expedition captain',
    ],
    excluded: [
      'Commercial flights into and out of Leh',
      'High-altitude travel insurance',
      'Personal expedition gear and gratuities',
    ],
    featured: true,
  },
  {
    id: 'bhutan-kingdom-of-clouds',
    title: 'Valleys of Thunder Dragon: Sacred Bhutan',
    destinationId: 'bhutan',
    destinationName: 'Bhutan',
    category: 'Cultural Journeys',
    duration: '8 Days / 7 Nights (Illustrative)',
    daysCount: 8,
    difficulty: 'Moderate',
    indicativePriceInr: 440000,
    bestSeason: 'March – May & Oct – Nov',
    image: IMAGES.bhutan,
    imageAlt: 'Sacred fortress monastery clinging to misty mountain cliffs in Bhutan',
    shortSummary:
      'An intimate cultural immersion spanning Thimphu, Punakha, Gangtey, and Paro with private lodge retreats and scholar dialogues.',
    overview:
      'Crossing emerald passes draped in prayer flags, this illustrative journey pairs Bhutan’s deeply preserved monastic heritage with serene lodge architecture and unhurried valley walks.',
    highlights: [
      'Sustainable Development Fee & full royal visa logistics handled seamlessly',
      'Private morning blessing and butter-lamp ceremony in Punakha',
      'Two nights overlooking the glacial Phobjikha crane sanctuary',
      'Guided dawn ascent to Taktsang (Tiger’s Nest) with private trail picnic',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Paro Descent & Drive to Thimphu',
        location: 'Thimphu',
        summary:
          'Spectacular Himalayan runway arrival in Paro followed by a riverside drive to Thimphu’s quiet forest lodge.',
      },
      {
        day: 2,
        title: 'Textiles, Manuscripts & Dochula Pass',
        location: 'Punakha',
        summary:
          'Private textile academy walkthrough before crossing the 108 chortens of Dochula Pass down into warm Punakha valley.',
      },
      {
        day: 3,
        title: 'Punakha Dzong & Suspension Bridge Walk',
        location: 'Punakha',
        summary:
          'Explore the riverside Punakha Dzong and walk across terraced rice fields to Chimi Lhakhang with an architectural historian.',
      },
      {
        day: 4,
        title: 'Into the Mist of Phobjikha Valley',
        location: 'Gangtey',
        summary:
          'Ascend through rhododendron forests to the wide U-shaped valley of Gangtey, winter home of rare black-necked cranes.',
      },
      {
        day: 5,
        title: 'Gangtey Nature Trail & Hot-Stone Bath',
        location: 'Gangtey',
        summary:
          'Gentle pine-forest hike along the valley floor followed by a traditional herbal hot-stone bath heated over river boulders.',
      },
      {
        day: 6,
        title: 'Return to Paro Valley Sanctuary',
        location: 'Paro',
        summary:
          'Scenic return drive to Paro. Afternoon archery demonstration and private tasting of artisanal Himalayan honey and buckwheat.',
      },
      {
        day: 7,
        title: 'Taktsang Cliff Monastery Ascent',
        location: 'Paro',
        summary:
          'Early dawn departure up the pine-scented ridge to Tiger’s Nest Monastery, returning to a celebratory timber-deck dinner.',
      },
      {
        day: 8,
        title: 'Morning Prayer Flags & Departure',
        location: 'Paro Airport',
        summary:
          'Transfer to Paro International Airport for your morning departure.',
      },
    ],
    included: [
      '7 nights at illustrative boutique forest lodges',
      'Bhutan Sustainable Development Fee (SDF) and visa processing',
      'Private vehicle, licensed cultural scholar, and dedicated driver',
      'All meals, hot-stone bath session, and monastery contributions',
    ],
    excluded: [
      'International flights into Paro',
      'Travel insurance and alcoholic beverages',
      'Personal purchases and optional helicopter transfers',
    ],
    featured: true,
  },
  {
    id: 'nepal-annapurna-ridge-expedition',
    title: 'Above the Cloud Sea: Annapurna Sanctuary Ridge Trek',
    destinationId: 'nepal',
    destinationName: 'Nepal',
    category: 'Adventure & Trekking',
    duration: '10 Days / 9 Nights (Illustrative)',
    daysCount: 10,
    difficulty: 'Challenging',
    indicativePriceInr: 310000,
    bestSeason: 'March – May & Oct – Nov',
    image: IMAGES.nepal,
    imageAlt: 'Alpenglow on towering Nepalese Himalayan snow peaks above valley clouds',
    shortSummary:
      'A privately guided lodge-to-lodge ridge trek facing Annapurna South and Machapuchare, bookended by Kathmandu courtyard heritage.',
    overview:
      'Experience the grandeur of Nepal’s high ridges without sacrificing warmth or safety. Stay in hand-selected stone mountain lodges along terraced Gurung villages with veteran Sherpa leadership.',
    highlights: [
      'Private cultural immersion in Patan’s medieval Newari courtyards',
      '6-day scenic ridge trek capped below 3,300m for comfortable breathing',
      'Full private Sherpa trekking team, porters, and satellite safety comms',
      'Post-trek lakeside sanctuary restoration in Pokhara',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kathmandu Arrival & Patan Courtyard',
        location: 'Kathmandu',
        summary:
          'Private arrival transfer to a restored brick courtyard residence in Patan. Gear check and briefing over Nepali masala tea.',
      },
      {
        day: 2,
        title: 'Sacred Architecture of Bhaktapur',
        location: 'Kathmandu Valley',
        summary:
          'Morning walk with a heritage conservationist through Bhaktapur’s wood-carved squares and pottery kilns.',
      },
      {
        day: 3,
        title: 'Flight to Pokhara & Ridge Trailhead',
        location: 'Pokhara – Dhampus',
        summary:
          'Short mountain flight to Pokhara and scenic drive to the trailhead. Begin trekking through mossy oak groves to a ridge lodge.',
      },
      {
        day: 4,
        title: 'Rhododendron Ridges to Landruk',
        location: 'Landruk',
        summary:
          'Follow stone-paved trails past cascading waterfalls as Machapuchare’s fishtail spire rises dramatically ahead.',
      },
      {
        day: 5,
        title: 'Terraced Trails to Ghandruk',
        location: 'Ghandruk',
        summary:
          'Cross the Modi Khola valley and climb to the historic Gurung village of Ghandruk, enjoying panoramic views of Annapurna South.',
      },
      {
        day: 6,
        title: 'High Meadow Traverse to Tadapani',
        location: 'Tadapani',
        summary:
          'Ascend through ancient rhododendron canopies alive with Himalayan sunbirds to a quiet ridge camp.',
      },
      {
        day: 7,
        title: 'Sunrise over the Annapurna Massif',
        location: 'Poon Hill Ridge',
        summary:
          'Pre-dawn ridge walk for 360-degree sunrise alpenglow across Dhaulagiri and Annapurna I, followed by descent to a forest lodge.',
      },
      {
        day: 8,
        title: 'Descent to Phewa Lake Sanctuary',
        location: 'Pokhara',
        summary:
          'Final morning descent to the valley floor and transfer to a tranquil lakeside retreat for restorative spa therapies.',
      },
      {
        day: 9,
        title: 'Pokhara to Kathmandu Farewell',
        location: 'Kathmandu',
        summary:
          'Morning boat crossing on Phewa Lake before flying back to Kathmandu for a curated farewell dinner.',
      },
      {
        day: 10,
        title: 'Departure from Tribhuvan',
        location: 'Kathmandu',
        summary:
          'Private chauffeur transfer to Kathmandu International Airport.',
      },
    ],
    included: [
      '9 nights in heritage courtyard hotels and premier mountain lodges',
      'Domestic flights Kathmandu–Pokhara–Kathmandu',
      'Lead Sherpa guide, porter support, trekking permits, and TIMS passes',
      'All trail meals, safe boiled hydration, and celebration dinners',
    ],
    excluded: [
      'International flights to Nepal and visa fee on arrival',
      'High-altitude trekking and evacuation insurance',
      'Personal technical clothing and guide gratuities',
    ],
    featured: true,
  },
  {
    id: 'himachal-cedar-retreat',
    title: 'Deodar & Mist: Private Architectural Sanctuaries of Himachal',
    destinationId: 'himachal',
    destinationName: 'Himachal',
    category: 'Private Bespoke Tours',
    duration: '6 Days / 5 Nights (Illustrative)',
    daysCount: 6,
    difficulty: 'Leisurely',
    indicativePriceInr: 225000,
    bestSeason: 'March – June & Sept – Nov',
    image: IMAGES.himachal,
    imageAlt: 'Warm timber mountain chalet surrounded by misty Himalayan cedar forests',
    shortSummary:
      'A bespoke slow-travel sanctuary hopping between heritage apple orchards in Shimla hills and secluded timber cabins in Tirthan.',
    overview:
      'Designed for writers, couples, and families seeking restorative mountain quiet without arduous altitudes, pairing private architectural chalets with forest foraging and river walks.',
    highlights: [
      'Exclusive buyout option of a 3-bedroom glass-and-slate forest lodge',
      'Private guided foraging walk and open-fire terrace dinner',
      'Heritage Kalka–Shimla mountain railway private charter segment',
      'Trout-stream picnics beside the crystal waters of Tirthan Valley',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chandigarh to Mashobra Cedar Woods',
        location: 'Mashobra',
        summary:
          'Chauffeured ascent through pine ridges to a secluded stone manor nestled in private deodar woodland.',
      },
      {
        day: 2,
        title: 'Forest Trails & Orchard Lunches',
        location: 'Mashobra',
        summary:
          'Morning guided walk through cedar reserve trails followed by an artisanal lunch beneath heritage apple trees.',
      },
      {
        day: 3,
        title: 'Overland to Tirthan Valley',
        location: 'Tirthan Valley',
        summary:
          'Scenic mountain drive across Jalori ridge down into the untouched glacial valley of Tirthan.',
      },
      {
        day: 4,
        title: 'Great Himalayan National Park Edge',
        location: 'Tirthan Valley',
        summary:
          'Full-day naturalist walk along the buffer ridge of the national park, spotting tragopan and monal pheasants.',
      },
      {
        day: 5,
        title: 'Riverside Stillness & Stone Terrace Tea',
        location: 'Tirthan Valley',
        summary:
          'Unhurried morning with brass-pot masala tea on your private terrace overlooking the valley mist.',
      },
      {
        day: 6,
        title: 'Descent to Chandigarh',
        location: 'Chandigarh Airport',
        summary:
          'Morning departure drive to Chandigarh for late afternoon onward flights.',
      },
    ],
    included: [
      '5 nights in private architectural mountain lodges',
      'Private SUV transport and experienced mountain chauffeur',
      'Daily artisanal breakfasts, forest picnics, and hearthside dinners',
      'Naturalist guide for all ridge walks',
    ],
    excluded: [
      'Flights or rail tickets to Chandigarh',
      'Personal beverages and spa treatments',
      'Travel insurance and gratuities',
    ],
  },
  {
    id: 'ladakh-private-canvas-camp',
    title: 'Nomad Pavilions: Private Canvas Camp Expedition in Zanskar',
    destinationId: 'ladakh',
    destinationName: 'Ladakh',
    category: 'Private Bespoke Tours',
    duration: '8 Days / 7 Nights (Illustrative)',
    daysCount: 8,
    difficulty: 'Expedition Grade',
    indicativePriceInr: 495000,
    bestSeason: 'July – September',
    image: IMAGES.luxuryCamp,
    imageAlt: 'Private luxury canvas expedition tent camp glowing with lanterns under snow-capped peaks',
    shortSummary:
      'A mobile private camp erected exclusively for your party across hidden Zanskar canyons, complete with private chef and expedition team.',
    overview:
      'Our flagship bespoke expedition moves with you into valleys untouched by permanent hotels. Each evening arrives at a fully appointed teak-decked canvas pavilion lit by brass lanterns beneath snow ridges.',
    highlights: [
      'Completely private mobile camp with walk-in dressing tent and hot showers',
      'Dedicated camp chef preparing fresh four-course mountain dinners',
      'High-pass 4x4 crossings through Shingo La and Pensi La corridors',
      'Zero shared spaces—crafted strictly for 2 to 6 private guests',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Leh Arrival & Acclimatisation',
        location: 'Leh',
        summary: 'Gentle arrival rest in a garden sanctuary just outside Leh.',
      },
      {
        day: 2,
        title: 'Indus Gorge to Kargil Ridge',
        location: 'Mulbekh',
        summary: 'Overland drive past carved stone Maitreya reliefs into serene highland meadows.',
      },
      {
        day: 3,
        title: 'Into the Zanskar Corridor',
        location: 'Rangdum',
        summary: 'Cross Pensi La overlooking the sweeping Drang-Drung glacier to your first private riverside camp.',
      },
      {
        day: 4,
        title: 'Phugtal Cliffside Monastery',
        location: 'Zanskar',
        summary: 'Private guided canyon walk to the honeycomb cliff monastery of Phugtal.',
      },
      {
        day: 5,
        title: 'Karsha Monastic Ridge & Campfire',
        location: 'Padum',
        summary: 'Explore Karsha’s cliffside shrines and unwind around an open-sky cedar fire at dusk.',
      },
      {
        day: 6,
        title: 'High Meadow Crossing',
        location: 'Zanskar – Lingshed',
        summary: 'Traverse remote shepherd pastures by 4x4 to an amphitheatre of jagged peaks.',
      },
      {
        day: 7,
        title: 'Return via Lamayuru Moonland',
        location: 'Leh',
        summary: 'Descend along eroded golden canyons back into Leh for a restorative final night.',
      },
      {
        day: 8,
        title: 'Leh Departure',
        location: 'Leh Airport',
        summary: 'Morning transfer to Leh Airport.',
      },
    ],
    included: [
      'Fully serviced private mobile canvas camp for 5 nights + 2 nights Leh lodge',
      'Private chef, camp stewards, expedition leader, and dual 4x4 support',
      'Satellite communication, medical oxygen, and all valley permits',
    ],
    excluded: [
      'Domestic flights to Leh',
      'Mandatory expedition insurance',
      'Gratuities for field crew',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Dawn on Nigeen Backwaters',
    location: 'Kashmir Valley',
    category: 'Alpine Lakes',
    caption: 'First light spilling across mirror-still waters while cedarwood shikaras glide past misty deodar shorelines.',
    image: IMAGES.kashmir,
    imageAlt: 'Wooden shikara on misty Kashmir alpine lake at dawn',
    span: 'wide',
  },
  {
    id: 'gal-2',
    title: 'Lanterns Beneath the Peaks',
    location: 'Zanskar High Meadow',
    category: 'Luxury Camps',
    caption: 'Private teak-decked expedition pavilions illuminated against an indigo Himalayan dusk at 3,800 metres.',
    image: IMAGES.luxuryCamp,
    imageAlt: 'Luxury canvas expedition tent camp glowing at twilight under snow peaks',
    span: 'standard',
  },
  {
    id: 'gal-3',
    title: 'Overland Across Stone Passes',
    location: 'Ladakh – Spiti Corridor',
    category: 'Expeditions',
    caption: 'Tracing single-track granite mountain roads high above turquoise glacial river valleys.',
    image: IMAGES.alpinePass,
    imageAlt: 'Forest green 4x4 expedition vehicle on a dramatic Himalayan stone pass',
    span: 'standard',
  },
  {
    id: 'gal-4',
    title: 'Morning Tea Above the Clouds',
    location: 'Himachal Sanctuary',
    category: 'Retreats',
    caption: 'Slow mornings on dry-stone terraces overlooking sea-of-clouds valleys with brass-pot spiced chai.',
    image: IMAGES.teaTerrace,
    imageAlt: 'Artisanal brass tea service on a stone terrace overlooking misty mountains',
    span: 'standard',
  },
  {
    id: 'gal-5',
    title: 'Cliffside Prayer Flags',
    location: 'Paro Valley, Bhutan',
    category: 'Cultural Heritage',
    caption: 'Morning mist parting around ancient timber balconies and prayer flags high above emerald ridges.',
    image: IMAGES.bhutan,
    imageAlt: 'Sacred Bhutanese cliffside monastery emerging from morning clouds',
    span: 'standard',
  },
  {
    id: 'gal-6',
    title: 'Alpenglow on the High Ridge',
    location: 'Annapurna Sanctuary, Nepal',
    category: 'Trekking',
    caption: 'Champagne sunrise illuminating towering glacial faces above a quiet sea of valley cloud.',
    image: IMAGES.nepal,
    imageAlt: 'Sunrise alpenglow on jagged snow-covered Himalayan summits in Nepal',
    span: 'wide',
  },
];

export const EXPERIENCE_CATEGORIES = [
  'All Experiences',
  'Luxury Escapes',
  'Himalayan Expeditions',
  'Cultural Journeys',
  'Adventure & Trekking',
  'Private Bespoke Tours',
] as const;

export const WHY_US_PILLARS = [
  {
    index: '01',
    title: 'Unrushed Altitude & Route Craft',
    description:
      'Every itinerary is paced around natural geography and gradual acclimatisation—allowing quiet mornings, unhurried crossings, and zero rigid group schedules.',
  },
  {
    index: '02',
    title: 'Access to Private Mountain Estates',
    description:
      'From restored cedar residences in Srinagar to bespoke canvas pavilions in Zanskar, we prioritise intimate, architecturally grounded sanctuaries.',
  },
  {
    index: '03',
    title: 'Seasoned Himalayan Field Leadership',
    description:
      'Journeys are supported by local historians, naturalists, and mountain safety leads carrying medical-grade oxygen and satellite connectivity.',
  },
  {
    index: '04',
    title: 'Thoughtful Local Stewardship',
    description:
      'We partner directly with family-run orchard estates, weaver guilds, and regional conservation stewards so tourism sustains local craft.',
  },
];

export function formatInr(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
