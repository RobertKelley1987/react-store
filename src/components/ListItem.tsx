import { Link } from 'react-router-dom';
import { Item } from "../types";
import './Item.css';

type ItemProps<T> = {
    item: T
}

function ListItem<T extends Item<K>, K extends string>({ item }: ItemProps<T>) {
    return (
        <article className="item">
            <Link to={`/${item.category}/products/${item.id}`}>
                <img className="item-img" src={`/imgs/${item.imgs[0]}.jpg`} alt={`${item.artist} ${item.productType}`} />
                <h2 className="item-name">{`${item.artist} "${item.desc}" ${item.productType}`}</h2>
                <span className="item-price">{`$${item.price}`}</span>
            </Link>
        </article>
    );
}

export default ListItem;