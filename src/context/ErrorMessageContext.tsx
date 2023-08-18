import { createContext } from 'react';

export type ErrorMessageContextType = {
    errorMessage: string,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

export const ErrorMessageContext = createContext<ErrorMessageContextType | null>(null);



