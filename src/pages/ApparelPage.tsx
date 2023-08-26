import { useLocation } from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import { paginate } from '../utils';
import { Apparel, ApparelProduct } from '../types';
import ListPage from './ListPage';
import StorePath from './StorePath';
import ListFilter from './ListFilter';

const APPAREL_TYPES: ApparelProduct[] = ['T-Shirt', 'Longsleeve', 'Hoodie'];

type ApparelPageProps = {
    items: Apparel[],
    pageName: string,
    apparelTypes: ApparelProduct[],
    setApparelTypes: React.Dispatch<React.SetStateAction<ApparelProduct[]>>
}

const ApparelPage = ({ items, pageName, apparelTypes, setApparelTypes }: ApparelPageProps) => {
    const location = useLocation();

    // Get pages of filtered data
    const filteredItems = () => items.filter(item => apparelTypes.includes(item.productType));
    const currentItems = apparelTypes.length ? filteredItems() : items;
    const filteredPages = paginate(currentItems);

    // Get page number 
    const query = useQuery();
    const pageNumQuery = query.get('page') || '1';
    const pageNum = parseInt(pageNumQuery);

    const renderListFilter = () => {
        return <ListFilter selections={APPAREL_TYPES} productTypes={apparelTypes} setProductTypes={setApparelTypes}/>;
    }

    return (
        <div className="container apparel-page">
            <StorePath 
                currentStorePath={location.pathname}
                currentStoreName={pageName}
                currentPageNum={pageNum}
                pageNumTotal={filteredPages.length} 
                setProductTypes={setApparelTypes}
            />
            <div className="filtered-list">
                {pageName === 'New Merch' && renderListFilter()}
                <ListPage pages={filteredPages} pageNum={pageNum} currentPath={location.pathname}/>
            </div>
        </div>
    );
}

export default ApparelPage;