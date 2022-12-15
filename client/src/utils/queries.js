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
query Query($postid: ID!) {
  post(postid: $postid) {
    title
    content
    createdAt
    user {
      username
    }
    reactions {
      comment
      createdAt
      user {
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
