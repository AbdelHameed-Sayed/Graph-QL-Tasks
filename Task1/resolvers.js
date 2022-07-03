let posts = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    posts: () => posts,
  },

  Mutation: {
    createPost: (_, { title, author, comment }) => {
      const newPost = { id: 3, title, author, comment };
      posts.push(newPost);
      return newPost;
    },

    deletePost: (_, { id }) => {
      posts = posts.filter(post => post.id !== id);
      return posts;
    },
  },
};

module.exports = resolvers;
