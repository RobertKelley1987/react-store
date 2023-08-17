import { useParams } from 'react-router-dom';
import { data } from '../data'; 
import ImgCarousel from './ImgCarousel';
import './ShowPage.css';

const ShowPage = () => {
    const { productId } = useParams();
    const product = data.find(product => product.id === productId);

    return (
        <div className="show-page-product-grid">
            <ImgCarousel images={product?.imgs} productType={product?.productType} />
        </div>
    )
}

export default ShowPage;