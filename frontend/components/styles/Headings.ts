import styled, { css } from 'styled-components';

import media from './media';

const baseHeadingStyles = css`
display: inline-block;
  position: relative;
  color: ${props => props.theme.primary};
  line-height: 1.2;
  margin: 0 0 2rem 0;
  z-index: 2;
  ${media.md`margin: 0 0 3rem 0;`}
  ${media.xl`margin: 0 0 4rem 0;`}

  &:after {
    content: '';
    width: 0.8ex;
    height: 0.8ex;
    display: block;
    position: absolute;
    bottom: 0;
    left: 100%;
    background-color: ${props => props.theme.highlight};
    z-index: 1;
    transform: rotate(45deg);

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
