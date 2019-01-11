import styled, { keyframes } from 'styled-components';

import Hamburger from './Hamburger';
// import Headroom from 'react-headroom';
import { LayoutContext } from './../context/layout-context';
import Link from 'next/link';
import Menu from './Menu';

// import Router from 'next/router';
// import { useState } from 'react';

const bounce = keyframes`
0%, 100% {
  transform: translateY(0) rotate(0.35turn);
}
20%, 50%, 80% {
  transform: translateY(0) rotate(0.50turn);
}
40% {
  transform: translateY(-20px) rotate(0.35turn);
}
60% {
  transform: translateY(-12px) rotate(0.75turn);
}
`;
const StyledLogo = styled.span`
  font-size: 2.8rem;
  position: relative;
  z-index: 2;
  margin-left: 2px;
  font-weight: 700;

  a {
    padding: 0 0.5ex 0 0;
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
    text-transform: uppercase;
    text-decoration: none;
    position: relative;

    span {
      position: absolute;
      right: 0;
      bottom: 4px;
      display: block;
      transition: all 0.2s ease-in;
      transform: translateY(0) rotate(0.35turn);
      animation-duration: 1.2s;
      animation-fill-mode: both;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      width: .5ex;
      height: .5ex;
      display: block;
      background-color: ${props => props.theme.highlight};
    }

    &:hover span,.is-loading span {
      animation-name: ${bounce};
    }
  }
`;
const StyledHeader = styled.header`
  position: relative;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    padding: 1rem 0;

    @media (min-width: 992px) {
      padding: 2rem 0;
    }
  }
`;

const Header = () => {

  // const [loading, setLoading] = useState(false);

  return (
  <>
    <StyledHeader>
      <div className="bar">
        <LayoutContext.Consumer>
          {({ menuActive, toggleMenu, globalLoading }) => (
            <>
        <StyledLogo className={globalLoading ? 'is-loading': 'is-loaded'} >
          <Link href="/">
            <a>
              AH
              <span></span>
            </a>
          </Link>
        </StyledLogo>
              <Hamburger active={menuActive} toggle={toggleMenu} />
            </>
          )}
        </LayoutContext.Consumer>
      </div>
    </StyledHeader>
    <LayoutContext.Consumer>
      {({ menuActive, closeMenu }) => (
        <>
          <Menu active={menuActive} close={closeMenu} />
        </>
      )}
    </LayoutContext.Consumer>
  </>
)};

export default Header;
