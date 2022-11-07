const express = require('express');
const router = express.Router();

const { searchTeams } = require('../controllers/football');

router.post('/', searchTeams);

module.exports = router;