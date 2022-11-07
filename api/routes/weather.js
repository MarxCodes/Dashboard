const express = require('express');
const router = express.Router();
const { weather } = require('../controllers/weather');
const axios = require('axios');

router.post('/', async (req,res) => {
  const { body: { lat, lng }} = req;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.WEATHER_API}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data)
  } catch(err) {
    res.status(500).json({message: err})
  }

 });

module.exports = router;
