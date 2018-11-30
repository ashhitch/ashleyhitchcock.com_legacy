import React, { Component } from 'react';

import AngularIcon from '../static/images/icons/angular.svg';
import CssIcon from '../static/images/icons/css.svg';
import IntroWrap from './styles/Intro';
import JavascriptIcon from '../static/images/icons/javascript.svg';
import Link from 'next/link';
import NodeIcon from '../static/images/icons/node.svg';
import ReactIcon from '../static/images/icons/react.svg';
import WordPressIcon from '../static/images/icons/wordpress.svg';
import styled from 'styled-components';

const IconGridStyle = styled.div`
  display: grid;
  width: 100%;
  padding: 0;
  list-style-type: none;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 2rem;
`;
const IconGridItemStyle = styled.div`
  svg {
    width: 100%;
    max-width: 230px;
    height: auto;
  }
  &:hover svg path {
    fill: ${props => props.theme.primary};
  }
  
`;

const Techstack = () => {
  return (
    <IntroWrap>
      <h2>Technologies I love...</h2>
      <IconGridStyle>
        <IconGridItemStyle>
          <JavascriptIcon />
        </IconGridItemStyle>
        <IconGridItemStyle>
          <AngularIcon />
        </IconGridItemStyle>
        <IconGridItemStyle>
          <ReactIcon />
        </IconGridItemStyle>
        <IconGridItemStyle>
          <WordPressIcon />
        </IconGridItemStyle>
        <IconGridItemStyle>
          <NodeIcon />
        </IconGridItemStyle>
        <IconGridItemStyle>
          <CssIcon />
        </IconGridItemStyle>
      </IconGridStyle>
    </IntroWrap>
  );
};

export default Techstack;
