import {useQuery} from '@apollo/client';
import React from 'react';
import { Course } from './generated/graphql';
import { loader } from 'graphql.macro';


const CoursesList = () => {
	const query = loader('./graphql/courses.graphql');
	const { loading, error, data } = useQuery(query);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;


	return ( data.courses.map((course: Course, id: number)=> (
		<div key={id}>
			<p>{course.title}</p>
			<p>{course.author}</p>
		</div>
	))
	);
};

export default CoursesList;