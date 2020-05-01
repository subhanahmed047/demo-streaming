import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Link } from '../shared/';
import MobileOverlay from '../mobileOverlay/';

const NavWrapper = styled.ul`
  list-style: none;
  display: flex;
`;

const Nav = () => {
  const [mobileOverlayVisiblity, setMobileOverlayVisibility] = useState(false);

  return (
    <>
      <NavWrapper>
        <Link desktopOnly>Log in</Link>
      </NavWrapper>
      <Button desktopOnly>Start your free trial</Button>
      <Button mobileOnly onClick={() => setMobileOverlayVisibility(true)}>
        &#9776;
      </Button>
      <MobileOverlay
        show={mobileOverlayVisiblity}
        onCloseMobileOverlay={() => setMobileOverlayVisibility(false)}
      />
    </>
  );
};

export default Nav;
