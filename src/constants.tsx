// Returns true if first letter in band name is between min and max letters provided.
// Example: isBetween('Aerosmith', 'a', 'f') returns true.
const nameIsBetween = (name: string, min: string, max: string) => {
    // If band name starts with 'The', ex: 'The Body', use first letter of next word to 
    // alphabetize names
    const indexOfFirstLetter = name.indexOf('The') === 0 ? 4 : 0;
    const firstLetter = name[indexOfFirstLetter].toLowerCase();
    return firstLetter >= min.toLowerCase() && firstLetter <= max.toLowerCase();
}

// CATEGORY PAGES GROUPED WITH IDS TO USE AS MAP KEYS
const APPAREL_PAGES = ['New', 'T-Shirts', 'Longsleeves', 'Hoodies'];
const MUSIC_PAGES = ['New', 'Vinyl'];
export const CATEGORIES = [{ name: 'Apparel', pages: APPAREL_PAGES}, { name: 'Music', pages: MUSIC_PAGES }];

// BAND NAMES GROUPED WITH IDS TO USE AS KEYS
export const ALL_BANDS = [
    'Agriculture', 'Bell Witch', 'Blood Incantation', 'The Body', 'Chat Pile', 'Cloud Rat', 
    'Deafheaven', 'Devil Master', 'Divide and Dissolve', 'Emma Ruth Rundle', 'Full of Hell', 
    'Knoll', 'Nails', 'Oathbreaker', 'Portrayal of Guilt', 'Primitive Man', 'Ragana', 'Soft Kill', 
    'Spectral Wound', 'Touché Amoré', 'Undeath'
]

const A_TO_C = ALL_BANDS.filter(name => nameIsBetween(name, 'a', 'c'));
const D_TO_H = ALL_BANDS.filter(name => nameIsBetween(name, 'd', 'h'));
const I_TO_P = ALL_BANDS.filter(name => nameIsBetween(name, 'i', 'p'));;
const Q_TO_Z = ALL_BANDS.filter(name => nameIsBetween(name, 'q', 'z'));;

export const BANDS = [
    { name: 'A to C', pages: A_TO_C }, 
    { name: 'D to H', pages: D_TO_H }, 
    { name: 'I to P', pages: I_TO_P }, 
    { name: 'Q to Z', pages: Q_TO_Z }
];

// ITEMS PER PAGE
export const ITEMS_PER_PAGE = 16;