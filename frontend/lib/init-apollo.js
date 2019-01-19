import {
  defaults,
  resolvers,
  typeDefs
} from './../state/resolvers';
import {
  endpoint,
  prodEndpoint
} from './../config';

import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-unfetch'
import withApollo from 'next-with-apollo';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}


function create({
  headers
}) {
  const client = {
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    clientState: {
      resolvers,
      defaults,
      typeDefs
    },
    credentials: 'same-origin'
  };

  return new ApolloClient(client)
}

export default withApollo(create);