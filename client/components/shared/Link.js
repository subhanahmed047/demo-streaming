import styled from 'styled-components';
import devices from '../../constants/devices';

const Link = styled.a`
  transition: all 0.3s ease 0s;
  cursor: pointer;

  ${({ mobileOnly }) =>
    mobileOnly &&
    `
      display: none;
      @media ${devices.maxWidth.TABLET_S} {
        display: initial;
      }
      @media ${devices.minWidth.TABLET_S} {
        display: none;
      }
  `}

  ${({ desktopOnly }) =>
    desktopOnly &&
    `
      display: visible;
      @media ${devices.maxWidth.TABLET_S} {
        display: none;
      }
      @media ${devices.minWidth.TABLET_S} {
        display: visible;
      }
  `}
`;

export default Link;
