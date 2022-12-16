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
    reactions: [Reaction]
    posts: [Post]
    post(postid: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    addPost(title: String!, content: String!): Post
    addReaction(comment: String!, postid: ID!): Reaction

    deletePost(postid: ID!): Post
    deleteReaction(reactionid: ID!, postid: ID!): Reaction

    updatePost(postid: ID!, title:String, content:String): Post
    updateReaction(reactionid: ID!, comment:String): Reaction

  }
`;

module.exports = typeDefs;
