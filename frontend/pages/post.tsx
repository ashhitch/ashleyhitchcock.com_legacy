import React, { Component } from 'react';

import Error from 'next/error';
import ErrorMessage from '../components/ErrorMessage';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import PageWrapper from '../components/PageWrapper';
import { Query } from 'react-apollo';
import SinglePost from '../components/SinglePost';
import gql from 'graphql-tag';

export const SINGLE_ITEM_QUERY = gql`
  query postBy($slug: String!) {
    postBy(uri: $slug) {
      id
      title
      slug
      date
      content
    }
  }
`;

class Post extends Component {
  props: any;
  static async getInitialProps({ query: { slug } }) {
    return { slug };
  }

  render() {
    
    return (
      <Layout>
        <Query
          query={SINGLE_ITEM_QUERY}
          variables={{
            slug: this.props.slug
          }}
        >
          {({ error, loading, data }) => {
            if (error) return <ErrorMessage error={error} />;
            if (loading) return <Loader />;
            if (!data.postBy) return <Error statusCode={404} />;
            const item = data.postBy;

            return <SinglePost post={item} />;
          }}
        </Query>
      </Layout>
    );
  }
}

export default PageWrapper(Post);
