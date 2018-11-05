import styled from 'styled-components';

const StyledContent = styled.div`
  a {
  color: #111111;
  position: relative;
  display: inline-block;
  text-decoration: none;
  z-index: 1;
  padding: 0 5px;

  &:after {
    display: block;
    content: "";
    background: #bada55;
    height: 20px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 10px;
    z-index: -1;
    transition: all 0.2s ease-in-out;
    bottom: 0;
    transform: rotate(2deg);
  }

  &:hover:after {
    transform: rotate(4deg);
    bottom: 0;
  }
  &:nth-child(odd):hover:after {
    transform: rotate(-4deg);
  }
}

`;

export default StyledContent;