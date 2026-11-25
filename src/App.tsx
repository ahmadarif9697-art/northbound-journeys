import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { Navbar } from './components/Navbar';
import { DESTINATIONS, EXPERIENCES, GALLERY_ITEMS } from './data/journeys';
import { DestinationsPage } from './pages/DestinationsPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { HomePage } from './pages/HomePage';
import { JourneyDetailsPage } from './pages/JourneyDetailsPage';
import { OurStoryPage } from './pages/OurStoryPage';
import { PlanJourneyPage } from './pages/PlanJourneyPage';
import type { DestinationSlug, Experience, PageId } from './types/travel';

interface PlannerPrefill {
  destination?: string;
  travelStyle?: string;
  journeyReference?: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedExperienceId, setSelectedExperienceId] = useState<string>(
    EXPERIENCES[0].id
  );
  const [selectedDestinationHighlight, setSelectedDestinationHighlight] =
    useState<DestinationSlug | null>(null);
  const [experiencesDestinationFilter, setExperiencesDestinationFilter] =
    useState<DestinationSlug | 'all'>('all');
  const [plannerPrefill, setPlannerPrefill] = useState<PlannerPrefill | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const navigateTo = useCallback((page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (
        hash === 'home' ||
        hash === 'destinations' ||
        hash === 'experiences' ||
        hash === 'our-story' ||
        hash === 'plan-journey'
      ) {
        setCurrentPage(hash);
      }
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const handleSelectDestination = (destinationId: DestinationSlug) => {
    setSelectedDestinationHighlight(destinationId);
    setCurrentPage('destinations');
    window.setTimeout(() => {
      const el = document.getElementById(`dest-${destinationId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  const handleFilterExperiencesByDestination = (destinationId: DestinationSlug) => {
    setExperiencesDestinationFilter(destinationId);
    navigateTo('experiences');
  };

  const handleSelectExperience = (experienceId: string) => {
    setSelectedExperienceId(experienceId);
    navigateTo('journey-details');
  };

  const handlePlanJourneyForExperience = (experienceId: string) => {
    const exp = EXPERIENCES.find((item) => item.id === experienceId);
    if (exp) {
      const dest = DESTINATIONS.find((d) => d.id === exp.destinationId);
      setPlannerPrefill({
        destination: dest?.name || exp.destinationName,
        travelStyle: exp.category,
        journeyReference: exp.title,
      });
    }
    navigateTo('plan-journey');
  };

  const handlePlanThisJourney = (experience: Experience) => {
    setPlannerPrefill({
      destination: experience.destinationName,
      travelStyle: experience.category,
      journeyReference: experience.title,
    });
    navigateTo('plan-journey');
  };

  const handleTopNavNavigate = (page: PageId) => {
    if (page === 'experiences') {
      setExperiencesDestinationFilter('all');
    }
    if (page === 'destinations') {
      setSelectedDestinationHighlight(null);
    }
    if (page === 'plan-journey') {
      setPlannerPrefill(null);
    }
    navigateTo(page);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#202522] overflow-x-clip">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleTopNavNavigate}
        isOverHero={currentPage === 'home' || currentPage === 'journey-details'}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleTopNavNavigate}
            onSelectDestination={handleSelectDestination}
            onSelectExperience={handleSelectExperience}
            onOpenGallery={(index) => setLightboxIndex(index)}
          />
        )}

        {currentPage === 'destinations' && (
          <DestinationsPage
            initialDestination={selectedDestinationHighlight}
            onSelectExperience={handleSelectExperience}
            onFilterExperiencesByDestination={handleFilterExperiencesByDestination}
            onNavigate={handleTopNavNavigate}
          />
        )}

        {currentPage === 'experiences' && (
          <ExperiencesPage
            key={experiencesDestinationFilter}
            initialDestinationFilter={experiencesDestinationFilter}
            onSelectExperience={handleSelectExperience}
            onPlanJourneyForExperience={handlePlanJourneyForExperience}
          />
        )}

        {currentPage === 'journey-details' && (
          <JourneyDetailsPage
            experienceId={selectedExperienceId}
            onBack={() => navigateTo('experiences')}
            onPlanThisJourney={handlePlanThisJourney}
            onSelectExperience={handleSelectExperience}
            onNavigate={handleTopNavNavigate}
          />
        )}

        {currentPage === 'our-story' && (
          <OurStoryPage onNavigate={handleTopNavNavigate} />
        )}

        {currentPage === 'plan-journey' && (
          <PlanJourneyPage
            prefill={plannerPrefill}
            onNavigate={handleTopNavNavigate}
          />
        )}
      </main>

      <Footer
        onNavigate={handleTopNavNavigate}
        onSelectDestination={handleSelectDestination}
      />

      <LightboxModal
        items={GALLERY_ITEMS}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
