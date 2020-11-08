import React from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Course } from './generated/graphql';

const CoursesList = () => {
  const query = loader('./graphql/courses.graphql');
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.courses.map((course: Course) => (
    <div key={course.title}>
      <p>{course.title}</p>
      <p>{course.author}</p>
    </div>
  ));
};

export default CoursesList;
