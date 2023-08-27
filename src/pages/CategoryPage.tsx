import { useLocation } from 'react-router-dom';
import usePageNum from '../hooks/usePageNum';
import { paginate } from '../utils';
import { Item } from '../types';
import ListPage from './ListPage';
import StorePath from './StorePath';
import ListFilter from './ListFilter';

const PGS_WITH_FILTERS = ["New Merch", "New Music"];

type CategoryPageProps<T, K> = {
    items: T[],
    allTypes: K[],
    pageName: string,
    selectedTypes: K[],
    setSelectedTypes: React.Dispatch<React.SetStateAction<K[]>>
}

function CategoryPage<T extends Item<K>, K extends string> ({ items, allTypes, pageName, selectedTypes, setSelectedTypes }: CategoryPageProps<T, K>) {
    const location = useLocation();
    const { pageNum } = usePageNum();

    // Get pages of filtered data
    const filteredItems = () => items.filter(item => selectedTypes.includes(item.productType));
    const currentItems = selectedTypes.length ? filteredItems() : items;
    const filteredPages = paginate(currentItems);

    const renderListFilter = () => {
        return <ListFilter<K> selections={allTypes} productTypes={selectedTypes} setProductTypes={setSelectedTypes}/>;
    }

    return (
        <div className="container apparel-page">
            <StorePath 
                currentStorePath={location.pathname}
                currentStoreName={pageName}
                tail={<span className="store-path-item">{`Page ${pageNum} of ${filteredPages.length}`}</span>}
            />
            <div className="filtered-list">
                {PGS_WITH_FILTERS.includes(pageName) && renderListFilter()}
                <ListPage pages={filteredPages} pageNum={pageNum} currentPath={location.pathname}/>
            </div>
        </div>
    );
}

export default CategoryPage;