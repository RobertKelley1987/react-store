import { useState, useEffect } from 'react';

// Hook to add window event listener for a specific screen size.
// Returns boolean indicating whether screen size has been reached and a 
// method to update state.
 
// Paramater "size" is the screen size in px that the window will listen for.
const useScreenIsBig = (size: number) => {
    const [screenIsBig, setScreenIsBig] = useState(true);

    useEffect(() => {
      const mediaQuery = window.matchMedia(`(min-width: ${size}px)`);
      const updateState = () => setScreenIsBig(mediaQuery.matches);

      // Set initial state
      setScreenIsBig(mediaQuery.matches);

      // Update state when query status changes
      mediaQuery.addEventListener('change', updateState);
  
      return () => mediaQuery.removeEventListener('change', updateState);
    }, []);

      return { screenIsBig, setScreenIsBig };
}

export default useScreenIsBig;
