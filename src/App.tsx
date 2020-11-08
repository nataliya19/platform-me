import React from 'react';
import './App.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CoursesList from './Courses';

const client = new ApolloClient({
  uri: 'https://platform-me.herokuapp.com/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CoursesList />
      </div>
    </ApolloProvider>
  );
}

export default App;
