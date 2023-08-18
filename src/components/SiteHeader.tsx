import { Link } from 'react-router-dom';
import ShoppingBag from './SVGs/ShoppingBag';
import './SiteHeader.css';

const SiteHeader = () => {
    return (
        <header className="site-header">
            <div className="site-header-main">
                <Link to="/" className="site-header-logo">Eternal Bliss</Link>
                <ShoppingBag className="site-header-svg"/>
            </div>
            <div className="site-header-links">
            </div>
        </header>
    )
}

export default SiteHeader;