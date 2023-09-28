const fs = require('fs').promises;

// All possible accessory product types
const PRODUCT_TYPES = ['hats', 'bags', 'pins', 'patches'];
// The product types contained in each collection.
const COLLECTIONS_LIB = {
    'hats': ['Beanie', 'Cap'],
    'pins': ['Enamel Pin'],
    'bags': ['Tote Bag'],
    'patches': ['Patch']
}

// Get all accessories
module.exports.findAll = async (req, res) => {
    const accessoriesJson = await fs.readFile('./data/accessories.json');
    const accessories = JSON.parse(accessoriesJson);

    const accessoryTypes = accessories.map(item => item.productType);
    const uniqueAccessoryTypes = new Set(accessoryTypes);
    res.status(200).send({ collection: accessories, collectionTypes: [...uniqueAccessoryTypes] });
}

// Find a collection of accessories by its name.
// Returns the collection and the any types needed for filtering.
// Ex: 'Hats' collection has beanies and caps, and user can filter by those types.
module.exports.findCollection = async (req, res) => {
    const { collectionName } = req.params;

    if(PRODUCT_TYPES.includes(collectionName)) {
        const accessoriesJson = await fs.readFile('./data/accessories.json');
        const accessories = JSON.parse(accessoriesJson);
        const accessoryTypes = COLLECTIONS_LIB[collectionName];
        const filteredAccessories = accessories.filter(item => accessoryTypes.includes(item.productType));
        res.status(200).send({ collection: filteredAccessories, collectionTypes: accessoryTypes });
    } else {
        res.status(200).send({ error: 'Collection not found' });
    }
}

// Find one accessory by its id.
module.exports.findById = async (req, res) => {
    const { id } = req.params;
    const accessoriesJson = await fs.readFile('./data/accessories.json');
    const accessories = JSON.parse(accessoriesJson);
    const foundItem = accessories.find(item => item.id === id);
    res.status(200).send({ item: foundItem });
}