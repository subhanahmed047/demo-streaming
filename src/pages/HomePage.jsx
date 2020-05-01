import React from 'react';
import Content from '../components/content';
import TopBar from '../components/topBar';
import { CardContainer, Card } from '../components/card';

const HomePage = () => (
  <>
    <TopBar title="Popular Titles" />
    <Content>
      <CardContainer>
        <Card></Card>
        <Card></Card>
      </CardContainer>
    </Content>
  </>
);

export default HomePage;
