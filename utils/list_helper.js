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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}