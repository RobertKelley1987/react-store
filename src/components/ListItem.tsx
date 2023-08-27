import { Link, useLocation } from 'react-router-dom';
import { Item } from "../types";
import './ListItem.css';

type ItemProps<T> = {
    item: T
}

function ListItem<T extends Item<K>, K extends string>({ item }: ItemProps<T>) {
    const location = useLocation();

    return (
        <article className="list-item">
            <Link to={`${location.pathname}/products/${item.id}`}>
                <img className="list-item-img" src={`/imgs/${item.imgs[0]}.jpg`} alt={`${item.artist} ${item.productType}`} />
                <h2 className="list-item-name">{`${item.artist} "${item.desc}" ${item.productType}`}</h2>
                <span className="list-item-price">{`$${item.price}`}</span>
            </Link>
        </article>
    );
}

export default ListItem;