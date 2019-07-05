import React from 'react';

import Link from 'next/link';
import { Heading } from './styles/Headings';
import IntroWrap from './styles/Intro';
import StyledContent from './styles/Content';
import { createMarkup } from '../lib/helpers';

const Intro = ({ title, content }) => (
  <IntroWrap>
    <div className="content">
      <Heading>{title}</Heading>
      <StyledContent>
        <div dangerouslySetInnerHTML={createMarkup(content)} />
      </StyledContent>
    </div>
  </IntroWrap>
);

export default Intro;
