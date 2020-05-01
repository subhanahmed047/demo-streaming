import React from 'react';
import styled from 'styled-components';
import Bar from '../shared/Bar';

const Container = styled(Bar)`
  justify-content: flex-start;
  height: 2em;
  background: ${({ theme }) => theme.secondary.dark};
  padding: 1.5em 8em;
  box-shadow: 0 4px 2px -1px rgb(65, 65, 65, 0.3);
`;

const Title = styled.h2`
  margin-right: auto;
  font-weight: 500;
`;

const TopBar = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default TopBar;
