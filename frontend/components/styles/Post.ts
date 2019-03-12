import styled from "styled-components";
import media from "./media";

const StyledPost = styled.article`
  .post {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 40px);

    &__banner {
      height: 300px;
      background-color: ${props => props.theme.secondary};
      position: relative;
      margin-left: -1rem;
      margin-right: -1rem;

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
      ${media.lg` padding: 1.5rem 2rem; `}

      h1 {
        margin: 0;
        padding: 0;
      }
    }

    &__main {
      ${media.lg` 
        display: grid;
        grid-template-columns: 5fr 2fr;
        grid-gap: 1rem;
       `}
    }

    &__content {
      background-color: ${props => props.theme.secondary};
      flex-grow: 1;
      height: 100%;
      z-index: 5;
      padding: 1rem 1.5rem;
    }
    &__aside {
      background-color: ${props => props.theme.secondary};
      height: 100%;
      z-index: 5;
      padding: 1rem 1.5rem;
      position: relative;
      overflow: visible;
    }
  }
`;

export default StyledPost;
