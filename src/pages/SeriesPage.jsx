import React from 'react';
import Content from '../components/content';
import TopBar from '../components/topBar';
import { CardContainer, Card } from '../components/card';

const SeriesPage = () => (
  <>
    <TopBar title="Popular Series" />
    <Content>
      <CardContainer>
        <Card
          title="Popular Series"
          linkTo="/"
          img="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg"
        ></Card>
      </CardContainer>
    </Content>
  </>
);

export default SeriesPage;
