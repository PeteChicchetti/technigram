const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    posts: [Post]
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    user: User
  }

  type Reaction {
    _id: ID!
    comment: String!
    user: User
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
