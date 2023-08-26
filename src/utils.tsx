import { Product } from './types';
import { ITEMS_PER_PAGE } from './constants';

// Sort from newest to oldest items
export const sortByDateAdded = (item: Product, nextItem: Product) => {
    return nextItem.dateAdded.getTime() - item.dateAdded.getTime();
}

// Sort by band name
export const sortByArtistName = (item: Product, nextItem: Product) => {
    if(item.artist < nextItem.artist) {
        return 1;
    } else if(item.artist > nextItem.artist) {
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

// Add conditional utility class names to existing list, 
// ex: add "menu-hidden" to "menu" to get "menu menu-hidden"
export const classNames = (test: boolean, className: string, addedClassName: string) => {
    return test ? `${className} ${addedClassName}` : className;
}

// Function to convert an array of data into an array of smaller arrays of pages
export function paginate<T>(items: T[]): T[][] {
    const pages = [];
    let page = [];
    for(let i = 0; i < items.length; i++) {
        // Add item to page
        page.push(items[i]);
        // Test if page has 24 items
        if(page.length === ITEMS_PER_PAGE) {
            // Add page to pages arr and reset page var
            pages.push(page);
            page = [];
        // Test for final page and add final page
        } else if(i === items.length - 1) {
            pages.push(page);
        }
    }

    return pages;
}

// Function to convert a string into an http-friendly format for string comparisons
export const httpFormat = (text: string) => text.replaceAll(' ', '-').toLowerCase();