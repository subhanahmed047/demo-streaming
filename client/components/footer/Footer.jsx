import React from 'react';
import styled from 'styled-components';
import FooterNav from './FooterNav';
import devices from '../../constants/devices';
import SocialIcons from './SocialIcons';
import StoreIcons from './StoreIcons';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background: black;
  flex-wrap: wrap;
  padding: 2% 5em;
`;

const CopyrightText = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: white;
  padding-top: 1em;

  @media ${devices.maxWidth.TABLET_L} {
    text-align: center;
    font-size: 10px;
    padding-top: 2em;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 1.5em;

  @media ${devices.maxWidth.TABLET_L} {
    justify-content: center;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  @media ${devices.maxWidth.TABLET_L} {
    flex-direction: column-reverse;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <FooterNav />

    {
      <FooterContent>
        <CopyrightText>
          Copyright © 2020 DEMO Streaming. All Rights Reserved.
        </CopyrightText>
        <IconsContainer>
          <SocialIcons />
          <StoreIcons />
        </IconsContainer>
      </FooterContent>
    }
  </FooterWrapper>
);

export default Footer;
