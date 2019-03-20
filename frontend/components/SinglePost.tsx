import NextSeo from 'next-seo';

import React, { useMemo } from 'react';
import { createMarkup } from '../lib/helpers';
import parseCode from '../lib/code';
import StyledContent from './styles/Content';
import { Heading, SubHeading } from './styles/Headings';
import StyledPost from './styles/Post';
import Categories from './categories';

const SinglePost = ({ post }) => {
  const { title, content, seo, hero, categories } = post;

  const heroBanner = hero || '/static/images/hero-placeholder.svg';

  const seoData = {
    title: seo && !!seo.title ? seo.title : title,
    description: seo.metaDesc,
  };

  const bodyContent = useMemo(() => parseCode(content), [content]);

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

          <div className="post__main">
            <StyledContent className="post__content">{bodyContent}</StyledContent>
            <aside className="post__aside">
              <SubHeading as="h3">Browse Categories</SubHeading>
              <Categories current={categories.nodes} />
            </aside>
          </div>
        </div>
      </StyledPost>
    </>
  );
};

export default SinglePost;
