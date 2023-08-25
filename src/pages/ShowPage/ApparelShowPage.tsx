import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { apparel } from '../../data/apparel';
import ShowPage from './ShowPage';
import Sizes from './Sizes';
import { ErrorMessageContext } from '../../context/ErrorMessageContext';
import { Size, CartAction, Apparel } from '../../types';

type ApparelShowPageProps = {
    dispatch: React.Dispatch<CartAction>
}

const ApparelShowPage = ({ dispatch }: ApparelShowPageProps) => {
    const [product, setProduct] = useState<Apparel | null>(null);
    const [selectedSize, setSelectedSize] = useState<Size | ''>('');
    const [qty, setQty] = useState(1);
    const errorContext = useContext(ErrorMessageContext);
    const { apparelId } = useParams();
    
    useEffect(() => {
        const foundApparel = apparel.find(apparel => apparel.id === apparelId);
        if(foundApparel) setProduct(foundApparel);
    }, [apparelId])


    if(!product) return <p>Error - Product Not Found.</p>;

    const handleClick = () => {
        if(!selectedSize) {
            errorContext?.setErrorMessage('Please select a size.');
        } else {
            const newItem = { product, qty, size: selectedSize }
            dispatch({ type: 'ADD_ITEM', payload: newItem });
        }
    }

    return (
        <ShowPage 
            handleClick={handleClick} 
            product={product} 
            qty={qty}
            setQty={setQty}
        >
            <Sizes selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
        </ShowPage>
    )
}

export default ApparelShowPage;