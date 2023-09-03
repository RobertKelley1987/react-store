import { useState } from 'react';
import { albums } from '../../data/albums';
import ShowPage from '../ShowPage';
import AlbumText from './AlbumText';
import { Album, CartAction, MusicProduct } from '../../types';

type MusicShowPageProps = {
    dispatch: React.Dispatch<CartAction>,
    setCartIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const MusicShowPage = ({ dispatch, setCartIsVisible }: MusicShowPageProps) => {
    const [product, setProduct] = useState<Album | null>(null);

    const addToCart = (product: Album, qty: number) => {
        const newItem = { product, qty }
        dispatch({ type: 'ADD_ITEM', payload: newItem });
    }

    return <ShowPage<Album, MusicProduct> 
                data={albums} 
                descText={<AlbumText album={product}/>}
                product={product}
                setProduct={setProduct}
                addToCart={addToCart}
                setCartIsVisible={setCartIsVisible}
            />
}

export default MusicShowPage;