import media from './media';
import styled from 'styled-components';

const IntroWrap = styled.div`
  background-color: ${props => props.theme.secondary};
  padding: 0;
  line-height: 1.4;
  margin-top: 2rem;
  font-size: 1.125rem;
  ${media.lg`font-size: 1.25rem;`}

  h1 {
    margin: 0 0 1rem 0;
  }
  `;

  export default IntroWrap;