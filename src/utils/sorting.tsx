import { SortOption, Item } from '../types';

// Sort from newest to oldest items
export function newToOld<T extends Item<K>, K extends string>(item: T, nextItem: T) {
    return nextItem.dateAdded.getTime() - item.dateAdded.getTime();
}

// Sort from oldest to newest
export function oldToNew<T extends Item<K>, K extends string>(item: T, nextItem: T) {
    return item.dateAdded.getTime() - nextItem.dateAdded.getTime();
}

// Sort by band name - a to z
export function aToZ<T extends Item<K>, K extends string>(item: T, nextItem: T) {
    let result = 0
    if(item.artist > nextItem.artist) {
        result = 1;
    } else if(item.artist < nextItem.artist) {
        result = -1
    } 
    return result;
}

// Sort by band name - z to a
export function zToA<T extends Item<K>, K extends string>(item: T, nextItem: T) {
    let result = 0
    if(item.artist < nextItem.artist) {
        result = 1;
    } else if(item.artist > nextItem.artist) {
        result = -1
    } 
    return result;
}

// Sort by price - high to low
export function highToLow<T extends Item<K>, K extends string>(item: T, nextItem: T) {
    return nextItem.price - item.price;
}

// Sort by price - low to high
export function lowToHigh<T extends Item<K>, K extends string>(item: T, nextItem: T) {
    return item.price - nextItem.price;
}

export const configSortFn = (sortOption: SortOption) => {
    let sortFn = null;

    switch(sortOption) {
        case 'Date - Old to New':
            sortFn = oldToNew;
            break;
        case 'Date - New to Old':
            sortFn = newToOld;
            break;
        case 'Artist Name - A to Z':
            sortFn = aToZ;
            break;
        case 'Artist Name - Z to A':
            sortFn = zToA;
            break;
        case 'Price - High to Low':
            sortFn = highToLow;
            break;
        case 'Price - Low to High':   
            sortFn = lowToHigh;
            break;
    }

    return sortFn;
}