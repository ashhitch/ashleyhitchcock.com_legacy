import media from './media';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 1rem 0;

  ${media.md`padding: 2rem 0;`}
  ${media.lg`padding: 3rem 0;`}
`;

export default StyledSection;
