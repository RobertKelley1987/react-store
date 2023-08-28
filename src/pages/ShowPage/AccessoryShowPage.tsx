import { useState } from 'react';
import { accessories } from '../../data/accessories';
import ShowPage from '.';
import { Accessory, CartAction, AccessoryProduct } from '../../types';

type AccessoryShowPageProps = {
    dispatch: React.Dispatch<CartAction>
}

const AccessoryShowPage = ({ dispatch }: AccessoryShowPageProps) => {
    const [product, setProduct] = useState<Accessory | null>(null);

    const handleClick = (product: Accessory, qty: number) => {
        const newItem = { product, qty }
        dispatch({ type: 'ADD_ITEM', payload: newItem });
    }

    return <ShowPage<Accessory, AccessoryProduct> 
                data={accessories} 
                descText={<p>{product?.accessoryDesc}</p>}
                product={product}
                setProduct={setProduct}
                handleClick={handleClick}
            />
}

export default AccessoryShowPage;