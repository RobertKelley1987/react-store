import { Fragment } from "react";
import Item from './Item';
import { ProductList } from "../types";

type ItemListProps = {
    items: ProductList,
    currentSection: string
}

const ItemList = ({ items, currentSection }: ItemListProps) => {
    return <Fragment>{items.map(item => <Item key={item.id} item={item} currentSection={currentSection} />)}</Fragment>
}

export default ItemList;