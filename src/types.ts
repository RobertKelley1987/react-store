export type ApparelProduct = 'T-Shirt' | 'Longsleeve' |'Hoodie'
export type MusicProduct = 'LP' | '2XLP' | '12"' | 'CD' | '2XCD' | 'Tape'
export type AccessoryProduct = 'Cap' | 'Beanie' | 'Enamel Pin' | 'Patch' | 'Tote Bag'

export type ProductType = ApparelProduct | MusicProduct | AccessoryProduct;

export type Artist = 'Agriculture' | 'Bell Witch' | 'Blood Incantation' | 'The Body' | 'Chat Pile' | 
'Cloud Rat' | 'Deafheaven' | 'Devil Master' | 'Divide and Dissolve' | 'Emma Ruth Rundle' | 
'Full of Hell' | 'Knoll' | 'Nails' |  'Oathbreaker' | 'Portrayal of Guilt' | 'Primitive Man' | 
'Ragana' | 'Soft Kill' | 'Spectral Wound' | 'Touché Amoré' | 'Undeath'

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

export type SortOption = 'Date - Old to New' | 'Date - New to Old' | 'Artist Name - A to Z' | 'Artist Name - Z to A'
| 'Price - High to Low' | 'Price - Low to High';