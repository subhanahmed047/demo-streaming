import React from 'react';
import styled from 'styled-components';
import devices from '../../constants/devices';

const Nav = styled.nav`
  list-style: none;
  display: block;
  line-height: 0.8em;

  a {
    float: left;
    cursor: pointer;
    color: $(({theme}) => theme.linkGrey);
    padding: 0px 1em;
    font-size: 13px;
    font-weight: 300;
    border-left: 1px solid rgba(255, 255, 255, 0.5);

    &:first-child {
      border: none;
      padding-left: 0;
    }
  }

  @media ${devices.maxWidth.TABLET_L} {
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    a {
      border: none;
      line-height: 2.5;
      font-size: 11px;
      width: 50%;
    }
  }
  @media ${devices.maxWidth.MOBILE_L} {
    a {
      width: 100%;
      border: none;
    }
  }
`;

const FooterNav = () => (
  <Nav>
    <a>Home</a>
    <a>Terms and Conditions</a>
    <a>Privacy Policy</a>
    <a>Collection Statement</a>
    <a>Help</a>
    <a>Manage Account</a>
  </Nav>
);

export default FooterNav;
