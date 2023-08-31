import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImgCarousel from './ImgCarousel';
import Qty from './Qty';
import StorePath from '../../components/StorePath';
import { Item } from '../../types';
import './ShowPage.css';

type ShowPageProps<T> = {
    handleClick: (product: T, qty: number) => void
    data: T[],
    product: T | null,
    setProduct: React.Dispatch<React.SetStateAction<T | null>>
    sizes?: React.ReactNode,
    descText?: React.ReactNode,
}

function ShowPage<T extends Item<K>, K extends string>(props: ShowPageProps<T>) {
    const { handleClick, sizes, data, descText, product, setProduct } = props
    const [qty, setQty] = useState(1);
    const { itemId } = useParams();
    
    useEffect(() => {
        const foundItem = data.find(item => item.id === itemId);
        if(foundItem) setProduct(foundItem);
    }, [itemId]);

    if(!product) return <p>Error - Product Not Found.</p>;

    return (
        <div className="container">
            <StorePath tail={`${product.artist} "${product.desc}" ${product.productType}`}/>
            <div className="show-page-product-grid">
                <ImgCarousel<T, K> product={product} />
                <div className="show-page-text-wrapper">
                    <h2 className="show-page-heading">{`${product.artist} "${product.desc}" ${product.productType}`}</h2>
                    <span className="show-page-price">${product.price}</span>
                    <Qty qty={qty} setQty={setQty} />
                    {sizes}
                    <button onClick={() => handleClick(product, qty)} className="button button-color  ">
                        ADD TO CART
                    </button>
                    {descText}
                </div>
            </div>
        </div>
    )
}

export default ShowPage;