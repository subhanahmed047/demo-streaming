import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11.5em, auto));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  justify-content: center;
`;

export default CardContainer;
