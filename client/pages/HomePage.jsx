import React from 'react';
import Content from '../components/content';
import TopBar from '../components/topBar';
import { CardContainer, Card } from '../components/card';

const HomePage = () => {
  return (
    <>
      <TopBar title="Popular Titles" />
      <Content>
        <CardContainer>
          <Card type="SERIES" title="Popular Series" linkTo="/series"></Card>
          <Card type="MOVIES" title="Popular Movies" linkTo="/movies"></Card>
        </CardContainer>
      </Content>
    </>
  );
};

export default HomePage;
