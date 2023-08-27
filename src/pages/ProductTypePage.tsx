import { useParams } from 'react-router-dom';
import usePageNum from '../hooks/usePageNum';
import { decodeHttpSlug, paginate } from '../utils';
import { Apparel } from '../types';
import ListPage from './ListPage';
import StorePath from '../components/StorePath';

type ApparelByCategory = {
    tShirts: Apparel[],
    longsleeves: Apparel[],
    hoodies: Apparel[]
}

type ProductTypePageProps = {
    items: ApparelByCategory
}

const getProductTypeItems = (data: ApparelByCategory, name: string | undefined) => {
    let items = null;

    switch(name) {
        case 't-shirts':
            items = data.tShirts;
            break;
        case 'longsleeves':
            items = data.longsleeves;
            break;
        case 'hoodies':
            items = data.hoodies;
            break; 
    }

    return items;
}

const ProductTypePage = ({ items }: ProductTypePageProps) => {
    const { collectionName } = useParams();
    const productTypeItems = getProductTypeItems(items, collectionName) || [];
    const pages = paginate(productTypeItems);
    const { pageNum } = usePageNum();

    return (
        <div className="container product-type-page">
            <StorePath tail={<span className="store-path-item">{`Page ${pageNum} of ${pages.length}`}</span>} />
            <ListPage pages={pages} pageNum={pageNum} />
        </div>
    );
}

export default ProductTypePage;