import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  justify-content: center;
`;

export default CardContainer;
