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
    /// GETS ALL REACTIONS ///
    reactions: async () => {
        return await Reaction.find({}).populate({path: 'user'}).select('-__v ');
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
    //////////ADDS//////////
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
    addReaction: async (parent, {comment, postid}, context) => {
      const reaction = await Reaction.create(
        {comment: comment, user: context.user._id}
        );
      const updatedPost = await Post.findOneAndUpdate(
        {_id: postid},
        {$addToSet:{reactions: reaction._id}},
        {new: true}
        );

      return reaction;
    },
    //////////DELETES//////////
    ///DELETE POST///
    deletePost: async (parent, { postid }, context) => {
      const post = await Post.findOne({ post: postid });
      for (let i = 0; i < post.reactions.length; i++) {
        let updatedReaction = await Reaction.findOneAndDelete({ _id: post.reactions[i]._id });
        }
      const deletedPost = await Post.findOneAndDelete({ post: postid });
      const updatedUser = await User.findOneAndUpdate(
        {_id: context.user._id},
        {$pull:{posts: post._id}},
        {new: true}
        );
      return { deletedPost, updatedUser, updatedReaction };
    },
    ///DELETE REACTION///
    deleteReaction: async (parent, { reactionid, postid }) => {
      const deletedReaction = await Reaction.findOneAndDelete({ _id: reactionid });
      const updatedReaction = await Post.findOneAndUpdate(
        {_id: postid},
        {$pull:{reactions: deletedReaction._id}},
        {new: true}
        );
      return { deletedReaction, updatedReaction };
    },
    //////////UPDATES//////////
    ///UPDATE POST///
    updatePost: async (parent, { postid, title, content }) => {
      const updatedPost = await Post.findOneAndUpdate(
        {_id: postid},
        {$set:{title: title, content: content}},
        {new: true}
        );
      return { updatedPost };
    },
    ///UPDATE REACTION///
    updateReaction: async (parent, { reactionid, comment }) => {
      const updatedReaction = await Reaction.findOneAndUpdate(
        {_id: reactionid},
        {$set:{comment: comment}},
        {new: true}
        );
      return { updatedReaction };
    },
  }
};

module.exports = resolvers;


