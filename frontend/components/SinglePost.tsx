import Head from 'next/head';
import { Heading } from './styles/Headings';
import StyledContent from './styles/Content';
import renderHTML from 'react-render-html';
import styled from 'styled-components';

const StyledPost = styled.article`
.post {
  display: flex;
  flex-direction:  column;
  min-height: calc(100vh - 40px);
  
  &__banner {
    height: 300px;
    background-color: #bada55;
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
    
    h1 {
      margin: 0;
      padding: 0;
    }
  }
  
  &__content {
    background-color: ${props => props.theme.secondary};
    flex-grow: 1;
    height: 100%;
    z-index: 5;
    padding-top: 1rem;
  }
}
`;
const SinglePost = ({post}) => {

  const {title, content, seotitle, seometadesc} = post;
  const hero = '/static/images/hero-placeholder.svg';
  return (
    <>
    <Head>
      <title>{!!seotitle ? seotitle : title}</title>
   
    </Head>
    <StyledPost>
      <div className="post">
        <div className="post__banner">
          <img
            className="post__banner__src"
            src={hero}
            alt={title}
          />
        </div>

        <header className="post__heading">
          <Heading>{title}</Heading>
        </header>

        <StyledContent className="post__content">
          {!!content ? renderHTML(content) : null}
        </StyledContent>
      </div>
    </StyledPost>
    </>
  );
};

export default SinglePost;
