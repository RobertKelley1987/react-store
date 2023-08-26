import { Fragment } from 'react';
import { useParams, useLocation } from 'react-router-dom'; 
import useQuery from '../hooks/useQuery';
import { paginate, httpFormat } from '../utils';
import { albums } from '../data/albums';
import { apparel } from '../data/apparel';
import { accessories } from '../data/accessories';
import ListPage from "./ListPage";
import { ALL_ARTISTS } from '../constants';
import './ArtistPage.css';

// Convert all band names to http format
const allArtists = ALL_ARTISTS.map(artist => httpFormat(artist));

const ArtistPage = () => {
    const { name } = useParams();
    const location = useLocation();

    // Filter all store data by band name from name in request parameter
    const artistAlbums = albums.filter(album => httpFormat(album.artist) === name?.toLowerCase());
    const artistApparel = apparel.filter(item => httpFormat(item.artist) === name?.toLowerCase());
    const artistAccessories = accessories.filter(item => httpFormat(item.artist) === name?.toLowerCase());
    const artistPages = paginate([...artistAlbums, ...artistApparel, ...artistAccessories]);

    // Find artist name in original format to print on page
    const artistIndex = allArtists.findIndex(artist => artist === name?.toLowerCase());
    const capitalizedName = ALL_ARTISTS[artistIndex];

    // Get page number 
    const query = useQuery();
    const pageNumQuery = query.get('page') || '1';
    const pageNum = parseInt(pageNumQuery);

    if(name && allArtists.includes(name.toLowerCase())) {
        return (
            (
                <Fragment>
                    <img 
                        className="artist-page-banner-img" 
                        src={`/imgs/banners/${httpFormat(name)}-banner.png`} 
                        alt={`Page banner with ${name} logo`}
                    />
                    <ListPage pages={artistPages} pageNum={pageNum} currentPath={location.pathname}/>
                </Fragment>
            )
        )
    } else {
        return <p>Error: Artist store not found</p>
    } 
}

export default ArtistPage;