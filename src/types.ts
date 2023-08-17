type Item = {
    id: string,
    featured: boolean,
    productType: 'T-Shirt' | 'Longsleeve' | 'Hat' | 'Hoodie' | 'LP' | '2XLP',
    band: 'Agriculture' | 'Deafheaven' | 'Blood Incantation' | 'Chat Pile' | 'Nails' | 
    'Bell Witch' | 'The Body' | 'Ragana' | 'Knoll' | 'Cloud Rat',
    imgs: string[],
    desc: string,
    price: number,
    dateAdded: Date
}

type Apparel = Item & { color: string, manufacturer: string, material: string }

type Album = Item & { albumDesc: string }

export type Product = Apparel | Album;

export type ProductList = Product[];