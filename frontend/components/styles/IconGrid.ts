import styled from 'styled-components';
import media from './media';

export const IconGridStyle = styled.div`
  display: grid;
  width: 100%;
  padding: 0;
  list-style-type: none;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 2.25rem;
  justify-items: center;
  align-items: center;
  ${media.md`grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));  grid-gap: 4rem;`}
  ${media.lg`grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));`}
`;
export const IconGridItemStyle = styled.div`
  text-align: center;

  svg {
    width: 100%;
    max-width: 140px;
    height: auto;
    ${media.md`max-width: 180px;`}
  }
  svg {
    transition: transform 0.2s ease-in;

    path,
    circle {
      fill: ${props => props.theme.primary};
      transition: fill 0.2s ease-in;
    }
  }
  &:hover svg {
    transform: scale(1.1);
  }
  &:hover svg path,
  &:hover svg circle {
    fill: ${props => props.brandbg};
  }
`;
