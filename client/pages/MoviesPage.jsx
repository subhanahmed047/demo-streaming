import React, { useState, useEffect } from 'react';
import Content from '../components/content';
import TopBar from '../components/topBar';
import { CardContainer, Card } from '../components/card';
import { getMovies } from '../services';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetcing] = useState(true);

  useEffect(() => {
    getMovies()
      .then((res) => res.json())
      .then((movies) => {
        setTimeout(() => {
          setMovies(movies);
          setIsFetcing(false);
        }, 1000);
      });
  });

  return (
    <>
      <TopBar title="Popular Movies" />
      <Content>
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          <CardContainer>
            {movies &&
              movies.map(({ title, images }) => (
                <Card
                  key={title}
                  title={title}
                  linkTo="/"
                  img={images['Poster Art']['url']}
                ></Card>
              ))}
          </CardContainer>
        )}
      </Content>
    </>
  );
};

export default MoviesPage;
