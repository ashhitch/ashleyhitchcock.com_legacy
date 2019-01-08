import {LayoutContext} from './../context/layout-context';
import React from "react";
import { endpoint } from "../config";

interface IState {
  menuActive: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  menuItems: [];
}

const PageWrapper = Comp => (

  class extends React.Component {
    
    state: IState;
    props: any;

    constructor(props) {
      super(props);
  
      // State also contains the updater function so it will
      // be passed down into the context provider
      this.state = {
          menuActive: false,
          toggleMenu: this.toggleMenu,
          closeMenu: this.closeMenu,
          menuItems: []
      };

    }

    toggleMenu = () => {
      
      this.setState(state => ({
        menuActive: !state.menuActive
      }));

      this.state.menuActive ? document.body.classList.remove('menu-open') : document.body.classList.add('menu-open');
    };
    closeMenu = () => {
      
      this.setState(state => ({
        menuActive: false
      }));

      document.body.classList.remove('menu-open');
    };


    static async getInitialProps(args) {

      return {
        // headerMenu,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null),
      };
    }

    render() {
      return (
        <LayoutContext.Provider value={this.state}>
          <Comp {...this.props} />
        </LayoutContext.Provider>
      )
    }
  }
)

export default PageWrapper;
