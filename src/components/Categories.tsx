import { Fragment } from 'react';
import MenuList from './MenuList';
import MenuChevron from './MenuChevron';
import { classNames } from '../utils';

const APPAREL_PAGES = ['New', 'T-Shirts', 'Longsleeves', 'Hoodies'];
const MUSIC_PAGES = ['New', 'Vinyl'];

type CategoriesProps = {
    categoriesOpen: boolean,
    setArtistsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setCategoriesOpen: React.Dispatch<React.SetStateAction<boolean>>,
    closeAllMenus: () => void
}

const Categories = ({ categoriesOpen, setArtistsOpen, setCategoriesOpen, closeAllMenus }: CategoriesProps) => {
    const handleCategoriesClick = () => { 
        const mediaQuery = window.matchMedia('(min-width: 700px)');

        if(mediaQuery.matches) {
            setArtistsOpen(false);
            setCategoriesOpen(true);
        } else {
            setCategoriesOpen(true);
        }
    }

    const renderCategories = () => { 
        return categoriesOpen && (
            <ul className="menu-dropdown menu-dropdown-categories">
                <MenuList category="Apparel" pages={APPAREL_PAGES} closeMenu={closeAllMenus} />            
                <MenuList category="Music" pages={MUSIC_PAGES} closeMenu={closeAllMenus} />  
            </ul>
        );
    }

    return (
        <Fragment>        
            <li 
                className={classNames(categoriesOpen, 'menu-heading-wrapper', 'menu-heading-wrapper-selected')} 
                onClick={handleCategoriesClick}
            >
                <h1 className="menu-heading">Categories</h1>
                <MenuChevron flipped={categoriesOpen}/>
            </li>

            {renderCategories()}
        </Fragment>
    )
}

export default Categories;