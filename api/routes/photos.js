const express = require('express');
const router = express.Router();

const { uploadFiles } = require('../controllers/photos');

router.post('/', uploadFiles);


module.exports = router;
