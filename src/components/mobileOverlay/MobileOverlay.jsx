import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  height: 100%;
  width: ${({ show }) => (show ? '100%' : '0')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.secondary.dark};
  overflow-x: hidden;
  transition: all 0.5s ease 0s;
`;

const CloseButton = styled.a`
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  color: white;
  cursor: pointer;
`;

const OverlayContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OverlayItem = styled.a`
  padding: 15px;
  font-size: 36px;
  display: block;
  transition: all 0.3s ease 0s;

  &:hover,
  &focus {
    color: ${({ theme }) => theme.primary.light};
  }
`;

const MobileOverlay = ({ show, onCloseMobileOverlay }) => {
  return (
    <Nav show={show}>
      <CloseButton
        onClick={() => {
          onCloseMobileOverlay();
        }}
      >
        &times;
      </CloseButton>
      <OverlayContent>
        <OverlayItem href="#">Log in</OverlayItem>
        <OverlayItem href="#">Start your free trial</OverlayItem>
      </OverlayContent>
    </Nav>
  );
};

export default MobileOverlay;
