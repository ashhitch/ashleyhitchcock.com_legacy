import styled, { css } from "styled-components";

import media from "./media";

const baseHeadingStyles = css`
  display: inline-block;
  position: relative;
  color: ${props => props.theme.primary};
  line-height: 1.2;
  margin: 0 0 2rem 0;
  z-index: 2;
  font-family: ${props => props.theme.headingFont};
  ${media.md`margin: 0 0 3rem 0;`}
  ${media.xl`margin: 0 0 4rem 0;`}

  &:after {
    content: "";
    height: 0.8ex;
    display: block;
    content: "";
    background: ${props => props.theme.highlight};
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 10px;
    z-index: -1;
    transition: all 0.2s ease-in-out;
    bottom: 0;
    transform: rotate(2deg);
  }
`;

export const Heading = styled.h1`
  ${baseHeadingStyles}
  font-size: 2.25rem;
`;
export const SubHeading = styled.h2`
  ${baseHeadingStyles}
  font-size: 1.75rem;
`;
