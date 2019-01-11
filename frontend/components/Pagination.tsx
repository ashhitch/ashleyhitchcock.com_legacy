import Head from 'next/head';
import Link from 'next/link';
import { Query } from 'react-apollo';
import React from 'react';
import StyledPagination from './styles/StyledPagination';
import gql from 'graphql-tag';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    
  }
`;

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      const perPage = 7;
      if (loading) return <p>Loading...</p>;
      const count = data.itemsConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);
      const pageInfo = props.pageInfo;
      const page = 1;
      return (
        <StyledPagination>
          <Head>
            <title>
              Blog — Page {page} of {pages}
            </title>
          </Head>
          <Link
            prefetch
            href={{
              pathname: 'items',
              query: { page: page - 1 },
            }}
          >
            <a className="prev" aria-disabled={page <= 1}>
              ← Prev
            </a>
          </Link>
          <p>
            Page {page} of
            <span className="totalPages">{pages}</span>!
          </p>
          <p>{count} Items Total</p>
          <Link
            prefetch
            href={{
              pathname: 'items',
              query: { page: page + 1 },
            }}
          >
            <a className="next" aria-disabled={page >= pages}>
              Next →
            </a>
          </Link>
        </StyledPagination>
      );
    }}
  </Query>
);

export default Pagination;
export { PAGINATION_QUERY };