import { ARTIST_NAME_LIB } from '../constants';
import { ArtistName } from '../types';
import './ArtistBanner.css';

type ArtistBannerProps = {
    collectionName: ArtistName
}

const ArtistBanner = ({ collectionName }: ArtistBannerProps) => {
    const banner = (
        <div className="artist-banner-wrapper">
            <img 
                className={"artist-banner"} 
                src={`/imgs/banners/${collectionName}.png`} 
                alt={`${ARTIST_NAME_LIB[collectionName]} logo`}
            />
        </div>
    );

    return collectionName ? banner : null;
}

export default ArtistBanner;