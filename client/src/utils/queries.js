import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query user {
  user {
    _id
    username
    email
    password
    posts {
      _id
      title
      content
      createdAt
      user{
        _id
        username
      }
      reactions{
        _id
        comment
        createdAt
        user{
          _id
          username
        }
      }
    }
  }
}
`;

export const QUERY_POST = gql`
query post[($postId: ID!)] {
  post(postId: $postId) {
    _id
    title
    content
    createdAt
    user{
      _id
      username
    }
    reactions{
      _id
      comment
      createdAt
      user{
        _id
        username
      }
    }
  }
}
`;
export const QUERY_POSTS = gql`
query posts {
  post {
    _id
    title
    content
    createdAt
    user{
      _id
      username
    }
  }
}
`;

// export const QUERY_COURSE = gql`
//   query course($courseId: ID!) {
//   course(courseId: $courseId) {
//     _id
//     courseName
//     startDate
//     endDate
//     description
//     instructor
//     students {
//       _id
//       firstName
//       lastName
//       course
//       grades {
//         _id
//         assignmentName
//         grade
//       }
//     }
//     studentCount
//   }
// }
// `;
