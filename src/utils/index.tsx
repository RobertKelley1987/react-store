import { ITEMS_PER_PAGE, ARTIST_NAME_LIB } from '../constants';
import { ProductFilterOption, ArtistName } from '../types';

// Assertion to test if element clicked is a React node (stolen from stack overflow link below)
// https://stackoverflow.com/questions/71193818/react-onclick-argument-of-type-eventtarget-is-not-assignable-to-parameter-of-t
// Also see typescript docs: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html
export function assertIsNode(target: EventTarget | null): asserts target is Node {
    if(!target || !("nodeType" in target)) {
        throw new Error("Element clicked is not a react node");
    }
}

// Assertion to test if a string is an artist with products on this website
export function assertIsArtistName(name: string): asserts name is ArtistName {
    if(!name || !(name in ARTIST_NAME_LIB)) {
        throw new Error("Name used in ArtistPage is not an artist.");
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

// De-formats http slug. Ex: 'the-band-name' should return as 'The Band Name'
export const decodeHttpSlug = (slug?: string) => {
    if(!slug) return 

    let result = '';

    // Exceptions for 'CD' and 'T-Shirt', otherwise remove hyphens and capitalize
    if(slug === 't-shirts') {
        result ='T-Shirts';
    } else if(slug === 'cd') {
        result = 'CD';
    } else {
        result = slug.split('-').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    }

    return  result;
}

// RegEx for digits
export const isANumber = new RegExp(/[0-9]/);

// Format a number to two decimal places for display
export const formatMoney = (num: number) => (Math.round(num * 100) / 100).toFixed(2);

// Returns true if first letter in band name is between min and max letters provided.
// Example: isBetween('Aerosmith', 'a', 'f') returns true.
export const nameIsBetween = (name: string, min: string, max: string) => {
    // If band name starts with 'The', ex: 'The Body', use first letter of next word 
    // for comparison
    const indexOfFirstLetter = name.indexOf('The') === 0 ? 4 : 0;
    const firstLetter = name[indexOfFirstLetter].toLowerCase();
    return firstLetter >= min.toLowerCase() && firstLetter <= max.toLowerCase();
}

// Converts filter options from an array of strings to an array of objects with a selected state
// attached.
export function convertToFilterOptions<T>(collectionTypes: T[]): ProductFilterOption<T>[] {
    return collectionTypes.map(collectionType => {
        return { name: collectionType, selected: false }
    });
}
