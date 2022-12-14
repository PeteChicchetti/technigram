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

export const ADD_POST = gql`
  mutation addPost($title: String!, $content: String!) {
  addPost(title: $title, content: $content) {
    _id
    title
    content
    createdAt
  }
}
`;

export const UPDATE_POST = gql`
  mutation updatePost($postId: String!, $newTitle: String, $newContent: String) {
    updatePost(postId: $postId, newTitle: $newTitle, newContent: $newContent) {
    _id
    title
    content
  }
}
`;

// export const DELETE_POST = gql`
//   mutation deletePost($postId: String!, $userId: String) {
//     deletePost(postId: $postId, userId: $userId) {
    
//   }
// }
// `;

export const ADD_REACTION = gql`
  mutation addReaction($comment: String!) {
  addReaction(comment: $comment) {
    _id
    comment
  }
}
`;

export const UPDATE_REACTION = gql`
  mutation updateReaction($reactionId: String!, $newComment: String) {
    updateReaction(reactionId: $reactionId, newComment: $newComment) {
    comment
  }
}
`;

export const DELETE_REACTION = gql`
  mutation deleteReaction($reactionId: String!, $postId: String) {
  deleteReaction(reactionId: $reactionId, postId: $postId) {
    post
  }
}
`;

export const ADD_COURSE = gql`
  mutation addCourse($courseName: String!, $startDate: String!, $endDate: String!, $description: String!) {
  addCourse(courseName: $courseName, startDate: $startDate, endDate: $endDate, description: $description) {
    _id
    courseName
    startDate
    endDate
    description
    instructor
  }
}
`;

export const ADD_STUDENT = gql`
  mutation addStudent($firstName: String!, $lastName: String!, $course: String!) {
  addStudent(firstName: $firstName, lastName: $lastName, course: $course) {
    _id
    firstName
    lastName
    course
  }
}
`;

export const ADD_ASSIGNMENT = gql`
  mutation addAssignment($assignmentName: String!, $grade: Int, $studentId: String) {
  addAssignment(assignmentName: $assignmentName, grade: $grade, studentId: $studentId) {
    assignmentName
    grade
  }
}
`;

export const UPDATE_ASSIGNMENT = gql`
  mutation updateAssignment($assignmentId: String!, $newGrade: Int) {
  updateAssignment(assignmentId: $assignmentId, newGrade: $newGrade) {
    assignmentName
    grade
  }
}
`;

export const DELETE_ASSIGNMENT = gql`
  mutation deleteAssignment($assignmentId: String!, $studentId: String) {
  deleteAssignment(assignmentId: $assignmentId, studentId: $studentId) {
    course
  }
}
`;