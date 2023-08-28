import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import ShoppingBag from './SVGs/ShoppingBag';
import Menu from './Menu';
import './SiteHeader.css';

type SiteHeaderProps = {
    clearFilter: () => void
}

const SiteHeader = ({ clearFilter }: SiteHeaderProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="site-header-main">
                <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Link to="/" className="site-header-logo">Infinite Bliss</Link>
                <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} clearFilter={clearFilter} />
                <Link to="/cart">
                    <ShoppingBag className="site-header-svg" />
                </Link>
            </div>
        </header>
    )
}

export default SiteHeader;