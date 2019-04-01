import styled from 'styled-components';
import media from './media';

const FeaturedImage = styled.figure`
  position: relative;
  display: inline-block;
  flex-grow: 0;
  padding: 0;
  margin: 1rem;

  img {
    position: relative;
    max-width: 100%;
    height: auto;
    z-index: 10;
    transform: rotate(2deg);
  }

  &:before {
    display: block;
    content: '';
    border: 3px solid ${props => props.theme.primary};

    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    transition: all 0.2s ease-in-out;
    bottom: 0;
    transform: rotate(-2deg);
    border-radius: 2px;
  }
`;

export default FeaturedImage;
