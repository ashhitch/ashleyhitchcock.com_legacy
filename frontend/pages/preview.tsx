import React, { Component } from 'react';

import Error from 'next/error';
import ErrorMessage from '../components/ErrorMessage';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import PageWrapper from '../components/PageWrapper';
import { Query } from 'react-apollo';
import SinglePost from '../components/SinglePost';
import gql from 'graphql-tag';

export const SINGLE_POST_QUERY = gql`
  query postBy($id: String!) {
    item: postBy(id: $id) {
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
  static async getInitialProps({ query: { id } }) {
    //&_wpnonce=${wpnonce}
    return { id };
  }

  render() {

    return (
      <Layout>
        <Query
          query={SINGLE_POST_QUERY}
          variables={{
            id: this.props.id
          }}
        >
          {({ error, loading, data }) => {
            if (error) return <ErrorMessage error={error} />;
            if (loading) return <Loader />;
            if (!data.item) return <Error statusCode={404} />;
            const item = data.item;

            return <SinglePost post={item} />;
          }}
        </Query>
      </Layout>
    );
  }
}

export default PageWrapper(Post);
