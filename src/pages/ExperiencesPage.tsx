import { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import {
  DESTINATIONS,
  EXPERIENCE_CATEGORIES,
  EXPERIENCES,
  formatInr,
} from '../data/journeys';
import type { DestinationSlug, ExperienceCategory } from '../types/travel';
import { ResilientImage } from '../components/ResilientImage';

interface ExperiencesPageProps {
  initialDestinationFilter?: DestinationSlug | 'all';
  onSelectExperience: (experienceId: string) => void;
  onPlanJourneyForExperience: (experienceId: string) => void;
}

export function ExperiencesPage({
  initialDestinationFilter = 'all',
  onSelectExperience,
  onPlanJourneyForExperience,
}: ExperiencesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<ExperienceCategory>('All Experiences');
  const [selectedDestination, setSelectedDestination] = useState<DestinationSlug | 'all'>(
    initialDestinationFilter
  );

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    const matchesCategory =
      selectedCategory === 'All Experiences' || exp.category === selectedCategory;
    const matchesDestination =
      selectedDestination === 'all' || exp.destinationId === selectedDestination;
    return matchesCategory && matchesDestination;
  });

  const handleResetFilters = () => {
    setSelectedCategory('All Experiences');
    setSelectedDestination('all');
  };

  return (
    <div className="bg-[#FAF7F2] pt-24 sm:pt-28 pb-20 lg:pb-28">
      {/* Header & Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-10 border-b border-[#202522]/12">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-medium tracking-wider text-[#102B25]/70">
            Experiences &amp; Expeditions
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl text-[#102B25] tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Curated Ways to Experience the High Himalaya
          </h1>
          <p className="text-base sm:text-lg text-[#202522]/80 leading-relaxed">
            Filter our portfolio of illustrative itineraries by travel style or region. Every package tariff and day count shown below is illustrative and tailored per private departure.
          </p>
        </div>

        {/* Category Filter Tabs & Region Dropdown */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Filter experiences by category"
          >
            {EXPERIENCE_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#102B25] text-[#F5EBD7]'
                      : 'bg-[#F5EBD7]/70 text-[#202522]/80 hover:bg-[#F5EBD7] hover:text-[#102B25] border border-[#202522]/10'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <label htmlFor="region-filter" className="text-xs font-medium text-[#202522]/70 whitespace-nowrap">
              Region:
            </label>
            <select
              id="region-filter"
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value as DestinationSlug | 'all')}
              className="px-3.5 py-2 text-sm bg-[#FAF7F2] border border-[#202522]/25 rounded-sm text-[#102B25] focus:outline-none focus:border-[#102B25]"
            >
              <option value="all">All Destinations</option>
              {DESTINATIONS.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-6 flex items-center justify-between text-xs text-[#202522]/65">
        <span className="tabular-nums">
          Showing {filteredExperiences.length}{' '}
          {filteredExperiences.length === 1 ? 'illustrative journey' : 'illustrative journeys'}
        </span>
        {(selectedCategory !== 'All Experiences' || selectedDestination !== 'all') && (
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1.5 text-[#102B25] font-medium hover:underline cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* Experience Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-8">
        {filteredExperiences.length === 0 ? (
          <div className="bg-[#F5EBD7]/45 border border-[#202522]/10 rounded-sm p-12 text-center space-y-4">
            <h2 className="font-display text-2xl text-[#102B25]">
              No Preset Journeys Match This Combination
            </h2>
            <p className="text-sm text-[#202522]/75 max-w-md mx-auto">
              Every Northbound itinerary can be custom-built for your chosen region and style. Reset the filters or request a bespoke route directly.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-[#102B25] text-[#F5EBD7] text-sm font-medium rounded-sm hover:bg-[#1B3D35] transition-colors cursor-pointer"
              >
                Show All Experiences
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 auto-rows-fr items-stretch">
            {filteredExperiences.map((exp) => (
              <article
                key={exp.id}
                className="group h-full bg-[#F5EBD7]/35 border border-[#202522]/12 rounded-sm overflow-hidden flex flex-col transition-colors hover:border-[#102B25]/40 min-w-0"
              >
                <div className="aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#102B25]">
                  <ResilientImage
                    src={exp.image}
                    alt={exp.imageAlt}
                    fallbackTitle={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    containerClassName="w-full h-full"
                  />
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#202522]/70">
                    <span className="font-medium text-[#102B25]">{exp.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.destinationName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.difficulty}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.bestSeason}</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-[1.65rem] text-[#102B25] leading-snug">
                    {exp.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#202522]/80 leading-relaxed">
                    {exp.shortSummary}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    <h3 className="text-xs font-semibold tracking-wider text-[#102B25]/70">
                      Illustrative Highlights
                    </h3>
                    <ul className="space-y-1.5 text-sm text-[#202522]/80">
                      {exp.highlights.slice(0, 3).map((hl) => (
                        <li key={hl} className="flex items-start gap-2">
                          <span className="text-[#D6B66F] font-semibold" aria-hidden="true">
                            —
                          </span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto px-6 sm:px-8 py-5 bg-[#FAF7F2] border-t border-[#202522]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs text-[#202522]/65">{exp.duration}</p>
                    <p className="text-base font-semibold text-[#102B25] tabular-nums mt-0.5">
                      Indicative from {formatInr(exp.indicativePriceInr)}
                    </p>
                    <p className="text-[11px] text-[#202522]/60">
                      Illustrative per-guest guide · Private departure
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => onPlanJourneyForExperience(exp.id)}
                      className="px-4 py-2.5 border border-[#102B25]/30 text-[#102B25] text-xs font-medium rounded-sm hover:border-[#102B25] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Enquire
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectExperience(exp.id)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#102B25] text-[#F5EBD7] text-xs font-medium rounded-sm hover:bg-[#1B3D35] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>View Itinerary</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
