import React, { Component } from "react";

import { Heading } from "./styles/Headings";
import IntroWrap from "./styles/Intro";
import Link from "next/link";
import StyledContent from "./styles/Content";

class Intro extends Component  {
  props: any;
  constructor(props) {
    super(props);
  }
  render() {
  return(
    <IntroWrap>
      <Heading>{this.props.title }</Heading>
      <StyledContent>
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
        </StyledContent>
    </IntroWrap>
  )
}
}

export default Intro;