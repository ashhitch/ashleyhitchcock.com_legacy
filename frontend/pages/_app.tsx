import App, { Container } from 'next/app';

import { ApolloProvider } from 'react-apollo';
import React from 'react';
import withApolloClient from './../lib/with-apollo-client';

class MyApp extends App {
  
  static async getInitialProps({ Component, ctx }) {
    let pageProps: any = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render () {
    const { Component, pageProps, apolloClient } = this['props'];
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
