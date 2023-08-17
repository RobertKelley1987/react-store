import { Product } from './types';

// Sort from newest to oldest items
export const sortByDateAdded = (item: Product, nextItem: Product) => {
    return nextItem.dateAdded.getTime() - item.dateAdded.getTime();
}