import Hamburger from './Hamburger';
import { LayoutContext } from './../context/layout-context';
import Link from 'next/link';
import Menu from './Menu';
import styled from 'styled-components';

const Logo = styled.span`
font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.blues};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`;
const StyledHeader = styled.header`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

`;
const Header = () => {
  <StyledHeader>
    <div className="bar">
    <Logo>
        <Link href="/">
          <a>AH</a>
        </Link>
      </Logo>
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
}

export default Header;