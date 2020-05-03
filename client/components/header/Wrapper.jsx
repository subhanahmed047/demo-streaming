import styled from 'styled-components';
import Bar from '../shared/Bar';

const Wrapper = styled(Bar)`
  justify-contents: space-between;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  background: ${(props) => props.theme.primary.light};
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.primary.light} 0,
    ${(props) => props.theme.primary.dark} 100%
  );
`;

export default Wrapper;
