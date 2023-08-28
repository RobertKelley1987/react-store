import { useEffect } from 'react';
import CollectionPage from './CollectionPage';
import ListFilter from './ListFilter';
import { Item } from '../types';

type ProductFilterPageProps<T, K> = {
    items: T[],
    allTypes: K[],
    defaultValue?: K
    collection: string,
    selectedTypes: K[],
    setSelectedTypes: React.Dispatch<React.SetStateAction<K[]>>
}

function ProductFilterPage<T extends Item<K>, K extends string> (props: ProductFilterPageProps<T, K>) {
    const { items, allTypes, selectedTypes, setSelectedTypes, defaultValue, collection } = props;

    // Filter data based on user selected options in sidebar
    const filterItems = () => items.filter(item => selectedTypes.includes(item.productType));
    const filteredItems = selectedTypes.length ? filterItems() : items;

    useEffect(() => {
        if(defaultValue) {
            setSelectedTypes([defaultValue]);
        } else {
            setSelectedTypes([]);
        }
    }, [defaultValue, setSelectedTypes]);

    return (
        <CollectionPage<T, K>
            items={filteredItems}
            collection={collection}
            filter={
                <ListFilter<K> 
                    selections={allTypes} 
                    productTypes={selectedTypes} 
                    setProductTypes={setSelectedTypes} 
                />
            }
        />
    )
}

export default ProductFilterPage;