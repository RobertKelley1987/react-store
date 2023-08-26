import { Link } from 'react-router-dom';
import { Product } from "../types";
import './Item.css';

type ItemProps = {
    item: Product
}

const Item = ({ item }: ItemProps) => {
    return (
        <article className="item">
            <Link to={`/${item.category}/${item.id}`}>
                <img className="item-img" src={`/imgs/${item.imgs[0]}.jpg`} alt={`${item.artist} ${item.productType}`} />
                <h2 className="item-name">{`${item.artist} "${item.desc}" ${item.productType}`}</h2>
                <span className="item-price">{`$${item.price}`}</span>
            </Link>
        </article>
    );
}

export default Item;