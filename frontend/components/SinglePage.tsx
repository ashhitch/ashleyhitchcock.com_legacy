import NextSeo from 'next-seo';

import React from 'react';
import renderHTML from 'react-render-html';
import StyledContent from './styles/Content';
import { Heading } from './styles/Headings';
import StyledPost from './styles/Post';

// Parse square braket costent to use prism-react-renderer
// \[.*?\]

const SinglePost = ({ post }) => {
  const { title, content, seo, hero } = post;

  const heroBanner = hero || '/static/images/hero-placeholder.svg';

  const seoData = {
    title: seo && !!seo.title ? seo.title : title,
    description: seo.metaDesc,
  };

  return (
    <>
      <NextSeo config={seoData} />
      <StyledPost>
        <div className="post">
          <div className="post__banner">
            <img className="post__banner__src" src={heroBanner} alt={title} />
          </div>

          <header className="post__heading">
            <Heading>{title}</Heading>
          </header>

          <StyledContent className="post__content">{content ? renderHTML(content) : null}</StyledContent>
        </div>
      </StyledPost>
    </>
  );
};

export default SinglePost;