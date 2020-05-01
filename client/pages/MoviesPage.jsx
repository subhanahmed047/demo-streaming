import React, { useState, useEffect } from 'react';
import Content from '../components/content';
import TopBar from '../components/topBar';
import { Grid } from '../components/card';
import { getMovies } from '../services';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies()
      .then((res) => res.json())
      .then((movies) => {
        setTimeout(() => {
          setMovies(movies);
          setIsLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <>
      <TopBar title="Popular Movies" />
      <Content>
        <Grid data={movies} isLoading={isLoading} />
      </Content>
    </>
  );
};

export default MoviesPage;
