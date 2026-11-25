import { useState } from 'react';
import { Mountain } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  fallbackTitle,
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#102B25] via-[#173B33] to-[#202522] text-[#F5EBD7] p-6 text-center select-none ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <Mountain className="w-8 h-8 text-[#D6B66F] mb-3 opacity-80" strokeWidth={1.3} aria-hidden="true" />
        <p className="font-display text-base tracking-wide text-[#F5EBD7]/90">
          {fallbackTitle || 'Northbound Journeys'}
        </p>
        <p className="text-xs text-[#F5EBD7]/60 mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
