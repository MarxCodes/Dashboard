const express = require('express');
const router = express.Router();
const fetchRSSFeed = require('../controllers/news');

router.get('/', fetchRSSFeed);


module.exports = router;
