import { Link } from 'react-router-dom';
import { albums } from '../data/albums';
import { apparel } from '../data/apparel';
import { sortByDateAdded } from '../utils';
import HomePageSection from './HomePageSection';
import './HomePage.css';

const MAX_LIST_SIZE = 8;

// Get featured apparel and music
const featuredApparel = apparel.filter(item => item.featured);
const featuredMusic = albums.filter(item => item.featured);
// Get most recently apparel and music
const newestMusic = [...albums].sort(sortByDateAdded);
const newestApparel = [...apparel].sort(sortByDateAdded);

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="home-page-banner" style={{ backgroundImage: "url('imgs/chat-pile_live.jpg')" }}>
                <div className="home-page-banner-grid">
                    <img 
                        alt="Chat Pile logo" 
                        src='/imgs/chat-pile-logo.webp' 
                        className="home-page-banner-img"
                    />
                    <div className="home-page-banner-links">
                        <Link className="button" to="/artists/chat-pile">Official Store</Link>
                        <Link className="button" to="/music/36ILOG">New Record</Link>
                    </div>
                </div>
            </div>

            <main className="home-page-grid container">
                <HomePageSection heading="Featured Apparel" items={featuredApparel.slice(0, MAX_LIST_SIZE)} />
                <HomePageSection heading="New Apparel" items={newestApparel.slice(0, MAX_LIST_SIZE)} />
                <HomePageSection heading="Featured Music" items={featuredMusic.slice(0, MAX_LIST_SIZE)} />
                <HomePageSection heading="New Music" items={newestMusic.slice(0, MAX_LIST_SIZE)} />
            </main>
        </div>
    );
}

export default HomePage;