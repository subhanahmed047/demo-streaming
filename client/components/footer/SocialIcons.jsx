import React from 'react';
import styled from 'styled-components';
import Icon from '../shared/Icon';
import FacebookWhite from '../../assets/social/facebook-white.svg';
import FacebookWBlue from '../../assets/social/facebook-blue.svg';
import TwitterWhite from '../../assets/social/twitter-white.svg';
import TwitterBlue from '../../assets/social/twitter-blue.svg';
import InstagramWhite from '../../assets/social/instagram-white.svg';
import InstagramBlue from '../../assets/social/instagram-blue.svg';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  img {
    margin-top: 2em;
    padding-right: 1em;
    width: auto;
    height: 2em;
  }
`;

const SocialIcons = () => (
  <Container>
    <Icon src={FacebookWhite} hoverSrc={FacebookWBlue}></Icon>
    <Icon src={TwitterWhite} hoverSrc={TwitterBlue}></Icon>
    <Icon src={InstagramWhite} hoverSrc={InstagramBlue}></Icon>
  </Container>
);

export default SocialIcons;
