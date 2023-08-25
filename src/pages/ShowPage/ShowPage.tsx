import ImgCarousel from './ImgCarousel';
import Qty from './Qty';
import { Album, Apparel } from '../../types';
import './ShowPage.css';

type ShowPageProps = {
    handleClick: () => void,
    product: Album | Apparel,
    qty: number,
    setQty: React.Dispatch<React.SetStateAction<number>>,
    desc?: string[],
    tracklist?: string[]
    children?: React.ReactNode
}

const formatTrackNum = (trackNum: number) => trackNum < 10 ? `0${trackNum}` : trackNum;

const ShowPage = ({ product, qty, setQty, handleClick, desc, tracklist, children }: ShowPageProps) => {

    const renderDescription = () => desc && <article>{desc.map(paragraph => <p>{paragraph}</p>)}</article>;

    const renderTrackList = () => {
        if(tracklist) {
            return (
                <div>
                    <h3>Tracklist</h3>
                    <ul>{tracklist.map((track, index) => <li>{`${formatTrackNum(index + 1)}. ${track}`}</li>)}</ul>
                </div>
            );
        }
    }

    return (
        <div className="show-page-product-grid container">
            <ImgCarousel product={product} />
            <div className="show-page-text-wrapper">
                <h2 className="show-page-heading">{`${product.band} "${product.desc}" ${product.productType}`}</h2>
                <span className="show-page-price">${product.price}</span>
                <Qty qty={qty} setQty={setQty} />
                {children}
                <button onClick={handleClick} className="button button-black">ADD TO CART</button>
                <div>
                    {renderDescription()}
                    {renderTrackList()}
                </div>
            </div>
        </div>
    )
}

export default ShowPage;