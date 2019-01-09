import React, { Component } from 'react';

import AngularIcon from './icons/angular.svg';
import CssIcon from './icons/css.svg';
import IntroWrap from './styles/Intro';
import JavascriptIcon from '././icons/javascript.svg';
import NodeIcon from './icons/node.svg';
import ReactIcon from './icons/react.svg';
import WordPressIcon from './icons/wordpress.svg';
import media from './styles/media';
import styled from 'styled-components';

const IconGridStyle = styled.div`
  display: grid;
  width: 100%;
  padding: 0;
  list-style-type: none;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 4rem;
  `;
  const IconGridItemStyle = styled.div`
  text-align: center;
  
  svg {
    width: 100%;
    max-width: 140px;
    height: auto;
    ${console.log(media.md)}
    ${media.md`max-width: 180px;`}
  }
  svg {
    transition: transform 0.2s ease-in;

    path, circle {
      fill: ${props => props.theme.primary};
      transition: fill 0.2s ease-in;
    }
  }
  &:hover svg {
    transform: scale(1.1);
  }
  &:hover svg path,
  &:hover svg circle {
    fill: ${props => props.brandbg};
  }
  
`;

const Techstack = () => {
  return (
    <IntroWrap>
      <h2>Technologies I love...</h2>
      <IconGridStyle>
        <IconGridItemStyle brandbg="#F7DF1E">
          <JavascriptIcon />
        </IconGridItemStyle>
        <IconGridItemStyle  brandbg="#DD0031">
          <AngularIcon />
        </IconGridItemStyle>
        <IconGridItemStyle  brandbg="#61DAFB">
          <ReactIcon />
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
    </IntroWrap>
  );
};

export default Techstack;
