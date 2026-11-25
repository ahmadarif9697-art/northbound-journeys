import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/journeys';
import type { PageId } from '../types/travel';
import { ResilientImage } from '../components/ResilientImage';

interface OurStoryPageProps {
  onNavigate: (page: PageId) => void;
}

const COMMITMENTS = [
  {
    index: '01',
    title: 'Commitment to Thoughtful Travel',
    body: 'Modern expedition travel too often reduces vast mountain valleys to checklists of passes crossed in haste. Northbound Journeys was conceived around unhurried presence—building itineraries with buffer days for shifting mountain light, quiet conversations, and genuine physical acclimatisation.',
  },
  {
    index: '02',
    title: 'Local Culture & Responsible Tourism',
    body: 'High-altitude ecosystems and heritage craft traditions require restraint. Every illustrative route in this concept prioritises locally owned heritage residences, fair field-crew compensation, low-waste camp operations, and direct patronage of regional artisans across Kashmir, Ladakh, Himachal, Bhutan, and Nepal.',
  },
  {
    index: '03',
    title: 'Personalised Travel Planning',
    body: 'No two travellers move through the mountains at the same rhythm. Rather than fixed coach departures, our planning methodology adapts lodging architecture, daily elevation gain, dietary craft, and specialist hosts—from architectural historians to botanists—around each private group.',
  },
];

export function OurStoryPage({ onNavigate }: OurStoryPageProps) {
  return (
    <div className="bg-[#FAF7F2] pt-24 sm:pt-28 pb-20 lg:pb-28">
      {/* Intro & Brand Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-14 border-b border-[#202522]/12">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-medium tracking-wider text-[#102B25]/70">
            Our Story &amp; Philosophy
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl text-[#102B25] tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Beyond the Ordinary. Into the Extraordinary.
          </h1>
          <p className="text-base sm:text-lg text-[#202522]/85 leading-relaxed">
            Northbound Journeys is a fictional luxury Himalayan expedition and bespoke retreat house created as Portfolio Project 03 by SA Crown Web Design to demonstrate editorial storytelling, serene visual restraint, and interactive travel planning.
          </p>
        </div>

        {/* Clear Fictional Portfolio Notice */}
        <div className="mt-8 p-5 sm:p-6 bg-[#F5EBD7]/65 border border-[#D6B66F]/60 rounded-sm max-w-3xl">
          <p className="text-xs font-semibold tracking-wider text-[#102B25] mb-1">
            Portfolio Concept Disclosure
          </p>
          <p className="text-sm text-[#202522]/85 leading-relaxed">
            Northbound Journeys, its founder profile below, and all sample itineraries are fictional portfolio content designed and developed by SA Crown Web Design. No real bookings, awards, or commercial travel operations are represented.
          </p>
        </div>
      </section>

      {/* Fictional Founder Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24 border-b border-[#202522]/12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none lg:h-full rounded-sm overflow-hidden bg-[#102B25] border border-[#202522]/10">
              <ResilientImage
                src={IMAGES.founderPortrait}
                alt="Editorial portrait of fictional Northbound Journeys founder Vikramaditya Mehta in a wood-paneled study"
                fallbackTitle="Vikramaditya Mehta (Fictional Founder)"
                className="w-full h-full object-cover object-top"
                containerClassName="w-full h-full"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium text-[#102B25]/70">
                Fictional Founder Profile <span aria-hidden="true">·</span> Concept Narrative
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#102B25]">
                Vikramaditya Mehta
              </h2>
              <p className="text-sm font-medium text-[#1B3D35]">
                Fictional Founder &amp; Chief Expedition Curator
              </p>
            </div>

            <div className="space-y-4 text-base text-[#202522]/85 leading-relaxed">
              <p>
                Within the Northbound Journeys brand narrative, Vikramaditya Mehta spent two decades mapping lesser-known trans-Himalayan trade routes across Spiti, Zanskar, and Upper Mustang before founding an intimate studio dedicated to slow-paced mountain travel.
              </p>
              <p>
                Trained as an architectural conservationist in Delhi before leading field logistics in Ladakh and Bhutan, his fictional philosophy unites quiet design sensibility with deep respect for highland communities—ensuring that warm hospitality in remote valleys never overwhelms the stillness of the terrain.
              </p>
            </div>

            <blockquote className="pt-5 border-t border-[#202522]/12">
              <p className="font-display italic text-xl sm:text-2xl text-[#102B25] leading-relaxed">
                “True luxury at three thousand metres is not marble or spectacle—it is unhurried time, warm hearthside craft, and the privilege of arriving quietly.”
              </p>
              <footer className="mt-2 text-xs text-[#202522]/65">
                — Vikramaditya Mehta (Fictional Founder Persona, Portfolio Project 03)
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Three Commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-2xl space-y-3 mb-12">
          <p className="text-xs font-medium tracking-wider text-[#102B25]/70">
            Guiding Principles
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-[#102B25]">
            How Every Journey Is Shaped
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr items-stretch">
          {COMMITMENTS.map((item) => (
            <article
              key={item.index}
              className="h-full p-7 sm:p-8 bg-[#F5EBD7]/40 border border-[#202522]/10 rounded-sm flex flex-col space-y-4 min-w-0"
            >
              <p className="font-display text-2xl text-[#102B25] tabular-nums">
                {item.index}.
              </p>
              <h3 className="font-display text-2xl text-[#102B25] leading-snug">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#202522]/80 leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-[#102B25] text-[#F5EBD7] rounded-sm p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl text-[#F5EBD7]">
              Explore the Interactive Journey Planner
            </h2>
            <p className="text-sm sm:text-base text-[#F5EBD7]/75">
              Test the bespoke travel enquiry workflow or explore our five Himalayan destination showcases.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('destinations')}
              className="px-5 py-3 border border-[#F5EBD7]/35 text-[#F5EBD7] text-sm font-medium rounded-sm hover:border-[#D6B66F] hover:text-[#D6B66F] transition-colors cursor-pointer"
            >
              View Destinations
            </button>
            <button
              type="button"
              onClick={() => onNavigate('plan-journey')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D6B66F] text-[#102B25] text-sm font-medium rounded-sm hover:bg-[#C4A154] transition-colors cursor-pointer"
            >
              <span>Plan Your Journey</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
