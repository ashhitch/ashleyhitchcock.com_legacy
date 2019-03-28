import styled from 'styled-components';
import media from './media';

const IntroWrap = styled.div`
  position: relative;
  background-color: ${props => props.theme.secondary};
  padding: 2.25rem 1rem;
  line-height: 1.4;
  z-index: 1;
  font-size: 1.125rem;
  ${media.md`
  padding: 4rem 2rem;

  `}
  ${media.lg`
  font-size: 1.25rem;
  padding: 5rem 2.5rem;
  
  `}

  h1 {
    margin: 0 0 1rem 0;
  }

  &:before {
    transform: rotate(-1.75deg);
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.offWhite};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 1350ms cubic-bezier(0.23, 1, 0.32, 1);
    transition-delay: 400ms;
    border-radius: 2px;

    @media (prefers-color-scheme: dark) {
      background-color: ${props => props.theme.grey};
    }
  }
`;

export default IntroWrap;
