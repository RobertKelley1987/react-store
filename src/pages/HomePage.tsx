import { music, apparel } from '../data';
import { sortByDateAdded } from '../utils';
import HomePageSection from './HomePageSection';
import './HomePage.css';

const MAX_LIST_SIZE = 8;

// Get featured apparel and music
const featuredApparel = apparel.filter(item => item.featured);
const featuredMusic = music.filter(item => item.featured);
// Get most recently apparel and music
const newestMusic = [...music].sort(sortByDateAdded);
const newestApparel = [...apparel].sort(sortByDateAdded);

const HomePage = () => {
    return <div className="home-page">
        <HomePageSection heading="Featured Apparel" items={featuredApparel.slice(0, MAX_LIST_SIZE)} currentSection="featured-apparel"/>
        <HomePageSection heading="New Apparel" items={newestApparel.slice(0, MAX_LIST_SIZE)} currentSection="new-apparel"/>
        <HomePageSection heading="Featured Music" items={featuredMusic.slice(0, MAX_LIST_SIZE)} currentSection="featured-music"/>
        <HomePageSection heading="New Music" items={newestMusic.slice(0, MAX_LIST_SIZE)} currentSection="new-music"/>
    </div>
}

export default HomePage;