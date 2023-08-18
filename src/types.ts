type Item = {
    id: string,
    category: 'music' | 'apparel' | 'accessories'
    featured: boolean,
    productType: 'T-Shirt' | 'Longsleeve' | 'Hat' | 'Hoodie' | 'LP' | '2XLP',
    band: 'Agriculture' | 'Deafheaven' | 'Blood Incantation' | 'Chat Pile' | 'Nails' | 
    'Bell Witch' | 'The Body' | 'Ragana' | 'Knoll' | 'Cloud Rat',
    imgs: string[],
    desc: string,
    price: number,
    dateAdded: Date
}

export type Apparel = Item & { color: string, manufacturer: string, material: string }

export type Accessory = Item & { color: string, manufacturer: string, material: string }

export type Album = Item & { albumDesc: string }

export type Product = Apparel | Album | Accessory;

export type ProductList = Product[];

export type Size = 'Small' | 'Medium' | 'Large' | 'Extra Large' | 'Extra Extra Large';

export type AccessoryCartItem = {
    product: Accessory,
    qty: number
}

export type ApparelCartItem = {
    product: Apparel,
    qty: number,
    size: Size
}

export type ApparelCartAction = {
    type: string,
    payload: ApparelCartItem
}

export type MusicCartItem = {
    product: Album,
    qty: number
}

export type MusicCartAction = {
    type: string,
    payload: MusicCartItem
}