import { useLocation, useParams } from 'react-router-dom';
import usePageNum from '../hooks/usePageNum';
import { paginate } from '../utils';
import { Apparel, ApparelProduct } from '../types';
import ListPage from './ListPage';
import StorePath from './StorePath';

type ApparelByCategory = {
    tShirts: Apparel[],
    longsleeves: Apparel[],
    hoodies: Apparel[]
}

type ProductTypePageProps = {
    items: ApparelByCategory,
    pageName: string
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

const ProductTypePage = ({ items, pageName }: ProductTypePageProps) => {
    const location = useLocation();
    const { productType } = useParams();
    const productTypeItems = getProductTypeItems(items, productType) || [];
    const pages = paginate(productTypeItems);
    const { pageNum } = usePageNum();

    return (
        <div className="container product-type-page">
            <StorePath 
                currentStorePath={location.pathname}
                currentStoreName={pageName}
                tail={<span className="store-path-item">{`Page ${pageNum} of ${pages.length}`}</span>}
            />
            <ListPage pages={pages} pageNum={pageNum} currentPath={location.pathname}/>
        </div>
    );
}

export default ProductTypePage;