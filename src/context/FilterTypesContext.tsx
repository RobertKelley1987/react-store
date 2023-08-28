import { createContext } from 'react';
import { } from '../types'

type FilterTypesContextType<T> = {
    selectedTypes: T[]
    setSelectedTypes: React.Dispatch<React.SetStateAction<T[]>>
}

export function createFilterTypesContext<T>() { return createContext<FilterTypesContextType<T> | null>(null) }