const express = require('express');
const router = express.Router();
const axios = require('axios');

// const { clothes } = require('../controllers/clothes');

router.get('/', async (req,res) => {
  let clothesAPIURL = process.env.CLOTHING_API;
  try {
    const response = await axios.get(clothesAPIURL)
    res.status(200).json(response.data)
    console.log(response)
  } catch(err) {
    res.status(500).json({message: err})
  }
});

module.exports = router;
