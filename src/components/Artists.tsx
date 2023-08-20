import { Fragment } from 'react';
import MenuList from './MenuList';
import MenuChevron from './MenuChevron';
import { classNames } from '../utils';

const A_TO_C = ['Agriculture', 'Bell Witch', 'Blood Incantation', 'The Body', 'Chat Pile', 'Cloud Rat'];
const D_TO_H = ['Deafheaven'];
const I_TO_P = ['Knoll', 'Nails'];
const Q_TO_Z = ['Ragana'];

type ArtistsProps = {
    artistsOpen: boolean,
    setArtistsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setCategoriesOpen: React.Dispatch<React.SetStateAction<boolean>>,
    closeAllMenus: () => void
}

const Artists = ({ artistsOpen, setArtistsOpen, setCategoriesOpen, closeAllMenus }: ArtistsProps) => {
    const renderArtists = () => {
        return artistsOpen && (
            <ul className="menu-dropdown menu-dropdown-artists">
                <MenuList category="A to C" pathSlug="artists" pages={A_TO_C} closeMenu={closeAllMenus} />            
                <MenuList category="D to H" pathSlug="artists" pages={D_TO_H} closeMenu={closeAllMenus} />  
                <MenuList category="I to P" pathSlug="artists" pages={I_TO_P} closeMenu={closeAllMenus} />            
                <MenuList category="Q to Z" pathSlug="artists" pages={Q_TO_Z} closeMenu={closeAllMenus} />
            </ul>
        );
    }

    const handleArtistsClick = () => { 
        const mediaQuery = window.matchMedia('(min-width: 700px)');

        if(mediaQuery.matches) {
            setCategoriesOpen(false);
            setArtistsOpen(true);
        } else {
            setArtistsOpen(true);
        }
    }

    return (
        <Fragment>
            <li 
                className={classNames(artistsOpen, 'menu-heading-wrapper', 'menu-heading-wrapper-selected')}  
                onClick={handleArtistsClick}
            >
                <h1 className="menu-heading">Artist Stores</h1>
                <MenuChevron flipped={artistsOpen}/>
            </li>

            {renderArtists()}
        </Fragment>
    )
}

export default Artists;