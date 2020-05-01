import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 180px));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  justify-content: center;
`;

export default CardContainer;
