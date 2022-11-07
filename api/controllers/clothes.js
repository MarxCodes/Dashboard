const axios = require('axios');

const clothes = async (req,res) => {
  let clothesAPIURL = process.env.CLOTHING_API;
  try {
    const response = await axios.get(clothesAPIURL)
    res.status(200).json(response.data)
  } catch(err) {
    res.status(500).json({message: err})
  }
};

module.exports = clothes;