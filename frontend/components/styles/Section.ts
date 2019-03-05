import styled from "styled-components";
import media from "./media";

const StyledSection = styled.section`
  padding: 1.5rem 0;

  ${media.md`padding: 2rem 0;`}
  ${media.lg`padding: 3rem 0;`}

  .actions {
    text-align: center;
    padding: 1rem 1rem 0 1rem;

    ${media.md`padding: 2rem 2rem 0 2rem;`}
    ${media.lg`padding: 3rem 3rem 0 3rem;`}
  }
`;

export default StyledSection;
