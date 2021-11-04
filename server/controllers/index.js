const asyncHandler = require('express-async-handler');
const model = require('../model/index.js');

const getGames = asyncHandler((req, res) => {
  res.send(model.getGames());
});

const getVereine = asyncHandler((req, res) => {
  res.send(model.getVereine());
});

module.exports = { getGames, getVereine };
