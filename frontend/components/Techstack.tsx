import React from 'react';
import { IconGridStyle, IconGridItemStyle } from './styles/IconGrid';
import AngularIcon from './icons/angular.svg';
import CssIcon from './icons/css.svg';

import JavascriptIcon from './icons/javascript.svg';
import NodeIcon from './icons/node.svg';
import ReactIcon from './icons/react.svg';
import { SubHeading } from './styles/Headings';
import WordPressIcon from './icons/wordpress.svg';

const Techstack = () => (
  <>
    <SubHeading>Technologies I love</SubHeading>
    <IconGridStyle>
      <IconGridItemStyle brandbg="#F7DF1E">
        <JavascriptIcon />
      </IconGridItemStyle>
      <IconGridItemStyle brandbg="#61DAFB">
        <ReactIcon />
      </IconGridItemStyle>
      <IconGridItemStyle brandbg="#DD0031">
        <AngularIcon />
      </IconGridItemStyle>
      <IconGridItemStyle brandbg="#21759B">
        <WordPressIcon />
      </IconGridItemStyle>
      <IconGridItemStyle brandbg="#339933">
        <NodeIcon />
      </IconGridItemStyle>
      <IconGridItemStyle brandbg="#1572B6">
        <CssIcon />
      </IconGridItemStyle>
    </IconGridStyle>
  </>
);

export default Techstack;
