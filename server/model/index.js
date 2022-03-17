const daten = require('./Testdaten.js');

const getGames = () => daten.spiele;

const getVereine = () => daten.vereine;

const getTickets = () => daten.tickets;

const addTicket = (body) => {
  const alleIDS = daten.tickets.map((el) => el.id);
  const newID = Math.max(...alleIDS) + 1;
  // eslint-disable-next-line no-param-reassign
  body.id = newID;
  daten.tickets.push(body);
  return daten.tickets;
};

module.exports = { getGames, getVereine, getTickets, addTicket };
