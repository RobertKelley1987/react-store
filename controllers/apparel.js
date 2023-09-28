const fs = require('fs').promises;

const PRODUCT_TYPES = ['t-shirts', 'longsleeves', 'hoodies'];
const COLLECTIONS_LIB = {
    't-shirts': ['T-Shirt'],
    'longsleeves': ['Longsleeve'],
    'hoodies': ['Hoodie']
}

module.exports.findAll = async (req, res) => {
    const apparelJson = await fs.readFile('./data/apparel.json');
    const apparel = JSON.parse(apparelJson);

    const apparelTypes = apparel.map(item => item.productType);
    const uniqueApparelTypes = new Set(apparelTypes);
    res.status(200).send({ collection: apparel, collectionTypes: [...uniqueApparelTypes] });
}

module.exports.findCollection = async (req, res) => {
    const { collectionName } = req.params;

    if(PRODUCT_TYPES.includes(collectionName)) {
        const apparelJson = await fs.readFile('./data/apparel.json');
        const apparel = JSON.parse(apparelJson);
        const apparelTypes = COLLECTIONS_LIB[collectionName];
        const filteredApparel = apparel.filter(item => apparelTypes.includes(item.productType));
        res.status(200).send({ collection: filteredApparel, collectionTypes: apparelTypes });
    } else {
        res.status(200).send({ error: 'Collection not found' });
    }
}

module.exports.findFeatured = async (req, res) => {
    const apparelJson = await fs.readFile('./data/apparel.json');
    const apparel = JSON.parse(apparelJson);
    const featuredApparel = apparel.filter(item => item.featured);

    const apparelTypes = featuredApparel.map(item => item.productType);
    const uniqueApparelTypes = new Set(apparelTypes);
    res.status(200).send({ collection: featuredApparel, collectionTypes: [...uniqueApparelTypes]});
}

module.exports.findById = async (req, res) => {
    const { id } = req.params;
    const apparelJson = await fs.readFile('./data/apparel.json');
    const apparel = JSON.parse(apparelJson);
    const foundItem = apparel.find(item => item.id === id);
    res.status(200).send({ item: foundItem });
}