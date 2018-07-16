import Link from "next/link";
import React from "react";

const Card = props => {

  const tags = props.tag_names.map((tag, index)=> {
    return (
      <span className="card__tag" key={index}>
        {tag}
      </span>
    );
  });


  return (
         
            <article className="card">
              <div className="card__image">
             
<img className="card__image__src" src={props.featured_media ? props._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url : 'http://lorempixel.com/600/400/transport/?1'} alt="Image" />
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
            
              <div  className="card__body"
                        dangerouslySetInnerHTML={{
                            __html: props.excerpt.rendered ? props.excerpt.rendered : null
                        }}
                    />
              <div className="card__footer" hidden={props.tag_names.length ? false : true}>
                {tags}
              </div>
              </div>
            </article>
             
        );
 
      }
export default Card;