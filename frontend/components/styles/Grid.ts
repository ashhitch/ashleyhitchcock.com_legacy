import styled from 'styled-components';

export const GridWrapper = styled.section`
  display: grid;
  width: 100%;
  padding: 0;
  list-style-type: none;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 2rem;
`;


export const GridItem = styled.div`
  @media (min-width: 768px) {
    &:first-child {
      grid-column: span 2;
    }
  
  }
  @media (min-width: 1200px) {
    &:first-child {
      grid-column: span 3;
    }
  
  }
`;
