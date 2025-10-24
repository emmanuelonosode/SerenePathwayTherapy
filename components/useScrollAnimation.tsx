
import { useState, useEffect, useRef, RefObject } from 'react';

/**
 * A custom hook that detects when an element is scrolled into view.
 * It uses the Intersection Observer API for performance.
 * @returns A tuple containing the ref to attach to the element and a boolean indicating if it's visible.
 */
export const useScrollAnimation = <T extends HTMLElement>(): [RefObject<T>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the element is intersecting the viewport, set it to visible
                // and stop observing it to prevent re-triggering.
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible.
                rootMargin: '0px 0px -50px 0px' // Adjust the bounding box to trigger a bit earlier.
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        // Cleanup function to unobserve the element when the component unmounts.
        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return [elementRef, isVisible];
};
