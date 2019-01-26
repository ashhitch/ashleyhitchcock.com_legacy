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

const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  if (!isNaN(date.getTime())) {
      // Months use 0 index.
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}

const Card = (props: ICardProps) => {
  const tags =
    (!!props.tags && props.tags.nodes.length)
      ? props.tags.nodes.map((tag, index) => (
       
            <span className="card__tag" key={index}>
              {tag.name}
            </span>
  
          )
        )
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


        {props.date ? <span className="card__meta">{formatDate(props.date)}</span> : null}

        <div
          className="card__body"
          dangerouslySetInnerHTML={{
            __html: props.excerpt ? props.excerpt : null
          }}
        />
        
        {(!!props.tags && props.tags.nodes.length) ? (<div className="card__footer">
         {tags ? tags : null}
        </div>): null }
      </div>
      </div>
    </CardArticle>
  );
};
export default Card;
