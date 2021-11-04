const express = require('express');
const { getGames, getVereine } = require('../controllers/index.js');

const router = express.Router();
router.get('/games', getGames);
router.get('/vereine', getVereine);

module.exports = router;
