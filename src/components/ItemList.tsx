import { Fragment } from "react";
import Item from './Item';
import { ProductList } from "../types";

type ItemListProps = {
    products: ProductList
}

const ItemList = ({ products }: ItemListProps) => {
    return <Fragment>{products.map(product => <Item key={product.id} product={product}/>)}</Fragment>
}

export default ItemList;