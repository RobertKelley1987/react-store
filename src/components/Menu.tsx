import { useEffect, useRef, useState } from 'react';
import { assertIsNode, classNames } from '../utils';
import Categories from './Categories';
import Artists from './Artists';
import './Menu.css';

type MenuProps = {
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ menuOpen, setMenuOpen }: MenuProps) => {
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    const [artistsOpen, setArtistsOpen] = useState(false);
    const menu = useRef<HTMLDivElement>(null);

    const closeAllMenus = () => {
        setMenuOpen(false);
        setCategoriesOpen(false);
        setArtistsOpen(false);
    }

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
        const closeMenu = () => {
            setMenuOpen(false);
            setCategoriesOpen(false);
            setArtistsOpen(false);
        }
        const mediaQuery = window.matchMedia('(min-width: 700px)');
        mediaQuery.addEventListener('change', closeMenu);
    
        return () => mediaQuery.removeEventListener('change', closeMenu);
      }, [setMenuOpen]);

    return (
        <div ref={menu} className={classNames(!menuOpen, 'menu', 'menu-hidden')}>
            <nav>
                <ul className="menu-nav">
                    <Categories 
                        categoriesOpen={categoriesOpen} 
                        setArtistsOpen={setArtistsOpen} 
                        setCategoriesOpen={setCategoriesOpen}
                        closeAllMenus={closeAllMenus}
                    />
                    <Artists 
                        artistsOpen={artistsOpen} 
                        setArtistsOpen={setArtistsOpen} 
                        setCategoriesOpen={setCategoriesOpen}
                        closeAllMenus={closeAllMenus}
                    />
                </ul>    
            </nav>
        </div>
    )
}

export default Menu;