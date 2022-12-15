import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
      email
      _id
    }
  }
}
`;

export const LOGIN_USER = gql`
 mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;
/////////POSTS/////////
export const ADD_POST = gql`
mutation AddPost($title: String!, $content: String!) {
  addPost(title: $title, content: $content) {
    _id
    title
    content
    createdAt
    user {
      _id
    }
    reactions {
      _id
    }
  }
}
`;
///TODO: MAKE SERVER SIDE///
export const UPDATE_POST = gql`
  mutation updatePost($postId: String!, $newTitle: String, $newContent: String) {
    updatePost(postId: $postId, newTitle: $newTitle, newContent: $newContent) {
    _id
    title
    content
  }
}
`;

export const DELETE_POST = gql`
  mutation deletePost($postid: String!) {
    deletePost(postid: $postid) {
    _id
  }
}
`;
/////////REACTIONS/////////
export const ADD_REACTION = gql`
mutation Mutation($comment: String!, $postId: ID!) {
  addReaction(comment: $comment, postId: $postId) {
    _id
    comment
    createdAt
    user {
      _id
    }
  }
}
`;
///TODO: MAKE SERVER SIDE///
export const UPDATE_REACTION = gql`
  mutation updateReaction($reactionId: String!, $newComment: String) {
    updateReaction(reactionId: $reactionId, newComment: $newComment) {
    comment
  }
}
`;
///TODO: MAKE SERVER SIDE///
export const DELETE_REACTION = gql`
  mutation deleteReaction($reactionid: String!, $postid: ID!) {
  deleteReaction(reactionid: $reactionid, postid: $postid) {
    _id
  }
}
`;