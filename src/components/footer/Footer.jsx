import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  min-height: 2em;
  color: white;
  background: ${(props) => props.theme.secondary.dark};
  flex-wrap: wrap;
  padding: 1.5em 4em;
`;

const Footer = () => (
  <FooterWrapper>
    <h1>Footer</h1>
  </FooterWrapper>
);

export default Footer;
