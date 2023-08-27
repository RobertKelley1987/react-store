import { useEffect, useContext, useRef, useState } from 'react';
import { ScreenIsBigContext } from '../context/ScreenIsBigContext';
import { assertIsNode, classNames } from '../utils';
import DropdownList from './DropdownList';
import { BANDS, CATEGORIES } from '../constants';
import './Menu.css';

type MenuProps = {
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ menuOpen, setMenuOpen }: MenuProps) => {
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    const [artistsOpen, setArtistsOpen] = useState(false);
    const screenIsBigContext = useContext(ScreenIsBigContext);
    const screenIsBig = screenIsBigContext?.screenIsBig;

    const menu = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function closeMenu(e: MouseEvent) {
            assertIsNode(e.target);

            if(menu.current?.contains(e.target)) return;

            setMenuOpen(false);
            setCategoriesOpen(false);
            setArtistsOpen(false);
        }

        document.body.addEventListener('mousedown', closeMenu);
        return () => document.body.removeEventListener('mousedown', closeMenu);
    }, [setMenuOpen]);

    useEffect(() => {
        setMenuOpen(false);
        setCategoriesOpen(false);
        setArtistsOpen(false);
      }, [screenIsBig, setMenuOpen]);

    return (
        <div ref={menu} className={classNames(!menuOpen, 'menu', 'menu-hidden')}>
            <nav>
                <ul className="menu-nav">
                    <DropdownList 
                        thisIsOpen={categoriesOpen} 
                        pathSlug='collections'
                        pageLists={CATEGORIES}
                        heading="Categories"
                        setOtherListsOpen={setArtistsOpen} 
                        setThisListOpen={setCategoriesOpen}
                        setMenuOpen={setMenuOpen}
                    />
                    <DropdownList 
                        thisIsOpen={artistsOpen} 
                        pathSlug='artists'
                        pageLists={BANDS}
                        heading="Artists"
                        setOtherListsOpen={setCategoriesOpen} 
                        setThisListOpen={setArtistsOpen}
                        setMenuOpen={setMenuOpen}
                    />
                </ul>    
            </nav>
        </div>
    )
}

export default Menu;