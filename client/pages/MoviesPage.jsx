import React, { useState, useEffect } from 'react';
import Content from '../components/content';
import TopBar from '../components/topBar';
import { Grid } from '../components/card';
import { getMovies } from '../services';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovies()
      .then((res) => res.json())
      .then((movies) => {
        setMovies(movies);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  }, []);

  return (
    <>
      <TopBar title="Popular Movies" />
      <Content>
        <Grid data={movies} isLoading={isLoading} error={error} />
      </Content>
    </>
  );
};

export default MoviesPage;
