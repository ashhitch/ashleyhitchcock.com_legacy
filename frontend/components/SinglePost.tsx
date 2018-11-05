import styled from 'styled-components';

const StyledPost = styled.div`
.post {
  display: flex;
  flex-direction:  column;
  min-height: calc(100vh - 40px);
  &__banner {
    height: 300px;
    width: 100%;
    background-color: #bada55;
    position: relative;
    
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
    margin: -90px 6rem 0 6rem;
    padding: 1.5rem 3rem;
    z-index: 5;
    
    h1 {
      margin: 0;
      padding: 0;
    }
  }
  
  &__content {
    background-color: #fff;
    padding: 3rem;
    flex-grow: 1;
    height: 100%;
    z-index: 5;
  }
}
`;
const SinglePost = (post) => {

  return (
    <StyledPost>
      <div className="post">
        <div className="post__banner">
          <img
            className="post__banner__src"
            src="http://via.placeholder.com/1800x500"
            alt={post.title.rendered}
          />
        </div>
        <header className="post__heading">
          <h1>{post.title.rendered}</h1>
        </header>

        <div
          className="post__content content"
          dangerouslySetInnerHTML={{
            __html: post.content.rendered
          }}
        />
      </div>
    </StyledPost>
  );
};

export default SinglePost;
