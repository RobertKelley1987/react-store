const fs = require('fs').promises;

const PRODUCT_TYPES = ['hats', 'bags', 'pins', 'patches'];
const COLLECTIONS_LIB = {
    'hats': ['Beanie', 'Cap'],
    'pins': ['Enamel Pin'],
    'bags': ['Tote Bag'],
    'patches': ['Patch']
}

module.exports.findAll = async (req, res) => {
    const accessoriesJson = await fs.readFile('./data/accessories.json');
    const accessories = JSON.parse(accessoriesJson);

    const accessoryTypes = accessories.map(item => item.productType);
    const uniqueAccessoryTypes = new Set(accessoryTypes);
    res.status(200).send({ collection: accessories, collectionTypes: [...uniqueAccessoryTypes] });
}

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

module.exports.findById = async (req, res) => {
    const { id } = req.params;
    const accessoriesJson = await fs.readFile('./data/accessories.json');
    const accessories = JSON.parse(accessoriesJson);
    const foundItem = accessories.find(item => item.id === id);
    res.status(200).send({ item: foundItem });
}