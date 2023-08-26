import { useLocation } from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import { paginate } from '../utils';
import { Apparel, ApparelProduct } from '../types';
import ListPage from './ListPage';
import StorePath from './StorePath';


type ProductTypePageProps = {
    items: Apparel[],
    pageName: string
}

const ProductTypePage = ({ items, pageName }: ProductTypePageProps) => {
    const location = useLocation();
    const pages = paginate(items);

    // Get page number 
    const query = useQuery();
    const pageNumQuery = query.get('page') || '1';
    const pageNum = parseInt(pageNumQuery);

    return (
        <div className="container product-type-page">
            <StorePath 
                currentStorePath={location.pathname}
                currentStoreName={pageName}
                currentPageNum={pageNum}
                pageNumTotal={pages.length} 
            />
            <ListPage pages={pages} pageNum={pageNum} currentPath={location.pathname}/>
        </div>
    );
}

export default ProductTypePage;