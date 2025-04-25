import { useState, useEffect } from 'react';

/**
 * Hook for handling image slideshow
 * @param images Array of image URLs
 * @param interval Time in ms between image changes
 * @returns Current image URL and index
 */
export const useSlideshow = (images: string[], interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);
  
  return {
    currentImage: images[currentIndex],
    currentIndex,
  };
};

/**
 * Hook for handling fade-in animation on scroll
 * @param threshold Threshold value for intersection observer
 * @returns InView status and ref
 */
export const useFadeInOnScroll = (threshold = 0.1) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    
    observer.observe(ref);
    
    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);
  
  return { ref: setRef, inView };
}; 