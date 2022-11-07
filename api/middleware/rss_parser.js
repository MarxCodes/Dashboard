let Parser = require('rss-parser')

let parser = new Parser({
    headers: { 'User-Agent': 'Chrome' }
});

async function fetchRssFeed (feedUrl)  {
  let feed = await parser.parseURL(feedUrl);
  return feed.items.map(item => {
    return {
      title: item.title,
      pubDate: item.pubDate,
      content: item.content,
      contentSnippet: item.contentSnippet,
      image: item.link
    }
  })
}

module.exports = fetchRssFeed;