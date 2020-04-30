import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  justify-contents: space-between;
  padding: 0.4em 5em;
  align-items: center;
  background: ${(props) => props.theme.primary.light};
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.primary.light} 0,
    ${(props) => props.theme.primary.dark} 100%
  );
`;

export default Wrapper;
