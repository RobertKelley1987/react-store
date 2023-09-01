import { useState } from 'react';
import { apparel } from '../../data/apparel';
import ShowPage from "../ShowPage";
import Sizes from './Sizes';
import { CartAction, Size, Apparel, ApparelProduct } from '../../types';

type ApparelShowPageProps = {
    dispatch: React.Dispatch<CartAction>
}

const ApparelShowPage = ({ dispatch }: ApparelShowPageProps) => {
    const [product, setProduct] = useState<Apparel | null>(null);
    const [selectedSize, setSelectedSize] = useState<Size>('Small');

    const addToCart = (product: Apparel, qty: number) => {
        const newItem = { product, qty, size: selectedSize }
        dispatch({ type: 'ADD_ITEM', payload: newItem });
    }

    return <ShowPage<Apparel, ApparelProduct> 
                addToCart={addToCart}
                sizes={<Sizes selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>}
                data={apparel}
                product={product}
                setProduct={setProduct}
            />
}

export default ApparelShowPage;