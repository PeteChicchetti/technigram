import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query user($userId: ID!) {
  user(userId: $userId) {
    _id
    username
    email
    courseCount
    courses {
      _id
      courseName
      startDate
      endDate
      description
      instructor
    }
  }
}
`;

export const QUERY_COURSE = gql`
  query course($courseId: ID!) {
  course(courseId: $courseId) {
    _id
    courseName
    startDate
    endDate
    description
    instructor
    students {
      _id
      firstName
      lastName
      course
      grades {
        _id
        assignmentName
        grade
      }
    }
    studentCount
  }
}
`;
