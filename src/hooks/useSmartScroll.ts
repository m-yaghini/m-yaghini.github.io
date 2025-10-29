import { useCallback } from 'react';
import theme from '../theme';

export const useSmartScroll = (
  setActiveTab: (tab: number) => void,
  homePublications: string[]
) => {
  return useCallback((id: string) => {
    // Check if element exists in current view
    let element = document.getElementById(id);
    
    // If not found, check if it's in home publications list
    if (!element) {
      const isInHomeTab = homePublications.includes(id);
      
      if (!isInHomeTab) {
        // Switch to CV tab (tab index 1)
        setActiveTab(1);
        
        // Wait for tab to render, then scroll
        setTimeout(() => {
          element = document.getElementById(id);
          if (element) {
            performScroll(element);
          }
        }, 150);
        return;
      }
    }
    
    if (element) {
      performScroll(element);
    }
  }, [setActiveTab, homePublications]);
};

function performScroll(element: HTMLElement) {
  // Calculate target position
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight / 2 - element.offsetHeight / 2);

  // Smooth scroll to position
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });

  // Flash animation
  setTimeout(() => {
    const primaryColor = theme.palette.secondary.main;
    const computedStyle = window.getComputedStyle(element);
    const originalBoxShadow = computedStyle.boxShadow;

    element.style.transition = 'outline 0.2s ease, box-shadow 0.2s ease';

    const animationDuration = 1000;
    const flashCount = 1;
    const flashInterval = animationDuration / (flashCount * 2);

    let flashCounter = 0;
    const flashAnimation = setInterval(() => {
      if (flashCounter < flashCount * 2) {
        if (flashCounter % 2 === 0) {
          element.style.outline = `3px solid ${primaryColor}`;
          element.style.outlineOffset = '0px';
          element.style.boxShadow = `0 0 12px ${primaryColor}`;
        } else {
          element.style.outline = '';
          element.style.outlineOffset = '';
          element.style.boxShadow = originalBoxShadow;
        }
        flashCounter++;
      } else {
        clearInterval(flashAnimation);
        element.style.outline = '';
        element.style.boxShadow = '';
        element.style.transition = '';
      }
    }, flashInterval);
  }, 600);
}
