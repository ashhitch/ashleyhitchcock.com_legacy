import styled from 'styled-components';
import media from './media';

const StyledPost = styled.article`
  .post {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 40px);

    &__banner {
      height: 220px;
      background-color: ${props => props.theme.secondary};
      position: relative;
      margin-left: -1rem;
      margin-right: -1rem;

      ${media.md` height: 300px;`}
      ${media.lg` height: 400px;`}

      &__src {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
      }
    }

    &__heading {
      background-color: ${props => props.theme.secondary};
      margin: -60px 0 0 0;
      padding: 1rem;
      z-index: 5;
      position: relative;
      width: 100%;
      margin: -60px auto 0 auto;
      max-width: ${props => props.theme.maxWidth};
      ${media.lg` padding: 1.5rem 2rem; `}

      h1 {
        margin: 0;
        padding: 0;
      }
    }

    &__main {
      position: relative;
      margin: 0 auto;
      max-width: ${props => props.theme.maxWidth};
      width: 100%;
      ${media.lg` 
        display: grid;
        grid-template-columns: 4fr 2fr;
        grid-gap: 1rem;
       `}
      ${media.xl` 
        grid-template-columns: 5fr 2fr;

       `}
    }

    &__content {
      position: relative;
      margin: 0 auto;
      max-width: ${props => props.theme.maxWidth};
      width: 100%;
      background-color: ${props => props.theme.secondary};
      flex-grow: 1;
      height: 100%;
      z-index: 5;
      padding: 1rem 0.25rem;
      ${media.md`padding: 1rem 1.5rem;`}
    }
    &__aside {
      background-color: ${props => props.theme.secondary};
      height: 100%;
      z-index: 5;
      padding: 1rem 1.5rem;
      position: relative;
      overflow: visible;
    }
    &__main--flip {
      ${media.lg` 

      .post__aside {
        grid-column: 2;
        grid-row: 1;
      }

      .post__content {
        grid-column: 1;
        grid-row: 1;
      }
        
       `}
    }
  }
`;

export default StyledPost;
