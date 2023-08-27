import { Fragment } from "react";
import ListItem from './ListItem';
import { Item } from "../types";

type ItemListProps<T> = {
    items: T[]
}

function ItemList<T extends Item<K>, K extends string>({ items }: ItemListProps<T>) {
    return <Fragment>{items.map(item => <ListItem<T, K> key={item.id} item={item} />)}</Fragment>
}

export default ItemList;