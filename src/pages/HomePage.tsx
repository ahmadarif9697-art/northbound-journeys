import { ArrowRight, Maximize2 } from 'lucide-react';
import {
  DESTINATIONS,
  EXPERIENCES,
  GALLERY_ITEMS,
  IMAGES,
  WHY_US_PILLARS,
  formatInr,
} from '../data/journeys';
import type { DestinationSlug, PageId } from '../types/travel';
import { ResilientImage } from '../components/ResilientImage';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectDestination: (destinationId: DestinationSlug) => void;
  onSelectExperience: (experienceId: string) => void;
  onOpenGallery: (index: number) => void;
}

export function HomePage({
  onNavigate,
  onSelectDestination,
  onSelectExperience,
  onOpenGallery,
}: HomePageProps) {
  const featuredDestinations = DESTINATIONS.slice(0, 4);
  const signatureExperiences = EXPERIENCES.filter((exp) => exp.featured).slice(0, 3);

  return (
    <div>
      {/* 1. Immersive Hero */}
      <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-end bg-[#102B25] overflow-hidden">
        <div className="absolute inset-0">
          <ResilientImage
            src={IMAGES.heroHimalayas}
            alt="Panoramic golden hour Himalayan peaks rising above a misty alpine pine valley"
            fallbackTitle="Northbound Journeys"
            className="w-full h-full object-cover object-center"
            containerClassName="w-full h-full"
            loading="eager"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0B1F1B]/92 via-[#102B25]/50 to-[#102B25]/35"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 pt-28 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm sm:text-base font-display italic tracking-wide text-[#D6B66F]">
              Beyond the Ordinary. Into the Extraordinary.
            </p>
            <h1
              className="font-display text-[#F5EBD7] font-medium leading-[1.08] tracking-tight"
              style={{
                fontSize: 'clamp(2.35rem, 4.8vw, 4.25rem)',
                textWrap: 'balance',
              }}
            >
              Journeys Beyond Imagination.
            </h1>
            <p className="text-base sm:text-lg text-[#F5EBD7]/85 leading-relaxed max-w-2xl">
              Private Himalayan expeditions, lakeside Kashmir retreats, and high-altitude sanctuaries curated around quiet rhythm, architectural character, and deep regional knowledge.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('experiences')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#D6B66F] text-[#102B25] font-medium text-sm rounded-sm hover:bg-[#C4A154] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B66F]"
              >
                <span>Explore Journeys</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('plan-journey')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#102B25]/60 backdrop-blur-sm text-[#F5EBD7] border border-[#F5EBD7]/40 font-medium text-sm rounded-sm hover:border-[#D6B66F] hover:text-[#D6B66F] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B66F]"
              >
                Plan Your Journey
              </button>
            </div>
          </div>

          {/* Grounded Editorial Index Bar */}
          <div className="mt-14 pt-6 border-t border-[#F5EBD7]/20 grid grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm text-[#F5EBD7]/80">
            <div>
              <span className="text-[#D6B66F] block mb-1 font-medium">Regions</span>
              <span>Kashmir, Ladakh, Himachal, Bhutan, Nepal</span>
            </div>
            <div>
              <span className="text-[#D6B66F] block mb-1 font-medium">Travel Format</span>
              <span>Private bespoke itineraries &amp; field teams</span>
            </div>
            <div>
              <span className="text-[#D6B66F] block mb-1 font-medium">Acclimatisation</span>
              <span>Gradual elevation pacing across passes</span>
            </div>
            <div>
              <span className="text-[#D6B66F] block mb-1 font-medium">Portfolio Note</span>
              <span>Illustrative luxury travel concept</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Destinations */}
      <section className="bg-[#FAF7F2] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#202522]/12">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-medium tracking-wider text-[#102B25]/70">
                Curated Himalayan Regions
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl text-[#102B25] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Destinations Shaped by Altitude &amp; Stillness
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('destinations')}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#102B25] hover:text-[#1B3D35] border-b border-[#102B25]/40 hover:border-[#102B25] pb-1 transition-colors self-start md:self-auto whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>View All Five Regions</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr items-stretch">
            {featuredDestinations.map((dest) => (
              <article
                key={dest.id}
                className="group h-full flex flex-col bg-[#F5EBD7]/45 border border-[#202522]/10 rounded-sm overflow-hidden transition-colors hover:border-[#102B25]/35 min-w-0"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#102B25]">
                  <ResilientImage
                    src={dest.image}
                    alt={dest.imageAlt}
                    fallbackTitle={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    containerClassName="w-full h-full"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#202522]/65">
                      <span>{dest.terrain}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{dest.elevationRange}</span>
                      <span aria-hidden="true">·</span>
                      <span>{dest.bestSeason}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-[1.65rem] text-[#102B25] leading-snug">
                      {dest.name} — {dest.subtitle}
                    </h3>
                    <p className="text-sm sm:text-base text-[#202522]/80 leading-relaxed">
                      {dest.shortDescription}
                    </p>
                  </div>
                  <div className="mt-auto pt-6">
                    <button
                      type="button"
                      onClick={() => onSelectDestination(dest.id)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#102B25] hover:text-[#1B3D35] border-b border-[#D6B66F] pb-0.5 transition-colors cursor-pointer"
                    >
                      <span>Explore Destination</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Signature Travel Experiences */}
      <section className="bg-[#F5EBD7]/55 py-20 lg:py-28 border-y border-[#202522]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#202522]/12">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-medium tracking-wider text-[#102B25]/70">
                Signature Itineraries
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl text-[#102B25] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Curated Journeys Crafted for Depth
              </h2>
              <p className="text-sm text-[#202522]/75">
                All durations and tariffs shown below are illustrative starting guides for private departures.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('experiences')}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#102B25] hover:text-[#1B3D35] border-b border-[#102B25]/40 hover:border-[#102B25] pb-1 transition-colors self-start md:self-auto whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Filter All Experiences</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr items-stretch">
            {signatureExperiences.map((exp) => (
              <article
                key={exp.id}
                className="group h-full bg-[#FAF7F2] border border-[#202522]/10 rounded-sm overflow-hidden flex flex-col transition-colors hover:border-[#102B25]/35 min-w-0"
              >
                <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#102B25]">
                  <ResilientImage
                    src={exp.image}
                    alt={exp.imageAlt}
                    fallbackTitle={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    containerClassName="w-full h-full"
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col space-y-3.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#202522]/65">
                    <span>{exp.destinationName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.difficulty}</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#102B25] leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-[#202522]/80 leading-relaxed">
                    {exp.shortSummary}
                  </p>
                </div>

                <div className="mt-auto px-6 sm:px-7 py-5 border-t border-[#202522]/10 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs text-[#202522]/60">{exp.duration}</p>
                    <p className="text-sm font-semibold text-[#102B25] tabular-nums mt-0.5">
                      From {formatInr(exp.indicativePriceInr)}{' '}
                      <span className="font-normal text-xs text-[#202522]/65">(Illustrative)</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectExperience(exp.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-[#102B25] text-[#F5EBD7] rounded-sm hover:bg-[#1B3D35] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Travel With Us */}
      <section className="bg-[#102B25] text-[#F5EBD7] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-wider text-[#D6B66F]">
                  Our Approach
                </p>
                <h2
                  className="font-display text-3xl sm:text-4xl text-[#F5EBD7] leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Why Travel With Northbound Journeys
                </h2>
                <p className="text-base text-[#F5EBD7]/80 leading-relaxed">
                  High-altitude landscapes cannot be rushed. We design expeditions around mountain weather windows, quiet hospitality, and respectful local partnerships.
                </p>
              </div>

              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-[#D6B66F]/25">
                <ResilientImage
                  src={IMAGES.luxuryCamp}
                  alt="Evening lantern light across a private Himalayan canvas camp deck"
                  fallbackTitle="Private Mountain Camps"
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#F5EBD7]/15 border-y border-[#F5EBD7]/15 flex flex-col justify-center">
              {WHY_US_PILLARS.map((pillar) => (
                <div
                  key={pillar.index}
                  className="py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start"
                >
                  <div className="sm:col-span-2 font-display text-2xl text-[#D6B66F] tabular-nums">
                    {pillar.index}.
                  </div>
                  <div className="sm:col-span-10 space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl text-[#F5EBD7]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#F5EBD7]/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Luxury Travel Inspiration Gallery */}
      <section className="bg-[#FAF7F2] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#202522]/12">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-medium tracking-wider text-[#102B25]/70">
                Field Journal &amp; Inspiration
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl text-[#102B25] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Frames from the High Frontier
              </h2>
            </div>
            <p className="text-sm text-[#202522]/70 max-w-sm">
              Select any photograph to open the full-screen gallery viewer with route notes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr items-stretch">
            {GALLERY_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onOpenGallery(idx)}
                aria-label={`Open gallery image: ${item.title}`}
                className="group relative w-full h-full text-left rounded-sm overflow-hidden bg-[#102B25] border border-[#202522]/10 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102B25] aspect-[4/3] min-w-0"
              >
                <ResilientImage
                  src={item.image}
                  alt={item.imageAlt}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  containerClassName="w-full h-full"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B1F1B]/88 via-[#0B1F1B]/30 to-transparent opacity-90 transition-opacity"
                />
                <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-sm bg-[#102B25]/75 text-[#F5EBD7] flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-[#F5EBD7]">
                  <p className="text-xs text-[#D6B66F] mb-1">
                    {item.location} <span aria-hidden="true">·</span> {item.category}
                  </p>
                  <h3 className="font-display text-lg sm:text-xl leading-snug">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Elegant Enquiry CTA */}
      <section className="bg-[#F5EBD7] py-20 lg:py-24 border-t border-[#202522]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-6">
          <p className="text-xs font-medium tracking-wider text-[#102B25]/70">
            Bespoke Travel Design
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#102B25] tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Begin Shaping Your Himalayan Chapter
          </h2>
          <p className="text-base sm:text-lg text-[#202522]/80 max-w-2xl mx-auto leading-relaxed">
            Share your preferred season, travel pace, and landscapes of interest using our interactive enquiry planner to preview a tailored trip summary.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('plan-journey')}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#102B25] text-[#F5EBD7] font-medium text-sm rounded-sm hover:bg-[#1B3D35] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102B25]"
            >
              <span>Plan Your Journey</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('our-story')}
              className="inline-flex items-center gap-2 px-6 py-4 bg-transparent text-[#102B25] border border-[#102B25]/35 font-medium text-sm rounded-sm hover:border-[#102B25] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Read Our Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
