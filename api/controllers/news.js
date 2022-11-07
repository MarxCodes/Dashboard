const rssFeed = require('../middleware/rss_parser');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');

const fetchRSSFeed = async(req,res) => {
  await rssFeed('http://feeds.bbci.co.uk/news/rss.xml#')
  .then(data => {
    res.status(200).json(data[0]);
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: "couldn't retrieve news"
    })
  })
}

module.exports = fetchRSSFeed;