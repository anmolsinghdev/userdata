import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import Api from '../Apis/Api';
import Grid from '@mui/material/Grid';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/comments')
    //   .then((res) => res.json())
    //   .then((data) => setData(data));

    //doing With NPM package Axios
    Api.get('/posts').then(({ data }) => setPosts(data));
  }, []);

  if (posts.length === 0) {
    return 'loading..';
  }

  return (
    <Grid container spacing={2}>
      {posts.map((post, index) => {
        return (
          <UserCard
            key={index}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        );
      })}
    </Grid>
  );
};
export default App;
