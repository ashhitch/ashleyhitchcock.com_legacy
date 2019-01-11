import React, { Component } from 'react';

import ErrorMessage from './../components/ErrorMessage';
import Grid from './../components/Grid';
import Intro from './../components/Intro';
import Layout from './../components/Layout';
import Loader from './../components/Loader';
import PageWrapper from '../components/PageWrapper';
import { Query } from 'react-apollo';
import StyledSection from './../components/styles/Section';
import { SubHeading } from './../components/styles/Headings';
import Techstack from './../components/Techstack';
import gql from 'graphql-tag';

const headerImageStyle = {
  marginTop: 50,
  marginBottom: 50
};

export const HOME_QUERY = gql`
  query home($slug: String!) {
    pageBy(uri: $slug) {
      title
      slug
      link
      content(format: RAW)
      excerpt
    }

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

class Index extends Component {
  IntroSection: any;
  props: any;


  render() {
    return (
      <>
        <Query
          query={HOME_QUERY}
          variables={{
            slug: 'welcome'
          }}
        >
          {({ error, loading, data }) => {
            if (error) return <ErrorMessage error={error} />;
            if (loading) return <Loader />;
            if (!data.pageBy) return <p>No Data returned</p>;

            const postItems = data.posts.edges;
            const page = data.pageBy;

            return (
              <Layout>
                <StyledSection>
                  <Intro
                    ref={section => {
                      this.IntroSection = section;
                    }}
                    title={page.title ? page.title : null}
                    content={page.content ? page.content : null}
                  />
                </StyledSection>
                <StyledSection>
                  <Techstack />
                </StyledSection>
                <StyledSection>
                  <SubHeading>Latest from the blog</SubHeading>
                  <Grid cards={postItems} linkType="post" />
                </StyledSection>
              </Layout>
            );
          }}
        </Query>
      </>
    );
  }

  // componentDidMount = () => {
  //     // if ("serviceWorker" in navigator) {
  //     //     navigator.serviceWorker.register("/sw.js")
  //     //         .catch(err => console.error("Service worker registration failed", err));
  //     // } else {
  //     //     console.log("Service worker not supported");
  //     // }
  // }
}

export default PageWrapper(Index);
