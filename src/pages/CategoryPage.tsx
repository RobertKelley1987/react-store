import { useState } from 'react';
import usePageNum from '../hooks/usePageNum';
import { paginate } from '../utils';
import { configSortFn } from '../utils/sorting';
import ListPage from './ListPage';
import StorePath from '../components/StorePath';
import ListFilter from './ListFilter';
import SortSelector from './SortSelector';
import { Item, SortOption, Product } from '../types';

type CategoryPageProps<T, K> = {
    items: T[],
    allTypes: K[],
    selectedTypes: K[],
    setSelectedTypes: React.Dispatch<React.SetStateAction<K[]>>
    defaultValue?: K
    collection: string
}

function CategoryPage<T extends Item<K>, K extends string> (props: CategoryPageProps<T, K>) {
    const { items, allTypes, selectedTypes, setSelectedTypes, defaultValue, collection } = props;
    const { pageNum } = usePageNum();
    const [sortOption, setSortOption] = useState<SortOption>('Date - New to Old');

    // Get pages of filtered data
    const filteredItems = () => items.filter(item => selectedTypes.includes(item.productType));
    let currentItems = selectedTypes.length ? filteredItems() : items;

    // Sort by selected sort option
    const sortFn = configSortFn(sortOption);
    currentItems = currentItems.sort(sortFn<T, K>);

    // Paginate results
    const filteredPages = paginate(currentItems);

    return (
        <div className="container category-page">
            <StorePath<K> 
                collection={collection}
                setSelectedTypes={setSelectedTypes}
                defaultValue={defaultValue}
                tail={<span className="store-path-item">{`Page ${pageNum} of ${filteredPages.length}`}</span>}
            />
            <SortSelector sortOption={sortOption} setSortOption={setSortOption} />
            <div className="filtered-list">
                <ListFilter<K> selections={allTypes} productTypes={selectedTypes} setProductTypes={setSelectedTypes} />
                <ListPage pages={filteredPages} pageNum={pageNum} />
            </div>
        </div>
    );
}

export default CategoryPage;