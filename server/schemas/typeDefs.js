const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    posts: [Post]
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    createdAt: String
    user: User
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID!
    comment: String!
    createdAt: String
    user: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    users: [User]
    posts: [Post]
    post(postid: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    addPost(title: String!, content: String!): Post
    addReaction(comment: String!, postId: ID!): Post

    deletePost(postId: ID!): Post
    deleteReaction(reactionId: ID!, postId: ID!): Post


  }
`;

module.exports = typeDefs;
