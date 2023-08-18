import { Fragment } from "react";
import Item from './Item';
import { ProductList } from "../types";

type ItemListProps = {
    items: ProductList
}

const ItemList = ({ items }: ItemListProps) => {
    return <Fragment>{items.map(item => <Item key={item.id} item={item} />)}</Fragment>
}

export default ItemList;