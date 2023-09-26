import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { apparel } from '../../data/apparel';
import ShowPage from "../ShowPage";
import Sizes from './Sizes';
import ClothingData from '../../components/ClothingData';
import { CartAction, Size, Apparel, ApparelProduct } from '../../types';

type ApparelShowPageProps = {
    dispatch: React.Dispatch<CartAction>,
    setCartIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ApparelShowPage = ({ dispatch, setCartIsVisible }: ApparelShowPageProps) => {
    const [product, setProduct] = useState<Apparel | null>(null);
    const [selectedSize, setSelectedSize] = useState<Size>('Small');
    const location = useLocation();

    const addToCart = (product: Apparel, qty: number) => {
        const newItem = { product, qty, size: selectedSize, link: location.pathname }
        dispatch({ type: 'ADD_ITEM', payload: newItem });
    }

    return <ShowPage<Apparel, ApparelProduct> 
                addToCart={addToCart}
                sizes={<Sizes selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>}
                data={apparel}
                product={product}
                setProduct={setProduct}
                setCartIsVisible={setCartIsVisible}
                descText={<ClothingData item={product} />}
            />
}

export default ApparelShowPage;