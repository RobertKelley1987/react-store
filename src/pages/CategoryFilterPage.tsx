import CollectionPage from './CollectionPage';
import ListFilter from './ListFilter';
import { Product, Category } from '../types';

type CategoryFilterPageProps<T> = {
    items: T[],
    allTypes: Category[],
    collection: string,
    banner?: React.ReactNode
    selectedCategories: Category[],
    setSelectedCategories: React.Dispatch<React.SetStateAction<Category[]>>
}

function CategoryFilterPage<T extends Product> (props: CategoryFilterPageProps<T>) {
    const { 
        items, 
        allTypes, 
        collection, 
        banner, 
        selectedCategories, 
        setSelectedCategories,
    } = props;

    // Filter data based on user selected options in sidebar
    const filterItems = () => items.filter(item => selectedCategories.includes(item.category));
    const filteredItems = selectedCategories.length ? filterItems() : items;

    return <CollectionPage
                items={filteredItems}
                collection={collection}
                filter={
                    <ListFilter<Category> 
                        selections={allTypes} 
                        productTypes={selectedCategories} 
                        setProductTypes={setSelectedCategories} 
                    />
                }
                banner={banner}
            />
}

export default CategoryFilterPage;