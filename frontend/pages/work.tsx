import React, { Component } from 'react';

import ErrorMessage from './../components/ErrorMessage';
import Grid from './../components/Grid';
import { Heading } from './../components/styles/Headings';
import Layout from './../components/Layout';
import LoadMore from './../components/LoadMore';
import Loader from './../components/Loader';
import PageWrapper from './../components/PageWrapper';
import { Query } from 'react-apollo';
import StyledSection from './../components/styles/Section';
import gql from 'graphql-tag';

export const WORK_ITEMS_QUERY = gql`
  query works($cursor: String) {
    works: works(first: 7, after: $cursor) {
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
        }
      }
    }
  }
`;
class Work extends Component {
  render() {
    return (
        <Query query={WORK_ITEMS_QUERY}>
          {({ error, loading, data, fetchMore }) => {
            if (error) return <ErrorMessage error={error} />;
            if (loading) return <Loader />;
            if (!data.works) return <p>No Data returned</p>;

            const { edges: works, pageInfo } = data.works;

            return (
              <Layout>
                <StyledSection>
                <Heading>My Work</Heading>
                <Grid cards={works} linkType="work" />
                <div className="actions">
                  <LoadMore fetchMore={fetchMore} endCursor={pageInfo.endCursor} hasNextPage={pageInfo.hasNextPage} query="works">Load More</LoadMore>
                </div>
                </StyledSection>
              </Layout>
            );
          }}
        </Query>
    );
  }
}

export default PageWrapper(Work);
