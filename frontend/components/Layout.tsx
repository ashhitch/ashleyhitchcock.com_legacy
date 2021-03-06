import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle, keyframes } from 'styled-components';

import { Normalize } from 'styled-normalize';
import Footer from './Footer';
import Header from './Header';
import { MaxWidthLayout } from './styles/Layout';
import PageHead from './Head';
import media from './styles/media';
import GitHub from './GitHub';

const TIMEOUT = 400;

const theme = {
  darkMode: false,
  primary: 'var(--primary-color, #222222)',
  secondary: 'var(--secondary-color, #fff)',
  highlight: '#BADA55',
  blue: '#1c46f2',
  red: '#FF0000',
  black: '#222222',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  white: '#ffffff',
  maxWidth: '1190px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  fadeBlue: 'linear-gradient(to left, #1c46f2, #5f5fe8)',
  fade: 'linear-gradient(to left, #000, #000)',
  bgAni: 'backgroundAni 5s ease infinite',
  font:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  headingFont: '"Fira Sans", sans-serif',
  backgroundAni: `
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`,
};

const backgroundAni = keyframes`${theme.backgroundAni}`;

const StyledPage = styled.main`
  position: relative;
  background: ${theme.secondary};
  color: ${theme.primary};
  min-height: 100vh;
  padding: 1rem 1rem 20px 1rem;
  margin: 0 1rem;
  overflow: hidden;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:800&display=swap');

  :root {
  --primary-color: #222222;
  --secondary-color: #fff;

  @media (prefers-color-scheme: dark) {
    --primary-color: #fff;
  --secondary-color: #262626;
  }
}

::selection {
    background-color: ${theme.highlight};
    color: ${theme.black};
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 1.25;
    background-color: ${theme.black};
    color: ${theme.primary};
    background-size: 400% 400%;
    animation: ${backgroundAni} 5s ease infinite;
    font-family: ${theme.font};
    width: 100%;
    transition: background 0.2s ease-in;

    &:before,
    &:after {
        transition: background 0.2s ease-in;
        background: inherit;
        animation: inherit;
        content: "";
        display: block;
        height: 1rem;
        left: 0;
        position: fixed;
        width: 100%;
        z-index: 80;
    }

  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }

  &.menu-open {
    position: fixed;
  }


   
  }
  a {
    text-decoration: none;
    color: ${theme.primary};
  }
  button {  }

  h1,
  h2,
  h3 {
      color: ${theme.primary};
      font-family: ${theme.headingFont};
      font-weight: 800;
      letter-spacing: 1.2px;
  }

  h1 {
    font-size: 1.75rem;
  }

  h2, h3 {
    font-size: 1.5rem;
  }

  table {
      width: 100%;
      margin-bottom: 1rem;
    }

    table th,
    table td {
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }

    table thead th {
      vertical-align: bottom;
      border-bottom: 2px solid #dee2e6;
    }

    table tbody + tbody {
      border-top: 2px solid #dee2e6;
    }

    table tbody tr:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }

    ul {
      padding-left: 20px;
    }
    
    .tns-ovh.tns-ovh {
      overflow: visible;
      ${media.md`
      `}
    }

    .tns-controls {
      .nav-button {
        background-color: transparent;
        border: 0;
        padding: 0;
        margin: 0;
        width: 30px;
        height: 30px;
        display: block;

        svg {
          width: 100%;
          height: auto;
        }
      }
    }
    

    .page-transition-enter {
             /* opacity: 0.8;  */
           transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            /* opacity: 1;  opacity ${TIMEOUT}ms, */
           transform: translate3d(0, 0, 0); 
            transition: transform ${TIMEOUT}ms;
          }
          .page-transition-exit {
            /* opacity: 1; */
          }
          .page-transition-exit-active {
            /* opacity: 0.8;
            transition: opacity ${TIMEOUT}ms; */
          }
          .loading-indicator-appear,
          .loading-indicator-enter {
            /* opacity: 0.8; */
          }
          .loading-indicator-appear-active,
          .loading-indicator-enter-active {
            /* opacity: 1; */
            /* transition: opacity ${TIMEOUT}ms; */
          }

`;

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <Normalize />
          <GlobalStyle />
          <StyledPage>
            <PageHead />
            <GitHub />
            <Header />
            {children}
            <Footer />
          </StyledPage>
        </>
      </ThemeProvider>
    );
  }
}
