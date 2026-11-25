import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Minus } from 'lucide-react';
import { EXPERIENCES, formatInr } from '../data/journeys';
import type { Experience, PageId } from '../types/travel';
import { ResilientImage } from '../components/ResilientImage';

interface JourneyDetailsPageProps {
  experienceId: string;
  onBack: () => void;
  onPlanThisJourney: (experience: Experience) => void;
  onSelectExperience: (id: string) => void;
  onNavigate: (page: PageId) => void;
}

export function JourneyDetailsPage({
  experienceId,
  onBack,
  onPlanThisJourney,
  onSelectExperience,
}: JourneyDetailsPageProps) {
  const experience =
    EXPERIENCES.find((item) => item.id === experienceId) || EXPERIENCES[0];

  const [expandedDay, setExpandedDay] = useState<number | 'all'>('all');

  const relatedExperiences = EXPERIENCES.filter(
    (item) => item.id !== experience.id
  ).slice(0, 2);

  return (
    <div className="bg-[#FAF7F2] pt-20">
      {/* Hero Banner */}
      <section className="relative bg-[#102B25] text-[#F5EBD7]">
        <div className="relative h-[52vh] min-h-[380px] max-h-[580px] w-full overflow-hidden">
          <ResilientImage
            src={experience.image}
            alt={experience.imageAlt}
            fallbackTitle={experience.title}
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
            loading="eager"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0B1F1B]/92 via-[#102B25]/45 to-[#102B25]/30"
          />

          <div className="absolute inset-x-0 bottom-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-10 sm:pb-14 space-y-4">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#D6B66F] hover:text-[#F5EBD7] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Experiences</span>
            </button>

            <div className="flex flex-wrap items-center gap-2 text-xs text-[#F5EBD7]/80">
              <span>{experience.destinationName}</span>
              <span aria-hidden="true">·</span>
              <span>{experience.category}</span>
              <span aria-hidden="true">·</span>
              <span>Illustrative Itinerary</span>
            </div>

            <h1
              className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#F5EBD7] max-w-4xl leading-tight"
              style={{ textWrap: 'balance' }}
            >
              {experience.title}
            </h1>
          </div>
        </div>

        {/* Full-Width Key Specs Strip */}
        <div className="border-t border-[#F5EBD7]/15 bg-[#0B1F1B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 grid grid-cols-2 lg:grid-cols-5 gap-6 items-center">
            <div>
              <p className="text-xs text-[#D6B66F]">Duration</p>
              <p className="text-sm font-medium text-[#F5EBD7] mt-1 tabular-nums">
                {experience.duration}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#D6B66F]">Difficulty</p>
              <p className="text-sm font-medium text-[#F5EBD7] mt-1">
                {experience.difficulty}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#D6B66F]">Best Season</p>
              <p className="text-sm font-medium text-[#F5EBD7] mt-1">
                {experience.bestSeason}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#D6B66F]">Illustrative Tariff</p>
              <p className="text-sm font-medium text-[#F5EBD7] mt-1 tabular-nums">
                From {formatInr(experience.indicativePriceInr)} / guest
              </p>
            </div>
            <div className="col-span-2 lg:col-span-1 lg:text-right">
              <button
                type="button"
                onClick={() => onPlanThisJourney(experience)}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#D6B66F] text-[#102B25] text-sm font-medium rounded-sm hover:bg-[#C4A154] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Plan This Journey</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Overview & Itinerary */}
          <div className="lg:col-span-8 space-y-14">
            {/* Destination Overview */}
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-wider text-[#102B25]/70">
                Journey Overview
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-[#102B25]">
                Character &amp; Cadence of the Route
              </h2>
              <p className="text-base sm:text-lg text-[#202522]/85 leading-relaxed">
                {experience.overview}
              </p>
              <p className="text-xs text-[#202522]/60 pt-1">
                Note: All itineraries, daily pacing, and INR pricing on Northbound Journeys are illustrative portfolio examples.
              </p>
            </div>

            {/* Trip Highlights */}
            <div className="pt-8 border-t border-[#202522]/12 space-y-5">
              <h2 className="font-display text-2xl sm:text-3xl text-[#102B25]">
                Trip Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr items-stretch">
                {experience.highlights.map((highlight, idx) => (
                  <div
                    key={highlight}
                    className="h-full p-5 bg-[#F5EBD7]/45 border border-[#202522]/10 rounded-sm flex flex-col space-y-1.5 min-w-0"
                  >
                    <p className="text-xs font-display text-[#102B25]/60 tabular-nums">
                      0{idx + 1}.
                    </p>
                    <p className="text-sm text-[#202522]/85 leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="pt-8 border-t border-[#202522]/12 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium tracking-wider text-[#102B25]/70">
                    Illustrative Schedule
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl text-[#102B25] mt-1">
                    Day-by-Day Itinerary
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setExpandedDay('all')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
                      expandedDay === 'all'
                        ? 'bg-[#102B25] text-[#F5EBD7]'
                        : 'bg-[#F5EBD7] text-[#102B25]'
                    }`}
                  >
                    Expand All
                  </button>
                  <button
                    type="button"
                    onClick={() => setExpandedDay(1)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors cursor-pointer ${
                      expandedDay !== 'all'
                        ? 'bg-[#102B25] text-[#F5EBD7]'
                        : 'bg-[#F5EBD7] text-[#102B25]'
                    }`}
                  >
                    Compact View
                  </button>
                </div>
              </div>

              <div className="divide-y divide-[#202522]/12 border-y border-[#202522]/12">
                {experience.itinerary.map((day) => {
                  const isOpen = expandedDay === 'all' || expandedDay === day.day;
                  return (
                    <div key={day.day} className="py-5">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedDay((prev) =>
                            prev === day.day ? -1 : day.day
                          )
                        }
                        aria-expanded={isOpen}
                        className="w-full text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer group"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-display text-lg text-[#102B25] shrink-0 tabular-nums">
                            Day {String(day.day).padStart(2, '0')}
                          </span>
                          <h3 className="font-display text-lg sm:text-xl text-[#102B25] group-hover:text-[#1B3D35]">
                            {day.title}
                          </h3>
                        </div>
                        <span className="text-xs text-[#202522]/65 shrink-0">
                          {day.location}
                        </span>
                      </button>

                      {isOpen && (
                        <p className="mt-3 sm:pl-16 text-sm sm:text-base text-[#202522]/80 leading-relaxed">
                          {day.summary}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="pt-8 border-t border-[#202522]/12 grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr items-stretch">
              <div className="h-full p-6 sm:p-7 bg-[#F5EBD7]/45 border border-[#202522]/10 rounded-sm flex flex-col space-y-4 min-w-0">
                <h3 className="font-display text-xl text-[#102B25]">
                  What Is Included
                </h3>
                <ul className="space-y-2.5 text-sm text-[#202522]/85">
                  {experience.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 text-[#102B25] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-full p-6 sm:p-7 bg-[#FAF7F2] border border-[#202522]/12 rounded-sm flex flex-col space-y-4 min-w-0">
                <h3 className="font-display text-xl text-[#102B25]">
                  What Is Excluded
                </h3>
                <ul className="space-y-2.5 text-sm text-[#202522]/75">
                  {experience.excluded.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Minus
                        className="w-4 h-4 text-[#202522]/50 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Enquiry Card */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 bg-[#102B25] text-[#F5EBD7] p-7 sm:p-8 rounded-sm border border-[#D6B66F]/25 space-y-6">
              <div className="space-y-2 pb-5 border-b border-[#F5EBD7]/15">
                <p className="text-xs text-[#D6B66F]">Indicative Guide</p>
                <p className="font-display text-3xl text-[#F5EBD7] tabular-nums">
                  {formatInr(experience.indicativePriceInr)}
                </p>
                <p className="text-xs text-[#F5EBD7]/70">
                  Illustrative per-person tariff on twin-sharing private departure
                </p>
              </div>

              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-[#F5EBD7]/65">Region</dt>
                  <dd className="text-[#F5EBD7] font-medium text-right">
                    {experience.destinationName}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#F5EBD7]/65">Category</dt>
                  <dd className="text-[#F5EBD7] font-medium text-right">
                    {experience.category}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#F5EBD7]/65">Duration</dt>
                  <dd className="text-[#F5EBD7] font-medium text-right tabular-nums">
                    {experience.daysCount} Days
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#F5EBD7]/65">Pace &amp; Grade</dt>
                  <dd className="text-[#F5EBD7] font-medium text-right">
                    {experience.difficulty}
                  </dd>
                </div>
              </dl>

              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={() => onPlanThisJourney(experience)}
                  className="w-full py-3.5 px-5 bg-[#D6B66F] text-[#102B25] font-medium text-sm rounded-sm hover:bg-[#C4A154] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Plan This Journey</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <p className="text-[11px] text-[#F5EBD7]/60 leading-relaxed text-center">
                  Pre-fills your enquiry planner with {experience.destinationName} and this itinerary style.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Journeys */}
        <div className="mt-20 pt-14 border-t border-[#202522]/12">
          <h2 className="font-display text-2xl sm:text-3xl text-[#102B25] mb-8">
            Further Himalayan Inspirations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr items-stretch">
            {relatedExperiences.map((rel) => (
              <article
                key={rel.id}
                className="group h-full bg-[#F5EBD7]/35 border border-[#202522]/10 rounded-sm overflow-hidden flex flex-col transition-colors hover:border-[#102B25]/35 min-w-0"
              >
                <div className="aspect-[16/10] w-full shrink-0 bg-[#102B25] overflow-hidden">
                  <ResilientImage
                    src={rel.image}
                    alt={rel.imageAlt}
                    fallbackTitle={rel.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    containerClassName="w-full h-full"
                  />
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <div className="space-y-2">
                    <p className="text-xs text-[#202522]/65">
                      {rel.destinationName} <span aria-hidden="true">·</span> {rel.category} <span aria-hidden="true">·</span> {rel.difficulty}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl text-[#102B25] leading-snug">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-[#202522]/80 leading-relaxed">
                      {rel.shortSummary}
                    </p>
                  </div>
                  <div className="mt-auto pt-6">
                    <button
                      type="button"
                      onClick={() => onSelectExperience(rel.id)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#102B25] border-b border-[#D6B66F] pb-0.5 cursor-pointer"
                    >
                      <span>Explore Itinerary</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
