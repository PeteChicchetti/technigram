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
    user: User
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID!
    comment: String!
    user: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(userId: ID!): User
    posts: [Post]
    post(id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    addPost(title: String!, content: String!, userId: ID!): Post
    addReaction(comment: String!, postId: ID!): Reaction
  }
`;

module.exports = typeDefs;
