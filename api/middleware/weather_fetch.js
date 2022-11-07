const axios = require('axios');

const fetchWeather = async(req, res) => {
  const { body: { lat, lng }} = req;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.WEATHER_API}`;

  if(!lat || !lng) {
    throw new Error('Latitude and Longitude not provided');
  }

  const request = axios.get(url)
    // .then(response => {
    //   console.log(response);
    //   let resJson = response.json()
    //   console.log(resJson);
    // })
    // .catch(err => {
    //   throw new Error(err);
    // }) 
    return request;
}

module.exports = fetchWeather;