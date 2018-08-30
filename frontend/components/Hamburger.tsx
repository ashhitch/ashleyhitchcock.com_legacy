import React from 'react';

interface IHamburgerProps {
  active: boolean;
  toggle: () => {};
}
const Header = (props: IHamburgerProps) => (
  <a href="#" className={'menu-toggle ' + (props.active ? 'is-active' : '')} onClick={props.toggle}>
    <span />
    <span />
    <span />
  </a>
);

export default Header;
