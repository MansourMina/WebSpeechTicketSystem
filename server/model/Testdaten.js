const tickets = [
  {
    id: 1,
    sektor: 'A',
    rang: '2',
    bereich: 'G',
    firstname: 'Filip',
    lastname: 'Wojtasik',
    email: 'Wojtasik.f03@htlwienwest.at',
  },
];
const spiele = [
  {
    id: 1,
    Heim: 'Österreich',
    Gast: 'Polen',
    heim_logo:
      'https://www.fasent-shop.de/689-large_default/flagge-oesterreich-austria-at-150x90cm-90x150cm.jpg',
    gast_logo: 'https://stickermaster.de/412-large_default/polen-flagge.jpg',
    Spiel: 'Länderspiel',
    VIP: false,
    Preis: 240,
    Datum: '21.01.2022',
    Ort: 'Ernst-Happel-Stadion',
  },
  {
    id: 2,
    Heim: 'SK Rapid',
    Gast: 'FC Bayern München',
    heim_logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/SK_Rapid_Wien_Logo.svg/815px-SK_Rapid_Wien_Logo.svg.png',
    gast_logo:
      'https://bilder.ottoversand.at/i/empiriecom/5cc07448ebd38be975e757d1bb837512?$format_dv_mob_075$',
    Spiel: 'Freundschaftsspiel',
    VIP: true,
    Preis: 200,
    Datum: '21.01.2022',
    Ort: 'Rapid-Stadion',
  },
  {
    id: 3,
    Heim: 'FK Austria Wien',
    Gast: 'SK Rapid',
    heim_logo:
      'https://upload.wikimedia.org/wikipedia/de/thumb/4/49/Austria_Wien.svg/2000px-Austria_Wien.svg.png',
    gast_logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/SK_Rapid_Wien_Logo.svg/815px-SK_Rapid_Wien_Logo.svg.png',
    Spiel: 'Österreichische Bundesliga',
    VIP: false,
    Preis: 100,
    Datum: '15.12.2021',
    Ort: 'Sturm-Graz-Stadion',
  },
  {
    id: 4,
    Heim: 'FK Austria Wien',
    Gast: 'FC Bayern München',
    heim_logo:
      'https://upload.wikimedia.org/wikipedia/de/thumb/4/49/Austria_Wien.svg/2000px-Austria_Wien.svg.png',
    gast_logo:
      'https://bilder.ottoversand.at/i/empiriecom/5cc07448ebd38be975e757d1bb837512?$format_dv_mob_075$',
    Spiel: 'Freundschaftsspiel',
    VIP: false,
    Preis: 100,
    Datum: '11.12.2021',
    Ort: 'Ernst-Happel-Stadion',
  },
  {
    id: 5,
    Heim: 'Österreich',
    Gast: 'Deutschland',
    heim_logo:
      'https://www.fasent-shop.de/689-large_default/flagge-oesterreich-austria-at-150x90cm-90x150cm.jpg',
    gast_logo: 'https://node01.flagstat.net/media/catalog/product/detail/12720.png',
    Spiel: 'Bundesliga',
    VIP: true,
    Preis: 250,
    Datum: '06.05.2022',
    Ort: 'Ernst-Happel-Stadion',
  },
];

const vereine = [
  {
    id: 1,
    name: 'SK Rapid Wien',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/SK_Rapid_Wien_Logo.svg/815px-SK_Rapid_Wien_Logo.svg.png',
  },
  {
    id: 2,
    name: 'FC Bayern München',
    img: 'https://img.fcbayern.com/image/upload/q_auto,f_auto/w_800,h_1067,c_pad/eCommerce/produkte/20459/mousepad-logo.png',
  },
  {
    id: 3,
    name: 'FK Austria Wien',
    img: 'https://upload.wikimedia.org/wikipedia/de/thumb/4/49/Austria_Wien.svg/2000px-Austria_Wien.svg.png',
  },
  {
    id: 4,
    name: 'FC Mina Ägypten',
    img: 'https://cdn-icons-png.flaticon.com/512/321/321226.png',
  },
];
const stadion1 = [
  {
    name: 'Ernst-Happel-Stadion',
    sektoren: [
      {
        name: 'A',
        ränge: [
          {
            name: 1,
            bereiche: ['E', 'F', 'G', 'H'],
          },
          {
            name: 2,
            bereiche: ['E', 'F', 'G', 'H'],
          },
          {
            name: 3,
            bereiche: ['H', 'I', 'J', 'K', 'L', 'M', 'N'],
          },
        ],
      },
      {
        name: 'B',
        ränge: [
          {
            name: 1,
            bereiche: ['A', 'B', 'C', 'D', 'E'],
          },
          {
            name: 2,
            bereiche: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
          },
          {
            name: 3,
            bereiche: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
          },
        ],
      },
      {
        name: 'C',
        ränge: [
          {
            name: 1,
            bereiche: ['A', 'B', 'C', 'D'],
          },
          {
            name: 2,
            bereiche: ['A', 'B', 'C', 'D'],
          },
          {
            name: 3,
            bereiche: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
          },
        ],
      },
      {
        name: 'D',
        ränge: [
          {
            name: 1,
            bereiche: ['D', 'E', 'F', 'G', 'H'],
          },
          {
            name: 2,
            bereiche: ['E', 'F', 'G', 'H'],
          },
          {
            name: 3,
            bereiche: ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
          },
        ],
      },
      {
        name: 'E',
        ränge: [
          {
            name: 1,
            bereiche: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
          },
          {
            name: 2,
            bereiche: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
          },
          {
            name: 3,
            bereiche: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
          },
        ],
      },
      {
        name: 'F',
        ränge: [
          {
            name: 1,
            bereiche: ['A', 'B', 'C', 'D', 'E'],
          },
          {
            name: 2,
            bereiche: ['A', 'B', 'C', 'D'],
          },
          {
            name: 3,
            bereiche: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
          },
        ],
      },
    ],
  },
];

const stadion2 = [
  {
    name: 'Allianz Stadion',
    sektoren: [
      {
        name: 1,
      },
      {
        name: 2,
      },
      {
        name: 3,
      },
      {
        name: 4,
      },
      {
        name: 5,
      },
      {
        name: 6,
      },
      {
        name: 7,
      },
      {
        name: 8,
      },
      {
        name: 9,
      },
      {
        name: 10,
      },
      {
        name: 11,
      },
      {
        name: 12,
      },
      {
        name: 13,
      },
      {
        name: 14,
      },
      {
        name: 15,
      },
      {
        name: 16,
      },
      {
        name: 17,
      },
      {
        name: 18,
      },
      {
        name: 19,
      },
      {
        name: 20,
      },
    ],
  },
];

const stadion3 = [
  {
    name: 'Sturm-Graz-Stadion',
    sektoren: [
      {
        name: 1,
      },
      {
        name: 2,
      },
      {
        name: 3,
      },
      {
        name: 4,
      },
      {
        name: 5,
      },
      {
        name: 6,
      },
      {
        name: 7,
      },
      {
        name: 8,
      },
      {
        name: 9,
      },
      {
        name: 10,
      },
      {
        name: 11,
      },
      {
        name: 12,
      },
      {
        name: 13,
      },
      {
        name: 14,
      },
      {
        name: 15,
      },
      {
        name: 16,
      },
      {
        name: 17,
      },
      {
        name: 18,
      },
      {
        name: 19,
      },
      {
        name: 20,
      },
      {
        name: 21,
      },
      {
        name: 22,
      },
      {
        name: 23,
      },
      {
        name: 24,
      },
      {
        name: 25,
      },
      {
        name: 26,
      },
      {
        name: 27,
      },
    ],
  },
];

module.exports = { spiele, stadion1, stadion2, stadion3, tickets, vereine };
