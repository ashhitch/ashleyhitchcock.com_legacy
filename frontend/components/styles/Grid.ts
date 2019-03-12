import styled from "styled-components";
import media from "./media";

const GridWrapper = styled.section`
  display: grid;
  width: 100%;
  padding: 0;
  list-style-type: none;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 2rem;

  ${media.md`
  grid-template-columns: 1fr 1fr;
  `}
  ${media.lg`
  grid-template-columns: 1fr 1fr 1fr;
  `}
`;

const GridItem = styled.div`
  ${media.md`
    &:first-child {
      grid-column: span 2;
    }
    `}

  ${media.lg`
    &:first-child {
      grid-column: span 3;
    }
    `}
`;

export { GridWrapper, GridItem };
