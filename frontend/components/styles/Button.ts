import styled, { css } from 'styled-components';

const BaseLink = css`
  color: ${props => props.theme.black};
  position: relative;
  display: inline-block;
  text-decoration: none;
  z-index: 1;
  padding: 1rem 2rem;
  cursor: pointer;

  &:after {
    display: block;
    content: '';
    background: ${props => props.theme.highlight};
    width: 100%;
    position: absolute;
    right: 0;
    left: 0;
    top: 5px;
    bottom: 5px;
    z-index: -1;
    transition: all 0.2s ease-in-out;
    bottom: 0;
    transform: rotate(5deg);
    border-radius: 2px;
  }

  &:before {
    display: block;
    content: '';
    border: 3px solid ${props => props.theme.primary};

    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    transition: all 0.2s ease-in-out;
    bottom: 0;
    transform: rotate(-2deg);
    border-radius: 2px;
  }

  &:hover:before {
    transform: rotate(-6deg);
  }
  &:hover:after {
    transform: rotate(7deg);
  }
`;
export const StyledLink = styled.a`
  ${BaseLink}
`;
export const StyledButton = styled.button`
  ${BaseLink}
  border: 0;
  background-color: transparent;
`;

export default StyledLink;
