import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../data';
import ImgCarousel from './ImgCarousel';
import Qty from './Qty';
import Sizes from './Sizes';
import AlbumText from './AlbumText';
import StorePath from '../../components/StorePath';
import { CartAction, Apparel, Size, Item, Product } from '../../types';
import './ShowPage.css';

type ShowPageProps = {
    dispatch: React.Dispatch<CartAction>,
    sizes?: React.ReactNode
}

const ShowPage = ({ dispatch, sizes }: ShowPageProps) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedSize, setSelectedSize] = useState<Size>('Small');
    const [qty, setQty] = useState(1);
    const { itemId } = useParams();
    
    useEffect(() => {
        const foundItem = data.find(item => item.id === itemId);
        if(foundItem) setProduct(foundItem);
    }, [itemId]);

    console.log(product);

    if(!product) return <p>Error - Product Not Found.</p>;

    const handleClick = () => {
        const newItem = { product, qty, size: selectedSize }
        dispatch({ type: 'ADD_ITEM', payload: newItem });
    }

    return (
        <div className="container">
            <StorePath tail={`${product.artist} "${product.desc}" ${product.productType}`}/>
            <div className="show-page-product-grid">
                <ImgCarousel product={product} />
                <div className="show-page-text-wrapper">
                    <h2 className="show-page-heading">{`${product.artist} "${product.desc}" ${product.productType}`}</h2>
                    <span className="show-page-price">${product.price}</span>
                    <Qty qty={qty} setQty={setQty} />
                    {product.category === 'Apparel' && <Sizes selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>}
                    <button onClick={handleClick} className="button button-black">ADD TO CART</button>
                    {product.category === 'Music' && <AlbumText item={product}/>}
                </div>
            </div>
        </div>
    )
}

export default ShowPage;