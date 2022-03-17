const express = require('express');
const { getGames, getVereine, addTicket, getTickets } = require('../controllers/index.js');

const router = express.Router();
router.get('/games', getGames);
router.get('/vereine', getVereine);
router.get('/ticket', getTickets);

router.post('/ticket', addTicket);

module.exports = router;
