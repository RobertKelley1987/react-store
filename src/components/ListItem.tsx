import { Link } from 'react-router-dom'
import { httpFormat } from '../utils';
import { ALL_ARTISTS, APPAREL_PAGES, MUSIC_PAGES, ACCESSORY_PAGES } from '../constants';
import { Item } from '../types';
import './ListItem.css';

type ItemProps<T> = {
    item: T,
    srcPg?: string
}

const allMusicPgs = [...MUSIC_PAGES, 'Featured Music']
const allApparelPgs = [...APPAREL_PAGES, 'Featured Apparel'];
const allAccessoryPgs = [...ACCESSORY_PAGES, 'Featured Accessories'];

function ListItem<T extends Item<K>, K extends string>({ item, srcPg }: ItemProps<T>) {
    const configItemPath = () => {
        const category = item.category.toLowerCase();
        const artist = httpFormat(item.artist);
        let path = '';

        if(srcPg) {
            if(allApparelPgs.includes(srcPg)) {
                path = `/apparel/${httpFormat(srcPg)}/products/${item.id}`;
            } else if(allMusicPgs.includes(srcPg)) {
                path = `/music/${httpFormat(srcPg)}/products/${item.id}`;
            } else if(allAccessoryPgs.includes(srcPg)) {
                path = `/accessories/${httpFormat(srcPg)}/products/${item.id}`;
            } else if(ALL_ARTISTS.includes(srcPg)) {
                path = `/artists/${artist}/${category}/${item.id}`;
            }
        }

        return path;
    }

    return (
        <article className="list-item">
            <Link to={configItemPath()}>
                <img className="list-item-img" src={`/imgs/${item.imgs[0]}.jpg`} alt={`${item.artist} ${item.productType}`} />
                <h2 className="list-item-name">{`${item.artist} "${item.desc}" ${item.productType}`}</h2>
                <span className="list-item-price">{`$${item.price}`}</span>
            </Link>
        </article>
    );
}

export default ListItem;