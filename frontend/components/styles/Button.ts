import styled from 'styled-components';

const StyledButton = styled.a`
  color: ${props => props.theme.black};
  position: relative;
  display: inline-block;
  text-decoration: none;
  z-index: 1;
  padding: 2px 5px;

  &:after {
    display: block;
    content: '';
    background: ${props => props.theme.highlight};
    height: 20px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 10px;
    z-index: -1;
    transition: all 0.2s ease-in-out;
    bottom: 0;
    transform: rotate(4deg);
  }

  &:hover:after {
    transform: rotate(6deg);
    bottom: 0;
  }
`;

export default StyledButton;
