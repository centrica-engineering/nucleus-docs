const blogArticles = async () => {
  return fetch('https://feature-posts-api.nucleus-blog.pages.dev/articles.json')
  .then((response) => response.json())
  .then(response => response.articles);
};

export { blogArticles };
