import React, { Component } from 'react';

import Error from 'next/error';
import Head from 'next/head';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import ErrorMessage from '../components/ErrorMessage';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import PageWrapper from '../components/PageWrapper';
import SinglePost from '../components/SinglePost';

// (format: RAW)
export const SINGLE_POST_QUERY = gql`
  query postBy($slug: String!) {
    item: postBy(uri: $slug) {
      id
      title
      slug
      date
      content
      hero
      categories {
        nodes {
          name
          id
        }
      }
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
      categories {
        nodes {
          name
          id
        }
      }
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
    if (apiRoute === 'work') {
      queryGQL = SINGLE_WORK_QUERY;
    }

    return { slug, queryGQL };
  }

  render() {
    const { queryGQL, slug } = this.props;
    return (
      <Layout>
        <Query
          query={queryGQL}
          variables={{
            slug,
          }}
        >
          {({ error, loading, data }) => {
            if (error) return <ErrorMessage error={error} />;
            if (loading) return <Loader />;
            if (!data.item) return <Error statusCode={404} />;
            const { item } = data;

            return <SinglePost post={item} />;
          }}
        </Query>
      </Layout>
    );
  }
}

export default PageWrapper(Post);
