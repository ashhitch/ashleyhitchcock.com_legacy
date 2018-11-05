const SinglePost = (post) => {

  return (
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
  );
};

export default SinglePost;
