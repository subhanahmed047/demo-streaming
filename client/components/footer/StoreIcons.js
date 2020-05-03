import React from 'react';
import styled from 'styled-components';
import Icon from '../shared/Icon';
import AppStore from '../../assets/store/app-store.svg';
import PlayStore from '../../assets/store/play-store.svg';
import WindowsStore from '../../assets/store/windows-store.svg';
import devices from '../../constants/devices';

const Container = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  flex-wrap: wrap;
  cursor: pointer;

  @media ${devices.maxWidth.TABLET} {
    justify-content: center;
  }

  img {
    margin-top: 1em;
    padding-right: 1em;
    width: 135px;
    height: auto;
  }
`;

const StoreIcons = () => (
  <Container>
    <Icon src={AppStore}></Icon>
    <Icon src={PlayStore}></Icon>
    <Icon src={WindowsStore}></Icon>
  </Container>
);

export default StoreIcons;
