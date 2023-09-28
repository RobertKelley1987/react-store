import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { convertToFilterOptions } from '../utils';
import { SLUG_LIB } from '../constants';
import Collection from './Collection';
import ListFilter from '../components/ListFilter';
import { Item, ProductFilterOption } from '../types';
import './CollectionPage.css';

type CollectionPageProps<K> = {
    productType: string,
    collections: string[]
}

function CollectionPage<T extends Item<K>, K extends string>(props: CollectionPageProps<K>) {
    const { productType, collections } = props;
    const { collectionName } = useParams();
    const [collection, setCollection] = useState<T[]>([]);
    const [filterOptions, setFilterOptions] = useState<ProductFilterOption<K>[]>([])
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const defaultFilterOption = productType === 'music' && collectionName === 'new' ? 'LP' : null;

    const selectedOptions = filterOptions.filter(option => option.selected);
    const selectedNames = selectedOptions.map(option => option.name);
    const filteredCollection = collection.filter(item => selectedNames.includes(item.productType));
    
    useEffect(() => {
        if(!collectionName) {
            setErrorMessage('Collection not found.');
            return;
        }

        const getCollection = async () => {
            const { data: { collection, collectionTypes, error } } = await axios.get(`/${productType}/${collectionName}`);
            if(error) {
                setErrorMessage(error);
            } else {
                setCollection(collection);
                const filterOptions = convertToFilterOptions<K>(collectionTypes);
                const defaultOptionIndex = filterOptions.findIndex(option => option.name === defaultFilterOption);
                if(defaultOptionIndex !== -1) {
                    filterOptions[defaultOptionIndex].selected = true;
                }
                setFilterOptions(filterOptions);
            }
        }

        setLoading(true);
        if(collections.includes(SLUG_LIB[collectionName])) {
            getCollection();
            setErrorMessage('');
        } else {
            setErrorMessage('Collection not found.');
        }
        setLoading(false);

        return () => setErrorMessage('');
    }, [collectionName, productType, defaultFilterOption, collections]);

    const renderCollection = () => {
        let element;

        if(loading) {
            element = <p>Loading...</p>;
        } else if(errorMessage || !collectionName || !collection.length) {
            element = <p className="collection-page-error-message">{errorMessage}</p>;
        } else {
            const filter = <ListFilter<K> productTypes={filterOptions} setProductTypes={setFilterOptions} />
            element = (
                <Collection<T, K> 
                    items={selectedNames.length > 0 ? filteredCollection : collection} 
                    collection={SLUG_LIB[collectionName]}
                    filter={filterOptions.length > 1 ? filter : undefined} 
                />
            );
        }

        return element;
    }

    return renderCollection();
}

export default CollectionPage;