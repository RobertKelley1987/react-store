import { useState, useEffect } from 'react';

// Hook to add window event listener for a specific screen size.
// Returns boolean indicating whether screen size has been reached and a 
// method to update state.
 
// Paramater "size" is the screen size in px that the window will listen for.
const useScreenIsBig = (size: number) => {
    const [screenIsBig, setScreenIsBig] = useState(true);

    useEffect(() => {
        const updateState = (e: MediaQueryListEvent ) => setScreenIsBig(e.matches);
        const mediaQuery = window.matchMedia(`(min-width: ${size}px)`);
        mediaQuery.addEventListener('change', updateState);
    
        return () => mediaQuery.removeEventListener('change', updateState);
      }, []);

      return { screenIsBig, setScreenIsBig }
}

export default useScreenIsBig;
