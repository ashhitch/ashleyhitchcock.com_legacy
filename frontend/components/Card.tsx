import Link from 'next/link';
import React from 'react';

interface CardTitleProps {
  rendered: string;
}
interface CardExcerptProps {
  rendered: string;
}
interface CardProps {
  tag_names: [];
  linkType: string;
  slug: string;
  _embedded: any;
  featured_media: boolean;
  title: CardTitleProps;
  excerpt: CardExcerptProps;
}

const Card = (props: CardProps) => {
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
    <article className="card">
      <div className="card__image">
        <Link
          as={`/${props.linkType ? props.linkType : 'page'}/${props.slug}`}
          href={`/post?slug=${props.slug}&apiRoute=${props.linkType ? props.linkType : 'page'}`}
        >
          <img
            className="card__image__src"
            src={
              props.featured_media
                ? props._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url
                : '/static/images/placeholder.jpg'
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
            <a className="card__title__link">{props.title ? props.title.rendered : null}</a>
          </Link>
        </h2>

        <div
          className="card__body"
          dangerouslySetInnerHTML={{
            __html: props.excerpt.rendered ? props.excerpt.rendered : null
          }}
        />
        <div className="card__footer" hidden={!!props.tag_names && props.tag_names.length ? false : true}>
          {tags}
        </div>
      </div>
    </article>
  );
};
export default Card;
