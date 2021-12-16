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
      'https://img.fcbayern.com/image/upload/q_auto,f_auto/w_800,h_1067,c_pad/eCommerce/produkte/20459/mousepad-logo.png',
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
    Spiel: 'Österreichisches Bundesliga Spiel',
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
      'https://img.fcbayern.com/image/upload/q_auto,f_auto/w_800,h_1067,c_pad/eCommerce/produkte/20459/mousepad-logo.png',
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
    Spiel: 'Länderspiel',
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

module.exports = { spiele, vereine };
