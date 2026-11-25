import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { PageId } from '../types/travel';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  isOverHero?: boolean;
}

const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'our-story', label: 'Our Story' },
];

export function Navbar({ currentPage, onNavigate, isOverHero = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const useTransparentHeader = isOverHero && !scrolled && !mobileOpen;

  const handleLinkClick = (page: PageId) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        useTransparentHeader
          ? 'bg-[#102B25]/45 backdrop-blur-md border-b border-[#F5EBD7]/15 text-[#F5EBD7]'
          : 'bg-[#102B25]/96 backdrop-blur-md border-b border-[#D6B66F]/20 text-[#F5EBD7]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="font-display text-lg sm:text-xl tracking-wide font-semibold text-[#F5EBD7] hover:text-[#D6B66F] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6B66F]"
        >
          Northbound Journeys
        </a>

        {/* Zone 2: Clean single-line text links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              currentPage === link.id ||
              (currentPage === 'journey-details' && link.id === 'experiences');
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6B66F] ${
                  isActive
                    ? 'text-[#D6B66F]'
                    : 'text-[#F5EBD7]/85 hover:text-[#F5EBD7]'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-px bg-[#D6B66F] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single primary action + mobile drawer trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('plan-journey')}
            className={`hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-sm transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6B66F] ${
              currentPage === 'plan-journey'
                ? 'bg-[#F5EBD7] text-[#102B25]'
                : 'bg-[#D6B66F] text-[#102B25] hover:bg-[#C4A154]'
            }`}
          >
            Plan Your Journey
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#F5EBD7] hover:text-[#D6B66F] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#D6B66F]"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#102B25] border-t border-[#D6B66F]/20 px-4 py-6 space-y-2 shadow-2xl"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-3 text-base font-medium rounded-sm transition-colors ${
                    isActive
                      ? 'text-[#D6B66F] bg-[#1B3D35]/60'
                      : 'text-[#F5EBD7]/90 hover:text-[#F5EBD7] hover:bg-[#1B3D35]/35'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-[#F5EBD7]/15">
            <button
              type="button"
              onClick={() => handleLinkClick('plan-journey')}
              className="w-full py-3 px-5 bg-[#D6B66F] text-[#102B25] font-medium text-sm rounded-sm hover:bg-[#C4A154] transition-colors cursor-pointer"
            >
              Plan Your Journey
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
