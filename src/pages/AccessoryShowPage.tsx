import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { accessories } from '../data/accessories';
import ShowPage from './ShowPage';
import ClothingData from '../components/ClothingData';
import { Accessory, CartAction, AccessoryProduct } from '../types';

type AccessoryShowPageProps = {
    dispatch: React.Dispatch<CartAction>,
    setCartIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const AccessoryShowPage = ({ dispatch, setCartIsVisible }: AccessoryShowPageProps) => {
    const [product, setProduct] = useState<Accessory | null>(null);
    const location = useLocation();

    const addToCart = (product: Accessory, qty: number) => {
        const newItem = { product, qty, link: location.pathname }
        dispatch({ type: 'ADD_ITEM', payload: newItem });
    }

    const isHat = (item: Accessory | null) => item?.productType === 'Cap' || item?.productType === 'Beanie';

    const descText = isHat(product) ? <ClothingData item={product} /> : <p>{product?.accessoryDesc}</p>; 

    return <ShowPage<Accessory, AccessoryProduct> 
                data={accessories} 
                product={product}
                setProduct={setProduct}
                addToCart={addToCart}
                setCartIsVisible={setCartIsVisible}
                descText={descText}
            />
}

export default AccessoryShowPage;