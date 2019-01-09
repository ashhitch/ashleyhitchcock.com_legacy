import styled, { css } from 'styled-components';

const baseHeadingStyles = css`
  color: ${props => props.theme.primary};
  line-height: 1.2;
  margin: 0 0 2rem 0;
`;

export const Heading = styled.h1`
  ${baseHeadingStyles}
  font-size: 2.25rem;
`;
export const SubHeading = styled.h2`
  ${baseHeadingStyles}
  font-size: 1.75rem;
`;
