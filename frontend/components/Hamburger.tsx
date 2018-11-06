import React from 'react';
import styled from 'styled-components';
interface IHamburgerProps {
  active: boolean;
  toggle: () => {};
}

const StyledHamburger = styled.div`
.menu-toggle {
  position: absolute;
  z-index: 110;
  right: 20px;
  top: 20px;
  margin: 0;
  > span {
    width: 50px;
    height: 5px;
    background-color: ${props => props.theme.blue};
    display: block;
    margin: 8px auto;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
  }

  &.is-active span {
    background-color: ${props => props.theme.white};
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
