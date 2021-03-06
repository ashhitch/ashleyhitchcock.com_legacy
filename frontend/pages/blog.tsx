import React, { Component } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from '../components/ErrorMessage';
import Grid from '../components/Grid';
import { Heading } from '../components/styles/Headings';
import Layout from '../components/Layout';
import LoadMore from '../components/LoadMore';
import Loader from '../components/Loader';
import PageWrapper from '../components/PageWrapper';
import StyledSection from '../components/styles/Section';
import Categories from '../components/categories';
import { MaxWidthLayout } from '../components/styles';

export const BLOG_QUERY = gql`
  query posts($cursor: String, $perPage: Int!) {
    posts: posts(first: $perPage, after: $cursor) {
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
          date
          featuredImage {
            mediaDetails {
              sizes {
                name
                sourceUrl
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
class Blog extends Component {
  render() {
    return (
      <>
        <Query
          query={BLOG_QUERY}
          variables={{
            perPage: 6,
          }}
        >
          {({ error, loading, data, fetchMore }) => {
            if (error) return <ErrorMessage error={error} />;
            if (loading) return <Loader />;
            if (!data.posts) return <p>No Data returned</p>;

            const { edges: posts, pageInfo } = data.posts;

            return (
              <Layout>
                <MaxWidthLayout>
                  <StyledSection>
                    <Heading>The blog</Heading>
                    <Categories />

                    <Grid cards={posts} linkType="post" />
                    <div className="actions">
                      <LoadMore
                        fetchMore={fetchMore}
                        endCursor={pageInfo.endCursor}
                        hasNextPage={pageInfo.hasNextPage}
                        query="posts"
                      >
                        Load More
                      </LoadMore>
                    </div>
                  </StyledSection>

                </MaxWidthLayout>
              </Layout>
            );
          }}
        </Query>
      </>
    );
  }
}

export default PageWrapper(Blog);
