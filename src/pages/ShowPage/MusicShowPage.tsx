import { useState } from 'react';
import { albums } from '../../data/albums';
import ShowPage from '.';
import AlbumText from './AlbumText';
import { Album, CartAction, MusicProduct } from '../../types';

type MusicShowPageProps = {
    dispatch: React.Dispatch<CartAction>
}

const MusicShowPage = ({ dispatch }: MusicShowPageProps) => {
    const [product, setProduct] = useState<Album | null>(null);

    const handleClick = (product: Album, qty: number) => {
        const newItem = { product, qty }
        dispatch({ type: 'ADD_ITEM', payload: newItem });
    }

    return <ShowPage<Album, MusicProduct> 
                data={albums} 
                descText={<AlbumText album={product}/>}
                product={product}
                setProduct={setProduct}
                handleClick={handleClick}
            />
}

export default MusicShowPage;