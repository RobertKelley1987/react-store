import { Link } from 'react-router-dom'
import { httpFormat } from '../utils';
import { ALL_ARTISTS, APPAREL_PAGES, MUSIC_PAGES, ACCESSORY_PAGES } from '../constants';
import { Item } from '../types';
import './ListItem.css';

type ItemProps<T> = {
    item: T,
    srcPg?: string
}

// Page constants are also used for header menu, and intentionally do not include 'Featured' links
const allMusicPgs = [...MUSIC_PAGES, 'Featured']
const allApparelPgs = [...APPAREL_PAGES, 'Featured'];
const allAccessoryPgs = [...ACCESSORY_PAGES, 'Featured'];
const nonArtistPgs = [...allMusicPgs, ...allApparelPgs, ...allAccessoryPgs];
const HOME_PAGE_SECTIONS = ['Featured Music', 'Featured Apparel', 'New Music', 'New Apparel'];

function ListItem<T extends Item<K>, K extends string>({ item, srcPg }: ItemProps<T>) {
    const configItemPath = () => {
        const category = item.category.toLowerCase();
        const artist = httpFormat(item.artist);
        let path = '';

        if(srcPg) {
            if(nonArtistPgs.includes(srcPg)) {
                path = `/${category}/${httpFormat(srcPg)}/products/${item.id}`;
            } else if(ALL_ARTISTS.includes(srcPg)) {
                path = `/artists/${artist}/${category}/${item.id}`;
            } else if(srcPg.includes('Featured')) {
                path = `/${category}/featured/products/${item.id}`;
            } else if(srcPg.includes('New')) {
                path = `/${category}/new/products/${item.id}`
            }
        }

        return path;
    }

    return (
        <article className="list-item">
            <Link to={configItemPath()}>
                <img 
                    className="list-item-img" 
                    src={`/imgs/${item.imgs[0]}.jpg`} 
                    alt={`${item.artist} 
                    ${item.productType}`} 
                />
                <h2 className="list-item-name">{`${item.artist} "${item.desc}" ${item.productType}`}</h2>
                <span className="list-item-price">{`$${item.price}`}</span>
            </Link>
        </article>
    );
}

export default ListItem;