import styled from 'styled-components';
import media from './media';

const StyledCategories = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  li {
    margin: 0.25rem;
    padding: 0;
    border: 1px solid currentColor;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.secondary};
    text-align: center;
    transition: all 0.2s ease-in-out;
    border-radius: 2px;

    &:hover,
    &.is-active {
      background-color: ${props => props.theme.primary};
      color: ${props => props.theme.secondary};
    }

    a {
      display: block;
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      padding: 0.75rem 1rem;

      ${media.md` padding: 1rem 2rem; `}
    }
  }
`;

export default StyledCategories;
