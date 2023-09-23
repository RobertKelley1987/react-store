export type ApparelProduct = 'T-Shirt' | 'Longsleeve' |'Hoodie'
export type MusicProduct = 'LP' | '2XLP' | '12"' | 'CD' | '2XCD' | 'Tape'
export type AccessoryProduct = 'Cap' | 'Beanie' | 'Enamel Pin' | 'Patch' | 'Tote Bag'

export type ProductType = ApparelProduct | MusicProduct | AccessoryProduct;

export type Artist = 'Agriculture' | 'Bell Witch' | 'Blood Incantation' | 'The Body' | 'Chat Pile' | 
'Cloud Rat' | 'Deafheaven' | 'Devil Master' | 'Divide and Dissolve' | 'Emma Ruth Rundle' | 
'Full of Hell' | 'Knoll' | 'Nails' |  'Oathbreaker' | 'Portrayal of Guilt' | 'Primitive Man' | 
'Ragana' | 'Soft Kill' | 'Spectral Wound' | 'Touche Amore' | 'Undeath'

export type Category = 'Apparel' | 'Music' | 'Accessories';

export type Collection = Category | Artist;

export type Item<T> = {
    id: string,
    category: Category,
    productType: T,
    featured: boolean,
    artist: Artist,
    imgs: string[],
    desc: string,
    price: number,
    dateAdded: Date
}

export type Apparel = Item<ApparelProduct> & { 
    color: string, 
    manufacturer: string, 
    material: string 
}

export type Album = Item<MusicProduct> & { 
    albumDesc: string[], 
    tracklist?: string[] 
}

export type Accessory = Item<AccessoryProduct> & { 
    color?: string, 
    manufacturer?: string, 
    material?: string, 
    accessoryDesc?: string 
}

export type Product = Apparel | Album | Accessory;

export type ProductList = Product[];

export type Size = 'Small' | 'Medium' | 'Large' | 'Extra Large' | 'Extra Extra Large';

export type CartItem = {
    product: Album | Apparel | Accessory,
    qty: number,
    size?: Size
}

export type CartAction = {
    type: string,
    payload: CartItem
}

export type SortOption = 'Date - Old to New' | 'Date - New to Old' | 'Alphabetically - A to Z' | 'Alphabetically - Z to A'
| 'Price - High to Low' | 'Price - Low to High';

export type State = 'AL' | 'AK' | 'AZ' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'FL' | 'GA' | 
'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 'MA' | 'MI' | 
'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 'NM' | 'NY' | 'NC' | 'ND' | 
'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 
'WA' | 'WV' | 'WI' | 'WY' | '';

export type MailingAddressInput<T> = {
    value: T,
    error: string
}

export type MailingAddress = {
    firstName: MailingAddressInput<string>,
    lastName: MailingAddressInput<string>,
    streetLine1: MailingAddressInput<string>,
    streetLine2: MailingAddressInput<string>,
    city: MailingAddressInput<string>,
    state: MailingAddressInput<State>,
    zip: MailingAddressInput<string>
}

export type CheckoutFormSection = 'shipping-address' | 'shipping-options' | '';

export type QAndA = {
    question: string,
    answer: string
}

export type ShippingMethod = {
    name: string,
    days: string,
    cost: number
}
