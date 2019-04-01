import NextSeo from 'next-seo';

import React, { useMemo } from 'react';
import { createMarkup } from '../lib/helpers';
import StyledContent from './styles/Content';
import { Heading } from './styles/Headings';
import StyledPost from './styles/Post';
import FeaturedImage from './styles/FeaturedImage';

// Parse square braket costent to use prism-react-renderer
// \[.*?\]

const SinglePost = ({ post }) => {
  const { title, content, seo, hero, featuredImage } = post;
  console.log({ featuredImage });

  const heroBanner = hero || '/static/images/hero-placeholder.svg';
  const image =
    !!featuredImage && !!featuredImage.mediaDetails
      ? featuredImage.mediaDetails.sizes.filter(media => media.name === 'medium')
      : null;

  console.log({ image });

  const seoData = {
    title: seo && !!seo.title ? seo.title : title,
    description: seo.metaDesc,
  };

  const bodyContent = createMarkup(content);

  return (
    <>
      <NextSeo config={seoData} />
      <StyledPost>
        <div className="post">
          <div className="post__banner">
            <img className="post__banner__src" src={heroBanner} alt={title} />
          </div>

          <header className="post__heading">
            <Heading dangerouslySetInnerHTML={createMarkup(title)} />
          </header>

          {image ? (
            <div className="post__main post__main--flip">
              <aside className="post__aside post__aside--flip">
                <FeaturedImage>
                  <img className="post__thumb" src={image[0].sourceUrl} alt={title} />
                </FeaturedImage>
              </aside>
              <StyledContent className="post__content" dangerouslySetInnerHTML={bodyContent} />
            </div>
          ) : (
            <StyledContent className="post__content" dangerouslySetInnerHTML={bodyContent} />
          )}
        </div>
      </StyledPost>
    </>
  );
};

export default SinglePost;
