import Link from "next/link";
import React from "react";

const Card = props => (
         
            <article className="card">
              <div className="card__media">
              </div>
              <div className="card__body">

              <h2>
                <Link
                        as={`/page/${props.slug}`}
                        href={`/post?slug=${props.slug}&apiRoute=${props.linkType ? props.linkType : 'page'}`}
                    >
                <a>{props.title ? props.title.rendered : null}</a>
                </Link>
              </h2>
              </div>
            </article>
             
        );
 

export default Card;
