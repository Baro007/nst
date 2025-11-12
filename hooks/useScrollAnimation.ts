import { useState, useEffect, useRef, RefObject } from 'react';

/**
 * A custom hook to detect when an element is scrolled into view.
 * It uses the IntersectionObserver API for performance.
 * @returns A ref to attach to the element and a boolean indicating visibility.
 */
export const useScrollAnimation = <T extends HTMLElement>(): { ref: RefObject<T>; isVisible: boolean } => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state to true when element is intersecting
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it's visible to avoid re-triggering
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return { ref, isVisible };
};
