import styled from "styled-components";

const StyledContent = styled.div`
  a {
    color: ${props => props.theme.primary};
    position: relative;
    display: inline-block;
    text-decoration: none;
    z-index: 1;
    padding: 2px 5px;

    &:after {
      display: block;
      content: "";
      background: ${props => props.theme.highlight};
      height: 10px;

      position: absolute;
      left: 0;
      right: 0;
      bottom: 10px;
      z-index: -1;
      transition: all 0.2s ease-in-out;
      bottom: 0;
      transform: rotate(3deg);
    }

    &:hover:after {
      transform: rotate(2deg);
      right: 100%;
      bottom: 0;
    }
    &:nth-child(odd):hover:after {
      transform: rotate(-2deg);
    }
  }

  p {
    margin: 0 0 1rem 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  pre {
    overflow: auto;
    font-family: monospace;
  }

  .prism-code {
    display: block;
    white-space: pre;
    margin: 0;
    outline: none;
    text-shadow: none;
    hyphens: none;
    word-wrap: normal;
    word-break: normal;
    text-align: left;
    word-spacing: normal;
    tab-size: 2;
    padding: 0.75rem;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
`;

export default StyledContent;
