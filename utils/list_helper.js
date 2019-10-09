const _ = require('lodash');

const dummy = (blogs) => 1;

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => sum + blog.likes;

  return blogs.reduce(reducer, 0);
}

const favoriteBlog = (blogs) => {
  const reducer = (acc, curr) => curr.likes > acc.likes ? curr : acc;

  const retv = blogs.reduce(reducer, blogs[0]);
  return retv && {
    title: retv.title,
    author: retv.author,
    likes: retv.likes,
  }
}

const mostBlogsVanillaJS = (blogs) => {
  if (blogs.length === 0)
    return undefined;
  let authors = {}
  blogs.forEach(blog =>
    authors[blog.author] = (authors[blog.author] || 0) + 1
  );
  const [ author, count ]  = Object.entries(authors).reduce(
    (acc, curr) => {
      return acc[1] > curr[1] ? acc : curr;
    }
  );
  return {
    author,
    blogs: count,
  }
};

const mostBlogs = (blogs) => {
  const authors = _.countBy(blogs, 'author')
  const name = _.maxBy(_.keys(authors), name => authors[name])
  return name && {
    author: name,
    blogs: authors[name],
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogsVanillaJS,
  mostBlogs,
}