import { useParams } from 'react-router-dom'; 
import { data } from '../data';
import { ALL_ARTISTS } from '../constants';
import { httpFormat } from '../utils';
import CategoryFilterPage from './CategoryFilterPage';
import { Category } from '../types';
import './ArtistPage.css';

const ALL_CATEGORIES: Category[] = ['Apparel', 'Music', 'Accessories'];

// All band names in http format
const allArtists = ALL_ARTISTS.map(artist => httpFormat(artist));

type ArtistPageProps = {
    selectedCategories: Category[],
    setSelectedCategories: React.Dispatch<React.SetStateAction<Category[]>>
}

function ArtistPage({ selectedCategories, setSelectedCategories }: ArtistPageProps) {
    const { artistName = '' } = useParams();

    // Filter all store data by band name from name in request parameter
    const artistItems = data.filter(item => httpFormat(item.artist) === artistName?.toLowerCase());

    // Filter options should only include categories present in the item list.
    // Ex: Do not allow user to filter by 'Accessories' if artist has zero accessories
    const filterOptions = ALL_CATEGORIES.filter(category => artistItems.find(item => item.category === category));

    if(allArtists.includes(artistName)) {
        return <CategoryFilterPage
                    items={artistItems}
                    allTypes={filterOptions}
                    collection={ALL_ARTISTS[allArtists.indexOf(artistName)]}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                    banner={
                        <img 
                            className="artist-page-banner" 
                            src={`/imgs/banners/${httpFormat(artistName)}.png`} 
                            alt={`${artistName} logo`}
                        />
                    }
                />
    } else {
        return <p>Error: Artist store not found</p>
    } 
}

export default ArtistPage;