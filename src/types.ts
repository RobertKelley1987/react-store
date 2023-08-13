type Item = {
    id: number,
    productType: 'T-Shirt' | 'Longsleeve' | 'Hat' | 'Hoodie' | 'LP' | '2XLP',
    band: 'Agriculture' | 'Deafheaven' | 'Blood Incantation' | 'Chat Pile' | 'Nails',
    imgs: string[],
    desc: string,
    price: number
}

type Apparel = Item & { color: string, manufacturer: string, material: string }

type Album = Item & { albumDesc: string }

export type Product = Apparel | Album;

export type ProductList = Product[];