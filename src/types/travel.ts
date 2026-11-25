export type PageId =
  | 'home'
  | 'destinations'
  | 'experiences'
  | 'journey-details'
  | 'our-story'
  | 'plan-journey';

export type DestinationSlug =
  | 'kashmir'
  | 'ladakh'
  | 'himachal'
  | 'bhutan'
  | 'nepal';

export type DestinationTerrain =
  | 'All Regions'
  | 'Alpine Lakes & Valleys'
  | 'High-Altitude Plateaus'
  | 'Sacred Kingdoms';

export type ExperienceCategory =
  | 'All Experiences'
  | 'Luxury Escapes'
  | 'Himalayan Expeditions'
  | 'Cultural Journeys'
  | 'Adventure & Trekking'
  | 'Private Bespoke Tours';

export interface Destination {
  id: DestinationSlug;
  name: string;
  subtitle: string;
  terrain: Exclude<DestinationTerrain, 'All Regions'>;
  elevationRange: string;
  bestSeason: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  editorialOverview: string;
  highlights: string[];
  featuredJourneyId: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  summary: string;
}

export interface Experience {
  id: string;
  title: string;
  destinationId: DestinationSlug;
  destinationName: string;
  category: Exclude<ExperienceCategory, 'All Experiences'>;
  duration: string;
  daysCount: number;
  difficulty: 'Leisurely' | 'Moderate' | 'Challenging' | 'Expedition Grade';
  indicativePriceInr: number;
  bestSeason: string;
  image: string;
  imageAlt: string;
  shortSummary: string;
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: string;
  caption: string;
  image: string;
  imageAlt: string;
  span?: 'wide' | 'standard';
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: string;
  travellers: string;
  travelStyle: string;
  budgetRange: string;
  requirements: string;
  journeyReference?: string;
}
