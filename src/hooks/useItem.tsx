import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Category } from '../types';

type ItemState<T> = { item: T | null, errorMessage: string, isLoading: boolean }

function useItem<T> (category: Category): ItemState<T>  {
    const [item, setItem] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { itemId } = useParams();

    useEffect(() => {
        const categorySlug = category.toLowerCase();
        const findItem = async () => {
            const { data: { item, error } } = await axios.get(`/${categorySlug}/products/${itemId}`);
            if(error) {
                setErrorMessage('Server error: Please try again later.');
            } else {
                setItem(item);
            }
            setIsLoading(false);
        }

        setIsLoading(true);
        findItem();
    }, [itemId, setItem]);

    return { item, errorMessage, isLoading }
}


export default useItem;