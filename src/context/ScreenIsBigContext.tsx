import { createContext, useState, useEffect } from 'react';
import useScreenIsBig from '../hooks/useScreenIsBig';

type ScreenIsBigContextType = {
    screenIsBig: boolean,
    setScreenIsBig: React.Dispatch<React.SetStateAction<boolean>>
}

export const ScreenIsBigContext = createContext<ScreenIsBigContextType | null>(null);

type ScreenIsBigContextProviderProps = {
    children: React.ReactNode
}

export const ScreenIsBigContextProvider = ({ children }: ScreenIsBigContextProviderProps ) => {
    const { screenIsBig, setScreenIsBig } = useScreenIsBig(800);

    return (
        <ScreenIsBigContext.Provider value={{ screenIsBig, setScreenIsBig }}>
            {children}
        </ScreenIsBigContext.Provider>
    )
}