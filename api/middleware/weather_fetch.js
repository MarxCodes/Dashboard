const axios = require('axios');

const fetchWeather = async(req, res) => {
  const { body: { lat, lng }} = req;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.WEATHER_API}`;

  if(!lat || !lng) {
    throw new Error('Latitude and Longitude not provided');
  }

  const request = axios.get(url)

    return request;
}

module.exports = fetchWeather;