const spiele = [
  {
    id: 1,
    Spiel: 'Polen - Österreich',
    Liga: 'Bundesliga',
    Spieler: 'Spieler1, Spieler2, Spieler3, Spieler4, ...',
    VIP: false,
    Preis: 240,
    Datum: '21.01.2022',
    Ort: 'Ernst-Happel-Stadion',
  },
  {
    id: 2,
    Spiel: 'FC Bayern München - SK Rapid',
    Liga: 'Europa League',
    Spieler: 'Spieler1, Spieler2, Spieler3, Spieler4, ...',
    VIP: true,
    Preis: 200,
    Datum: '21.11.2021',
    Ort: 'Rapid-Stadion | Allianz-Stadion',
  },
  {
    id: 3,
    Spiel: 'FK Austria Wien - SK Rapid Wien',
    Liga: 'Bundesliga',
    Spieler: 'Spieler1, Spieler2, Spieler3, Spieler4, ...',
    VIP: false,
    Preis: 100,
    Datum: '15.12.2021',
    Ort: 'Sturm-Graz-Stadion | Merkur-Arena',
  },
  {
    id: 4,
    Spiel: 'FK Austria Wien - FC Mina Ägypten',
    Liga: 'Bundesliga',
    Spieler: 'Spieler1, Spieler2, Spieler3, Spieler4, ...',
    VIP: false,
    Preis: 100,
    Datum: '11.12.2021',
    Ort: 'Ernst-Happel-Stadion',
  },
  {
    id: 5,
    Spiel: 'FK Austria Wien - FC Bayern München',
    Liga: 'Bundesliga',
    Spieler: 'Spieler1, Spieler2, Spieler3, Spieler4, ...',
    VIP: true,
    Preis: 250,
    Datum: '06.11.2021',
    Ort: 'Rapid-Stadion | Allianz-Stadion',
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
    img: 'https://bilder.ottoversand.at/i/empiriecom/5cc07448ebd38be975e757d1bb837512?$format_dv_mob_075$',
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
