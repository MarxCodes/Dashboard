// const fetchWeather = require('../middleware/weather_fetch');
const axios = require('axios');
const weather = async (req,res) => {
  // const weatherFetched = await fetchWeather({req})
  const { body: { lat, lng }} = req;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.WEATHER_API}`;
  const weather = await axios.get(url);
  const weathers = await fetch(url)
    // .then(resp => {
    //   res.status(200).json(resp)
    // })
    // .catch(err => {
    //   throw new Error(err);
    // })
    return res.status(200).json(weathers)
    // return weatherFetched;
};

module.exports = weather;