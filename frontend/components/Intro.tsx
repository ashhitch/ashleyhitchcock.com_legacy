import React, { Component } from "react";

import Link from "next/link";

class Intro extends Component  {
  constructor(props) {
    super(props);
  }
  render() {
  return(
    <div className="intro">
      <h1>{this.props.title }</h1>
        <div  className="content">
        <div
            dangerouslySetInnerHTML={{
                __html: this.props.content
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
}

export default Intro;