import React from "react";

import Error from "next/error";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "../components/ErrorMessage";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import PageWrapper from "../components/PageWrapper";
import SinglePage from "../components/SinglePage";

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

const Page = ({ query }) => {
  const { slug } = query;
  console.log(`loaded the page.tsx ${slug}`);
  return (
    <Layout>
      <Query
        query={SINGLE_PAGE_QUERY}
        variables={{
          slug
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <ErrorMessage error={error} />;
          if (loading) return <Loader />;
          if (!data.item) return <Error statusCode={404} />;
          const { item } = data;
          return <SinglePage post={item} />;
        }}
      </Query>
    </Layout>
  );
};

export default PageWrapper(Page);
