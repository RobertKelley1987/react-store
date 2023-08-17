import ShoppingBag from './SVGs/ShoppingBag';
import './SiteHeader.css';

const SiteHeader = () => {
    return (
        <header className="site-header">
            <div className="site-header-main">
                <a href="/" className="site-header-logo">Eternal Bliss</a>
                <ShoppingBag className="site-header-svg"/>
            </div>
            <div className="site-header-links">
            </div>
        </header>
    )
}

export default SiteHeader;