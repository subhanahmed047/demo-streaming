import React from 'react';
import CardContainer from './CardContainer';
import Card from './Card';

const Grid = ({ isLoading, data, error }) => {
  return error ? (
    <p>Oops, Something went wrong...</p>
  ) : isLoading ? (
    <p>Loading...</p>
  ) : (
    <CardContainer>
      {data &&
        data.map(({ title, images }, index) => (
          <Card
            key={index}
            title={title}
            linkTo="/"
            img={images['Poster Art']['url'] || null}
          ></Card>
        ))}
    </CardContainer>
  );
};

export default Grid;
