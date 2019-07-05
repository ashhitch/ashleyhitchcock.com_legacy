import Router from 'next/router';
import React, { useState } from 'react';

import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import Menu from './Menu';
import media from './styles/media';

// import Headroom from 'react-headroom';

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
    font-family: ${props => props.theme.headingFont};
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
      width: 0.5ex;
      height: 0.5ex;
      display: block;
      background-color: ${props => props.theme.highlight};
    }

    &:hover span,
    &.is-loading span {
      animation-name: ${bounce};
    }
  }
`;
const StyledHeader = styled.header`
  position: relative;
  max-width: 95%;
  margin: 0 auto;

  .bar {
    padding: 1rem 0 0 0;

    ${media.md`
    display: grid;
    justify-content: space-between;
    align-items: stretch;
    grid-template-columns: auto 1fr;
    `}

    ${media.lg`
    padding: 2rem 0;
    `}
  }
`;
const Header = () => {
  const [isLoading, setIsLoading] = useState(false);

  Router.onRouteChangeStart = () => setIsLoading(true);
  Router.onRouteChangeComplete = () => setTimeout(() => setIsLoading(false), 2000);
  Router.onRouteChangeError = () => setIsLoading(false);

  return (
    <>
      <StyledHeader>
        <div className="bar">
          <StyledLogo>
            <Link href="/">
              <a className={isLoading ? 'is-loading' : 'is-not-loading'}>
                AH
                <span />
              </a>
            </Link>
          </StyledLogo>
          <Menu />
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
