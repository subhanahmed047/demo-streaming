import styled from 'styled-components';

const Button = styled.a`
  margin-left: 20px;
  padding: 9px 25px;
  background: ${(props) => props.theme.secondary.dark};
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.secondary.light} 0,
    ${(props) => props.theme.secondary.dark} 100%
  );
  border: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: ${(props) => props.theme.secondary.light};
  }
`;

export default Button;
