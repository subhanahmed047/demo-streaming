import React from 'react';
import styled from 'styled-components';
import Content from '../components/content';
import { Button } from '../components/shared';
import { Link } from 'react-router-dom';

const Heading = styled.h2`
  font-weight: bold;
  text-align: center;
`;

const Text = styled.p`
  font-weight: 400;
  text-align: center;
`;

const PageNotFoundPage = () => (
  <Content>
    <Heading>404</Heading>
    <Text>The page you're looking for does not exist!</Text>
  </Content>
);

export default PageNotFoundPage;
