// CATEGORY PAGES GROUPED WITH IDS TO USE AS MAP KEYS
const APPAREL_PAGES = ['New', 'T-Shirts', 'Longsleeves', 'Hoodies'];
const MUSIC_PAGES = ['New', 'Vinyl'];
export const CATEGORIES = [{ name: 'Apparel', pages: APPAREL_PAGES}, { name: 'Music', pages: MUSIC_PAGES }];

// BAND NAMES GROUPED WITH IDS TO USE AS KEYS
export const ALL_BANDS = [
    'Agriculture', 'Bell Witch', 'Blood Incantation', 'The Body', 'Chat Pile', 'Cloud Rat', 'Deafheaven',
    'Knoll', 'Nails', 'Ragana'
]
const A_TO_C = ['Agriculture', 'Bell Witch', 'Blood Incantation', 'The Body', 'Chat Pile', 'Cloud Rat'];
const D_TO_H = ['Deafheaven'];
const I_TO_P = ['Knoll', 'Nails'];
const Q_TO_Z = ['Ragana'];
export const BANDS = [
    { name: 'A to C', pages: A_TO_C }, 
    { name: 'D to H', pages: D_TO_H }, 
    { name: 'I to P', pages: I_TO_P }, 
    { name: 'Q to Z', pages: Q_TO_Z }
];

// ITEMS PER PAGE
export const ITEMS_PER_PAGE = 24;