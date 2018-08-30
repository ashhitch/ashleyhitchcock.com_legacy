import React from 'react';

interface HamburgerProps {
  active: boolean;
  toggle: () => {};
}
const Header = (props: HamburgerProps) => (
  <a href="#" className={'menu-toggle ' + (props.active ? 'is-active' : '')} onClick={props.toggle}>
    <span />
    <span />
    <span />
  </a>
);

export default Header;
