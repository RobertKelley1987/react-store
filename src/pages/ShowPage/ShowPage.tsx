import ImgCarousel from './ImgCarousel';
import Qty from './Qty';
import { Album, Apparel } from '../../types';
import './ShowPage.css';

type ShowPageProps = {
    handleClick: () => void,
    product: Album | Apparel,
    qty: number,
    setQty: React.Dispatch<React.SetStateAction<number>>,
    children?: React.ReactNode
}

const ShowPage = ({ product, qty, setQty, handleClick, children }: ShowPageProps) => {
    return (
        <div className="show-page-product-grid container">
            <ImgCarousel product={product} />
            <div className="show-page-text-wrapper">
                <h2 className="show-page-heading">{`${product.band} "${product.desc}" ${product.productType}`}</h2>
                <span className="show-page-price">${product.price}</span>
                <Qty qty={qty} setQty={setQty} />
                {children}
                <button onClick={handleClick} className="button button-black">ADD TO CART</button>
            </div>
        </div>
    )
}

export default ShowPage;