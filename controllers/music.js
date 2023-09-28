const fs = require('fs').promises;

// All possible accessory product types
const PRODUCT_TYPES = ['vinyl', 'cds', 'tapes'];
// The product types contained in each collection.
const COLLECTIONS_LIB = {
    'vinyl': ['LP', '2XLP'],
    'cds': ['CD', '2XCD'],
    'tapes': ['Tape']
}

// Returns all items in the music category and all product types required
// for filtering.
module.exports.findAll = async (req, res) => {
    const musicJson = await fs.readFile('./data/music.json');
    const music = JSON.parse(musicJson);
    const musicTypes = music.map(item => item.productType);
    const uniqueMusicTypes = new Set(musicTypes);
    res.status(200).send({ collection: music, collectionTypes: [...uniqueMusicTypes] });
}

// Returns collection of music products and any product types needed for filtering.
module.exports.findCollection = async (req, res) => {
    const { collectionName } = req.params;

    if(PRODUCT_TYPES.includes(collectionName)) {
        const musicJson = await fs.readFile('./data/music.json');
        const music = JSON.parse(musicJson);
        const musicTypes = COLLECTIONS_LIB[collectionName];
        const filteredMusic = music.filter(item => musicTypes.includes(item.productType));
        res.status(200).send({ collection: filteredMusic, collectionTypes: musicTypes });
    } else {
        res.status(200).send({ error: 'Collection not found' });
    }
}

// Returns all music products labeled as 'featured' and any product types
// required for filtering.
module.exports.findFeatured = async (req, res) => {
    const musicJson = await fs.readFile('./data/music.json');
    const music = JSON.parse(musicJson);
    const featuredMusic = music.filter(item => item.featured);
    const musicTypes = featuredMusic.map(item => item.productType);
    const uniqueMusicTypes = new Set(musicTypes);
    res.status(200).send({ collection: featuredMusic, collectionTypes: [...uniqueMusicTypes]});
}

// Find a music product by its id.
module.exports.findById = async (req, res) => {
    const { id } = req.params;
    const musicJson = await fs.readFile('./data/music.json');
    const music = JSON.parse(musicJson);
    const foundItem = music.find(item => item.id === id);
    res.status(200).send({ item: foundItem });
}