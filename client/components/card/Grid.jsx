import React from 'react';
import CardContainer from './CardContainer';
import Card from './Card';
import styled from 'styled-components';

const Text = styled.h3`
  text-align: center;
`;

const Grid = ({ isLoading, data, error }) => {
  return error ? (
    <Text>Oops, Something went wrong...</Text>
  ) : isLoading ? (
    <Text>Loading...</Text>
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
