import React, { Component } from 'react';

import ErrorMessage from './../components/ErrorMessage';
import Grid from './../components/Grid';
import { Heading } from './../components/styles/Headings';
import Layout from './../components/Layout';
import Loader from './../components/Loader';
import PageWrapper from './../components/PageWrapper';
import Pagination from './../components/Pagination';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const BLOG_QUERY = gql`
  query posts($cursor: String) {
    posts: posts(first: 7, after: $cursor) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          id
          title
          slug
          excerpt
          featuredImage {
            mediaDetails {
              sizes {
                name
                file
              }
            }
          }
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
            const pageInfo = data.posts.pageInfo;
            return (
              <Layout>
                <Heading>The blog</Heading>
                <Grid cards={posts} linkType="post" />
                <Pagination page={pageInfo} />
              </Layout>
            );
          }}
        </Query>
      </>
    );
  }
}

export default PageWrapper(Work);
