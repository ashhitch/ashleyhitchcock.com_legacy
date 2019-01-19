import gql from 'graphql-tag';

export const defaults = {
  menuActive: false,
  isLoading: false
};

export const LOCAL_STATE_QUERY = gql`
  query LayoutState {
    menuActive @client
    isLoading @client
  }
`;

export const LOADING_MUTATION = gql`
  mutation SetLoading {
    setLoading @client
  }
`;

export const NOT_LOADING_MUTATION = gql`
  mutation SetNotLoading {
    setNotLoading @client
  }
`;

export const TOGGLE_MENU_MUTATION = gql`
  mutation ToggleMenu {
    toggleMenu @client
  }
`;

export const CLOSE_MENU_MUTATION = gql`
  mutation CloseMenu {
    closeMenu @client
  }
`;

export const typeDefs = `
  type Layout {
    menuActive: Boolean!
    isLoading: Boolean!
  }
  type Mutation {
    toggleMenu: Layout
    closeMenu: Layout
    setLoading: Layout
    setNotLoading: Layout
  }
  type Query {
    menuActive: Boolean!
    isLoading: Boolean!
  }
`;

export const resolvers = {
  Mutation: {
    toggleMenu(_, variables, { cache }) {
      // read the menuActive value from the cache
      const { menuActive } = cache.readQuery({
        query: LOCAL_STATE_QUERY
      });

      // Write the menu State to the opposite
      const data = {
        data: { menuActive: !menuActive }
      };

      cache.writeData(data);
      return data;
    },
    closeMenu(_, variables, { cache }) {
      // Write the menu State to false
      const data = {
        data: { menuActive: false }
      };
     
      cache.writeData(data);
      return data;
    },
    setLoading(_, variables, { cache }) {
      // Write the menu State to false
      const data = {
        data: { isLoading: true }
      };
     
      cache.writeData(data);
      return data;
    },
    setNotLoading(_, variables, { cache }) {
      // Write the menu State to false
      const data = {
        data: { isLoading: false }
      };
     
      cache.writeData(data);
      return data;
    }
  }
};
