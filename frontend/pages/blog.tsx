import React, { Component } from 'react';

import ErrorMessage from '../components/ErrorMessage';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import PageWrapper from '../components/PageWrapper';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const BLOG_QUERY = gql`
  query home($slug: String!) {
    posts(first: 4) {
      edges {
        node {
          id
          title
          link
          slug
          date
          content
          excerpt
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;
class Work extends Component {
  render() {
    return (
      <>
        <Query query={BLOG_QUERY}>
          {({ error, loading, data }) => {
            if (error) return <ErrorMessage error={error} />;
            if (loading) return <Loader />;
            if (!data.posts) return <p>No Data returned</p>;

            const posts = data.posts.edges;

            return (
              <Layout>
                <h2>The blog</h2>
                <Grid cards={posts} />
              </Layout>
            );
          }}
        </Query>
      </>
    );
  }
}

export default PageWrapper(Work);
