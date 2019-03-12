import styled from "styled-components";

const StyledCategories = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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

    &:hover {
      background-color: ${props => props.theme.primary};
      color: ${props => props.theme.secondary};
    }

    a {
      display: block;
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      padding: 1rem 2rem;
    }
  }
`;

export default StyledCategories;
