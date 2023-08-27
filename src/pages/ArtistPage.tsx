import { useParams } from 'react-router-dom'; 
import usePageNum from '../hooks/usePageNum';
import { data } from '../data';
import { ALL_ARTISTS } from '../constants';
import { paginate, httpFormat } from '../utils';
import ListPage from "./ListPage";
import ListFilter from './ListFilter';
import StorePath from '../components/StorePath';
import { Category } from '../types';
import './ArtistPage.css';

const ALL_CATEGORIES: Category[] = ['Apparel', 'Music', 'Accessories'];

type ArtistPageProps = {
    selectedTypes: Category[],
    setSelectedTypes: React.Dispatch<React.SetStateAction<Category[]>>
}

// Convert all band names to http format
const allArtists = ALL_ARTISTS.map(artist => httpFormat(artist));

function ArtistPage({ selectedTypes, setSelectedTypes }: ArtistPageProps) {
    const { collectionName = '' } = useParams();
    const { pageNum } = usePageNum();

    // Filter all store data by band name from name in request parameter
    const artistItems = data.filter(item => httpFormat(item.artist) === collectionName?.toLowerCase());

    // Apply category filters from props / sidebar options
    const filteredItems = () => {
        let items = artistItems;
        if(selectedTypes.length) {
            items = artistItems.filter(item => selectedTypes.includes(item.category));
        } 
        return items;
    }

    // Paginate filtered data
    const artistPages = paginate(filteredItems());

    // Filter options should only include categories present in the item list.
    // Ex: Do not allow user to filter by 'Accessories' if artist has zero accessories
    const filterOptions = ALL_CATEGORIES.filter(category => artistItems.find(item => item.category === category))

    if(allArtists.includes(collectionName?.toLowerCase())) {
        return (
            (
                <div className="container">
                    <img 
                        className="artist-page-banner-img" 
                        src={`/imgs/banners/${httpFormat(collectionName)}-banner.png`} 
                        alt={`Page banner with ${collectionName} logo`}
                    />
                    <StorePath
                        setSelectedTypes={setSelectedTypes}
                        tail={<span className="store-path-item">{`Page ${pageNum} of ${artistPages.length}`}</span>}
                    />
                    <div className="filtered-list">
                        <ListFilter<Category> 
                            selections={filterOptions} 
                            productTypes={selectedTypes}
                            setProductTypes={setSelectedTypes}
                        />
                        <ListPage pages={artistPages} pageNum={pageNum} />
                    </div>
                </div>
            )
        )
    } else {
        return <p>Error: Artist store not found</p>
    } 
}

export default ArtistPage;