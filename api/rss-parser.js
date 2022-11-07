let Parser = require('rss-parser');
let parser = new Parser();

(async () => {
  let feed = await parser.parseURL('http://feeds.bbci.co.uk/news/rss.xml#');
  console.log(feed);

  feed.items.map((item, index) => {
    console.log()
  })
})()