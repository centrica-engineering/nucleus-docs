import Parser from 'rss-parser';

const blogPosts = async () => {
  const parser = new Parser();
  let blogData = (await parser.parseURL('https://blog.nucleus.design/feed.xml')).items;
  return blogData;
}

export { blogPosts };
