const axios = require('axios');
const weather = async (req,res) => {
  const { body: { lat, lng }} = req;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.WEATHER_API}`;
  const weather = await axios.get(url);
  const weathers = await fetch(url)

    return res.status(200).json(weathers)
};

module.exports = weather;