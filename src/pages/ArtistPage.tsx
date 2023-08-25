import { Fragment } from 'react';
import { useParams } from 'react-router-dom'; 
import { albums } from '../data/albums';
import { apparel } from '../data/apparel';
import { accessories } from '../data/accessories';
import { paginate, httpFormat } from '../utils';
import ListPage from "./ListPage";
import { ALL_BANDS } from '../constants';
import './ArtistPage.css';

// Convert all band names to http format
const allBands = ALL_BANDS.map(band => httpFormat(band));

const ArtistPage = () => {
    const { name } = useParams();

    // Filter all store data by band name from name in request parameter
    const bandAlbums = albums.filter(album => httpFormat(album.band) === name?.toLowerCase());
    const bandApparel = apparel.filter(item => httpFormat(item.band) === name?.toLowerCase());
    const bandAccessories = accessories.filter(item => httpFormat(item.band) === name?.toLowerCase());
    const bandPages = paginate([...bandAlbums, ...bandApparel, ...bandAccessories]);

    // Find band name in original format to print on page
    const bandIndex = allBands.findIndex(band => band === name?.toLowerCase());
    const capitalizedName = ALL_BANDS[bandIndex];

    if(name && allBands.includes(name.toLowerCase())) {
        return (
            (
                <Fragment>
                    <img 
                        className="artist-page-banner-img" 
                        src={`/imgs/banners/${httpFormat(name)}-banner.png`} 
                        alt={`Page banner with ${name} logo`}
                    />
                    <ListPage pages={bandPages} pageName={capitalizedName} />
                </Fragment>
            )
        )
    } else {
        return <p>Error: Artist store not found</p>
    } 
}

export default ArtistPage;