import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { albums } from '../../data/albums'; 
import { MusicCartAction, Album } from '../../types';
import ShowPage from './ShowPage';

type AlbumShowPageProps = {
    dispatch: React.Dispatch<MusicCartAction>
}

const AlbumShowPage = ({ dispatch }: AlbumShowPageProps) => {
    const [product, setProduct] = useState<Album | null>(null);
    const [qty, setQty] = useState(1);
    const { albumId } = useParams();
    
    useEffect(() => {
        const album = albums.find(album => album.id === albumId);
        if(album) setProduct(album);
    }, [albumId])


    if(!product) return <p>Error - Product Not Found.</p>;

    const handleClick = () => {
        const newItem = { product, qty }
        dispatch({ type: 'ADD_ALBUM', payload: newItem });
    }

    return <ShowPage handleClick={handleClick} product={product} qty={qty} setQty={setQty} desc={product.albumDesc}/>
}

export default AlbumShowPage;