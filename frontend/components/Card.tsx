import React from 'react';
import Link from 'next/link';
import CardArticle from './styles/Card';

interface ICardTitleProps {
  rendered: string;
}
interface ICardExcerptProps {
  rendered: string;
}
interface ICardProps {
  tags: INode;
  linkType: string;
  slug: string;
  featuredImage: any;
  date: Date;
  title: ICardTitleProps;
  excerpt: ICardExcerptProps;
}

interface INode {
  nodes: [ITag];
}

interface ITag {
  name: string;
}

const formatDate = inputDate => {
  const date = new Date(inputDate);
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(date.getTime())) {
    // Months use 0 index.
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
};

const Card = (props: ICardProps) => {
  const { tags, linkType, featuredImage, slug, title, excerpt, date } = props;

  console.log(props);

  const tagsElms =
    !!tags && tags.nodes.length
      ? tags.nodes.map((tag, index) => (
          <span className="card__tag" key={index}>
            {tag.name}
          </span>
        ))
      : null;

  const linkPrefix = linkType === 'post' ? 'blog' : linkType || `page`;
  const linkAs = `/${linkPrefix}/${slug}`;
  const linkHref = `/post?slug=${slug}&apiRoute=${linkPrefix}`;

  return (
    <CardArticle>
      <div className="card">
        <div className="card__image">
          <Link as={linkAs} href={linkHref}>
            <img
              className="card__image__src"
              src={featuredImage ? featuredImage.mediaDetails.sizes[2].sourceUrl : `/static/images/placeholder.svg`}
              alt="{title ? title : null}"
            />
          </Link>
        </div>
        <div className="card__content">
          <h2 className="card__title">
            <Link as={linkAs} href={linkHref}>
              <a className="card__title__link">{title}</a>
            </Link>
          </h2>

          {date ? <span className="card__meta">{formatDate(date)}</span> : null}

          <div
            className="card__body"
            dangerouslySetInnerHTML={{
              __html: excerpt || null,
            }}
          />

          {!!tagsElms && tagsElms.length ? <div className="card__footer">{tagsElms}</div> : null}
        </div>
      </div>
    </CardArticle>
  );
};
export default Card;
