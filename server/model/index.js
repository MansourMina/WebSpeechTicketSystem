const daten = require('./Testdaten.js');

const getGames = () => daten.spiele;

const getVereine = () => daten.vereine;

module.exports = { getGames, getVereine };
