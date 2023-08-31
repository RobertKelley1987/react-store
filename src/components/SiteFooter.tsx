import Facebook from '../components/SVGs/Facebook';
import Instagram from '../components/SVGs/Instagram';
import Twitter from '../components/SVGs/Twitter';
import Youtube from '../components/SVGs/Youtube';
import './SiteFooter.css';

const SiteFooter = () => {
    return (
        <footer className="site-footer">
            <div>
                <div className="site-footer-logo">
                    IB
                </div>
                <div className="site-footer-socials">
                    <Facebook className="site-footer-svg" />
                    <Instagram className="site-footer-svg" />
                    <Twitter className="site-footer-svg" />
                    <Youtube className="site-footer-svg" />
                </div>
            </div>
        </footer>
    );
}

export default SiteFooter;