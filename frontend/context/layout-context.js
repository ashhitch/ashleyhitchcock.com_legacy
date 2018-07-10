import React from 'react';

export const defaults = {
  menuActive: false,
  toggleMenu: () => {},
};

export const LayoutContext = React.createContext(
  defaults 
)