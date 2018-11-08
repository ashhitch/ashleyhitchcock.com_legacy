import StyledContent from './styles/Content';
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
    background-color: #fff;
    margin: -60px 0 0 0;
    padding: 1rem;
    z-index: 5;
    
    h1 {
      margin: 0;
      padding: 0;
    }
  }
  
  &__content {
    background-color: #fff;
    flex-grow: 1;
    height: 100%;
    z-index: 5;
    padding-top: 1rem;
  }
}
`;
const SinglePost = ({post}) => {
  const title = !!post && post.title ? post.title.rendered : null;
  const content = !!post && post.content ? post.content.rendered : null;
  return (
    <StyledPost>
      <div className="post">
        <div className="post__banner">
          <img
            className="post__banner__src"
            src="http://via.placeholder.com/1800x500"
            alt={title}
          />
        </div>

        <header className="post__heading">
          <h1>{title}</h1>
        </header>

        <StyledContent
          className="post__content"
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      </div>
    </StyledPost>
  );
};

export default SinglePost;
