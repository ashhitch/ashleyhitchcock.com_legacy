import styled from 'styled-components';
import media from './media';

const CardArticle = styled.article`
  background-color: ${props => props.theme.white};
  text-decoration: none;
  color: #333;
  transition: transform 0.2s ease-in;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  border-radius: 2px;

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.theme.grey};
    color: ${props => props.theme.white};
  }

  &:hover,
  &:focus {
    transform: scale(1.01);
  }

  .card__image {
    &__src {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }

  .card__content {
    position: relative;
    padding: 1.5rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    z-index: 1;
    ${media.lg`
    padding: 2.5rem 1.5rem;
    `}
    &:before {
      transform: rotate(-1.75deg);
      content: '';
      width: 100%;
      height: 100%;
      background: ${props => props.theme.offWhite};
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: 1350ms cubic-bezier(0.23, 1, 0.32, 1);
      transition-delay: 400ms;
      border-radius: 2px;
    }
  }

  .card__meta {
    font-size: 0.75rem;
    margin-top: 1rem;
  }
  .card__title {
    margin: 0;

    &__link {
      color: ${props => props.theme.black};
      @media (prefers-color-scheme: dark) {
        color: ${props => props.theme.white};
      }
      text-decoration: none;
    }
  }

  .card__body {
    flex: 1;
  }

  .card__footer {
    text-transform: uppercase;
    font-size: 0.75rem;
    color: #444;
    font-weight: 600;
  }

  .card__tag {
    @media (prefers-color-scheme: dark) {
      color: ${props => props.theme.white};
    }
    & + .card__tag {
      margin-left: 0.5rem;
    }
  }
`;

export default CardArticle;
