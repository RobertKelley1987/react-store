import { Product } from "../types";
import './Item.css';

type ItemProps = {
    product: Product
}

const Item = ({ product }: ItemProps) => {
    return (
        <article className="item">
            <img className="item-img" src={`/imgs/${product.imgs[0]}.jpg`} alt={`${product.band} ${product.productType}`}/>
            <h2 className="item-name">{`${product.band} "${product.desc}" ${product.productType}`}</h2>
            <span className="item-price">{`$${product.price}`}</span>
        </article>
    );
}

export default Item;