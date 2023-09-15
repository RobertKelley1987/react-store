import { createContext, useState, useEffect } from 'react';

type ScreenIsBigContextType = {
    screenIsBig: boolean,
    setScreenIsBig: React.Dispatch<React.SetStateAction<boolean>>
}

export const ScreenIsBigContext = createContext<ScreenIsBigContextType | null>(null);

type ScreenIsBigContextProviderProps = {
    children: React.ReactNode
}

export const ScreenIsBigContextProvider = ({ children }: ScreenIsBigContextProviderProps ) => {
    const [screenIsBig, setScreenIsBig] = useState(true);

    useEffect(() => {
        const openSection = (e: MediaQueryListEvent ) => setScreenIsBig(e.matches);
        const mediaQuery = window.matchMedia('(min-width: 800px)');
        mediaQuery.addEventListener('change', openSection);
    
        return () => mediaQuery.removeEventListener('change', openSection);
      }, []);

    return (
        <ScreenIsBigContext.Provider value={{ screenIsBig, setScreenIsBig }}>
            {children}
        </ScreenIsBigContext.Provider>
    )
}