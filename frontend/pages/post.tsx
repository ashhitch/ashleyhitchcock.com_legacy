import React, { Component } from "react";

import Error from "next/error";
import Head from "next/head";
import ErrorMessage from "../components/ErrorMessage";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import PageWrapper from "../components/PageWrapper";
import { Query } from "react-apollo";
import SinglePost from "../components/SinglePost";
import gql from "graphql-tag";

export const SINGLE_POST_QUERY = gql`
  query postBy($slug: String!) {
    item: postBy(uri: $slug) {
      id
      title
      slug
      date
      content
      hero
      seo {
        title
        metaDesc
      }
    }
  }
`;
export const SINGLE_PAGE_QUERY = gql`
  query pageBy($slug: String!) {
    item: pageBy(uri: $slug) {
      id
      title
      slug
      date
      content
      hero
      seo {
        title
        metaDesc
      }
    }
  }
`;
export const SINGLE_WORK_QUERY = gql`
  query workBy($slug: String!) {
    item: workBy(uri: $slug) {
      id
      title
      slug
      date
      content
      hero
      seo {
        title
        metaDesc
      }
    }
  }
`;

class Post extends Component {
  props: any;

  static async getInitialProps({ query: { slug, apiRoute } }) {
    // Query depending on post type
    let queryGQL = SINGLE_POST_QUERY;
    if (apiRoute === "work") {
      queryGQL = SINGLE_WORK_QUERY;
    } else if (apiRoute === "page") {
      queryGQL = SINGLE_PAGE_QUERY;
    }

    return { slug, queryGQL };
  }

  render() {
    return (
      <Layout>
        <Query
          query={this.props.queryGQL}
          variables={{
            slug: this.props.slug
          }}
        >
          {({ error, loading, data }) => {
            if (error) return <ErrorMessage error={error} />;
            if (loading) return <Loader />;
            if (!data.item) return <Error statusCode={404} />;
            const item = data.item;

            return <SinglePost post={item} />;
          }}
        </Query>
      </Layout>
    );
  }
}

export default PageWrapper(Post);
