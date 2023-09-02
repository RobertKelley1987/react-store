import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImgCarousel from './ImgCarousel';
import Qty from '../../components/Qty';
import StorePath from '../../components/StorePath';
import { MAX_ORDER_QTY } from '../../constants';
import { Item } from '../../types';
import './ShowPage.css';

type ShowPageProps<T> = {
    addToCart: (product: T, qty: number) => void
    data: T[],
    product: T | null,
    setProduct: React.Dispatch<React.SetStateAction<T | null>>
    sizes?: React.ReactNode,
    descText?: React.ReactNode,
}

function ShowPage<T extends Item<K>, K extends string>(props: ShowPageProps<T>) {
    const { addToCart, sizes, data, descText, product, setProduct } = props
    const [qty, setQty] = useState(1);
    const [confirmItemAdded, setConfirmItemAdded] = useState(false);
    const { itemId } = useParams();
    let timeoutId: NodeJS.Timeout;
    
    useEffect(() => {
        const foundItem = data.find(item => item.id === itemId);
        if(foundItem) setProduct(foundItem);
    }, [itemId]);

    useEffect(() => {
        if(confirmItemAdded) {
            timeoutId = setTimeout(() => setConfirmItemAdded(false), 2000);
        }

        return () => clearTimeout(timeoutId);
    }, [confirmItemAdded])

    if(!product) return <p>Error - Product Not Found.</p>;

    const handleClick = () => {
        addToCart(product, qty);
        setConfirmItemAdded(true);
    }

    const increment = () => qty < MAX_ORDER_QTY && setQty(prev => ++prev);
    const decrement = () => qty > 1 && setQty(prev => --prev); // Do nothing if qty is 1 

    return (
        <div className="show-page">
            <StorePath tail={`${product.artist} "${product.desc}" ${product.productType}`}/>
            <div className="show-page-product-grid">
                <ImgCarousel<T, K> product={product} />
                <div className="show-page-text-wrapper">
                    <h2 className="show-page-heading">{`${product.artist} "${product.desc}" ${product.productType}`}</h2>
                    <span className="show-page-price">${product.price}</span>
                    {sizes}
                    <Qty size="large" qty={qty} inc={increment} dec={decrement} displayHeading={true} />
                    <button 
                        onClick={() => handleClick()} 
                        className="button button-black show-page-cart-button"
                    >
                        {confirmItemAdded ? "ITEM ADDED!" : "ADD TO CART"}
                    </button>
                    {descText}
                </div>
            </div>
        </div>
    )
}

export default ShowPage;