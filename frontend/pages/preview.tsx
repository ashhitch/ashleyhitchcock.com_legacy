import React from 'react';

import Error from 'next/error';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import ErrorMessage from '../components/ErrorMessage';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import PageWrapper from '../components/PageWrapper';
import SinglePost from '../components/SinglePost';

interface IPageQuery {
  id: string;
  wpnonce: string;
}

export const SINGLE_POST_QUERY = gql`
  query postBy($id: Int!) {
    item: postBy(postId: $id) {
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

const PostPreview = props => {
  const { query }: { query: IPageQuery } = props;
  const { id, wpnonce } = query;
  return (
    <Layout>
      <Query
        query={SINGLE_POST_QUERY}
        variables={{
          id: +id,
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
};

export default PageWrapper(PostPreview);
