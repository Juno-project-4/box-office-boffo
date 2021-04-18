const resultsExample = [
    {
        adult: false,
        backdrop_path: "/aC7PdiGK6xQhUtZ8McO2sw8Xkp3.jpg",
        genre_ids: [99],
        id: 653707,
        original_language: "en",
        original_title: "Happy Happy Joy Joy: The Ren & Stimpy Story​",
        overview:
            "Exploring the rise and fall of the groundbreaking animated series ​Ren & Stimpy​ and its controversial creator, John Kricfalusi, through archival footage, show artwork and interviews with the artists, actors and executives behind the show.",
        popularity: 7.776,
        poster_path: "/9Giq5I39EF2V4mT7FYgRt1wEZnQ.jpg",
        release_date: "2020-01-28",
        title: "Happy Happy Joy Joy: The Ren & Stimpy Story​",
        video: false,
        vote_average: 5.5,
        vote_count: 6,
    },
    {
        adult: false,
        backdrop_path: "/vbMZRA657oGkUx4sCe4F0AcetOh.jpg",
        genre_ids: [35],
        id: 691622,
        original_language: "en",
        original_title: "Tom Gleeson: Joy",
        overview:
            "Australia’s 2019 Gold Logie winner. Chief celebrity interrogator. Host of the highest-rating quiz show on TV. There’s not much Tom Gleeson hasn’t been up to lately. Gleeson is one of the sharpest minds in Australian comedy. His shows are relentlessly hilarious and masterful. Now the world can watch the great man live on stage, in his natural habitat and in the form of his life. Experience the JOY.",
        popularity: 2.446,
        poster_path: "/xTHGgkNvM2kq6wAq9HpiwQcRBKH.jpg",
        release_date: "2020-05-08",
        title: "Tom Gleeson: Joy",
        video: false,
        vote_average: 7.5,
        vote_count: 2,
    },
    {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 816697,
        original_language: "en",
        original_title: "Still Got Joy",
        overview:
            "Based on the book 'Dying To Live' this film is the inspiring true story of Dr. Shonda Reynolds . A native of Pulaski, Tennessee she overcame addiction after entering drug rehab, where she had a spiritual awakening and excepted her calling to preach. This true to live film is about a life being transformed by the power of God through forgiveness, redemption and love from a life of addiction.",
        popularity: 2.153,
        poster_path: "/qN9YKcKbDsaS16t1mZh8J3IWMBT.jpg",
        release_date: "2020-08-20",
        title: "Still Got Joy",
        video: false,
        vote_average: 0,
        vote_count: 0,
    },
    {
        adult: false,
        backdrop_path: "/5FYzJP6whGyVXj4ZmtIal0K1Pcx.jpg",
        genre_ids: [],
        id: 691905,
        original_language: "en",
        original_title: "Dilruk Jayasinha: Bundle Of Joy",
        overview:
            "Sri Lankan-born Dilruk Jayasinha is one of the most in-demand headliners on the Australian scene. Whilst his small-screen star continues to soar thanks to his appearances in Utopia and Have You Been Paying Attention?, it is on stage that he flies, with a reputation for consistently nailing his shows – The Art of the Dil; Sri Wanka; and Cheat Days – with his positive, upbeat brand of stand-up.",
        popularity: 3.369,
        poster_path: "/9FJLitZyZp5OsGQMbTY9v9en2jJ.jpg",
        release_date: "2020-04-24",
        title: "Dilruk Jayasinha: Bundle Of Joy",
        video: false,
        vote_average: 8.5,
        vote_count: 2,
    },
    {
        adult: false,
        backdrop_path: null,
        genre_ids: [18],
        id: 589696,
        original_language: "en",
        original_title: "Joy Boy",
        overview:
            "Based on a true story, Joy Noy revisits pivotal moments in the life of Jonny, a young man caught between his conservative family, an evangelical church and his emergent sexuality.",
        popularity: 0.763,
        poster_path: "/g2H3tAD4Hq9msyOMN8o5WxxpY7u.jpg",
        release_date: "2020-11-15",
        title: "Joy Boy",
        video: false,
        vote_average: 1,
        vote_count: 1,
    },
    {
        adult: false,
        backdrop_path: null,
        genre_ids: [10749, 35, 18],
        id: 785302,
        original_language: "en",
        original_title: "Joy & Hope",
        overview:
            "Joy and Hope McGregor run Two Sisters Ranch upstate New York with their dad and longtime friend. When a handsome stranger comes to town to find inspiration to get over writer's block, he learns how special Christmas on the ranch really is.",
        popularity: 0.6,
        poster_path: "/3IzDSHblHlQp95IGq2HjwWsUUvr.jpg",
        release_date: "2020-11-01",
        title: "Joy & Hope",
        video: false,
        vote_average: 0,
        vote_count: 0,
    },
    {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 743383,
        original_language: "en",
        original_title: "Joy Run",
        overview:
            "JOY RUN, a film by Tourmaline, continues the creative reimagining of athletics as a gender-inclusive space.",
        popularity: 0.6,
        poster_path: "/3PP2ncbIu1WrVoEc7p41dp308BE.jpg",
        release_date: "2020-09-15",
        title: "Joy Run",
        video: false,
        vote_average: 0,
        vote_count: 0,
    },
    {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 747863,
        original_language: "en",
        original_title: "Tails of Joy 2",
        overview:
            "Follow the journey of shelter animals as they are each given a fresh start. This story offers a powerful message of hope, encouraging everyone to adopt their next furry family member. Hosted by Larissa Wohl.",
        popularity: 0.6,
        poster_path: null,
        release_date: "2020-01-01",
        title: "Tails of Joy 2",
        video: false,
        vote_average: 0,
        vote_count: 0,
    },
    {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 783487,
        original_language: "en",
        original_title: "A Bundle Of Joy",
        overview:
            "A children's nativity play, written by Gaynor Boddy & Rebecca Kincaid.\r You may have met some of the nativity characters before, but you haven't met Grumble; the grumpy, grumbly donkey who travels with Mary and Joseph to Bethlehem.  Discover a particularly special bundle of joy this Christmas, with our beautifully simple, brand-new nativity that is bundles of fun!",
        popularity: 0.6,
        poster_path: "/3a46q6uX4CyP8P0rnXzjVBiIPod.jpg",
        release_date: "2020-12-25",
        title: "A Bundle Of Joy",
        video: true,
        vote_average: 0,
        vote_count: 0,
    },
    {
        adult: false,
        backdrop_path: null,
        genre_ids: [99],
        id: 784832,
        original_language: "en",
        original_title: "The Joy of Practical",
        overview: "A look at the practical effects of the film Possessor.",
        popularity: 0.6,
        poster_path: null,
        release_date: "2020-12-08",
        title: "The Joy of Practical",
        video: false,
        vote_average: 0,
        vote_count: 0,
    },
    {
        adult: false,
        backdrop_path: null,
        genre_ids: [99],
        id: 725934,
        original_language: "en",
        original_title: "Rob Bell - An Introduction to Joy",
        overview:
            "Author and speaker Rob Bell tells us how to be less cynical and more honest about the subversive truth that lurks just below the surface of pretty much everything, in this taping of his 2019 tour of the same name.",
        popularity: 0.6,
        poster_path: null,
        release_date: "2020-07-18",
        title: "Rob Bell - An Introduction to Joy",
        video: false,
        vote_average: 0,
        vote_count: 0,
    },
    {
        adult: false,
        backdrop_path: "/uDBA6cArHf1KyeGuC2pKvNBzGxK.jpg",
        genre_ids: [],
        id: 736109,
        original_language: "en",
        original_title: "Nehemiah: “The Joy of Jehovah Is Your Stronghold”​",
        overview:
            "Nehemiah takes the lead in rebuilding Jerusalem’s walls and restoring pure worship to Jehovah.\r Nehemiah leaves his position in the Castle of Shushan to rebuild the walls of Jehovah’s great city. However, a large construction project isn’t the only test he will face. Will prayer and courage be enough to complete the project?\r After rebuilding Jerusalem’s walls, Nehemiah faces a new challenge. Over time, the nation’s spirituality has deteriorated. With help from Ezra and Malachi, they set out to restore pure worship.",
        popularity: 0.6,
        poster_path: "/qXhzUjfGGFal9xbtL6ONu6yy7W6.jpg",
        release_date: "2020-08-24",
        title: "Nehemiah: “The Joy of Jehovah Is Your Stronghold”​",
        video: true,
        vote_average: 10,
        vote_count: 1,
    },
    {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 667450,
        original_language: "en",
        original_title: "Brief Glimpses on the Way to Joy (Part 1)",
        overview:
            'A summing up of the spontaneous Super 8 filmmaking I have done over the past decade exploring nature, home, and friends using improvised distorting lenses, macro photography, and pixillation. I imagine that it would fit the film scholar P. Adams Sitney\'s definition of a " Quotidian Lyric". Music by 2 of my favorite percussion ensembles : Ensemble et. al. and TIGUE.',
        popularity: 0.6,
        poster_path: "/niRiJhZaEXVWso9sRK80VSCIWXe.jpg",
        release_date: "2020-01-10",
        title: "Brief Glimpses on the Way to Joy (Part 1)",
        video: false,
        vote_average: 0,
        vote_count: 0,
    },
    {
        adult: false,
        backdrop_path: null,
        genre_ids: [99],
        id: 751168,
        original_language: "ru",
        original_title: "Джой",
        overview:
            "In the circus tent „Joy” the same thing happens every day – they dismantle and assemble the tent with a dome full of stars, give performances, and move on to the next place. Lynx and parrot trainers quarrel over every little thing, and Valera the clown always performs alone. Until one day a new partner joins him, the clown Yana, and he starts to dream about conquering the world of the circus together with her.",
        popularity: 0.6,
        poster_path: "/yLAn3cTd9R7J7YjBXexs6vgCUx5.jpg",
        release_date: "2020-10-26",
        title: "Joy",
        video: false,
        vote_average: 0,
        vote_count: 0,
    },
    {
        adult: false,
        backdrop_path: null,
        genre_ids: [35],
        id: 633809,
        original_language: "ru",
        original_title: "От печали до радости",
        overview:
            "The Trifonov family lives in a small town. Vladimir, Nadezhda and their two sons Romka and Pashka. Once Pashka with a group of factory workers goes to Moscow on an excursion. After his return, the parents notice that the son has become more withdrawn, taciturn, often absent somewhere. The parents soon find out that the son is dating a woman fifteen years older than him. And the chosen one also has three children. Parents begin to fight for their son, crushing and breaking the newly born love. But, after a while, both realize what a terrible mistake they made.",
        popularity: 1.081,
        poster_path: "/gZf247zMRntNj7mBN8EnMYE9UdR.jpg",
        release_date: "2020-09-14",
        title: "From Sadness To Joy",
        video: false,
        vote_average: 6.3,
        vote_count: 4,
    },
    {
        adult: false,
        backdrop_path: null,
        genre_ids: [18, 9648],
        id: 655781,
        original_language: "is",
        original_title: "Gleðipakkinn",
        overview:
            "Joy Box is a company that sells happiness in a box. After an encounter with a Joy Box, Arna quickly discovers it's true mystical characteristics.",
        popularity: 0.6,
        poster_path: "/z0cdg9UBOeg2wq9w64Sl3Wj8DAr.jpg",
        release_date: "2020-03-01",
        title: "The Joy Box",
        video: false,
        vote_average: 0,
        vote_count: 0,
    },
    {
        adult: false,
        backdrop_path: "/x5V8ccWlB5OHeQKfEqZ8dwR99EC.jpg",
        genre_ids: [18],
        id: 584355,
        original_language: "fr",
        original_title: "Filles de joie",
        overview:
            "During a scorching summer, Axelle, Conso and Dominique cross every day the Franco-Belgian border to prostitute themselves in Belgium to continue living in Roubaix.",
        popularity: 6.09,
        poster_path: "/jKgZVDZRGiOC71It9vgzZtmmHDb.jpg",
        release_date: "2020-02-12",
        title: "Working Girls",
        video: false,
        vote_average: 5.6,
        vote_count: 39,
    },
    {
        adult: false,
        backdrop_path: "/5gTQmnGYKxDfmUWJ9GUWqrszRxN.jpg",
        genre_ids: [16, 10751, 9648, 35, 80],
        id: 721656,
        original_language: "en",
        original_title: "Happy Halloween, Scooby-Doo!",
        overview:
            "Scooby-Doo and the gang team up with their pals, Bill Nye The Science Guy and Elvira Mistress of the Dark, to solve this mystery of gigantic proportions and save Crystal Cove!",
        popularity: 102.059,
        poster_path: "/5aL71e0XBgHZ6zdWcWeuEhwD2Gw.jpg",
        release_date: "2020-10-06",
        title: "Happy Halloween, Scooby-Doo!",
        video: false,
        vote_average: 7.7,
        vote_count: 122,
    },
    {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 735857,
        original_language: "zh",
        original_title: "欢天喜地天蓬传",
        overview: "",
        popularity: 0.6,
        poster_path: "/rOBCGtNsTlV5eIn96fHTCqp0TGu.jpg",
        release_date: "2020-07-10",
        title: "Joyful God",
        video: false,
        vote_average: 7,
        vote_count: 1,
    },
    {
        adult: false,
        backdrop_path: "/2sIzTi8KblT722ED1hDELT5OgNt.jpg",
        genre_ids: [10749],
        id: 742736,
        original_language: "ko",
        original_title: "기쁜 우리 여름날",
        overview:
            "Chanhui and Seyeong, a couple in a long-term relationship, find themselves tiring of each other as life becomes difficult. Chanhui wanted to become a photographer, but is now a salesperson in a camera store. Meanwhile, Seyeong works in a nail salon, feeling a lack of hope for the future. One day, Chanhui realizes that a financially secure man with a steady job has been showing interest in Seyeong. Needless to say, Seyeong, enjoys his attention. Not to lose his girlfriend to that man, Chanhui plans a trip to reconnect with Seyeong and refresh their relationship. However, their journey seems to go nowhere. While traveling, they constantly express love, open up more, fight with each other, and gain intimacy.",
        popularity: 0.6,
        poster_path: "/qjJWRWCqiVkvXLCrZzQbnhIVBXX.jpg",
        release_date: "2020-10-26",
        title: "Our Joyful Summer Days",
        video: false,
        vote_average: 0,
        vote_count: 0,
    },
];

export default resultsExample;
