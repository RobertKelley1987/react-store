import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Cart from './Cart';
import MenuButton from './MenuButton';
import Menu from './Menu';
import { CartItem, CartAction } from '../types';
import './SiteHeader.css';

type SiteHeaderProps = {
    clearFilter: () => void,
    cart: CartItem[],
    dispatch: React.Dispatch<CartAction>,
    viewingCartPage: boolean,
    cartIsVisible: boolean,
    setCartIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const SiteHeader = ({ clearFilter, cart, dispatch, viewingCartPage, cartIsVisible, setCartIsVisible }: SiteHeaderProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mouseIsOverCart, setMouseIsOverCart] = useState(false);

    const cartQty = cart.reduce((prev, currVal) => prev + currVal.qty, 0);

    const renderCart = () => {
        return (
            <div 
                className="site-header-cart"
                onMouseEnter={() => setMouseIsOverCart(true)}
                onMouseLeave={() => setMouseIsOverCart(false)}
            >
                <Cart cart={cart} dispatch={dispatch} cartStyle='small' buttonOption='cart' />
            </div>
        )
    }

    const displayCart = (cartIsVisible || mouseIsOverCart) && !viewingCartPage;

    return (
        <header className="site-header">
            <div className="site-header-main">
                <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Link to="/" className="site-header-logo">Infinite Bliss</Link>
                <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} clearFilter={clearFilter} />
                <div 
                    className="site-header-cart-wrapper" 
                    onMouseEnter={() => setCartIsVisible(true)}
                    onMouseLeave={() => setCartIsVisible(false)}
                >
                    <Link to="/cart" className="site-header-cart-link">
                        <span className="material-symbols-outlined site-header-bag">shopping_bag</span>
                        <span>{cartQty}</span>
                    </Link>
                    {displayCart && renderCart()}
                </div>
            </div>
        </header>
    )
}

export default SiteHeader;