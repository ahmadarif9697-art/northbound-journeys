import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryItem } from '../types/travel';
import { ResilientImage } from './ResilientImage';

interface LightboxModalProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (newIndex: number) => void;
}

export function LightboxModal({
  items,
  activeIndex,
  onClose,
  onChangeIndex,
}: LightboxModalProps) {
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onChangeIndex((activeIndex - 1 + items.length) % items.length);
      } else if (e.key === 'ArrowRight') {
        onChangeIndex((activeIndex + 1) % items.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, items.length, onChangeIndex, onClose]);

  if (activeIndex === null || !items[activeIndex]) return null;

  const currentItem = items[activeIndex];
  const prevIndex = (activeIndex - 1 + items.length) % items.length;
  const nextIndex = (activeIndex + 1) % items.length;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0B1F1B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery preview: ${currentItem.title}`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#102B25] border border-[#D6B66F]/25 rounded-sm overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#F5EBD7]/12 text-[#F5EBD7]">
          <div className="flex items-center gap-2 text-xs text-[#D6B66F] tabular-nums">
            <span>
              {activeIndex + 1} / {items.length}
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-[#F5EBD7]/80">{currentItem.location}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery lightbox"
            className="inline-flex items-center justify-center w-10 h-10 text-[#F5EBD7] hover:text-[#D6B66F] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#D6B66F]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media */}
        <div className="relative bg-[#0B1F1B] aspect-[16/10] max-h-[65vh] w-full overflow-hidden">
          <ResilientImage
            src={currentItem.image}
            alt={currentItem.imageAlt}
            fallbackTitle={currentItem.title}
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
            loading="eager"
          />

          <button
            type="button"
            onClick={() => onChangeIndex(prevIndex)}
            aria-label="Previous photograph"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-sm bg-[#102B25]/80 hover:bg-[#102B25] text-[#F5EBD7] border border-[#F5EBD7]/20 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#D6B66F]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => onChangeIndex(nextIndex)}
            aria-label="Next photograph"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-sm bg-[#102B25]/80 hover:bg-[#102B25] text-[#F5EBD7] border border-[#F5EBD7]/20 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#D6B66F]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption */}
        <div className="px-6 py-5 bg-[#102B25] text-[#F5EBD7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs text-[#D6B66F]">
              {currentItem.category} <span aria-hidden="true">·</span> {currentItem.location}
            </p>
            <h3 className="font-display text-xl text-[#F5EBD7]">{currentItem.title}</h3>
            <p className="text-sm text-[#F5EBD7]/75 max-w-2xl leading-relaxed">
              {currentItem.caption}
            </p>
          </div>
          <div className="text-xs text-[#F5EBD7]/55 shrink-0">
            Use arrow keys or Esc to close
          </div>
        </div>
      </div>
    </div>
  );
}
