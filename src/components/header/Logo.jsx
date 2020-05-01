import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoLink = styled(Link)`
  margin-right: auto;
  align-content: center;
  cursor: pointer;
`;

const Logo = () => (
  <LogoLink to="/">
    <h2>DEMO Streaming</h2>
  </LogoLink>
);

export default Logo;
