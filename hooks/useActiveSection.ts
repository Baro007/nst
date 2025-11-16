
import { useState, useEffect, useRef } from 'react';

export const useActiveSection = (sectionIds: string[]): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect previous observer if it exists
    if (observer.current) {
      observer.current.disconnect();
    }

    // Create a new observer
    observer.current = new IntersectionObserver(
      (entries) => {
        // Find the entry that is intersecting and is highest on the page
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);
        if (intersectingEntries.length > 0) {
          // Sort by position on the page (top to bottom)
          intersectingEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          // The active section is the first one visible from the top
          setActiveSection(intersectingEntries[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -80% 0px', // Trigger when section is in the middle 20% of the viewport
        threshold: 0,
      }
    );

    const currentObserver = observer.current;

    // Observe all the sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    // Cleanup function
    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [sectionIds]); // Rerun if sectionIds change

  return activeSection;
};
