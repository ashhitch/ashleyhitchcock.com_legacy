import React, { Component } from "react";

import IntroWrap from "./styles/Intro";
import Link from "next/link";

class Intro extends Component  {
  props: any;
  constructor(props) {
    super(props);
  }
  render() {
  return(
    <IntroWrap>
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
    </IntroWrap>
  )
}
}

export default Intro;