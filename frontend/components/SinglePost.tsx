import Head from "next/head";
import NextSeo from "next-seo";
import renderHTML from "react-render-html";
import styled from "styled-components";
import { useEffect } from "react";
import Gist from "react-gist";
import React from "react";
import media from "./styles/media";
import StyledContent from "./styles/Content";
import { Heading } from "./styles/Headings";

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
      ${media.lg` padding: 1.5rem 1rem; `}

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
      padding: 1rem 1.5rem;
    }
  }
`;

const parseGist = content => {
  if (!content) {
    return;
  }

  const delimiterPattern = /<script src="https:\/\/gist.github.com\/ashhitch\/(.*?).js"><\/script>/gi;
  const test = delimiterPattern.exec(content);

  const updatedContent = content.split(delimiterPattern).map((token, i) => {
    if (test && token === test[1]) {
      return <Gist id={test[1]} key={i} />;
    }
    return <React.Fragment key={i}>{renderHTML(token)}</React.Fragment>;
  });

  return <>{updatedContent}</>;
};

const SinglePost = ({ post }) => {
  const { title, content, seo, hero } = post;

  const heroBanner = hero || "/static/images/hero-placeholder.svg";

  const seoData = {
    title: seo && !!seo.title ? seo.title : title,
    description: seo.metaDesc
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

          <StyledContent className="post__content">
            {content ? parseGist(content) : null}
          </StyledContent>
        </div>
      </StyledPost>
    </>
  );
};

export default SinglePost;
