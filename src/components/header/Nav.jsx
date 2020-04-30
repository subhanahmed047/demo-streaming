import React from 'react';
import styled from 'styled-components';
import Button from '../shared/Button';

const NavItem = styled.a`
  padding: 0px 20px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
`;

const NavWrapper = styled.ul`
  list-style: none;
  display: flex;
`;

const Nav = () => {
  return (
    <>
      <NavWrapper>
        <NavItem>Log in</NavItem>
      </NavWrapper>
      <Button>Start your free trial</Button>
    </>
  );
};

export default Nav;
