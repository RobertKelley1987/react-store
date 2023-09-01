import { useState, useEffect } from 'react';
import usePageNum from '../hooks/usePageNum';
import { paginate } from '../utils';
import { configSortFn } from '../utils/sorting';
import StorePath from "../components/StorePath"; 
import SortSelector from './SortSelector';
import ListGrid from './ListGrid';
import { Item, SortOption } from "../types";
import './CollectionPage.css';

type CollectionPageProps<T> = {
    items: T[],
    collection: string,
    filter?: React.ReactNode, // Sidebar filter
    banner?: React.ReactNode, // Artist banner
}

function CollectionPage<T extends Item<K>, K extends string>(props: CollectionPageProps<T>) {
    const { items, collection, filter, banner } = props;
    const { pageNum } = usePageNum();
    const [sortOption, setSortOption] = useState<SortOption>('Date - New to Old');

    // Sort by user selected sort option
    const sortFn = configSortFn(sortOption);
    items.sort(sortFn<T, K>);

    // Paginate results
    const pages = paginate(items);

    useEffect(() => {
        setSortOption('Date - New to Old');
    }, []);

    return (
        <div className="collection-page">
            {banner}
            <StorePath 
                collection={collection}
                tail={<span className="store-path-item">{`Page ${pageNum} of ${pages.length}`}</span>}
            />
            <SortSelector sortOption={sortOption} setSortOption={setSortOption} />
            <div className="collection-page-list">
                {filter}
                <ListGrid pages={pages} pageNum={pageNum} srcPg={collection} />
            </div>
        </div>
    );
}

export default CollectionPage;