import { Mutation } from "react-apollo";
import React from "react";
import styled from "styled-components";
import { LOCAL_STATE_QUERY, TOGGLE_MENU_MUTATION } from "../state/resolvers";

interface IHamburgerProps {
  active: boolean;
}

const StyledHamburger = styled.div`
  .menu-toggle {
    position: absolute;
    z-index: 110;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    padding: 0;
    border: 0;
    background-color: transparent;

    > span {
      width: 40px;
      height: 4px;
      background-color: ${props => props.theme.primary};
      display: block;
      margin: 6px auto;
      transition: all 0.3s ease-in-out;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &:hover {
      cursor: pointer;
    }

    &.is-active span {
      background-color: ${props => props.theme.secondary};
      &:nth-child(1),
      &:nth-child(3) {
        width: 25px;
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
    <Mutation mutation={TOGGLE_MENU_MUTATION}>
      {toggleMenu => (
        <button
          type="button"
          className={`menu-toggle ${props.active ? "is-active" : ""}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      )}
    </Mutation>
  </StyledHamburger>
);

export default Hamburger;
