import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
}

/**
 * Optimized image component with:
 * - Lazy loading (unless priority)
 * - Blur placeholder effect
 * - Intersection Observer for better performance
 */
const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false,
  aspectRatio,
  objectFit = 'cover',
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const objectFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
  }[objectFit];

  return (
    <div
      ref={imgRef}
      className={cn(
        'relative overflow-hidden bg-muted',
        aspectRatio,
        className
      )}
    >
      {/* Blur placeholder */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 transition-opacity duration-500',
          isLoaded ? 'opacity-0' : 'opacity-100'
        )}
      />
      
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            'w-full h-full transition-opacity duration-500',
            objectFitClass,
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
    </div>
  );
};

export { OptimizedImage };
