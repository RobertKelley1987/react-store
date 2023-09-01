import { Link } from 'react-router-dom';
import Facebook from '../components/SVGs/Facebook';
import Instagram from '../components/SVGs/Instagram';
import Twitter from '../components/SVGs/Twitter';
import Youtube from '../components/SVGs/Youtube';
import './SiteFooter.css';

const SiteFooter = () => {
    return (
        <footer className="site-footer">
            <div className="site-footer-wrapper">
                <div className="site-footer-logo-wrapper">
                    <div className="site-footer-logo">
                        IB
                    </div>
                    <ul className="site-footer-socials">
                        <li>
                            <Link to="https://www.facebook.com" className="site-footer-social-link">
                                <Facebook className="site-footer-svg" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com" className="site-footer-social-link">
                                <Instagram className="site-footer-svg" />
                            </Link>   
                        </li>
                        <li>
                            <Link to="https://www.twitter.com" className="site-footer-social-link">
                                <Twitter className="site-footer-svg" />
                            </Link>   
                        </li>
                        <li>
                            <Link to="https://www.youtube.com" className="site-footer-social-link">
                                <Youtube className="site-footer-svg" />
                            </Link>   
                        </li>
                    </ul>
                </div>

                <div className="site-footer-sections">
                    <div>
                        <h3 className="site-footer-heading">Information</h3>
                        <ul>
                            <li>
                                <Link to="/faqs">FAQs</Link>
                            </li>
                            <li>
                                <Link to="/terms-and-conditions">Terms and Conditions</Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy">Payment</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="site-footer-heading">Free Shipping</h3>
                        <p>We offer free shipping on offers over $100!</p>
                    </div>

                    <div>
                        <h3 className="site-footer-heading">Customer Support</h3>
                        <p><Link to='/contact'>Contact us</Link> for any order related questions.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default SiteFooter;