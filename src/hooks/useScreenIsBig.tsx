import { useState, useEffect } from 'react';

const useScreenIsBig = () => {
    const [screenIsBig, setScreenIsBig] = useState(true);

    useEffect(() => {
        const openSection = (e: MediaQueryListEvent ) => setScreenIsBig(e.matches);
        const mediaQuery = window.matchMedia('(min-width: 700px)');
        mediaQuery.addEventListener('change', openSection);
    
        return () => mediaQuery.removeEventListener('change', openSection);
      }, []);

      return { screenIsBig }
}

export default useScreenIsBig;
