import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.secondary.light};
  border-radius: 4px;
`;

const Card = () => <Wrapper />;

export default Card;
