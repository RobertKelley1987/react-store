import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import Menu from './Menu';
import { CartItem } from '../types';
import './SiteHeader.css';

type SiteHeaderProps = {
    clearFilter: () => void,
    cart: CartItem[]
}

const SiteHeader = ({ clearFilter, cart }: SiteHeaderProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const cartQty = cart.reduce((prev, currVal) => prev + currVal.qty, 0);

    return (
        <header className="site-header">
            <div className="site-header-main">
                <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Link to="/" className="site-header-logo">Infinite Bliss</Link>
                <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} clearFilter={clearFilter} />
                <Link to="/cart" className="site-header-cart-link">
                    <span className="material-symbols-outlined site-header-bag">shopping_bag</span>
                    <span>{cartQty}</span>
                </Link>
            </div>
        </header>
    )
}

export default SiteHeader;