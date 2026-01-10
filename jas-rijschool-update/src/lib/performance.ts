/**
 * Performance utilities for JAS-Rijschool
 */

/**
 * Preloads critical images for faster LCP (Largest Contentful Paint)
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preloads multiple images in parallel
 */
export const preloadImages = async (sources: string[]): Promise<void> => {
  await Promise.all(sources.map(preloadImage));
};
