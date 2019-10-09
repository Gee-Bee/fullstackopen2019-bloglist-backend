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
  let authorBlogs = {}
  blogs.forEach(blog =>
    authorBlogs[blog.author] = (authorBlogs[blog.author] || 0) + 1
  );
  const [ author, count ]  = Object.entries(authorBlogs).reduce(
    (acc, curr) => acc[1] > curr[1] ? acc : curr
  );
  return {
    author,
    blogs: count,
  }
};

const mostBlogs = (blogs) => {
  const authorBlogs = _.countBy(blogs, 'author')
  const name = _.maxBy(_.keys(authorBlogs), name => authorBlogs[name])
  return name && {
    author: name,
    blogs: authorBlogs[name],
  };
};

const mostLikesVanillaJS = (blogs) => {
  if (blogs.length === 0)
    return undefined;
  let authorLikes = {}
  blogs.forEach(blog =>
    authorLikes[blog.author] = (authorLikes[blog.author] || 0) + blog.likes
  );
  const [ author, likes ]  = Object.entries(authorLikes).reduce(
    (acc, curr) => acc[1] > curr[1] ? acc : curr
  );
  return {
    author,
    likes,
  }
};

const mostLikes = (blogs) => {
  const authorLikes = _.transform(blogs, (acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + blog.likes;
  }, {});
  const name = _.maxBy(_.keys(authorLikes), name => authorLikes[name])
  return name && {
    author: name,
    likes: authorLikes[name],
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogsVanillaJS,
  mostBlogs,
  mostLikesVanillaJS,
  mostLikes,
}