import styled from 'styled-components';
import devices from '../../constants/devices';
import Bar from '../shared/Bar';

const Wrapper = styled(Bar)`
  justify-contents: space-between;
  padding: 0.4em 8em;
  background: ${(props) => props.theme.primary.light};
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.primary.light} 0,
    ${(props) => props.theme.primary.dark} 100%
  );
`;

export default Wrapper;
