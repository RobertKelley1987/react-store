import { Album } from '../types';
import { paginate, sortByDateAdded } from '../utils';

export const albums: Album[] = [
    {
        id: 'cDumka',
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
        id: '5ogDEc',
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
        id: 'HjS7Es',
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
        id: 'Mxoypz',
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
        id: 'AW3lj6',
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
        id: 'lqsdJC',
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
        id: '36ILOG',
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
        id: '0ZYN2I',
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
        id: '1cdrzY',
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
        id: 'D7I9zB',
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
        id: 'i8ZG0P',
        category: 'music',
        featured: false,
        productType: '2XLP',
        band: 'Deafheaven',
        imgs: ['deafheaven_new-bermuda-lp_1', 'deafheaven_new-bermuda-lp_2', 'deafheaven_new-bermuda-lp_3', 'deafheaven_new-bermuda-lp_4'],
        desc: 'New Bermuda',
        price: 28.99,
        dateAdded: new Date(2015, 9, 3),
        albumDesc: 'Released via ANTI-RECORDS.'
    },
    {
        id: 'u31s5N',
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
        id: 'XhWCKY',
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
        id: 'zoHGIC',
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
        ' debut album: "Unsilent Death, was recorded with CONVERGEÍs Kurt Ballou. These 10 tracks of' + 
        ' barbaric rage have no resemblance to the laughable retro party metal that passes as extreme' + 
        ' music in todayÍs world. Abandon All Life viciously carpet bombs the listener with a horrifying' + 
        ' brand of Death/ Grind/ Hardcore chaos. Bludgeoning beatdowns, grinding blasts, hyper-distorted' + 
        ' vocals, hard-hitting metallic chugs and early death metal riffs intensifies to a climatic end' + 
        ' where the guitars wail and militant drum breakdowns send us marching. With profound hatred,' + 
        ' the howling war cry of ABANDON ALL LIFE shows NAILS as a band without equal in their class.'
    },
    {
        id: '2CB33S',
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
        id: 'B92jdL',
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
        id: '3Z7rK1',
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
        id: 'BRZVUr',
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
        id: 'iStjS9',
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
        id: 'BwBQaU',
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
        id: 'KSgOgW',
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
        id: 'z7sN2E',
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
        id: '9bBlq8',
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
        id: 'BCzhAX',
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
        id: '3Vfep3',
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
        id: '2HTHXw',
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
        id: '5cRfn5',
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
        id: 'xuvVIk',
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
        id: 'fOzvh5',
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
];

const sortedAlbums = albums.sort(sortByDateAdded);
export const newAlbumPages = paginate(sortedAlbums);
