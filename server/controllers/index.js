const asyncHandler = require('express-async-handler');
const model = require('../model/index.js');

const getGames = asyncHandler((req, res) => {
  res.status(200).json(model.getGames());
});

const getVereine = asyncHandler((req, res) => {
  res.status(200).json(model.getVereine());
});

const getTickets = asyncHandler((req, res) => {
  res.status(200).json(model.getTickets());
});

const addTicket = asyncHandler((req, res) => {
  res.status(200).json(model.addTicket(req.body));
});

module.exports = { getGames, getVereine, getTickets, addTicket };
