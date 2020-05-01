import React from 'react';
import styled from 'styled-components';
import DefaultImage from '../../assets/placeholder.png';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 18em;
`;

const ImageContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.secondary.light};
  border-radius: 2px;
  align-items: center;
  display: flex;
  background-color: ${({ theme }) => theme.secondary.dark};
  position: relative;
  flex: 1;
`;

const CardImage = styled.img`
  width: 100%;
  background-image: url(${({ src }) => src});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
`;

const ImageText = styled.h3`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
  height: 2em;
`;

const CardTitle = styled.a`
  color: ${({ theme }) => theme.secondary.dark};
  font-weight: 500;
  font-size: 14px;
  padding-top: 0.1em;
`;

const Card = ({ img, type, title, linkTo }) => (
  <Link to={linkTo}>
    <Container>
      <ImageContainer>
        <CardImage src={img || DefaultImage} alt="placeholder" />
        <ImageText>{img ? '' : type}</ImageText>
      </ImageContainer>
      <CardTitle>{title}</CardTitle>
    </Container>
  </Link>
);

export default Card;
