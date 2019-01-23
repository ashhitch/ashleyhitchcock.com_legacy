import CardArticle from './styles/Card';
import Link from 'next/link';
import React from 'react';

interface ICardTitleProps {
  rendered: string;
}
interface ICardExcerptProps {
  rendered: string;
}
interface ICardProps {
  tag_names: [];
  linkType: string;
  slug: string;
  featuredImage: any;
  title: ICardTitleProps;
  excerpt: ICardExcerptProps;
}

const Card = (props: ICardProps) => {
  const tags =
    !!props.tag_names && props.tag_names.length
      ? props.tag_names.map((tag, index) => {
          return (
            <span className="card__tag" key={index}>
              {tag}
            </span>
          );
        })
      : null;

  return (
    <CardArticle>
      <div className="card">
      <div className="card__image">
        <Link
          as={`/${props.linkType ? props.linkType : 'page'}/${props.slug}`}
          href={`/post?slug=${props.slug}&apiRoute=${props.linkType ? props.linkType : 'page'}`}
        >
          <img
            className="card__image__src"
            src={
              props.featuredImage
                ? props.featuredImage.mediaDetails.sizes[2].sourceUrl
                : '/static/images/placeholder.svg'
            }
            alt="Image"
          />
        </Link>
      </div>
      <div className="card__content">
        <h2 className="card__title">
          <Link
            as={`/${props.linkType ? props.linkType : 'page'}/${props.slug}`}
            href={`/post?slug=${props.slug}&apiRoute=${props.linkType ? props.linkType : 'page'}`}
          >
            <a className="card__title__link">{props.title ? props.title : null}</a>
          </Link>
        </h2>

        <div
          className="card__body"
          dangerouslySetInnerHTML={{
            __html: props.excerpt ? props.excerpt : null
          }}
        />
        <div className="card__footer" hidden={!!props.tag_names && props.tag_names.length ? false : true}>
          {tags}
        </div>
      </div>
      </div>
    </CardArticle>
  );
};
export default Card;
