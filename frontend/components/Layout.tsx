import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import Header from './Header';
import PageHead from './Head';

const theme = {
  blue: '#1c46f2',
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  font:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
};

const StyledPage = styled.main`
  background: white;
  color: ${props => props.theme.black};
  min-height: '100vh';
  padding: '20px';
`;

injectGlobal`
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
    line-height: 2;
    background-color: white;

    &:before,
    &:after {
        background: inherit;
        content: "";
        display: block;
        height: 21px;
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
    <StyledPage>
      <PageHead />
      <Header />
      {props.children}
      {/* <Footer /> */}
    </StyledPage>
  </ThemeProvider>
);

export default Layout;