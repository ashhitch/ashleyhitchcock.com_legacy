import React, { Component } from 'react';

import ErrorMessage from './../components/ErrorMessage';
import Grid from './../components/Grid';
import { Heading } from './../components/styles/Headings';
import Layout from './../components/Layout';
import Loader from './../components/Loader';
import PageWrapper from './../components/PageWrapper';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const WORK_ITEMS_QUERY = gql`
  {
    posts: works(first: 7) {
      edges {
        node {
          id
          title
          link
          slug
          date
          content
          excerpt
        }
      }
    }
  }
`;
class Work extends Component {
  render() {
    return (
        <Query query={WORK_ITEMS_QUERY}>
          {({ error, loading, data }) => {
            if (error) return <ErrorMessage error={error} />;
            if (loading) return <Loader />;
            if (!data.posts) return <p>No Data returned</p>;

            const posts = data.posts.edges;

            return (
              <Layout>
                <Heading>My Work</Heading>
                <Grid cards={posts} linkType="work" />
              </Layout>
            );
          }}
        </Query>
    );
  }
}

export default PageWrapper(Work);
