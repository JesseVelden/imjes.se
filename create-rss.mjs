import { readdirSync, writeFileSync } from 'fs';
import RSS from 'rss';
const directory = './.contentlayer/generated/Post';
const files = readdirSync(directory);
const allPosts = [];

// Now dynamically import all the posts from the files in the generated folder
for (const file of files) {
  const { default: jsonObject } = await import(directory + '/' + file, { assert: { type: 'json' } });
  allPosts.push(jsonObject);
}

const feed = new RSS({
  title: 'imjes.se Blog',
  author: 'Jesse van der Velden',
  feed_url: 'https://imjes.se/rss.xml',
  site_url: 'https://imjes.se',
  language: 'en',
});

allPosts
  .map((post) => ({
    title: post.title,
    description: post.excerpt,
    categories: post.tags,
    url: `https://imjes.se/blog/${post.slug}`,
    date: new Date(post.date),
    author: post.author ?? 'Jesse van der Velden',
  }))
  .forEach((item) => feed.item(item));

writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
