import gql from 'graphql-tag';

export const defaults = {
  menuActive: false,
};

export const LOCAL_STATE_QUERY = gql`
  query {
    menuActive @client
  }
`;

export const TOGGLE_MENU_MUTATION = gql`
  mutation {
    menuActive @client
  }
`;

export const CLOSE_MENU_MUTATION = gql`
  mutation {
    menuActive @client
  }
`;

export const typeDefs = `
  type Layout {
    menuActive: Boolean!
  }
`;


export const resolvers = {
  Mutation: {
    toggleMenu(_, variables, { cache }) {
      // read the cartOpen value from the cache
      console.log('toggle menu');
      const { menuActive } = cache.readQuery({
        query: LOCAL_STATE_QUERY,
      });
      // Write the cart State to the opposite
      const data = {
        data: { menuActive: !menuActive },
      };
      cache.writeData(data);
      return data;
    },
    closeMenu(_, variables, { cache }) {

      // Write the cart State to false
      const data = {
        data: { menuActive: false },
      };
      cache.writeData(data);
      return data;
    }
  }
};