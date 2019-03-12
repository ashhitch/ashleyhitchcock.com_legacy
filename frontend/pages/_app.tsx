import App, { Container } from "next/app";
import Router from "next/router";
import withGA from "next-ga";
import { ApolloProvider } from "react-apollo";
import NextSeo from "next-seo";
import React from "react";
import SEO from "../next-seo.config";
import withApolloClient from "../lib/init-apollo";

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

  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        <NextSeo config={SEO} />
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(withGA("UA-800899-32", Router)(MyApp));
