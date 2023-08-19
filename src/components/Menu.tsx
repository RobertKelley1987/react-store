import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { assertIsNode } from '../utils';
import MenuList from './MenuList';
import './Menu.css';

type MenuProps = {
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({ setMenuOpen }: MenuProps) => {
    const menu = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function closeMenu(e: MouseEvent) {
            assertIsNode(e.target);
            if(menu.current?.contains(e.target)) return;
            setMenuOpen(false);
        }

        document.body.addEventListener('mousedown', closeMenu);
        return () => document.body.removeEventListener('mousedown', closeMenu);
    }, [setMenuOpen]);

    return (
        <div ref={menu} className="menu">
            <nav>
                <ul>
                    <MenuList heading="Categories" className="menu-dropdown">       
                        <MenuList heading="Apparel">
                            <li>
                                <Link onClick={() => setMenuOpen(false)} to="/apparel/new">New</Link>
                            </li>
                            <li>
                                <Link onClick={() => setMenuOpen(false)} to="/apparel/t-shirts">T-Shirts</Link>
                            </li>
                            <li>
                                <Link onClick={() => setMenuOpen(false)} to="/apparel/longsleeves">Longsleeves</Link>
                            </li>
                            <li>
                                <Link onClick={() => setMenuOpen(false)} to="/apparel/hoodies">Hoodies</Link>
                            </li>
                        </MenuList>
                    
                        <MenuList heading="Music">  
                            <li>
                                <Link onClick={() => setMenuOpen(false)} to="/music/new">New</Link>
                            </li>
                            <li>
                                <Link onClick={() => setMenuOpen(false)} to="/music/vinyl">Vinyl</Link>
                            </li>
                        </MenuList>
                    </MenuList>
                </ul>    
            </nav>
        </div>
    )
}

export default Menu;