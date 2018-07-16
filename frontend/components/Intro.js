import Link from "next/link";
import React from 'react';

const Intro = (props) => {

  return(
    <div className="intro">
      <h1>{props.title }</h1>
        <div  className="content">
        <div
            dangerouslySetInnerHTML={{
                __html: props.content
            }}
        />
          <Link
            as={`/page/about`}
            href={`/post?slug=about&apiRoute=page`}
        >
        <a>Read more</a>
        </Link>
        </div>
    </div>
  )
}

export default Intro;