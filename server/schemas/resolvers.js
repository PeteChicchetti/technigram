const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Reaction } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    /// GETS ONE USER ///
    user: async (parent, { userId }, context) => {
      if (context.user) {
        const userData = await (await User.findOne({ _id: userId }).select('-__v -password'));

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    /// GETS ONE POST ///
    post: async (parent, { postId }, context) => {
      if (context.post) {
        const postData = await (await Post.findOne({ _id: postId }).populate('user').populate('reaction').select('-__v'));
        return postData;
      }
    },
    /// GETS ALL POSTS ///
    posts: async () => {
        return await Post.find({}).populate('user').populate('reaction').select('-__v ');
    },

  },

  Mutation: {
    /// ADD USER ///
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    /// LOGIN ///
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError('Incorrect Credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    /// ADD POST ///
    addPost: async (parent, args) => {
      const post = await Post.create(args);
      const token = signToken(post);

      return { token, post };
    },
    /// ADD REACTION ///
    addReaction: async (parent, args) => {
      const reaction = await Reaction.create(args);
      const token = signToken(reaction);

      return { token, reaction };
    },
  }
};

module.exports = resolvers;
