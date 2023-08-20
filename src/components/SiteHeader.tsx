import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import ShoppingBag from './SVGs/ShoppingBag';
import Menu from './Menu';
import './SiteHeader.css';

const SiteHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="site-header-main">
                <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Link to="/" className="site-header-logo">Eternal Bliss</Link>
                <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
                <ShoppingBag className="site-header-svg" />
            </div>
        </header>
    )
}

export default SiteHeader;