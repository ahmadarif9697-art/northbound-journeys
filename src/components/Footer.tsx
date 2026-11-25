import type { DestinationSlug, PageId } from '../types/travel';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSelectDestination: (destinationId: DestinationSlug) => void;
}

export function Footer({ onNavigate, onSelectDestination }: FooterProps) {
  return (
    <footer className="bg-[#102B25] text-[#F5EBD7] border-t border-[#D6B66F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#F5EBD7]/15">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-block font-display text-2xl tracking-wide text-[#F5EBD7] hover:text-[#D6B66F] transition-colors"
            >
              Northbound Journeys
            </a>
            <p className="font-display italic text-[#D6B66F] text-base">
              Beyond the Ordinary. Into the Extraordinary.
            </p>
            <p className="text-sm text-[#F5EBD7]/75 leading-relaxed max-w-md">
              A luxury Himalayan expedition and bespoke retreat concept crafted for Portfolio Project 03 by SA Crown Web Design. All itineraries, regional guides, and tariffs are illustrative.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider text-[#D6B66F]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F5EBD7]/80">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#D6B66F] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-[#D6B66F] transition-colors cursor-pointer"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('experiences')}
                  className="hover:text-[#D6B66F] transition-colors cursor-pointer"
                >
                  Experiences
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('our-story')}
                  className="hover:text-[#D6B66F] transition-colors cursor-pointer"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('plan-journey')}
                  className="hover:text-[#D6B66F] transition-colors cursor-pointer"
                >
                  Plan Your Journey
                </button>
              </li>
            </ul>
          </div>

          {/* Destinations Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider text-[#D6B66F]">
              Regions
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F5EBD7]/80">
              {(
                [
                  { id: 'kashmir', label: 'Kashmir' },
                  { id: 'ladakh', label: 'Ladakh' },
                  { id: 'himachal', label: 'Himachal' },
                  { id: 'bhutan', label: 'Bhutan' },
                  { id: 'nepal', label: 'Nepal' },
                ] as { id: DestinationSlug; label: string }[]
              ).map((dest) => (
                <li key={dest.id}>
                  <button
                    type="button"
                    onClick={() => onSelectDestination(dest.id)}
                    className="hover:text-[#D6B66F] transition-colors cursor-pointer"
                  >
                    {dest.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Fictional Studio & Concierge Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold tracking-wider text-[#D6B66F]">
              Concept Concierge Desk
            </h3>
            <div className="space-y-2 text-sm text-[#F5EBD7]/80 leading-relaxed">
              <p>Illustrative Studio Address:</p>
              <p className="text-[#F5EBD7]/65">
                14 Cedar Ridge Pavilion, Jor Bagh
                <br />
                New Delhi 110003, India
              </p>
              <p className="pt-1 text-[#F5EBD7]/75">
                concierge@northboundjourneys.example
              </p>
              <p className="text-[#F5EBD7]/65 tabular-nums">+91 11 4000 0303 (Illustrative)</p>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#F5EBD7]/70">
          <p className="font-medium text-[#F5EBD7]/85">
            Northbound Journeys is a fictional travel brand and portfolio concept designed by SA Crown Web Design.
          </p>
          <p className="shrink-0 text-[#D6B66F]/90">
            Portfolio Project 03 · SA Crown Web Design
          </p>
        </div>
      </div>
    </footer>
  );
}
