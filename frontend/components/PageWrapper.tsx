import { Config } from "../config";
import {LayoutContext} from './../context/layout-context';
import React from "react";

const PageWrapper = Comp => (
  class extends React.Component {
    toggleMenu: () => void;
    
    state: any;
    props: any;

    constructor(props) {
      super(props);
  
      this.toggleMenu = () => {
        ;
        this.setState(state => ({
          menuActive: !state.menuActive
        }));

        this.state.menuActive ? document.body.classList.remove('menu-open') : document.body.classList.add('menu-open');
      };
  
      // State also contains the updater function so it will
      // be passed down into the context provider
      this.state = {
          menuActive: false,
          toggleMenu: this.toggleMenu,
          menuItems: []
      };
      this.getMenu();
    }

    async getMenu() {
      const headerMenuRes = await fetch(
        `${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`
      );
      const headerMenu = await headerMenuRes.json();
      console.log(headerMenu);
      this.setState({
        menuItems: headerMenu
      });
      
    }

    static async getInitialProps(args) {
      // const headerMenuRes = await fetch(
      //   `${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`
      // );
      // const headerMenu = await headerMenuRes.json();
      // this.setState({
      //   menuItems: headerMenu
      // });

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
