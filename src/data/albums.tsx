import { Album } from '../types';
import { paginate, sortByDateAdded } from '../utils';

export const albums: Album[] = [
    {
        id: 'agriculture-agriculture-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Agriculture',
        imgs: ['agriculture_agriculture-lp_1', 'agriculture_agriculture-lp_2'],
        desc: 'Agriculture',
        price: 21.99,
        dateAdded: new Date(2023, 5, 10),
        albumDesc: 'For something to be “ecstatic,” the feelings and emotions it evokes must transcend' +
        ' what we tend to experience most regularly in our lives. Ecstatic joy isn’t just happiness;' +
        ' it’s a feeling of jubilation which impacts us emotionally and in a metaphysical, arguably' +
        ' spiritual sense too. Although it has long been associated with connotations of the dark and' +
        ' macabre, extreme music has the ability to be a powerful mode of expression for these feelings' +
        ' of absolute bliss, overwhelming love, and awe-inspiring sublimity. Extreme emotions no less and' + 
        ' those which black metal quartet Agriculture evokes with its ecstatic subversion of the subgenre’s' +
        ' tropes.\n\n' +

        ' What was initially a meeting and subsequent series of jam sessions between Kern Haug and Daniel Meyer,' + 
        ' two musicians in the Los Angeles underground noise scene, would eventually manifest as a shared vision' + 
        ' to portray the sublimity of the human experience through the vehicle of heavy music. Following the' +
        ' additions of veteran guitarist Richard Chowenhill and bassist/vocalist Leah Levinson to the band’s lineup,' + 
        ' this idea would crystalize into the “ecstatic black metal” backbone of Agriculture’s music, first heard on' 
        + 'the band’s 2022 debut EP, The Circle Chant.\n\n' +

        'With Agriculture’s self-titled record and first full-length LP, it’s abundantly clear that the band’s' + 
        ' use of heavy music to showcase the most resplendent emotions and moments of the human experience has' +
        ' a far deeper meaning. Woven between the flurries of soaring tremolo picking, crescendoing guitar' +
        ' harmonies, celebratory screamed vocals, thoughtful improvisation, and meditative atmospheric passages' + 
        ' is the record’s mission statement to experience the wonders and joys of both the esoteric and physical' + 
        ' world. From examinations of self-acceptance, identity, and finding strength in others on “Look Pt.2” to' +
        ' depictions of deep communion with nature, the self, and the people we surround ourselves with in “The' + 
        ' Glory of the Ocean” and “The Well”, the concepts and thematic questions previously planted by the band' + 
        ' have blossomed into powerful, fully-realized artistic and philosophical statements. To put it in the band’s' + 
        ' words, “...Where The Circle Chant is like a finger pointing at the moon, the self-titled LP is like a whole' + 
        ' body screaming at it with reverence.” Through the extreme splendor of ecstatic black metal and the' +
        ' improvisational, experimental, and cathartic elements it embodies, Agriculture illustrates these otherwise' + 
        ' incomprehensible questions with a poignant beauty that makes its music as much of an artistic statement as it' + 
        ' is a transcendental experience.'
    },
    {
        id: 'blood-incantation-interdimensional-extinction-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Blood Incantation',
        imgs: [
            'blood-incantation_interdimensional-extinction-lp_1', 
            'blood-incantation_interdimensional-extinction-lp_2', 
            'blood-incantation_interdimensional-extinction-lp_3'
        ],
        desc: 'Interdimensional Extinction',
        price: 21.99,
        dateAdded: new Date(2015, 7, 13),
        albumDesc: ''
    },
    {
        id: 'blood-incantation-interdimensional-extinction-cd',
        category: 'music',
        featured: false,
        productType: 'CD',
        band: 'Blood Incantation',
        imgs: ['blood-incantation_interdimensional-extinction-lp_1'],
        desc: 'Interdimensional Extinction',
        price: 14.99,
        dateAdded: new Date(2015, 7, 13),
        albumDesc: ''
    },
    {
        id: 'blood-incantation-starspawn-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Blood Incantation',
        imgs: ['blood-incantation_starspawn-lp'],
        desc: 'Starspawn',
        price: 21.99,
        dateAdded: new Date(2016, 7, 13),
        albumDesc: 'After signing with the label prior to the August 2015' + 
        ' release of the Interdimensional Extinction EP, BLOOD INCANTATION' + 
        ' returns with a 30-minute cerebral whirlwind of powerful atmospheric' + 
        ' death metal. The intense and otherworldly technical/ambient/funeral' + 
        ' death metal of Starspawn leaves the listener feeling transcendentally' + 
        ' disembodied at the end of an unknown dimension.\n\n' +

        'Produced entirely in analog, the energy and magnetism of live BLOOD' + 
        ' INCANTATION is tangibly melting through the speakers, and the songwriting,' + 
        ' production and performance constellations have all fully aligned.' +
        
        'With appearances at California Death Fest and Covenant Festival (Canada)' +
        ' already on the horizon, and an even more extensive US tour this September,' + 
        ' the worldwide spread of the BLOOD INCANTATION tentacles into all orbits is' + 
        ' as inevitable as your own death and this galaxy\'s violent collapse.'
    },
    {
        id: 'blood-incantation-starspawn-cd',
        category: 'music',
        featured: false,
        productType: 'CD',
        band: 'Blood Incantation',
        imgs: ['blood-incantation_starspawn-lp'],
        desc: 'Starspawn',
        price: 14.99,
        dateAdded: new Date(2016, 7, 13),
        albumDesc: 'After signing with the label prior to the August 2015' + 
        ' release of the Interdimensional Extinction EP, BLOOD INCANTATION' + 
        ' returns with a 30-minute cerebral whirlwind of powerful atmospheric' + 
        ' death metal. The intense and otherworldly technical/ambient/funeral' + 
        ' death metal of Starspawn leaves the listener feeling transcendentally' + 
        ' disembodied at the end of an unknown dimension.\n\n' +

        'Produced entirely in analog, the energy and magnetism of live BLOOD' + 
        ' INCANTATION is tangibly melting through the speakers, and the songwriting,' + 
        ' production and performance constellations have all fully aligned.' +
        
        'With appearances at California Death Fest and Covenant Festival (Canada)' +
        ' already on the horizon, and an even more extensive US tour this September,' + 
        ' the worldwide spread of the BLOOD INCANTATION tentacles into all orbits is' + 
        ' as inevitable as your own death and this galaxy\'s violent collapse.'
    },
    {
        id: 'blood-incantation-hidden-history-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Blood Incantation',
        imgs: [
            'blood-incantation_hidden-history-lp_1', 
            'blood-incantation_hidden-history-lp_2', 
            'blood-incantation_hidden-history-lp_3', 
            'blood-incantation_hidden-history-lp_4'
        ],
        desc: 'Hidden History of the Human Race',
        price: 21.99,
        dateAdded: new Date(2019, 10, 22),
        albumDesc: 'With “Hidden History of the Human Race”, Denver, Colorado’s cosmic' + 
        ' death metallers BLOOD INCANTATION present the successor to one of the most talked' + 
        ' about death metal debuts in recent years, 2016’s “Starspawn”. A cerebral whirlwind' + 
        ' of intense and otherworldly atmospheric death metal, “Starspawn” took the underground' + 
        ' Death Metal world by storm and is about to be topped by the quartet’s second offering.' + 
        ' BLOOD INCANTATION have excelled themselves at crafting a dynamic foray into the realms' + 
        ' of progressive, brutal & strangely melodic death metal, all recorded analogue at World' + 
        ' Famous Studios. Accompanied by stunning art by sci-fi legend Bruce Pennington, “HHofHR”' + 
        ' is the manifest of a band destined to top many year’s end lists!'
    },
    {
        id: 'blood-incantation-hidden-history-cd',
        category: 'music',
        featured: false,
        productType: 'CD',
        band: 'Blood Incantation',
        imgs: ['blood-incantation_hidden-history-lp_1'],
        desc: 'Hidden History of the Human Race',
        price: 15.99,
        dateAdded: new Date(2019, 10, 22),
        albumDesc: 'With “Hidden History of the Human Race”, Denver, Colorado’s cosmic' + 
        ' death metallers BLOOD INCANTATION present the successor to one of the most talked' + 
        ' about death metal debuts in recent years, 2016’s “Starspawn”. A cerebral whirlwind' + 
        ' of intense and otherworldly atmospheric death metal, “Starspawn” took the underground' + 
        ' Death Metal world by storm and is about to be topped by the quartet’s second offering.' + 
        ' BLOOD INCANTATION have excelled themselves at crafting a dynamic foray into the realms' + 
        ' of progressive, brutal & strangely melodic death metal, all recorded analogue at World' + 
        ' Famous Studios. Accompanied by stunning art by sci-fi legend Bruce Pennington, “HHofHR”' + 
        ' is the manifest of a band destined to top many year’s end lists!'
    },
    {
        id: 'blood-incantation-timewave-zero-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Blood Incantation',
        imgs: ['blood-incantation_timewave-zero-lp'],
        desc: 'Timewave Zero',
        price: 21.99,
        dateAdded: new Date(2022, 0, 2),
        albumDesc: 'Spawned in the Fall of 2011, Cosmic Death Metal initiates BLOOD INCANTATION,' + 
        ' spent the past decade establishing a reputation for creating powerful Athmospheric Death' + 
        ' Metal with progressive elements, while gradually incorporating more Psychedelic & Ambient' + 
        ' components with each new release. The inevitable zenith of these increasingly exploratory' + 
        ' excursions was finally reached during the summer of 2021 and captured once again on analog' + 
        ' tape at World Famous Studios in Denver, Colorado.\n\n' +

        'Epitomizing their Cosmic essence and Experimental nature, this new recording reveals an' + 
        ' alternate dimension for experiencing the mind-bending songwriting of BLOOD INCANTATION´s' + 
        ' dense & otherworldly sonic landscapes: Beyond the limitations of genre and free to travel' + 
        ' among the stars.\n\n' +
        
        'Echoes of TANGERINE DREAM, PINK FLOYD, LUSTMORD, POPOL VUH & DEAD CAN DANCE synthesize in' + 
        ' an archaic planetarium soundtrack, taking the listener on a cinematic journey through the' + 
        ' Stargate, into the vast darkness of Outer Space, and beyond the infinite transcendental' + 
        ' luminosity of the Mind´s Eye.'
    },
    {
        id: 'blood-incantation-timewave-zero-cd',
        category: 'music',
        featured: true,
        productType: 'CD',
        band: 'Blood Incantation',
        imgs: ['blood-incantation_timewave-zero-lp'],
        desc: 'Timewave Zero',
        price: 18.99,
        dateAdded: new Date(2022, 0, 2),
        albumDesc: 'Spawned in the Fall of 2011, Cosmic Death Metal initiates BLOOD INCANTATION,' + 
        ' spent the past decade establishing a reputation for creating powerful Athmospheric Death' + 
        ' Metal with progressive elements, while gradually incorporating more Psychedelic & Ambient' + 
        ' components with each new release. The inevitable zenith of these increasingly exploratory' + 
        ' excursions was finally reached during the summer of 2021 and captured once again on analog' + 
        ' tape at World Famous Studios in Denver, Colorado.\n\n' +

        'Epitomizing their Cosmic essence and Experimental nature, this new recording reveals an' + 
        ' alternate dimension for experiencing the mind-bending songwriting of BLOOD INCANTATION´s' + 
        ' dense & otherworldly sonic landscapes: Beyond the limitations of genre and free to travel' + 
        ' among the stars.\n\n' +
        
        'Echoes of TANGERINE DREAM, PINK FLOYD, LUSTMORD, POPOL VUH & DEAD CAN DANCE synthesize in' + 
        ' an archaic planetarium soundtrack, taking the listener on a cinematic journey through the' + 
        ' Stargate, into the vast darkness of Outer Space, and beyond the infinite transcendental' + 
        ' luminosity of the Mind´s Eye.'
    },
    {
        id: 'chat-pile-this-dungeon-earth-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Chat Pile',
        imgs: ['chat-pile_this-dungeon-earth-lp_1', 'chat-pile_this-dungeon-earth-lp_2'],
        desc: 'This Dungeon Earth / Remove Your Skin Please',
        price: 21.99,
        dateAdded: new Date(2021, 4, 15),
        albumDesc: 'Throughout parts of the mid-western United States lie towering mounds' + 
        ' of the waste residue from early 20th Century lead mining operations. Comprised of' +
        ' what is known as "chat," these hills of toxic, metallic dust dot the countryside' + 
        ' as if they were headstones for communities destroyed by industrialization such as' +
        ' Picher, Oklahoma. These effigies would come to be the namesake for the Oklahoma' +
        ' based band, Chat Pile, whose grotesque and pummeling brand of noise rock has managed' + 
        ' to terrorize listeners worldwide in only a matter of months.'
    },
    {
        id: 'chat-pile-gods-country-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Chat Pile',
        imgs: ['chat-pile_gods-country-lp_1', 'chat-pile_gods-country-lp_2'],
        desc: 'God\'s Country',
        price: 21.99,
        dateAdded: new Date(2022, 6, 20),
        albumDesc: 'There\'s a sick irony to how a country that extols rhetoric of individual' + 
        ' freedom, in the same gasp, has no problem commodifying human life as if it were meat' + 
        ' to feed the insatiable hunger of capitalism. If this is American nihilism taken to its' + 
        ' absolute zenith, then God\'s Country, the first full length record from Oklahoma City noise' +
        ' rock quartet Chat Pile is the aural embodiment of such a concept.\n\n' +

        'Having lived alongside the heaps of toxic refuse that the band derives its name from, the' + 
        ' fatalism of daily life in the American Midwest permeates throughout the works of Chat Pile,' + 
        ' and especially so on its debut LP. Exasperated by the pandemic, the hopelessness of climate' + 
        ' change, the cattle shoot of global capitalism, and fueled by “...lots and lots and lots and' + 
        ' lots and lots and lots of THC,” God\'s Country is as much of an acknowledgement of the Earth\'s' +
        ' most assured demise as it is a snarling violent act of defiance against it. Within its over 40' +
        ' minute runtime, God\'s Country displays both Chat Pile\'s most aggressively unhinged and' +
        ' contemplatively nuanced moments to date, drawing from its preceding two EPs and its score for' + 
        ' the 2021 film, Tenkiller. In the band\'s own words, the album is, at its heart, “Oklahoma\'s' + 
        ' specific brand of misery.” A misery intent on taking all down with it and its cacophonous' + 
        ' chaos on its own terms as opposed to idly accepting its otherwise assured fall. This is what' + 
        ' the end of the world sounds like. God\'s Country is out via The Flenser.\n\n' +

        'In just a couple of years, Oklahoma City\'s Chat Pile has made nothing short of a profound' + 
        ' impression on the underground music discourse. Formed in the spring of 2019 by Raygun Busch' + 
        ' (vocals), Luther Manhole (Guitar), Stin (Bass), and Captain Ron (Drums), the noise-rock quartet' + 
        ' would release two EPs that same year, titled This Dungeon Earth and Remove Your Skin Please' + 
        ' respectively. Spurred on by both a hearty run of live performances and a swiftly growing online' + 
        ' fanbase, Chat Pile became a staple name among its genre contemporaries thanks to its hellish' + 
        ' synthesis of noise rock, sludge, industrial, and mid 90\'s nu-metal. In 2020, the band would sign' + 
        ' with San Francisco underground music label, The Flenser, to put out its upcoming full length debut.' + 
        ' That following year, Chat Pile kept its roll going, with accolades including composing the score' + 
        ' for the indie film, Tenkiller, as well as releasing a 7” split with portrayal of guilt in the summer.' + 
        ' Despite its creation only a couple of years ago, Chat Pile has already played alongside a number of' + 
        ' acclaimed underground acts, including Street Sects, portrayal of guilt, Psychic Graveyard and Distorted' + 
        ' Pony .'
    },
    {
        id: 'chat-pile-tenkiller-soundtrack-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Chat Pile',
        imgs: ['chat-pile_tenkiller-soundtrack-lp_1', 'chat-pile_tenkiller-soundtrack-lp_2'],
        desc: 'Tenkiller: Motion Picture Soundtrack',
        price: 26.99,
        dateAdded: new Date(2023, 4, 12),
        albumDesc: 'Oklahoma’s Chat Pile have had an exciting 2022; they released' + 
        ' their albumGod’s Country, toured the midwest and east coast in support of' + 
        ' the album, announced their appearance at Roadburn Festival 2023, and while' + 
        ' the band is working on LP2, they\'re revealing details for their score for' + 
        ' the indie filmTenkiller.\n\n' +

        'While not a proper full-length album, theTenkiller score was written and' + 
        ' recorded in the winter of 2020, and it waxes and wanes from the signature' + 
        ' Chat Pile sound but also ventures into new ones— including arena country' +
        ' music.\n\n' +
        
        'The band comments, “The music we made forTenkiller is quite a bit different' +
        ' than what you may come to expect from us. We were given the freedom to really' + 
        ' experiment and explore territories that we’ve never done before.” They continue,' + 
        ' “It’s not going to be for everyone, but we hope some of you connect with what we' + 
        ' set out to do.'
    },
    {
        id: 'deafheaven-roads-to-judah-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Deafheaven',
        imgs: ['deafheaven_roads-to-judah-lp'],
        desc: 'Roads To Judah',
        price: 23.99,
        dateAdded: new Date(2011, 6, 10),
        albumDesc: 'Released via DEATHWISH RECORDS in April 2011.'
    },
    {
        id: 'deafheaven-sunbather-lp',
        category: 'music',
        featured: true,
        productType: '2XLP',
        band: 'Deafheaven',
        imgs: [
            'deafheaven_sunbather-lp_1', 
            'deafheaven_sunbather-lp_2', 
            'deafheaven_sunbather-lp_3', 
            'deafheaven_sunbather-lp_4'
        ],
        desc: 'Sunbather',
        price: 34.99,
        dateAdded: new Date(2013, 5, 13),
        albumDesc: 'Recorded and engineered by Jack Shirley (Funeral Diner, Comadre) and designed by Nick Steinhardt' +
        ' (Touche Amore) "Sunbather" deals with the profound sadness found in the quest for one\'s personal perfection.' + 
        ' Serving as an artistic lucid dream of warmth despite the stinging pain of life\'s cruel idealism\n\n.' +

        'With opener "Dream House" George Clarke\'s tortured vocals familiarly intertwine with Kerry McCoy\'s hypnotic' + 
        ' guitar work before crashing into a wash of post-everything melody. This leads to the moving instrumental' +
        ' "Irresistible" a track that carries a twisted indie-like sensibility buried beneath glittery layers of guitar' + 
        ' and piano. However it is in the title track and beyond where the maturation and growth of Deafheaven brightly' + 
        ' shines. In "Sunbather" they explore sonic peaks and valleys created by superb percussionist Daniel Tracy (new' + 
        ' to the band for this recording). His inclusion brings new dynamics to light as an urgent pulse to the swirling' +
        ' musical chaos. Pushing bleak epic "Vertigo" and the dark emotional closer "The Pecan Tree" to new, awe-inducing' +
        ' heights.\n\n' +
        
        'Without question "Sunbather" is Deafheaven at the peak of their creative strength and vision of their young' + 
        ' existence. A masterfully crafted work of art that will be renowned for years to come.'
    },
    {
        id: 'deafheaven-sunbather-cd',
        category: 'music',
        featured: true,
        productType: 'CD',
        band: 'Deafheaven',
        imgs: ['deafheaven_sunbather-lp_1'],
        desc: 'Sunbather',
        price: 14.99,
        dateAdded: new Date(2013, 5, 13),
        albumDesc: 'Recorded and engineered by Jack Shirley (Funeral Diner, Comadre) and designed by Nick Steinhardt' +
        ' (Touche Amore) "Sunbather" deals with the profound sadness found in the quest for one\'s personal perfection.' + 
        ' Serving as an artistic lucid dream of warmth despite the stinging pain of life\'s cruel idealism\n\n.' +

        'With opener "Dream House" George Clarke\'s tortured vocals familiarly intertwine with Kerry McCoy\'s hypnotic' + 
        ' guitar work before crashing into a wash of post-everything melody. This leads to the moving instrumental' +
        ' "Irresistible" a track that carries a twisted indie-like sensibility buried beneath glittery layers of guitar' + 
        ' and piano. However it is in the title track and beyond where the maturation and growth of Deafheaven brightly' + 
        ' shines. In "Sunbather" they explore sonic peaks and valleys created by superb percussionist Daniel Tracy (new' + 
        ' to the band for this recording). His inclusion brings new dynamics to light as an urgent pulse to the swirling' +
        ' musical chaos. Pushing bleak epic "Vertigo" and the dark emotional closer "The Pecan Tree" to new, awe-inducing' +
        ' heights.\n\n' +
        
        'Without question "Sunbather" is Deafheaven at the peak of their creative strength and vision of their young' + 
        ' existence. A masterfully crafted work of art that will be renowned for years to come.'
    },
    {
        id: 'deafheaven-new-bermuda-lp',
        category: 'music',
        featured: false,
        productType: '2XLP',
        band: 'Deafheaven',
        imgs: [
            'deafheaven_new-bermuda-lp_1', 
            'deafheaven_new-bermuda-lp_2', 
            'deafheaven_new-bermuda-lp_3', 
            'deafheaven_new-bermuda-lp_4'
        ],
        desc: 'New Bermuda',
        price: 28.99,
        dateAdded: new Date(2015, 9, 3),
        albumDesc: 'Released via ANTI-RECORDS.'
    },
    {
        id: 'deafheaven-new-bermuda-cd',
        category: 'music',
        featured: false,
        productType: 'CD',
        band: 'Deafheaven',
        imgs: ['deafheaven_new-bermuda-lp_1'],
        desc: 'New Bermuda',
        price: 14.99,
        dateAdded: new Date(2015, 9, 3),
        albumDesc: 'Released via ANTI-RECORDS.'
    },
    {
        id: 'deafheaven-ordinary-corrupt-human-love-lp',
        category: 'music',
        featured: false,
        productType: '2XLP',
        band: 'Deafheaven',
        imgs: [
            'deafheaven_ordinary-corrupt-human-love-lp_1',
            'deafheaven_ordinary-corrupt-human-love-lp_2',
            'deafheaven_ordinary-corrupt-human-love-lp_3',
            'deafheaven_ordinary-corrupt-human-love-lp_4',
            'deafheaven_ordinary-corrupt-human-love-lp_5',
            'deafheaven_ordinary-corrupt-human-love-lp_6'
        ],
        desc: 'Ordinary Corrupt Human Love',
        price: 29.99,
        dateAdded: new Date(2018, 6, 13),
        albumDesc: ''
    },
    {
        id: 'deafheaven-ordinary-corrupt-human-love-cd',
        category: 'music',
        featured: false,
        productType: 'CD',
        band: 'Deafheaven',
        imgs: ['deafheaven_ordinary-corrupt-human-love-lp_1'],
        desc: 'Ordinary Corrupt Human Love',
        price: 14.99,
        dateAdded: new Date(2018, 6, 13),
        albumDesc: ''
    },
    {
        id: 'deafheaven-infinite-granite-lp',
        category: 'music',
        featured: false,
        productType: '2XLP',
        band: 'Deafheaven',
        imgs: ['deafheaven_infinite-granite-lp_1', 'deafheaven_infinite-granite-lp_2'],
        desc: 'Infinite Granite',
        price: 34.99,
        dateAdded: new Date(2021, 7, 20),
        albumDesc: 'Over the course of their first ten years, Deafheaven’s music vacillated between' + 
        ' tormented beauty and harmonic rage—a hybrid of black metal’s malice and shoegaze’s sublime' + 
        ' wall-of-sound. On their fifth album, Infinite Granite, Deafheaven are no longer toying with' + 
        ' the juxtaposition of pitting metallic abrasion against swirling grandeur. Quite the opposite:' + 
        ' Infinite Granite is a bold and brave leap forward, a gorgeous and invigorating album brimming' + 
        ' with style and splendor. In the context of their catalog, it takes on a whole other layer of' + 
        ' defiant beauty.\n\n' + 

        'Across Infinite Granite, vocalist George Clarke showcases a startling vocal range; falsettos,' + 
        ' whispers, multi-part harmonies, and other adventurous vocal treatments, with his trademark black' + 
        ' metal-inspired howls mostly absent. Guitarists Kerry McCoy and Shiv Mehra expand their sonic palette' + 
        ' to include synth textures using them to enrich their astral guitar work rather than outright replace it.' +  
        ' Drummer Daniel Tracy has always been a force to reckon with behind the kit, but where he used to floor' + 
        ' audiences with his speed and stamina, he’s now free to broaden his approach and lay down authoritative' + 
        ' drum patterns that together with bassist Christopher Johnson’s punchy bass lines anchor the band’s lofty' + 
        ' arrangements. The refinement of their sound was further encouraged by producer Justin Meldal-Johnsen' + 
        ' (M83, Paramore, Wolf Alice, Metric), who lent a pop ear to the record. Jack Shirley, who helped produce' + 
        ' every previous Deafheaven album, remained on board to engineer the album at his Atomic Garden East' + 
        ' studio in Oakland, CA along with additional engineering and mixing from nine-time Grammy Award winner' + 
        ' Darrell Thorp (Foo Fighters, Radiohead, Beck). Ultimately, Infinite Granite is Deafheaven’s most' + 
        ' goosebump-inducing album to date.'
    },
    {
        id: 'deafheaven-infinite-granite-cd',
        category: 'music',
        featured: false,
        productType: 'CD',
        band: 'Deafheaven',
        imgs: ['deafheaven_infinite-granite-lp_1'],
        desc: 'Infinite Granite',
        price: 13.99,
        dateAdded: new Date(2021, 7, 20),
        albumDesc: 'Over the course of their first ten years, Deafheaven’s music vacillated between' + 
        ' tormented beauty and harmonic rage—a hybrid of black metal’s malice and shoegaze’s sublime' + 
        ' wall-of-sound. On their fifth album, Infinite Granite, Deafheaven are no longer toying with' + 
        ' the juxtaposition of pitting metallic abrasion against swirling grandeur. Quite the opposite:' + 
        ' Infinite Granite is a bold and brave leap forward, a gorgeous and invigorating album brimming' + 
        ' with style and splendor. In the context of their catalog, it takes on a whole other layer of' + 
        ' defiant beauty.\n\n' + 

        'Across Infinite Granite, vocalist George Clarke showcases a startling vocal range; falsettos,' + 
        ' whispers, multi-part harmonies, and other adventurous vocal treatments, with his trademark black' + 
        ' metal-inspired howls mostly absent. Guitarists Kerry McCoy and Shiv Mehra expand their sonic palette' + 
        ' to include synth textures using them to enrich their astral guitar work rather than outright replace it.' +  
        ' Drummer Daniel Tracy has always been a force to reckon with behind the kit, but where he used to floor' + 
        ' audiences with his speed and stamina, he’s now free to broaden his approach and lay down authoritative' + 
        ' drum patterns that together with bassist Christopher Johnson’s punchy bass lines anchor the band’s lofty' + 
        ' arrangements. The refinement of their sound was further encouraged by producer Justin Meldal-Johnsen' + 
        ' (M83, Paramore, Wolf Alice, Metric), who lent a pop ear to the record. Jack Shirley, who helped produce' + 
        ' every previous Deafheaven album, remained on board to engineer the album at his Atomic Garden East' + 
        ' studio in Oakland, CA along with additional engineering and mixing from nine-time Grammy Award winner' + 
        ' Darrell Thorp (Foo Fighters, Radiohead, Beck). Ultimately, Infinite Granite is Deafheaven’s most' + 
        ' goosebump-inducing album to date.'
    },
    {
        id: 'nails-unsilent-death-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Nails',
        imgs: ['nails_unsilent-death-lp_1', 'nails_unsilent-death-lp_2'],
        desc: 'Unsilent Death',
        price: 21.99,
        dateAdded: new Date(2010, 2, 15),
        albumDesc: 'The 10th Anniversary version is the original ten-song album released in 2010,' + 
        ' with the addition of three songs from their Obscene Humanity 7” and two songs from the original' + 
        ' Unsilent Death recording sessions which were never released or heard, until now. The original' + 
        ' ten tracks from Unsilent Death have not been remixed or remastered. The five additional songs' + 
        ' have been remixed by Kurt Ballou and mastered by Nick Townsend. The LP’s packaging remains true' + 
        ' to the original with the Stoughton gatefold jacket and also includes an 18”x24” poster.'
    },
    {
        id: 'nails-abandon-all-life-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Nails',
        imgs: ['nails_abandon-all-life-lp'],
        desc: 'Abandon All Life',
        price: 21.99,
        dateAdded: new Date(2013, 2, 1),
        albumDesc: 'NAILS is beyond brutality. These grindcore tyrants of the American underground' + 
        ' have triumphantly returned with their 2nd full length "ABANDON ALL LIFE"! Like the bands' + 
        ' debut album: "Unsilent Death, was recorded with CONVERGE\'s Kurt Ballou. These 10 tracks of' + 
        ' barbaric rage have no resemblance to the laughable retro party metal that passes as extreme' + 
        ' music in today\'s world. Abandon All Life viciously carpet bombs the listener with a horrifying' + 
        ' brand of Death/Grind/Hardcore chaos. Bludgeoning beatdowns, grinding blasts, hyper-distorted' + 
        ' vocals, hard-hitting metallic chugs and early death metal riffs intensifies to a climatic end' + 
        ' where the guitars wail and militant drum breakdowns send us marching. With profound hatred,' + 
        ' the howling war cry of ABANDON ALL LIFE shows NAILS as a band without equal in their class.'
    },
    {
        id: 'bell-witch-four-phantoms-lp',
        category: 'music',
        featured: false,
        productType: '2XLP',
        band: 'Bell Witch',
        imgs: [
            'bell-witch_four-phantoms-lp_1', 
            'bell-witch_four-phantoms-lp_2', 
            'bell-witch_four-phantoms-lp_3'
        ],
        desc: 'Four Phantoms',
        price: 34.99,
        dateAdded: new Date(2015, 3, 20),
        albumDesc: 'Four Phantoms is the second studio album by Seattle-based doom metal band Bell Witch.'
    },
    {
        id: 'bell-witch-mirror-reaper-lp',
        category: 'music',
        featured: true,
        productType: '2XLP',
        band: 'Bell Witch',
        imgs: ['bell-witch_mirror-reaper-lp'],
        desc: 'Mirror Reaper',
        price: 29.99,
        dateAdded: new Date(2017, 9, 20),
        albumDesc: 'With their third full-length album, “Mirror Reaper,” Seattle’s doom' +
        ' metal duo BELL WITCH have created a truly enormous work – one continuous 83-minute' + 
        ' piece unfolding as a single track. The album will be released on October 20th by' +
        ' Profound Lore Records.\n\n' +

        'Engineered and mixed by veteran producer Billy Anderson (Swans, Sleep, Neurosis),' + 
        ' the duo of Dylan Desmond (bass, vocals) and Jesse Shreibman (drums, vocals, organ)' + 
        ' have pushed the band’s sound further than it’s ever gone before. While retaining the' + 
        ' monolithic heaviness of their previous releases, “Mirror Reaper” sees the band explore' + 
        ' the more meditative, melancholy, and introspective aspects to their sound through the' + 
        ' introduction of long, lonely organ passages and the return of honorary BELL WITCH member,' + 
        ' vocalist Erik Moggridge (Aerial Ruin), offering a prominent presence. The artwork for' + 
        ' “Mirror Reaper” was painted by Mariusz Lewandowski respectively.\n\n' +
        
        'Formed by Desmond and ex-drummer/vocalist Adrian Guerra, BELL WITCH released their first' + 
        ' self-titled demo in 2011 and partnered with Profound Lore Records for their debut album,' + 
        ' “Longing,” in 2012. The duo’s second LP, the acclaimed “Four Phantoms” (2015) was recognized' + 
        ' as one of doom metal’s triumphs of the year. The band extensively toured in North America and' + 
        ' Europe, securing notable festival appearances (Roadburn, Basilica Soundscape, Sled Island,' + 
        ' Psycho CA).\n\n'
    },
    {
        id: 'bell-witch-futures-shadow-lp',
        category: 'music',
        featured: false,
        productType: '2XLP',
        band: 'Bell Witch',
        imgs: [
            'bell-witch_futures-shadow-lp_1', 
            'bell-witch_futures-shadow-lp_2'        
        ],
        desc: 'Future\'s Shadow Part 1 - The Clandestine Gate',
        price: 29.99,
        dateAdded: new Date(2023, 5, 9),
        albumDesc: 'For their new album,The Clandestine Gate, bassist Dylan Desmond and drummer Jesse' + 
        ' Shreibman exploded Bell Witch\'s bounds. Like 2017\'s laudedMirror Reaper,The Clandestine' + 
        ' Gateis a single 83-minute track -- a composition that pulses and breathes on a filmic timeframe.' +
        ' It constitutes the first chapter in a planned triptych of longform albums, collectively called' +
        ' Future\'s Shadow. "Eventually, the end of the last album will be looped around to the first to' +
        ' make a circle," says Desmond. "It can be continuously looped, like a day cycle. This would be dawn.' +
        ' The next one would be noon. The following one would be sundown, with dawn and sundown both having' + 
        ' something of night."'
    },
    {
        id: 'the-body-christs-redeemers-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'The Body',
        imgs: ['the-body_christs-redeemers-lp'],
        desc: 'Christs, Redeemers',
        price: 27.99,
        dateAdded: new Date(2013, 9, 15),
        albumDesc: 'It has been said by more than a few intrepid listeners that The Body' + 
        ' is the most brutal band on the planet. With ravishing grimness and impenetrable' + 
        ' walls of noise, the duo of Chip King and Lee Buford create music that goes beyond' + 
        ' what is normally considered harsh and violent, advocating a doctrine of misanthropy' + 
        ' to those brave enough to take the plunge. Since their recording career began in' + 
        ' earnest in 2004, The Body has expanded the definition of what it means to be a' + 
        ' metal band, incorporating elements of noise, avant-garde composition, and experimental' + 
        ' electronic music into their crushing doom and searing black metal foundation. Christs,' + 
        ' Redeemers, the duo\'s latest transmission of loathing and revulsion, finds King and' + 
        ' Buford pushing even further into the horrifying unknown.\n\n' +

        'Christs, Redeemers conjures this atmosphere of foreboding and isolation sonically,' + 
        ' lyrically, and visually. The album opens with washes of sound and one forlorn voice' + 
        ' penetrating the ether before launching into the brutal, ghostly dirge of “To Attempt' + 
        ' Openness,” featuring frequent collaborators the Assembly of Light Choir. Unexpected' + 
        ' bursts of noise, generated by guitars and electronics, puncture any sense of comfort' + 
        ' or complacency and eerie samples float from the ether. King and Buford masterfully use' + 
        ' the spectral space between the sounds to create almost unimaginable tension, employing' + 
        ' silence as effectively as they do cacophony. This restraint, the knowledge of when to' + 
        ' punish with volume and when to punish with the absence thereof, bestows the moments of' + 
        ' fury with gravity.\n\n' +
        
        'King\'s screams are the centerpiece of the band\'s aesthetic: panic-stricken and distraught,' + 
        ' constantly on the verge of breaking. His lyrics are no less unhinged. On the album\'s colossal' + 
        ' closer “Bearer of Bad Tidings,” he shrieks “Life worthless and devoid of any meaning…all the' + 
        ' world a grave.” Buford\'s drums act as both a stabilizer and instigator of the madness, at times' + 
        ' pushing the proceedings further into oblivion and others providing a lifeline for the listener' + 
        ' as the guitars and electronics deliberately push you toward the brink.\n\n' +
        
        'The album was recorded at Machines With Magnets in Pawtucket, RI, where The Body has recorded' +
        ' all previous album releases. During the recording process King and Buford play the double role' + 
        ' of players and auteurs, bringing in a diverse group of collaborators, from the aformentioned' + 
        ' Assembly of Light Choir to noise musician Work/Death and Ryan Seaton of Callers, to realize' + 
        ' their hell scapes. They will be touring the US extensively in the fall.\n\n' 
    },
    {
        id: 'the-body-i-shall-die-here-earth-triumphant-lp',
        category: 'music',
        featured: false,
        productType: '2XLP',
        band: 'The Body',
        imgs: ['the-body_i-shall-die-here-earth-triumphant-lp'],
        desc: 'I Shall Die Here / Earth Triumphant',
        price: 29.99,
        dateAdded: new Date(2023, 5, 30),
        albumDesc: 'I Shall Die Here / Earth Triumphant is an expanded edition of the' + 
        ' fourth full-length album by The Body, first released to widespread acclaim, and' + 
        ' terror, in 2014. Sharing their moribund vision with Bobby Krlic, aka The Haxan' + 
        ' Cloak, the tried and true sound of The Body is shred to pieces on I Shall Die' + 
        ' Here, mutilated by process and re-animated in a spectral state by the collaboration.'+
        ' This double album set is expanded with the previously unreleased Earth Triumphant,' + 
        ' a full-length companion album that would become I Shall Die Here, showcasing The' + 
        ' Body\'s brutality in its most primal form. With both albums revisited by The Body and' + 
        ' Seth Manchester at Machines With Magnets and remastered by Matt Colton at Metropolis' + 
        ' Studios, this is the definitive edition of a shocking classic of unbridled bleakness' +
        ' and innovation. Formed by drummer Lee Buford and guitarist Chip King in Little Rock,' +
        ' Arkansas in 1999, The Body soon relocated to Providence, Rhode Island. The duo remained' +
        ' in Providence for a decade before moving west to their current home of Portland, Oregon.' + 
        ' Their debut self-titled album (Moganano, 2003) and on the widely-acclaimed, classification' + 
        ' curtailing of All the Waters of the Earth Turn to Blood (At A Loss, 2011) readied the' + 
        ' band for even more experimentations. The employment of the Assembly of Light Choir\'s' + 
        ' classical chorales on All the Waters, alongside more industrial music techniques such' + 
        ' as vocal sampling and drum programming, prompted RVNG to inquire with King and Buford' + 
        ' which darker corners of the electronic universe they were presumably interested in' +
        ' exploring. The undertaking of I Shall Die Here was aided by Seth Manchester and Keith Souza,' + 
        ' The Body\'s long standing engineer and creative collaborator, and noted producer Bobby Krlic.' + 
        ' Krlic\'s own work as The Haxan Cloak struck a similarly despairing chord to The Body with the' + 
        ' celebrated Excavation (Tri Angle, 2013), itself a minimalist evocation of the afterlife. I' + 
        ' Shall Die Here shares similar nether space with the morbidly deviating darkness of Excavation,' + 
        ' but remains sculpturally frozen in a sort of earthen purgatory. The Body\'s musical approach,' + 
        ' engraved by Buford\'s colossal beats and King\'s mad howl and bass-bladed guitar dirge, became' + 
        ' something even more terrifying with Krlic\'s post-mortem ambiences serving as both baseline and' + 
        ' outer limit. I Shall Die Here sonically serrates the remains of metal\'s already unidentifiable' + 
        ' corpse and splays it amid tormented voices in shadow. This expanded edition gives us a window' + 
        ' into the creation of a classic with the inclusion of its in utero twin, Earth Triumphant.' + 
        ' Recorded as a nearly finished album by Buford and King before The Haxan Cloak\'s transformation,' + 
        ' it stands as a raw statement of intent, the original DNA for what would soon mutate into something' + 
        ' wholly new. Fans of I Shall Die Here will find familiar sonic fragments in a more primitive state -' + 
        ' like seeing an out-of-context photograph of a family member taken well before you knew them - but' + 
        ' the album stands on its own in its minimalist brutality, a natural bridge to what The Body was soon' + 
        ' to become. The Body\'s I Shall Die Here / Earth Triumphant will be released in digital and vinyl' + 
        ' formats on June 30, 2023. On behalf of The Body, The Haxan Cloak, and RVNG Intl., a portion of the' + 
        ' proceeds from this release will benefit Intransitive, an organization that works to advance the cause' + 
        ' of Trans liberation in Arkansas through art, education, advocacy, organizing and culture in order to' + 
        ' create effective systemic change and on-the-ground impact.' 
    },
    {
        id: 'the-body-no-one-deserves-happiness-lp',
        category: 'music',
        featured: true,
        productType: '2XLP',
        band: 'The Body',
        imgs: ['the-body_no-one-deserves-happiness-lp'],
        desc: 'No One Deserves Happiness',
        price: 34.99,
        dateAdded: new Date(2016, 2, 18),
        albumDesc: 'On No One Deserves Happiness, The Body\ns Chip King and Lee Buford' + 
        ' set out to make “the grossest pop album of all time.” The album themes of despair' + 
        ' and isolation are delivered by the unlikely pairing of the Body\'s signature' + 
        ' heaviness and 80s dance tracks. The Body can emote pain like no other band, and' + 
        ' their ability to move between the often strict confines of the metal world and the' + 
        ' electronic music sphere is on full display throughout No One Deserves Happiness, an' + 
        ' album that eludes categorization. More then any of their genre-defying peers, The' + 
        ' Body does it without softening their disparate influences towards a middle ground,' + 
        ' but instead through a beautiful combining of extremes. No One Deserves Happiness is' + 
        ' an album that defies definition and expectations, standing utterly alone.'
    },
    {
        id: 'the-body-i-have-fought-against-it-lp',
        category: 'music',
        featured: false,
        productType: '2XLP',
        band: 'The Body',
        imgs: ['the-body_i-have-fought-against-it-lp'],
        desc: 'I Have Fought Against It But I Can\'t Any Longer',
        price: 34.99,
        dateAdded: new Date(2018, 2, 18),
        albumDesc: 'With each release, the duo of Lee Buford and Chip King' + 
        ' continue to defy the constraints of what it means to be a “heavy”' + 
        ' band, seamlessly combining composition or production approaches' + 
        ' from hip hop, pop, classical, as well as rock and electronica resulting' + 
        ' in a rich and utterly singular sound. Equally at home on festival stages,' + 
        ' art spaces, or in DIY basements, they transcend musical boundaries.' + 
        ' Their ambitious creativity shapes their bleak worldview into propulsive,' + 
        ' affecting, and even danceable music often drenched in distortion. On I' + 
        ' Have Fought Against It, But I Can\'t Any Longer The Body challenged' + 
        ' themselves again by turning their compositional approach on its head,' + 
        ' choosing to build the record on their own samples rather than recording' + 
        ' the basic tracks of drums and guitars and processing those. The results' + 
        ' carry the listener towards the brink of emotional and musical extremes.' + 
        ' I Have Fought Against It… conjures the sublime from an unexpected and' + 
        ' incomparable variety of sounds.'
    },
    {
        id: 'the-body-remixed-lp',
        category: 'music',
        featured: false,
        productType: '2XLP',
        band: 'The Body',
        imgs: ['the-body_remixed-lp'],
        desc: 'Remixed',
        price: 29.99,
        dateAdded: new Date(2019, 9, 15),
        albumDesc: 'The Body was founded by drummer Lee Buford and guitarist/vocalist' + 
        ' Chip King in Fayetteville, AR in 1999. Eventually, the two would move to Boston' + 
        ' and Philadelphia respectively before relocating to Providence and releasing their' + 
        ' first album in 2004. Buford and King took up their now-residence of Portland, OR' + 
        ' in 2012, and have been consistently releasing the most forward-thinking work in' + 
        ' heavy music, both on their own and in collaboration with likeminded artists like' + 
        ' Thou, Full of Hell, Uniform, The Haxan Cloak, The Assembly of Light Choir, Krieg,' + 
        ' Braveyoung, Vampillia, and more. Emblematic of their love for the collaborative' + 
        ' process, The Body chose to celebrate their 20th anniversary with a special limited' + 
        ' double LP of remixes from their previous albums, simply titled Remixed, and including' + 
        ' a deluxe poster cataloguing the nearly 100 shirts the band have printed in their career.' + 
        ' The artists selected to for the remixes include longtime friends, artists who The Body' + 
        ' have influenced or been influenced by, and artists with whom the band share a mutual' + 
        ' respect.'
    },
    {
        id: 'ragana-desolations-flower-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Ragana',
        imgs: ['ragana_desolations-flower-lp_1', 'ragana_desolations-flower-lp_2'],
        desc: 'Desolation\'s Flower',
        price: 24.99,
        dateAdded: new Date(2023, 7, 10),
        albumDesc: 'Ragana is a duo whose members alternate duties on drums,' + 
        ' guitar, and vocals to produce some of the most unique and affecting' + 
        ' dark music in metal today. The two-piece came together in 2011 in' + 
        ' the DIY punk scene of Olympia, WA and are now based in Olympia and' + 
        ' Oakland, CA. In their time together so far, Ragana have self-released' + 
        ' 5 albums and teamed up with genre-favourite Thou for a split release' + 
        ' in 2018. The following year, Ragana released their heralded We Know' + 
        ' That the Heavens Are Empty EP and have quietly been working on new' + 
        ' music ever since. The band signed with The Flenser in late 2022 and' + 
        ' now announce their forthcoming debut LP for the label, Desolation\'s' + 
        ' Flower.\n\n' +

        'On Desolation\'s Flower, Ragana draws upon a number of influences from' +
        ' the flora and fauna of their Pacific Northwest origins to the darkly' + 
        ' nostalgic folk of Mt. Eerie and, yes, their Olympian forebears Wolves' + 
        ' In The Throne Room, synthesizing them into an experimental, highly' + 
        ' idiosyncratic take on black metal. Held together by an intense focus' + 
        ' on raw emotion and haunting atmospherics, Ragana shifts seamlessly' + 
        ' from tender, mesmerizing vocal harmonies to piercing, heart-ripping' + 
        ' screams and back again, yielding music that is heavy, beautiful and' + 
        ' punishing all at once.\n\n' +
        
        'Written over the past few tumultuous years, Desolation’s Flower is the' + 
        ' band\'s most devastating effort to date, containing seven incantations of' + 
        ' loss, rage, pain and hope. Expertly engineered by the masterful Nicholas' + 
        ' Wilbur at the Unknown Studio in Anacortes, Washington (Planning For Burial,' +
        ' drowse, Divide and Dissolve, Have a Nice Life), the album serves as' + 
        ' the culmination of the past decade plus of the band\'s ethos and' + 
        ' execution.\n\n' +
        
        'The album\'s eponymous album opener sets the theme for the record and embodies' + 
        ' the spirit of Ragana: “a hymn of gratitude for queer and trans ancestors,' + 
        ' known or unknown, by blood or affinity, whose joy and survival make our lives' +
        ' possible, and whose memory inspires and helps us resist the tide of increasingly' + 
        ' visible hatred and oppression,” the band explains. Pain mourns and celebrates a' + 
        ' childhood best friend lost to an overdose, excavating beneath shame and sadness,' + 
        ' to stand in the pain and the joy together. Side B opener “DTA,” an acronym for' + 
        ' “Death To America,” starts as a questioning whisper and ends in a crying scream.' + 
        ' The song fuses together the sounds of a riot unfolding in the streets of Oakland,' + 
        ' emphasizing the message that this song is a zeitgeist of the times. Death is an' + 
        ' inspiration for the album from start to finish and the Desolation\'s Flower examines' + 
        ' all facets of it; “Death is a new beginning, just a word to inspire a different' + 
        ' vision of a future,” Ragana comments. Album closer “In the Light of the Burning' + 
        ' World” brings Desolation\'s Flower all together: the final lyric laments “We live' + 
        ' in the light of the burning world,” cascading from rage and survival into catharsis' + 
        ' and compassion.'
    },
    {
        id: 'ragana-you-take-nothing-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Ragana',
        imgs: ['ragana_you-take-nothing-lp'],        
        desc: 'You Take Nothing',
        price: 24.99,
        dateAdded: new Date(2017, 3, 14),
        albumDesc: 'Queer antifascist black metal/doom from so-called Oakland, CA &' + 
        ' Olympia, WA.\n\n' +

        '"You take nothing" was originally Released by An Out Recordings in 2017.'
    },
    {
        id: 'ragana-wash-away-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Ragana',
        imgs: ['ragana_wash-away-lp'],        
        desc: 'Wash Away',
        price: 24.99,
        dateAdded: new Date(2015, 7, 12),
        albumDesc: 'Queer antifascist black metal/doom from so-called Oakland, CA &' + 
        ' Olympia, WA.\n\n' +

        '"Wash Away" was originally Released by An Out Recordings in 2015.'
    },
    {
        id: 'knoll-metempiric-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Knoll',
        imgs: ['knoll_metempiric-lp_1', 'knoll_metempiric-lp_2'],        
        desc: 'Metempiric',
        price: 24.99,
        dateAdded: new Date(2022, 5, 24),
        albumDesc: ''
    },
    {
        id: 'cloud-rat-cloud-rat-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Cloud Rat',
        imgs: ['cloud-rat_cloud-rat-lp'],        
        desc: 'Cloud Rat',
        price: 28.99,
        dateAdded: new Date(2022, 0, 15),
        albumDesc: 'A new version of Cloud Rat\'s incredible debut, remastered with some' + 
        ' re-records, new cover art, and including a bonus insert. A new version of Cloud' + 
        ' Rat\'s incredible debut, remastered with some re-records, new cover art, and' + 
        ' including a bonus insert. Pressed on black vinyl.'
    },
    {
        id: 'cloud-rat-do-not-let-me-off-the-cliff-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Cloud Rat',
        imgs: ['cloud-rat_do-not-let-me-off-the-cliff-lp'],        
        desc: 'Do Not Let Me Off The Cliff',
        price: 29.99,
        dateAdded: new Date(2019, 8, 12),
        albumDesc: 'Cloud Rat finally releases a vinyl edition of the now-extended Cliff' + 
        ' release. Black vinyl edition of the first ever vinyl of the now-extended Cliff' + 
        ' release. This deluxe edition is fully remastered and contains three bonus tracks' + 
        ' that were not available on the original CD. Comes with a wild art insert.'
    },
    {
        id: 'cloud-rat-threshold-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Cloud Rat',
        imgs: ['cloud-rat_threshold-lp'],        
        desc: 'Threshold',
        price: 28.99,
        dateAdded: new Date(2022, 9, 7),
        albumDesc: 'The new masterpiece from grinders Cloud Rat is the pinnacle of the' + 
        ' band\'s career thus far. Guitarist Rorik Brooks: "To me, Threshold feels like a' +
        ' response to all of our earlier material. I think we finally have a successful' + 
        ' distillation of all our seemingly disparate influences, into what I feel is our' + 
        ' best work so far."'
    },
    {
        id: 'full-of-hell-garden-of-burning-apparitions-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Full of Hell',
        imgs: [
            'full-of-hell_garden-of-burning-apparitions-lp_1',
            'full-of-hell_garden-of-burning-apparitions-lp_2'
        ],        
        desc: 'Garden of Burning Apparitions',
        price: 25.99,
        dateAdded: new Date(2021, 9, 1),
        albumDesc: 'FULL OF HELL return with their highly anticipated new album, Garden Of' + 
        ' Burning Apparitions. The new album, a genre-bending blitzkrieg of hardcore, grind' +
        ' and death metal, sees the band expand upon the very elements that have propelled' +
        ' FULL OF HELL to the forefront of extreme music over the last decade.\n\n' +
    
        'Produced by Seth Manchester at Machines With Magnets in Pawtucket, Rhode Island,' +
        ' Garden of Burning Apparitions also sees FULL OF HELL adding new dimensions to their' +
        ' warp-speed hellscape. Guitarist Spencer Hazard and bassist Sam DiGristine\'s' +
        ' monstrous riffs now have an added noise-rock influence, while drummer Dave Bland' +
        ' commands the rhythm section at blazing speeds.\n\n' +
        
        'Lyrically, Garden of Burning Apparitions sees vocalist Dylan Walker exploring' +
        ' (anti)religion, life\'s impermanence and the fear that comes with knowing death' +
        ' is inescapable. "Industrial Messiah Complex” grinds organized religion to a pulp' +
        ' in under 90 seconds, while Walker contemplates the commodification of spirituality' +
        ' seen in America’s vast network of garish mega-churches and how these practices are' +
        ' at odds with true spirituality. Meanwhile, “Reeking Tunnels” rides a strident noise' +
        ' rock riff down into the sewer. It’s a metaphor for the physical and mental space we' +
        ' become trapped in when we live in a perpetual state of fear and hate. Elsewhere,' +
        ' justifiable ochlophobia propels the guttural death metal blast of “Eroding Shell.”' +
        ' The song seeks to capture our fear of the violent, ignorant mob—a scene glimpsed far' +
        ' too often in this volatile era.\n\n' +
        
        'In the end, FULL OF HELL\'s boundary smashing has paid off again. “I think it’s good' + 
        ' that we tried not to pigeonhole ourselves early on,” Walker reflects. “Because now,' + 
        ' 10 years in, we have the opportunity to make whatever record we want, within reason,' + 
        ' and people will follow along.”'
    },
    {
        id: 'full-of-hell-trumpeting-ecstasy-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Full of Hell',
        imgs: [
            'full-of-hell_trumpeting-ecstasy-lp_1',
            'full-of-hell_trumpeting-ecstasy-lp_2',
            'full-of-hell_trumpeting-ecstasy-lp_3',
            'full-of-hell_trumpeting-ecstasy-lp_4',
            'full-of-hell_trumpeting-ecstasy-lp_5',
        ],        
        desc: 'Trumpeting Ecstasy',
        price: 25.99,
        dateAdded: new Date(2017, 5, 5),
        albumDesc: 'Maryland/Pennsylvania experimental death-noise' +
        ' band FULL OF HELL have embarked on quite the journey leading' +
        ' up to the impending release of their latest full-length album' +
        ' “Trumpeting Ecstasy”, an album which will see the band deliver' +
        ' their most punishing, virulent, and dynamic album to date.\n\n' +

        'The embryonic beginnings of Full of Hell displayed their palette' +
        ' at it\'s most primitive, d-beat and blast ridden hardcore punk with' +
        ' spats of noise and caustic rhythm, and within a few short years,' +
        ' they have bloomed into a true force to be reckoned with within the' +
        ' punk and metal communities. Since the release of their Profound Lore' +
        ' Records debut album “Full Of Hell & Merzbow” late 2014, their third' +
        ' full-length album, the band began to truly come into their own, combining' +
        ' elements of grindcore, death/black metal, punk and hardcore with a' +
        ' smattering of sonically laden power electronics and industrial pounding.' +
        ' It would also signal the band being at their most active and prolific ever' +
        ' since their inception in 2009.\n\n' +
        
        'The band would tour endlessly non-stop in different parts of the world in' +
        ' places as far off as Japan, Australia (twice), Southeast Asia (Indonesia,' +
        ' Philippines, South Korea etc.), along with several tour runs in Europe' +
        ' and many tour jaunts within the US, along with playing countless festivals' +
        ' and exclusive shows. The band would also add to their repertoire and' +
        ' discography as well during said timeframe releasing a direct collaboration' +
        ' album with The Body and several EPs, one of them being their most-recent' +
        ' split 7”EP with Nails (which debuts #2 on the Billboard Top 100 Singles' +
        ' Chart).\n\n' +
        
        'With “Trumpeting Ecstasy”, FULL OF HELL build upon their progression since' +
        ' the Merzbow collaboration and the releases succeeding it. This time the band' +
        ' decided to go into God City Studios with Kurt Ballou at the production helm' +
        ' to help achieve the intended vision of “Trumpeting Ecstasy”. The result being' +
        ' the best and strongest sounding FULL OF HELL album along with it being their' +
        ' most towering release to date. Sky tearing and sonically cataclysmic, the aural' +
        ' deluge that is “Trumpeting Ecstasy” also features guest appearances by Aaron' +
        ' Turner (Sumac/Old Man Gloom/Mamiffer/Isis), Nate Newton (Converge/Old Man Gloom),' +
        ' Andrew Nolan (Column Of Heaven/The Endless Blockade), and Canadian singer/songwriter' +
        ' Nicole Dollanganger. Expect FULL OF HELL to tour relentlessly in support of “Trumpeting' +
        ' Ecstasy” as well.'
    },
    {
        id: 'full-of-hell-weeping-choir-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Full of Hell',
        imgs: [
            'full-of-hell_weeping-choir-lp_1',
            'full-of-hell_weeping-choir-lp_2',
            'full-of-hell_weeping-choir-lp_3',
            'full-of-hell_weeping-choir-lp_4',
            'full-of-hell_weeping-choir-lp_5',
            'full-of-hell_weeping-choir-lp_6'
        ],        
        desc: 'Weeping Choir',
        price: 24.99,
        dateAdded: new Date(2019, 4, 17),
        albumDesc: 'FULL OF HELL make their Relapse debut' +
        ' with their most explosive album to date, Weeping Choir.' +
        ' Dynamic, pissed, and wholly urgent, the highly anticipated' +
        ' Weeping Choir is a definitive statement of intent by one' +
        ' of the underground’s most dynamic and virulent entities.' +
        ' FULL OF HELL have once again culled the extreme elements' +
        ' from hardcore, metal, and power electronics to redefine' +
        ' darkness and sheer brutality. Distorted guitars, and' +
        ' ominous, disparate electronics grind and gnash against' +
        ' rapid-fire drumming, as FULL OF HELL take themes of religion,' +
        ' loss, hatred, and set them ablaze. Recorded by the' +
        ' critically acclaimed Kurt Ballou at GodCity Studio, Weeping' +
        ' Choir sees FULL OF HELL fully unleashed. Abrasive,' +
        ' confrontational, none equal!'
    },
    {
        id: 'portrayal-of-guilt-devil-music-12in',
        category: 'music',
        featured: true,
        productType: '12"',
        band: 'Portrayal of Guilt',
        imgs: [
            'portrayal-of-guilt_devil-music-12in_1',
            'portrayal-of-guilt_devil-music-12in_2',
        ],        
        desc: 'Devil Music',
        price: 23.99,
        dateAdded: new Date(2023, 3, 20),
        albumDesc: 'Plunge deeper into the deranged world of PORTRAYAL OF GUILT' +
        ' with DEVIL MUSIC, the latest EP from the Austin-based trio. In the wake' +
        ' of releasing two full-length records in 2021 - We Are Always Alone and' +
        ' CHRISTFUCKER - they followed up 2022 with a year of relentless touring.' +
        ' In the middle of their frantic schedule, the band took time to draft the' +
        ' five new songs that would make up Devil Music with Viva Studios\' Matt' +
        ' Michel (Majority Rule) in Virginia. They then took their creative vision' +
        ' to the next level with Ben Greenberg (Uniform), by tracking alternate' +
        ' versions of each song with orchestral arrangements in place of the three' +
        ' piece\'s standard instrumentation.\n\n' +

        'On Devil Music, Portrayal of Guilt\'s goal is to create a visceral listening' +
        ' experience. On either version of these songs, whether it be the a-side\'s more' +
        ' familiar heaviness or the orchestral b-side takes, the band is determined to' +
        ' drag the listener with them through what feels like a reckoning. Lyrics on' +
        ' songs like the opener “One Last Taste of Heaven" feel burdened with a sense' +
        ' of finality - “I\'ve carried this body for miles... I lay the angel on the wooden' +
        ' pyre / before taking one last taste of heaven” feels as heavy as the blackened' +
        ' guitar riff refraining throughout the song. Through other songs like the intense' +
        ' “Burning Hand” (complete with it\'s hypnotizing post-punk bridge) or the epic' +
        ' title-track closer, the imagery of King\'s lyrics is an unapologetically grotesque' +
        ' examination of loss, exhaustion and suffering - brought fully to life by illustrator' +
        ' Ben Robert\'s cover art for the release.\n\n' +
        
        'These songs are yet another example of Portrayal of Guilt pushing the limits of' +
        ' their sound into more extremes. Since their inception they have been challenging' +
        ' the boundaries of genre, taking elements from screamo, blackened metal, grind and' +
        ' industrial music to make something uniquely unsettling and expertly-crafted. Devil' +
        ' Music feels like the soundtrack to a future-less future, one where either path you' +
        ' tread is destined to lead towards ruin.'
    },
    {
        id: 'portrayal-of-guilt-we-are-always-alone-cd',
        category: 'music',
        featured: true,
        productType: 'CD',
        band: 'Portrayal of Guilt',
        imgs: ['portrayal-of-guilt_we-are-always-alone-cd'],        
        desc: 'We Are Always Alone',
        price: 23.99,
        dateAdded: new Date(2021, 1, 29),
        albumDesc: 'To say Portrayal of Guilt write grim songs is an understatement.' +
        ' Since forming in 2017, the Austin trio has been a flowing fountain of fatalism,' +
        ' spewing harsh and brutal sentiments across their releases. Now, on their second' +
        ' album, We Are Always Alone (Closed Casket, January 29th, 2021), the band turns' +
        ' the nihilism inwards and explores the notion of eternal isolation.\n\n' +

        'We Are Always Alone was written and recorded ahead of schedule. In March,' +
        ' Portrayal of Guilt was on tour in Atlanta when they realized the looming COVID-19' +
        ' was about to render the remainder of their dates unsustainable. They packed up' +
        ' and drove home, where they immediately got to work crafting and recording nine' +
        ' new tracks with producer and frequent collaborator Phillip Odom (Code Orange,' +
        ' Turnover, La Dispute, Ceremony), with mastering by Grammy nominated engineer' +
        ' Will Yip. The album boasts vocal cameos from Matt Michel and Chris Taylor of' +
        ' Majority Rule and pageninetynine, two seminal bands to whom Portrayal of Guilt' +
        ' has often been deemed the heir apparent.\n\n' +
        
        'The album sees the band continuing to perfect their gritty style of charred punk' +
        ' that seamlessly fuses together a broad array of styles, from the piercing ferocity' +
        ' of screamo to the thick gnarls of black metal, underlined with chilling and ominous' +
        ' industrial samples. The LP is a climatic listening experience that never really lets' + 
        ' the light peek through, instead building up to a cathartic final track that hammers' +
        ' home the bleak desolation that runs through it.\n\n' +
        
        'We Are Always Alone comes off the heels of the band\'s 2019 EP, Suffering Is a Gift,' +
        ' and their celebrated debut full-length in 2018, Let Pain Be Your Guide, which earned' +
        ' the band praise in outlets like NPR, Revolver, and Kerrang!. Even though it was birthed' + 
        ' under the spectre of a global pandemic, it\'s hard to argue that We Are Always Alone is' +
        ' any more dire than the rest of the band\'s catalog. For a Portrayal of Guilt release, it' +
        ' seems par for the course.'
    },
    {
        id: 'soft-kill-savior-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Soft Kill',
        imgs: ['soft-kill_savior-lp'],        
        desc: 'Savior',
        price: 24.99,
        dateAdded: new Date(2018, 4, 15),
        albumDesc: 'Released via PROFOUND LORE RECORDS in May 2018.'
    },
    {
        id: 'soft-kill-canary-yellow-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Soft Kill',
        imgs: ['soft-kill_canary-yellow-lp_1', 'soft-kill_canary-yellow-lp_2'],        
        desc: 'Canary Yellow',
        price: 24.99,
        dateAdded: new Date(2022, 9, 31),
        albumDesc: ''
    },
    {
        id: 'soft-kill-canary-yellow-cd',
        category: 'music',
        featured: true,
        productType: 'CD',
        band: 'Soft Kill',
        imgs: ['soft-kill_canary-yellow-lp_1'],        
        desc: 'Canary Yellow',
        price: 15.99,
        dateAdded: new Date(2022, 9, 31),
        albumDesc: ''
    },
    {
        id: 'soft-kill-premium-drifter-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Soft Kill',
        imgs: ['soft-kill_premium-drifter-lp_1', 'soft-kill_premium-drifter-lp_2'],        
        desc: 'Premium Drifter',
        price: 24.99,
        dateAdded: new Date(2020, 3, 14),
        albumDesc: 'A collection of demos written and recorded over the course of the' + 
        ' last two years, most of which we\'re intended for inclusion on "Dead Kids, R.I.P.' + 
        ' City". A couple of these were released on extremely limited lathes or cassettes' + 
        ' but most have never been heard before. Included are the two tracks from the recent' + 
        ' "Sick Day" digital only EP as well. Recorded by Soft Kill at A Block, mastered by' + 
        ' Telegraph and pressed here locally at Cascade. Art by N.A. Youngboy, layout by Nathan' + 
        ' Preston.'
    },
    {
        id: 'soft-kill-metta-world-peace-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Soft Kill',
        imgs: ['soft-kill_metta-world-peace-lp_1', 'soft-kill_metta-world-peace-lp_2'],        
        desc: 'Metta World Peace',
        price: 28.99,
        dateAdded: new Date(2023, 5, 4),
        albumDesc: 'Primarily recorded during a transitional move, "Metta World Peace"' +
        ' embraces new sonic textures and ideas while returning to the bedroom experiments' + 
        ' of 2020\'s "Premium Drifter" and the many cassette-only releases since the project\'s' + 
        ' inception.\n\n' +

        'Featuring contributions from Evil Pimp, Andres Chavez, N8NOFACE and Adam Klopp,' + 
        ' a primary production approach was the cut and paste sampling of my favorite hip' + 
        ' hop albums paired against fun and spontaneous collaborations with artists I love.\n\n' +
        
        'This record solidifies a commitment to the blueprint that\'s been in play all along:' + 
        ' a stream of consciousness output removed from the confines of "the album cycle"' + 
        ' inspired equally by boredom and Guided By Voices. My comfort zone has always been' + 
        ' the demo and everything that follows has felt complicated and forced at times. This' + 
        ' celebrates my love for writing songs and ignoring the rest.'
    },
    {
        id: 'touche-amore-parting-the-sea-between-brightness-and-me-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Touche Amore',
        imgs: ['touche-amore_parting-the-sea-between-brightness-and-me-lp'],        
        desc: 'Parting The Sea Between The Brightness And Me',
        price: 28.99,
        dateAdded: new Date(2011, 5, 30),
        albumDesc: 'Released via DEATHWISH RECORDS in June 2011.'
    },
    {
        id: 'touche-amore-is-survived-by-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Touche Amore',
        imgs: ['touche-amore_is-survived-by-lp'],        
        desc: 'Is Survived By',
        price: 28.99,
        dateAdded: new Date(2013, 8, 15),
        albumDesc: 'Released via DEATHWISH RECORDS in September 2013. '
    },
    {
        id: 'touche-amore-is-survived-by-cd',
        category: 'music',
        featured: true,
        productType: 'CD',
        band: 'Touche Amore',
        imgs: ['touche-amore_is-survived-by-lp'],        
        desc: 'Is Survived By',
        price: 15.99,
        dateAdded: new Date(2013, 8, 15),
        albumDesc: 'Released via DEATHWISH RECORDS in September 2013. '
    },
    {
        id: 'touche-amore-to-the-beat-of-a-dead-horse-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Touche Amore',
        imgs: ['touche-amore_to-the-beat-of-a-dead-horse-lp'],        
        desc: 'To The Beat of a Dead Horse...',
        price: 34.99,
        dateAdded: new Date(2009, 7,4),
        albumDesc: 'Hailing from Los Angeles, CA, Touché Amoré set themselves' + 
        ' against the glamor and greed of their hometown culture with "...To The' + 
        ' Beat Of A Dead Horse," the passionate debut LP and CD. Where Touché Amoré\'s' + 
        ' demo 7" (No Sleep Records) was full of promise, "...To The Beat Of A Dead' + 
        ' Horse" feels fully realized: the guitars bend and weave but always maintain' + 
        ' their drive, the rhythms are frequently off kilter but never off-time and the' + 
        ' vocals are screamed at the edge of breaking up but they\'re always exciting,' + 
        ' pleasing even. Features guest vocals by Geoff Rickly (Thursday) and Jeff' + 
        ' Eaton (Modern Life Is War).'
    },
    {
        id: 'touche-amore-stage-four-cd',
        category: 'music',
        featured: true,
        productType: 'CD',
        band: 'Touche Amore',
        imgs: ['touche-amore_stage-four-cd'],        
        desc: 'Stage Four',
        price: 13.99,
        dateAdded: new Date(2016, 8, 16),
        albumDesc: 'Los Angeles artful indie post hardcore band Touché Amoré have announced' + 
        'a new album, Stage Four, to be released September 16 on Epitaph.\n\n' +

        'Formed in Burbank, California, across 2007 and 2008, the band\'s urgent sound, with' + 
        ' its melodic sonic assault and impassioned vocals, has grown tighter and more refined' + 
        ' through a trio of full-length albums and a series of EPÍs and releases. Since those' + 
        ' early days, lead singer Jeremy Bolm, guitarists Nick Steinhardt and Clayton Stevens,' + 
        ' bassist Tyler Kirby, and drummer Elliot Babin have created a trajectory for themselves' + 
        ' through hard work and dedication. And now with Stage Four, their fourth and biggest' + 
        ' album to date, they are cementing their status as one of rock music\'s most talented,' + 
        ' relatable, and visceral acts. Over the years the band rose to prominence with 2009\'s' + 
        ' To the Beat of a Dead Horse and 2011\'s Parting the Sea Between Brightness and Me.' + 
        ' Touche Amore crossed into new territory with the 2013 art-punk masterpiece Is Survived' + 
        ' By. Having earned early cred, critical favor, and legions of fans by playing lengthy' + 
        ' tours of all shapes and sizes, in every basement, youth center, and house show, the' + 
        ' band enjoyed a bigger following which only grew along with their talents.\n\n' +
        
        '"I don\'t open up to people too much in regular life, but when I\'m writing songs, I want' +
        ' to be as open and as honest as possible," Bolm confesses. Touché albums have always served' + 
        ' as an emotional outlet for Bolm. So when the time came to write Stage Four there was no' + 
        ' question that it would be about passing of Bolm\'s mother in late 2014. Stage Four was recorded' + 
        ' in early 2016 in Studio City, CA with producer Brad Wood. Cathartic in delivery, highly' + 
        ' sentimental, and sonically triumphant, Stage Four is an emblem of a band both living its dream' + 
        ' and marred by loss. And with Stage Four, Touché Amoré has unmistakably made the biggest, boldest,' + 
        ' and most artistic statement of their career.'
    },
    {
        id: 'touche-amore-lament-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Touche Amore',
        imgs: ['touche-amore_lament-lp'],        
        desc: 'Lament',
        price: 23.99,
        dateAdded: new Date(2020, 8, 9),
        albumDesc: 'TOUCHÉ AMORÉ has been burrowing through angst, alienation,' + 
        ' cancer, and heartbreak throughout four adored studio albums. After over' + 
        ' a decade of working through darkness, the band\'s gorgeously gruff fifth' + 
        ' album, Lament, finds the light at the end of the tunnel. Through 11 songs,' + 
        ' Touché Amoré looks back at its past and uses hard-won optimism to point its' + 
        ' fans toward light, and love. For the follow up to the their critically' + 
        ' acclaimed 2016 release, Stage Four, Touché Amoré have opted to get out' + 
        ' of their comfort zone and work with a new producer, the famously demanding' + 
        ' Ross Robinson (Slipknot, Korn, At the Drive-In). Both Robinson and Touché' + 
        ' Amoré are known for their trademark intensity. "I believe there was an' + 
        ' unspoken learning curve between Ross\'s methods and the understanding that' + 
        ' I\'ve poured myself into the words and mean every one of them," vocalist Jeremy' + 
        ' Bolm says. Robinson agreed to a rare one-song "test recording" last summer,' + 
        ' which resulted in the song "Deflector," released last fall. In the end, "Deflector"' + 
        ' proved the producer/band combo was undoubtedly the right fit. Robinson made Bolm' + 
        ' read out all of his confessional lyrics to his bandmates to make sure they understood' + 
        ' their emotional content. Making Bolm read those lyrics turned out to be what helped' + 
        ' make their emotions palpable in the final recording. With its ruminations on the' + 
        ' draining human connection ("I\'ll test the water/I won\'t dive right in/That\'s too' + 
        ' personal/I\'m too delicate"), Lament\'s first helping is a sharp intro to the album\'s' + 
        ' themes. Lament is their masterstroke. Its longer, structured songs soar with a ferocious' + 
        ' but delicate musicality and powerful, gut-wrenching storytelling that smashes previous' +
        ' heights. Yet as much as the band has grown and matured via everything they\'ve endured,' + 
        ' it\'s perhaps equally impressive how they\'ve managed to stay true to their core...'
    },
    {
        id: 'primitive-man-insurmountable-12in',
        category: 'music',
        featured: true,
        productType: '12"',
        band: 'Primitive Man',
        imgs: ['primitive-man_insurmountable-12in_1', 'primitive-man_insurmountable-12in_2'],        
        desc: 'Insurmountable',
        price: 24.99,
        dateAdded: new Date(2022, 4, 18),
        albumDesc: 'Listening to Primitive Man is a devastating experience of Doom' +     
        ' as performed by just three members. Their discography of agonizing personal' + 
        ' and universal hell is spread across three albums, two EPs and a raft of splits' + 
        ' released over more than 10 years. 2020 saw the release of the groups most' + 
        ' recent full length album \'Immersion\' (Relapse Records), a terrifying and' + 
        ' confrontational record that expressed resentment and the unbearable during' + 
        ' uncertain times. The tension through out the record is palpable. McCarthy\'s' + 
        ' foul roar feels wrenched from a cavern so deep that it defied language itself.' + 
        ' The riffs are vast slabs - edifices dragged and erected to stand tall against' + 
        ' the outrages of \'humanity rotten on the vine\' (\'Consumption\'). With 2013\'s Scorn' + 
        ' and 2017\'s Caustic, Primitive Man raged against religious dogma, elitism, capitalism' + 
        ' and the creature within, desperate to burst out. They keep the animal inside at' + 
        ' bay with a rancorous and cerebral blend of the heaviest sounds. Splits with Hell' + 
        ' and Unearthly Trance, and a host of others, have seen the band branch out into' + 
        ' experimental noise. Other projects from members of the band - Black Curse, Vermin' + 
        ' Womb and Many Blessings - show how they are bursting at the seams to express their' + 
        ' outrage at the state of things, in different mutations.\n\n' +
        
        '2022 brings the release of the groups latest album, Insurmountable. Four new suffocating' + 
        ' tracks totaling over 38 minutes of Primitive Man in their strongest and most crushing' + 
        ' artistic display to date. Mixed and mastered by Arthur Rizk and featuring the artwork' + 
        ' of Ethan McCarthy (Hell Simulation). Vinyl comes packaged in a tip-on gatefold lp jacket,' + 
        ' complimented with an obi-strip, gatefold insert and deluxe colored vinyl.'
    },
    {
        id: 'primitive-man-immersion-lp',
        category: 'music',
        featured: true,
        productType: 'LP',
        band: 'Primitive Man',
        imgs: [
            'primitive-man_immersion-lp_1', 
            'primitive-man_immersion-lp_2',
            'primitive-man_immersion-lp_3',
            'primitive-man_immersion-lp_4',
            'primitive-man_immersion-lp_5',
            'primitive-man_immersion-lp_6'
        ],        
        desc: 'Immersion',
        price: 25.99,
        dateAdded: new Date(2020, 7, 14),
        albumDesc: 'PRIMITIVE MAN return with the extreme, terrifying and confrontational new' + 
        ' album, Immersion. True to the band\'s ethos, every moment on Immersionis overwhelming;' + 
        ' from the sonic pummeling on the album opener "The Lifer" to the brooding, unnerving' + 
        ' guitars whirring throughout "Entity", Immersionbuilds and builds. The tension throughout' + 
        ' the record is palpable - hair raising tracks such as "Menacing" push and pull constantly,' + 
        ' shifting from passages of harsh doom to an endless corridor of horrid screaming, blast' + 
        ' beats, and a formidable low end.\n\n' +

        'Adding to the album\'s darkness, a pervasive lyrical anxiety erodes throughout Immersion.' + 
        ' A stark look at a mirror, Immersion\'s themes tackle sobering views on existential crises,' + 
        ' a general distrust among another, and the current state of the world. "Souring your view' + 
        ' on your existence and everything you had worked towards. Allowing you to become possessed' + 
        ' by the darkest parts of your mind that you have carried around your entire life and not' + 
        ' dealt with." PRIMITIVE MAN\'s Ethan McCarthy elaborates.\n\n' +
        
        'True to these dark times, PRIMITIVE MAN\'s Immersionis an introspective look into ruin and' + 
        ' undoing. As McCarthy explains, Immersiondives into the point of no return. "Now you\'re a' + 
        ' grown man and you\'re fucked."'
    },
    {
        id: 'emma-ruth-rundle-live-at-roadburn-2xlp',
        category: 'music',
        featured: false,
        productType: '2XLP',
        band: 'Emma Ruth Rundle',
        imgs: ['emma-ruth-rundle_live-at-roadburn-2xlp_1', 'emma-ruth-rundle_live-at-roadburn-2xlp_2'],
        desc: 'Live at Roadburn',
        price: 29.99,
        dateAdded: new Date(2023, 6, 7),
        tracklist: [
            'Return',
            'Blooms of Oblivion',
            'Body',
            'The Company',
            'Dancing Man',
            'Razor\'s Edge',
            'Citadel',
            'In My Afterlife',
            'Pump Organ Song'
        ],
        albumDesc: '"Roadburn has been such an important place for me and my evolution as an artist.' + 
        ' The opportunity to perform Engine of Hell in full there in 2022 was the end of something… and' + 
        ' the beginning of this whole new chapter in my life and art. I really do feel free is so many' + 
        ' ways. I wanted to commemorate and honor the experience by making my Live at Roadburn album my' + 
        ' first self release in 13 years. I will always treasure the Roadburn community."'
    },
    {
        id: 'emma-ruth-rundle-marked-for-death-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Emma Ruth Rundle',
        imgs: ['emma-ruth-rundle_marked-for-death-lp_1', 'emma-ruth-rundle_marked-for-death-lp_2'],
        desc: 'Marked For Death',
        price: 26.99,
        dateAdded: new Date(2016, 8, 30),
        tracklist: [
            'Marked For Death',
            'Protection',
            'Medusa',
            'Hand of God',
            'Heaven',
            'So, Come',
            'Furious Angel',
            'Real Big Sky'
        ],
        albumDesc: ''
    },
    {
        id: 'emma-ruth-rundle_on-dark-horses-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Emma Ruth Rundle',
        imgs: [
            'emma-ruth-rundle_on-dark-horses-lp_1', 
            'emma-ruth-rundle_on-dark-horses-lp_2',
            'emma-ruth-rundle_on-dark-horses-lp_3',
            'emma-ruth-rundle_on-dark-horses-lp_4'
        ],
        desc: 'On Dark Horses',
        price: 26.99,
        dateAdded: new Date(2018, 8, 14),
        tracklist: [
            'Fever Dreams',
            'Control',
            'Darkhorse',
            'Races',
            'Dead Set Eyes',
            'Light Song',
            'Apathy on the Indiana Border',
            'You Don\'t Have To Cry'
        ],
        albumDesc: ''
    },
    {
        id: 'emma-ruth-rundle_on-dark-horses-cd',
        category: 'music',
        featured: false,
        productType: 'CD',
        band: 'Emma Ruth Rundle',
        imgs: ['emma-ruth-rundle_on-dark-horses-lp_1'],
        desc: 'On Dark Horses',
        price: 14.99,
        dateAdded: new Date(2018, 8, 14),
        tracklist: [
            'Fever Dreams',
            'Control',
            'Darkhorse',
            'Races',
            'Dead Set Eyes',
            'Light Song',
            'Apathy on the Indiana Border',
            'You Don\'t Have To Cry'
        ],
        albumDesc: ''
    },
    {
        id: 'emma-ruth-rundle_engine-of-hell-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Emma Ruth Rundle',
        imgs: ['emma-ruth-rundle_engine-of-hell-lp_1', 'emma-ruth-rundle_engine-of-hell-lp_2'],
        desc: 'Engine of Hell',
        price: 23.99,
        dateAdded: new Date(2021, 10, 5),
        tracklist: [
            'Return',
            'Blooms of Oblivion',
            'Body',
            'The Company',
            'Dancing Man',
            'Razor\'s Edge',
            'Citadel',
            'In My Afterlife'
        ],
        albumDesc: 'Emma Ruth Rundle\'s forthcoming Engine of Hell is stark, intimate, and unflinching.' +
        ' For anyone that\'s endured trauma and grief, there\'s a beautiful solace in hearing Rundle' +
        ' articulate and humanize that particular type of pain not only with her words, but with her' +
        ' particular mysterious language of melody and timbre. The album captures a moment where a' +
        ' masterful songwriter strips away all flourishes and embellishments in order to make every' +
        ' note and word hit with maximum impact, leaving little to hide behind. “I really wanted to' +
        ' capture imperfection and the vulnerability of my humanity,” Rundle says of the album\'s sonic' +
        ' approach. “Here are some very personal songs; here are my memories; here is me teetering on' +
        ' the very edge of sanity dipping my toe into the outer reaches of space and I\'m taking you with' +
        ' me and it\'s very fucked up and imperfect.\'\n\n”' + 

        'Emma Ruth Rundle has always been a multifaceted musician, equally capable of dreamy abstraction' +
        ' (as heard on her album Electric Guitar: One), maximalist textural explorations (see her work in' +
        ' Marriages, Red Sparowes, Nocturnes or collaborations with Chelsea Wolfe and Thou), and the' +
        ' classic singer-songwriter tradition (exemplified by Some Heavy Ocean). But on Engine of Hell,' + 
        ' Rundle has opted to forego the full-band arrangements of her previous albums in favor of the' +
        ' austerity of a lone piano or guitar and her voice, which creates a kind of intimacy, as if' +
        ' we\'re sitting beside Rundle on a bench, or perhaps even playing the songs ourselves. It\'s an' +
        ' extremely up-close and personal confessional with a focus on the rich subtleties and timbre of' +
        ' Rundle\'s graceful performances.\n\n' + 
        
        '“For me this album is the end of an era to the end of a decade of making records. Things DO have' + 
        ' to change and have changed for me since I finished recording it.” In essence, Engine of Hell' +
        ' signifies a major turning point for Rundle as both an artist and as a person. The catharsis of' +
        ' this type of songwriting has effectively served its purpose, and to continue ruminating on the' +
        ' past going forward is less of a healing process and more like picking at a scab and refusing to' + 
        ' let it heal. This may help explain why Rundle is less than enthusiastic about divulging the details' + 
        ' about her muses, but it doesn’t alter the fact that these songs served a purpose in their creation,' + 
        ' and that they may continue to bring comfort to others.'
    },
    {
        id: 'emma-ruth-rundle_engine-of-hell-cd',
        category: 'music',
        featured: false,
        productType: 'CD',
        band: 'Emma Ruth Rundle',
        imgs: ['emma-ruth-rundle_engine-of-hell-lp_1'],
        desc: 'Engine of Hell',
        price: 14.99,
        dateAdded: new Date(2021, 10, 5),
        tracklist: [
            'Return',
            'Blooms of Oblivion',
            'Body',
            'The Company',
            'Dancing Man',
            'Razor\'s Edge',
            'Citadel',
            'In My Afterlife'
        ],
        albumDesc: 'Emma Ruth Rundle\'s forthcoming Engine of Hell is stark, intimate, and unflinching.' +
        ' For anyone that\'s endured trauma and grief, there\'s a beautiful solace in hearing Rundle' +
        ' articulate and humanize that particular type of pain not only with her words, but with her' +
        ' particular mysterious language of melody and timbre. The album captures a moment where a' +
        ' masterful songwriter strips away all flourishes and embellishments in order to make every' +
        ' note and word hit with maximum impact, leaving little to hide behind. “I really wanted to' +
        ' capture imperfection and the vulnerability of my humanity,” Rundle says of the album\'s sonic' +
        ' approach. “Here are some very personal songs; here are my memories; here is me teetering on' +
        ' the very edge of sanity dipping my toe into the outer reaches of space and I\'m taking you with' +
        ' me and it\'s very fucked up and imperfect.\'\n\n”' + 

        'Emma Ruth Rundle has always been a multifaceted musician, equally capable of dreamy abstraction' +
        ' (as heard on her album Electric Guitar: One), maximalist textural explorations (see her work in' +
        ' Marriages, Red Sparowes, Nocturnes or collaborations with Chelsea Wolfe and Thou), and the' +
        ' classic singer-songwriter tradition (exemplified by Some Heavy Ocean). But on Engine of Hell,' + 
        ' Rundle has opted to forego the full-band arrangements of her previous albums in favor of the' +
        ' austerity of a lone piano or guitar and her voice, which creates a kind of intimacy, as if' +
        ' we\'re sitting beside Rundle on a bench, or perhaps even playing the songs ourselves. It\'s an' +
        ' extremely up-close and personal confessional with a focus on the rich subtleties and timbre of' +
        ' Rundle\'s graceful performances.\n\n' + 
        
        '“For me this album is the end of an era to the end of a decade of making records. Things DO have' + 
        ' to change and have changed for me since I finished recording it.” In essence, Engine of Hell' +
        ' signifies a major turning point for Rundle as both an artist and as a person. The catharsis of' +
        ' this type of songwriting has effectively served its purpose, and to continue ruminating on the' +
        ' past going forward is less of a healing process and more like picking at a scab and refusing to' + 
        ' let it heal. This may help explain why Rundle is less than enthusiastic about divulging the details' + 
        ' about her muses, but it doesn’t alter the fact that these songs served a purpose in their creation,' + 
        ' and that they may continue to bring comfort to others.'
    },
    {
        id: 'emma-ruth-rundle-eg-2-dowsing-voice-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Emma Ruth Rundle',
        imgs: ['emma-ruth-rundle_eg2-dowsing-voice-lp_1', 'emma-ruth-rundle_eg2-dowsing-voice-lp_2'],
        desc: 'EG2: Dowsing Voice',
        price: 25.99,
        dateAdded: new Date(2022, 4, 15),
        tracklist: [
            'Intro to the Underpool: The Path, The Gate, The Field, The Well',
            'Keening into Ffynnon Llanllawer',
            'In the Cave of The Cailleach’s Death-Birth',
            'Gathering around Pair Dadeni',
            'Brigid Wakes To Find Her Voice Anew. The Little Flowers and Birds Show Themselves',
            'Imbolc Dawn Atop Ynys Wydryn. Ice Melts as The First Resplendent Rays of Spring Pour Over The Horizon.',
            'The Tempest on Trefasser',
            'Don Danann Dana Danu Ana',
            'Standing Stones Singing / Cellphone Towers Ringing Up To The Darkening Sky',
            'In Sadness For Our Dying World (here come the Christians)',
        ],
        albumDesc: 'Emma Ruth Rundle\'s second installment in her Electric Guitar series, EG2:' + 
        ' Dowsing Voice, is like the soundtrack to a film that hasn\'t been made. The mostly' + 
        ' instrumental record follows her on a trip to the Welsh coast and down a magical well' + 
        ' into the waters of nature, myth and the Old Golds - by way of her improvised music.' + 
        ' The 40 plus minute album was sewn together from recordings channeled during her month-long' + 
        ' solo journey in the early days of 2020 and completed before 2021\'s critically lauded album' + 
        ' Engine of Hell was even written.\n\n' + 
 
        'Unlike Electric Guitar One, EG2: Dowsing Voice features vocal improvisation, unconventional' + 
        ' singing and extended vocal techniques free from lyrics - like the throat singing on “In the' + 
        ' Cave…” which is meant to be the voices of crones gathering in a rhythmic and physical ritual.' + 
        ' Rundle was led to these voices by unseen forces along with the immense impact of the Welsh' + 
        ' water: ocean, rivers springs and wells that gave the album its extended title Dowsing Voice.' + 
        ' While there is some focus on vocal and story here, her textural and even bombastic guitar' + 
        ' improvisations are featured throughout the album. The album is accompanied by a massive body' + 
        ' of visual artwork Rundle created in her studio upon returning to the states in an attempt to' + 
        ' further flesh out the world and beings she encountered in the landscapes and music during her' + 
        ' trip to Wales. The blood self-portrait on the cover is from this series and is meant to capture' + 
        ' the moment after rebirth. For Rundle, the Electric Guitar series will always be about inspired,' + 
        ' unplanned moments like this at its core.\n\n'
    },
    {
        id: 'devil-master-satan-spits-on-children-of-light-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Devil Master',
        imgs: ['devil-master_satan-spits-on-children-of-light-lp'],
        desc: 'Satan Spits on Children of Light',
        price: 25.99,
        dateAdded: new Date(2019, 2, 1),
        tracklist: [
            'Listen, Sweet Demons...' ,          
            'Nightmares in the Human Collapse',
            'Black Flame Candle',
            'Devil Is Your Master',
            'Christ\'s Last Hiss',
            'Skeleton Hand',
            'Nuit',
            'Gaunt Immortality',
            'Desperate Shadow',
            'Her Thirsty Whip',
            'Dance of Fullmoon Specter',
            'Webs of Sorrow',
            'XIII'
        ],
        albumDesc: 'Philadelphia\'s DEVIL MASTER stake their claim' + 
        ' as one of the most venomous, twisted entities in the underground' + 
        ' with their hellish debut, Satan Spits on Children of Light. The' + 
        ' album, recorded, mixed, and mastered by Arthur Rizk (POWER TRIP,' + 
        ' MAMMOTH GRINDER, OUTER HEAVEN, and more,) rattles the very' + 
        ' gates of hell with a vile dose of black metal-infused punk' + 
        ' mayhem. Commanding the steel of VENOM, the fury of BATHORY\'s' + 
        ' earliest years, and the raw, uncompromising nature of the' + 
        ' notorious GISM, Satan Spits on Children of Light sees DEVIL' + 
        ' MASTER emerge from the grave and reach new blasphemous heights.' + 
        ' Give in to the Satanic panic and obey yourDEVIL MASTER!'
    },
    {
        id: 'devil-master-ecstasies-of-never-ending-night-lp',
        category: 'music',
        featured: false,
        productType: 'LP',
        band: 'Devil Master',
        imgs: [
            'devil-master_ecstasies-of-never-ending-night-lp_1',
            'devil-master_ecstasies-of-never-ending-night-lp_2'
        ],
        desc: 'Ecstasies of Never Ending Night',
        price: 28.99,
        dateAdded: new Date(2022, 3, 29),
        tracklist: [
            'Ecstasies...',	
            'Enamoured in the Throes of Death', 
            'Golgotha\'s Cruel Song',	 
            'The Vigour of Evil',		 
            'Acid Black Mass',		 
            'Abyss in Vision',		 
            'Shrines in Cinder',		 
            'Funerary Gyre of Dreams & Madness',		 
            'Precious Blood of Christ Rebuked',		 
            'Never Ending Night'	
        ],
        albumDesc: 'Philadelphia\'s DEVIL MASTER\'s roots in' +
        ' ritual magick have never been more prominent than on' + 
        ' their highly anticipated new album Ecstasies Of Never' + 
        ' Ending Night. Recorded live to analog tape by Pete DeBoer' + 
        ' (Blood Incantation, Spectral Voice), Ecstasies expands on' + 
        ' the warped riffing and dark atmospheres that have already' + 
        ' propelled DEVIL MASTER as one of the underground\'s most' + 
        ' unique and unfettered bands. From the band\'s blackened' + 
        ' punk maelstrom of “Acid Black Mass” to the spiraling' + 
        ' death rock of “Abyss In Vision” and the layers of refined' + 
        ' atmosphere on the closer “Never Ending Night”, lead guitarist' + 
        ' Darkest Prince of All Rebellion shines across a collection of' + 
        ' fiery, tumultuous riffs - Lyrically, vocalist Disembody Through' + 
        ' Unparalleled Pleasure laces Ecstasies with life-affirming blasphemy' + 
        ' and existential dread.\n\n' + 

        'Ecstasies of Never Ending Night witnesses DEVIL MASTER at its core.' + 
        ' Vocalist Disembody Through Unparalleled Pleasure has assumed the' + 
        ' role of bassist, strengthening the songwriting alongside Darkest' + 
        ' Prince and founding member/rhythm guitarist Infernal Moonlight' + 
        ' Apparition. Fresh blood was required and found in drummer/keyboardist' + 
        ' Festering Terror in Deepest Catacomb (a.k.a. Chris Ulsh of Power' + 
        ' Trip and Iron Age).\n\n' +
        
        'Ecstasies of Never Ending Night proves to be a crucial addition to the' + 
        ' pantheon of evil satanic metal. In the end, magick reigns!'
    },
]

const sortedAlbums = albums.sort(sortByDateAdded);
export const newAlbumPages = paginate(sortedAlbums);
