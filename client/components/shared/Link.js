import styled from 'styled-components';
import devices from '../../constants/devices';

const Link = styled.a`
  padding: 0px 20px;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  ${({ mobileOnly }) =>
    mobileOnly &&
    `
      display: none;
      @media ${devices.maxWidth.TABLET} {
        display: initial;
      }
      @media ${devices.minWidth.TABLET} {
        display: none;
      }
  `}

  ${({ desktopOnly }) =>
    desktopOnly &&
    `
      display: visible;
      @media ${devices.maxWidth.TABLET} {
        display: none;
      }
      @media ${devices.minWidth.TABLET} {
        display: visible;
      }
  `}
`;

export default Link;
