import styled from 'styled-components';
import devices from '../../constants/devices';

const Bar = styled.header`
  display: flex;
  color: white;
  align-items: center;

  @media ${devices.maxWidth.LAPTOP} {
    padding-left: 1em;
    padding-right: 1em;
  }
`;

export default Bar;
