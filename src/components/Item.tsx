import { Link } from 'react-router-dom';
import { Product } from "../types";
import './Item.css';

type ItemProps = {
    item: Product,
    currentSection: string
}

const Item = ({ item, currentSection }: ItemProps) => {
    return (
        <article className="item">
            <Link to={`/collections/${currentSection}/products/${item.id}`}>
                <img className="item-img" src={`/imgs/${item.imgs[0]}.jpg`} alt={`${item.band} ${item.productType}`} />
                <h2 className="item-name">{`${item.band} "${item.desc}" ${item.productType}`}</h2>
                <span className="item-price">{`$${item.price}`}</span>
            </Link>
        </article>
    );
}

export default Item;