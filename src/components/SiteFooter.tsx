import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ScreenIsBigContext } from '../context/ScreenIsBigContext';
import MenuChevron from './MenuChevron';
import Facebook from '../components/SVGs/Facebook';
import Instagram from '../components/SVGs/Instagram';
import Twitter from '../components/SVGs/Twitter';
import Youtube from '../components/SVGs/Youtube';
import './SiteFooter.css';

const SiteFooter = () => {
    const [infoVisible, setInfoVisible] = useState(false);
    const [shippingVisible, setShippingVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);
    const screenIsBigContext = useContext(ScreenIsBigContext);
    const screenIsBig = screenIsBigContext?.screenIsBig;

    useEffect(() => {
        if(screenIsBig) {
            setInfoVisible(true);
            setShippingVisible(true);
            setContactVisible(true);
        } else {
            setInfoVisible(false);
            setShippingVisible(false);
            setContactVisible(false);
        }
    }, [screenIsBig])

    const renderInfoLinks = () => {
        return (
            <ul className="site-footer-info-links">
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
                    <Link to="/payment">Payment</Link>
                </li>
            </ul>
        );
    }

    const renderContactInfo = () => {
        return (
            <p className="site-footer-contact">
                <Link to='/contact'>Contact us</Link> for any order related questions.
            </p>
        )
    }

    return (
        <footer className="site-footer">
            <div className="site-footer-wrapper">
                <div className="site-footer-logo">IB</div>

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

                <div className="site-footer-sections">
                    <div>
                        <div 
                            onClick={() => setInfoVisible(prev => !prev)} 
                            className="site-footer-heading-wrapper"
                        >
                            <h3 className="site-footer-heading">Information</h3>
                            {!screenIsBig && <MenuChevron flipped={infoVisible}/>}
                        </div>
                        {infoVisible && renderInfoLinks()}
                    </div>

                    <div>
                        <div 
                            onClick={() => setShippingVisible(prev => !prev)} 
                            className="site-footer-heading-wrapper"
                        >
                            <h3 className="site-footer-heading">Free Shipping</h3>
                            {!screenIsBig && <MenuChevron flipped={shippingVisible}/>}
                        </div>
                        {shippingVisible && <p className="site-footer-shipping">We offer free shipping on offers over $100!</p>}
                    </div>

                    <div>
                        <div 
                            className="site-footer-heading-wrapper"
                            onClick={() => setContactVisible(prev => !prev)}
                        >
                            <h3 className="site-footer-heading">Customer Support</h3>
                            {!screenIsBig && <MenuChevron flipped={contactVisible}/>}
                        </div>
                        {contactVisible && renderContactInfo()}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default SiteFooter;