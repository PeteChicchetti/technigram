const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Reaction } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    /// GETS ONE USER ///
    user: async (parent, _ , context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).populate('posts').select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    /// GETS ONE POST ///
    post: async (parent, { postid }) => {
        const postData = await Post.findOne({ _id: postid }).populate({path: 'reactions', populate: {path: 'user'}}).populate({path: 'user'}).select('-__v');
        return postData;
    },
    /// GETS ALL POSTS ///
    posts: async () => {
        return await Post.find({}).populate({path: 'reactions', populate: {path: 'user'}}).populate({path: 'user'}).select('-__v ');
    },
    /// GETS ALL USERS ///
    users: async () => {
        return await User.find({}).populate('posts').select('-__v ');
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
    addPost: async (parent, {title, content}, context) => {
      const post = await Post.create(
        {title: title, content: content, user: context.user._id}
      )
      const updatedUser = await User.findOneAndUpdate(
        {_id: context.user._id},
        {$addToSet:{posts: post._id}},
        {new: true}
        );

      return  post ;
    },
    /// ADD REACTION ///
    addReaction: async (parent, {comment, postId}, context) => {
      const reaction = await Reaction.create(
        {comment: comment, user: context.user._id}
        );
        console.log(reaction);
      const updatedPost = await Post.findOneAndUpdate(
        {_id: postId},
        {$addToSet:{reactions: reaction._id}},
        {new: true}
        );
        console.log(updatedPost);

      return reaction;
    },
    deletePost: async (parent, { postId }, context) => {
      const post = await Post.findOne({ post: postId });
      const updatedReaction = await post.reactions.remove();

      const deletedPost = await Post.findOneAndDelete({ post: postId });
      const updatedUser = await User.findOneAndUpdate(
        {_id: context.user._id},
        {$pull:{posts: post}},
        {new: true}
        );
      return { deletedPost, updatedUser, updatedReaction };
    },
  }
};

module.exports = resolvers;


