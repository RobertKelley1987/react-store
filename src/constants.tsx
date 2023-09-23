import { MailingAddress, MailingAddressInput, State, ShippingMethod } from "./types";

// CATEGORY PAGES GROUPED WITH IDS TO USE AS MAP KEYS
export const APPAREL_PAGES = ['New Apparel', 'T-Shirts', 'Longsleeves', 'Hoodies'];
export const MUSIC_PAGES = ['New Music', 'Vinyl', 'CD', 'Tape'];
export const ACCESSORY_PAGES = ['New Accessories', 'Hats', 'Patches', 'Pins', 'Bags'];
export const CATEGORIES = [
    { name: 'Apparel', pages: APPAREL_PAGES}, 
    { name: 'Music', pages: MUSIC_PAGES },
    { name: 'Accessories', pages: ACCESSORY_PAGES}
];

// BAND NAMES GROUPED WITH IDS TO USE AS KEYS
export const ALL_ARTISTS = [
    'Agriculture', 'Bell Witch', 'Blood Incantation', 'The Body', 'Chat Pile', 'Cloud Rat', 
    'Deafheaven', 'Devil Master', 'Divide and Dissolve', 'Emma Ruth Rundle', 'Full of Hell', 
    'Knoll', 'Nails', 'Oathbreaker', 'Portrayal of Guilt', 'Primitive Man', 'Ragana', 'Soft Kill', 
    'Spectral Wound', 'Touche Amore', 'Undeath'
];

// Returns true if first letter in band name is between min and max letters provided.
// Example: isBetween('Aerosmith', 'a', 'f') returns true.
const nameIsBetween = (name: string, min: string, max: string) => {
    // If band name starts with 'The', ex: 'The Body', use first letter of next word 
    // for comparison
    const indexOfFirstLetter = name.indexOf('The') === 0 ? 4 : 0;
    const firstLetter = name[indexOfFirstLetter].toLowerCase();
    return firstLetter >= min.toLowerCase() && firstLetter <= max.toLowerCase();
}

const A_TO_C = ALL_ARTISTS.filter(name => nameIsBetween(name, 'a', 'c'));
const D_TO_H = ALL_ARTISTS.filter(name => nameIsBetween(name, 'd', 'h'));
const I_TO_P = ALL_ARTISTS.filter(name => nameIsBetween(name, 'i', 'p'));;
const Q_TO_Z = ALL_ARTISTS.filter(name => nameIsBetween(name, 'q', 'z'));;

export const BANDS = [
    { name: 'A to C', pages: A_TO_C }, 
    { name: 'D to H', pages: D_TO_H }, 
    { name: 'I to P', pages: I_TO_P }, 
    { name: 'Q to Z', pages: Q_TO_Z }
];

export const ITEMS_PER_PAGE = 24;

export const MAX_ORDER_QTY = 10;

export const US_STATES = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
];

export const US_STATE_ABBREVS = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY'
];

export const VOWELS = 'AEIOUaeiou';

export const EMPTY_TEXT_INPUT: MailingAddressInput<string> = {
    value: '',
    error: ''
}

export const EMPTY_STATE_SELECTOR: MailingAddressInput<State> = {
    value: '',
    error: ''
}

export const DEFAULT_MAILING_ADDRESS: MailingAddress = {
    firstName: EMPTY_TEXT_INPUT,
    lastName: EMPTY_TEXT_INPUT,
    streetLine1: EMPTY_TEXT_INPUT,
    streetLine2: EMPTY_TEXT_INPUT,
    city: EMPTY_TEXT_INPUT,
    state: EMPTY_STATE_SELECTOR,
    zip: EMPTY_TEXT_INPUT
}

export const ADDRESS_STR_LIB = {
    firstName: 'first name',
    lastName: 'last name',
    streetLine1: 'street address',
    streetLine2: 'unit, apt, suite etc...',
    city: 'city',
    state: 'state',
    zip: 'zip code'
}

export const SHIPPING_METHODS: ShippingMethod[] = [
    { name: 'Standard', days: '5 - 7', cost: 9.99 },
    { name: 'Express', days: '1 - 2' ,cost: 19.99 }
]

