import React, { Component } from "react";

import Link from "next/link";
import { Heading } from "./styles/Headings";
import IntroWrap from "./styles/Intro";
import StyledContent from "./styles/Content";

class Intro extends Component {
  props: any;

  render() {
    return (
      <IntroWrap>
        <Heading>{this.props.title}</Heading>
        <StyledContent>
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.content
            }}
          />
          <Link as="/page/about" href="/post?slug=about&apiRoute=page">
            <a>Read more</a>
          </Link>
        </StyledContent>
      </IntroWrap>
    );
  }
}

export default Intro;
