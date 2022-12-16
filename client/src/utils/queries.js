import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query Query {
  user {
    username
    email
    posts {
      title
      content
      createdAt
      user {
        username
      }
    }
  }
}
`;

export const QUERY_POST = gql`
query post($postid: ID!) {
  post(postid: $postid) {
    _id
    title
    content
    createdAt
    user {
      _id
      username
    }
    reactions {
      _id
      comment
      createdAt
      user {
        _id
        username
      }
    }
  }
}
`;
export const QUERY_POSTS = gql`
query Query {
  posts {
    title
    content
    _id
    createdAt
    user {
      username
    }
  }
}
`;
