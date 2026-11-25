import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DESTINATIONS, EXPERIENCES } from '../data/journeys';
import type { DestinationSlug, DestinationTerrain, PageId } from '../types/travel';
import { ResilientImage } from '../components/ResilientImage';

interface DestinationsPageProps {
  initialDestination?: DestinationSlug | null;
  onSelectExperience: (experienceId: string) => void;
  onFilterExperiencesByDestination: (destinationId: DestinationSlug) => void;
  onNavigate: (page: PageId) => void;
}

const TERRAIN_FILTERS: DestinationTerrain[] = [
  'All Regions',
  'Alpine Lakes & Valleys',
  'High-Altitude Plateaus',
  'Sacred Kingdoms',
];

export function DestinationsPage({
  initialDestination = null,
  onSelectExperience,
  onFilterExperiencesByDestination,
  onNavigate,
}: DestinationsPageProps) {
  const [selectedTerrain, setSelectedTerrain] = useState<DestinationTerrain>('All Regions');
  const [highlightedId, setHighlightedId] = useState<DestinationSlug | null>(initialDestination);

  const visibleDestinations = DESTINATIONS.filter((dest) => {
    if (selectedTerrain === 'All Regions') return true;
    return dest.terrain === selectedTerrain;
  });

  return (
    <div className="bg-[#FAF7F2] pt-24 sm:pt-28 pb-20 lg:pb-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-12 border-b border-[#202522]/12">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-medium tracking-wider text-[#102B25]/70">
            Destinations
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl text-[#102B25] tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Five Mountain Landscapes of Extraordinary Character
          </h1>
          <p className="text-base sm:text-lg text-[#202522]/80 leading-relaxed">
            From tranquil shikara mornings on Kashmir’s alpine waters to wind-sculpted monasteries in Ladakh and cedar valleys in Bhutan, each region is curated around seasonality and altitude comfort.
          </p>
        </div>

        {/* Terrain Filter Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter destinations by terrain">
          {TERRAIN_FILTERS.map((terrain) => {
            const active = selectedTerrain === terrain;
            return (
              <button
                key={terrain}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setSelectedTerrain(terrain);
                  setHighlightedId(null);
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#102B25] text-[#F5EBD7]'
                    : 'bg-[#F5EBD7]/70 text-[#202522]/80 hover:bg-[#F5EBD7] hover:text-[#102B25] border border-[#202522]/10'
                }`}
              >
                {terrain}
              </button>
            );
          })}
        </div>
      </section>

      {/* Destination Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 auto-rows-fr items-stretch">
          {visibleDestinations.map((dest) => {
            const matchingExperience = EXPERIENCES.find((e) => e.id === dest.featuredJourneyId);
            const isHighlighted = highlightedId === dest.id;

            return (
              <article
                key={dest.id}
                id={`dest-${dest.id}`}
                className={`group h-full flex flex-col bg-[#F5EBD7]/35 border rounded-sm overflow-hidden transition-colors min-w-0 ${
                  isHighlighted
                    ? 'border-[#D6B66F] ring-1 ring-[#D6B66F] bg-[#F5EBD7]/65'
                    : 'border-[#202522]/12 hover:border-[#102B25]/35'
                }`}
              >
                {/* Uniform Aspect Ratio Photography */}
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#102B25]">
                  <ResilientImage
                    src={dest.image}
                    alt={dest.imageAlt}
                    fallbackTitle={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    containerClassName="w-full h-full"
                  />
                </div>

                {/* Equal-Height Content & Bottom-Pinned Actions */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#202522]/65">
                      <span>{dest.terrain}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">Elevation {dest.elevationRange}</span>
                      <span aria-hidden="true">·</span>
                      <span>Best Season: {dest.bestSeason}</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl text-[#102B25] leading-snug">
                      {dest.name} – {dest.subtitle}
                    </h2>

                    <p className="text-sm sm:text-base text-[#202522]/85 leading-relaxed">
                      {dest.editorialOverview}
                    </p>

                    <div className="pt-2 space-y-2">
                      <h3 className="text-xs font-semibold tracking-wider text-[#102B25]/70">
                        Region Highlights
                      </h3>
                      <ul className="space-y-2 text-sm text-[#202522]/80">
                        {dest.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <span className="text-[#D6B66F] font-semibold mt-0.5" aria-hidden="true">
                              —
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-[#202522]/10 flex flex-wrap items-center gap-3">
                    {matchingExperience && (
                      <button
                        type="button"
                        onClick={() => onSelectExperience(matchingExperience.id)}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-[#102B25] text-[#F5EBD7] text-sm font-medium rounded-sm hover:bg-[#1B3D35] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>Explore Destination</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => onFilterExperiencesByDestination(dest.id)}
                      className="inline-flex items-center gap-2 px-5 py-3 border border-[#102B25]/30 text-[#102B25] text-sm font-medium rounded-sm hover:border-[#102B25] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>View {dest.name} Journeys</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom Bespoke Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-20">
        <div className="bg-[#102B25] text-[#F5EBD7] rounded-sm p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl text-[#F5EBD7]">
              Combining Two Himalayan Regions?
            </h2>
            <p className="text-sm sm:text-base text-[#F5EBD7]/75">
              Pair Kashmir’s alpine lakes with overland Ladakh, or combine Bhutan’s valleys with a ridge retreat in Nepal.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('plan-journey')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D6B66F] text-[#102B25] font-medium text-sm rounded-sm hover:bg-[#C4A154] transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start lg:self-auto"
          >
            <span>Design a Multi-Region Route</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
}
