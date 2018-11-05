import React from 'react';
import styled from 'styled-components';
interface IHamburgerProps {
  active: boolean;
  toggle: () => {};
}

const StyledHamburger = styled.div`
.menu-toggle {
  position: fixed;
  z-index: 20;
  right: 0;
  top: 0;
  margin: 5%;
  > span {
    width: 50px;
    height: 5px;
    background-color: #5f5fe8;
    display: block;
    margin: 8px auto;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
  }

  &.is-active span {
    background-color: #111111;
    &:nth-child(1),
    &:nth-child(3) {
      width: 40px;
    }
    &:nth-child(1) {
      transform: translateX(-10px) rotate(-45deg);
    }
    &:nth-child(3) {
      transform: translateX(-10px) rotate(45deg);
    }
  }
}
`;
const Hamburger = (props: IHamburgerProps) => (
  <StyledHamburger>
  <a href="#" className={'menu-toggle ' + (props.active ? 'is-active' : '')} onClick={props.toggle}>
    <span />
    <span />
    <span />
  </a>
  </StyledHamburger>
);

export default Hamburger;
