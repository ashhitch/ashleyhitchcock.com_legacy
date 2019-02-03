// import Router from 'next/router';
// import { useState } from 'react';

import { Mutation, Query } from "react-apollo";
import styled, { keyframes } from "styled-components";

import Link from "next/link";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import { adopt } from "react-adopt";
import { CLOSE_MENU_MUTATION, LOCAL_STATE_QUERY } from "../state/resolvers";

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
    .is-loading span {
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

const Composed = adopt({
  closeMenu: ({ render }) => (
    <Mutation mutation={CLOSE_MENU_MUTATION}>{render}</Mutation>
  ),
  localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>
});

const Header = () => (
  // const [loading, setLoading] = useState(false);

  <>
    <Composed>
      {({ closeMenu, localState }) => {
        const { menuActive } = localState.data;

        // Set the active class
        if (process.browser) {
          menuActive
            ? document.body.classList.add("menu-open")
            : document.body.classList.remove("menu-open");
        }
        //  onClick={() => client.writeData({data: { menuActive: !menuActive }})}
        return (
          <>
            <StyledHeader>
              <div className="bar">
                <StyledLogo>
                  <Link href="/">
                    <a>
                      AH
                      <span />
                    </a>
                  </Link>
                </StyledLogo>
                <Hamburger active={menuActive} />
              </div>
            </StyledHeader>

            <Menu active={menuActive} close={closeMenu} />
          </>
        );
      }}
    </Composed>
  </>
);

export default Header;
