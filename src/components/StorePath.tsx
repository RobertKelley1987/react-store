import { Link, useLocation, useParams } from 'react-router-dom';
import { SLUG_LIB, ARTIST_NAME_LIB } from '../constants';
import './StorePath.css';
import { assertIsArtistName } from '../utils';
import e from 'express';

type StorePathProps = {
    tail: React.ReactNode,
    collection?: string
}

const getNewItemsLinkText = (path: string) => {
    if(path.includes('/music/new')) {
        return 'New Music';
    } else if(path.includes('/apparel/new')) {
        return 'New Apparel';
    } else if(path.includes('/accessories/new')) {
        return 'New Accessories';
    } else {
        return null;
    }
}

const getFeaturedItemsLinkText = (path: string) => {
    if(path.includes('/music/featured')) {
        return 'Featured Music';
    } else if(path.includes('/apparel/featured')) {
        return 'Featured Apparel';
    } else {
        return null;
    }
}

const artistSlugs = Object.keys(ARTIST_NAME_LIB);

const getArtistName = (name?: string) => {
    if(!name || !artistSlugs.includes(name)) {
        return false;
    }
    assertIsArtistName(name);
    return ARTIST_NAME_LIB[name];
}

const calcTrimIndex = (pathname: string, search?: string) => {
    return search ? pathname.indexOf(search) + search.length : undefined;
}

function StorePath(props: StorePathProps) {
    const { tail, collection } = props;
    const location = useLocation();
    const { collectionName } = useParams();

    const backPath = location.pathname.substring(0, calcTrimIndex(location.pathname, collectionName));

    const artistLinkText = getArtistName(collectionName);
    const newItemsLinkText = getNewItemsLinkText(location.pathname);
    const featuredItemsLinkText = getFeaturedItemsLinkText(location.pathname);
    const collectionLinkText = collection || (collectionName && SLUG_LIB[collectionName]);

    const renderLinkText = () => {
        if(artistLinkText) {
            return artistLinkText;
        } else if(newItemsLinkText) {
            return newItemsLinkText;
        } else if(featuredItemsLinkText) {
            return featuredItemsLinkText;
        } else {
            return collectionLinkText;
        }
    }

    return (
        <div className="store-path">
            <Link className="store-path-item" to='/'>
                Home
            </Link>
            <span> / </span>
            <Link className="store-path-item" to={backPath}>{renderLinkText()}</Link>
            <span> / </span>
            {tail}
        </div>
    )
}

export default StorePath;