import styled, {keyframes} from 'styled-components';

import Hamburger from './Hamburger';
import { LayoutContext } from './../context/layout-context';
import Link from 'next/link';
import Menu from './Menu';

const bounce = keyframes`
0%, 100%, 20%, 50%, 80% {
  transform: translateY(0);
}
40% {
  transform: translateY(-20px);
}
60% {
  transform: translateY(-12px);
}
`;
const StyledLogo = styled.span`
  font-size: 2.8rem;
  position: relative;
  z-index: 2;
  transform: skew(-9deg);
  margin-left: 2px;
  font-weight: 700;
  
  a {
    padding: 0 12px 0 0;
    background: ${props => props.theme.white};
    color: ${props => props.theme.blue};
    text-transform: uppercase;
    text-decoration: none;
    position: relative;


    // &:hover {
    //   background: ${props => props.theme.blue};
    //   color: ${props => props.theme.white};
    // }

    span {
      position: absolute;
      right: 0;
      bottom: 0;
      display: inline-block;
      transition: all 0.2s ease-in;
      transform: translateY(0);
      animation-duration: 1.2s;
      animation-fill-mode: both;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    }

    &:hover span {
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
    padding: 15px 0;
  }
`;
const Header = () => (
  <StyledHeader>
    <div className="bar">
      <StyledLogo>
        <Link href="/">
          <a>AH<span>.</span></a>
        </Link>
      </StyledLogo>
      <LayoutContext.Consumer>
        {({ menuItems, menuActive, toggleMenu, closeMenu }) => (
          <div>
            <Hamburger active={menuActive} toggle={toggleMenu} />
            <Menu menu={menuItems} active={menuActive} close={closeMenu} />
          </div>
        )}
      </LayoutContext.Consumer>
    </div>
  </StyledHeader>
);

export default Header;