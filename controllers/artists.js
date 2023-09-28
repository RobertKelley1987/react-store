const fs = require('fs').promises;

const ARTISTS = [
    'agriculture', 'bell-witch', 'blood-incantation', 'the-body', 'chat-pile', 'cloud-rat', 
    'deafheaven', 'devil-master', 'divide-and-dissolve', 'emma-ruth-rundle', 'full-of-hell', 
    'knoll', 'nails', 'oathbreaker', 'portrayal-of-guilt', 'primitive-man', 'ragana', 'soft-kill', 
    'spectral-wound', 'touche-amore', 'undeath'
];

const ARTIST_NAME_LIB = {
    'agriculture': 'Agriculture',
    'bell-witch': 'Bell Witch',
    'blood-incantation': 'Blood Incantation',
    'the-body': 'The Body',
    'chat-pile': 'Chat Pile',
    'cloud-rat': 'Cloud Rat',
    'deafheaven': 'Deafheaven',
    'devil-master':  'Devil Master',
    'divide-and-dissolve': 'Divide and Dissolve',
    'emma-ruth-rundle': 'Emma Ruth Rundle',
    'full-of-hell': 'Full of Hell',
    'knoll': 'Knoll',
    'nails': 'Nails',
    'oathbreaker': 'Oathbreaker',
    'portrayal-of-guilt': 'Portrayal of Guilt',
    'primitive-man': 'Primitive Man',
    'ragana': 'Ragana',
    'soft-kill': 'Soft Kill',
    'spectral-wound': 'Spectral Wound',
    'touche-amore': 'Touche Amore',
    'undeath': 'Undeath'
}

module.exports.findByName = async (req, res) => {
    const { name } = req.params;

    if(ARTISTS.includes(name)) {
        // Filter by artist name
        const productsJson = await fs.readFile('./data/products.json');
        const products = JSON.parse(productsJson);
        const artist = ARTIST_NAME_LIB[name];
        const artistProducts = products.filter(product => product.artist === artist);

        // Get unique types in list
        const categories = artistProducts.map(item => item.category);
        const uniqueCategories = new Set(categories);
        res.status(200).send({ collection: artistProducts, categories: [...uniqueCategories] });
    } else {
        res.status(200).send({ error: 'Collection not found' });
    }
}