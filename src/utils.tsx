import { Product } from './types';

// Sort from newest to oldest items
export const sortByDateAdded = (item: Product, nextItem: Product) => {
    return nextItem.dateAdded.getTime() - item.dateAdded.getTime();
}

// Sort by band name
export const sortByBandName = (item: Product, nextItem: Product) => {
    if(item.band < nextItem.band) {
        return 1;
    } else if(item.band > nextItem.band) {
        return -1
    } else {
        return 0;
    }
}

// Assertion to test if element clicked is a React node (stolen from stack overflow link below)
// https://stackoverflow.com/questions/71193818/react-onclick-argument-of-type-eventtarget-is-not-assignable-to-parameter-of-t
// Also see typescript docs: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html
export function assertIsNode(target: EventTarget | null): asserts target is Node {
    if(!target || !("nodeType" in target)) {
        throw new Error("Element clicked is not a react node");
    }
}