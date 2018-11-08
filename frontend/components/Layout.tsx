import styled, { ThemeProvider, createGlobalStyle, keyframes } from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import { MaxWidthLayout } from './styles/Layout';
import { Normalize } from 'styled-normalize'
import PageHead from './Head';

const theme = {
  blue: '#1c46f2',
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  white: '#ffffff',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  fade: 'linear-gradient(to left, #1c46f2, #5f5fe8)',
  bgAni: 'backgroundAni 5s ease infinite',
  font:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    backgroundAni: `
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
    `
};


const backgroundAni = keyframes`${theme.backgroundAni}`;

const StyledPage = styled.main`
  background: ${theme.white};
  color: ${theme.black};
  min-height: 100vh;
  padding: 1rem 1rem 20px 1rem;
  margin: 0 1rem;
`;

const GlobalStyle = createGlobalStyle`

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
    background-color: ${theme.white};
    background-image: ${theme.fade};
    background-size: 400% 400%;
    animation: ${backgroundAni} 5s ease infinite;
    font-family: ${theme.font};

    &:before,
    &:after {
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
    color: ${theme.black};
  }
  button {  }

  h1,
  h2 {
      color: ${theme.black};
  }

`;

const Layout = props => (
  <ThemeProvider theme={theme}>
    <>
    <Normalize />
      <GlobalStyle />
      <StyledPage>
        <PageHead />
        <Header />
        <MaxWidthLayout>{props.children}</MaxWidthLayout>
        <Footer />
      </StyledPage>
    </>
  </ThemeProvider>
);

export default Layout;
