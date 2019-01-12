import { LayoutContext } from './../context/layout-context';
import React from 'react';
import Router from 'next/router';
interface IState {
  menuActive: boolean;
  globalLoading: boolean;
  toggleMenu: () => void;
  setLoading: (boolean) => void;
  closeMenu: () => void;
  menuItems: [];
}

const PageWrapper = Comp =>
  class extends React.Component {
    state: IState;
    props: any;

    constructor(props) {
      super(props);

      // State also contains the updater function so it will
      // be passed down into the context provider
      this.state = {
        menuActive: false,
        globalLoading: false,
        toggleMenu: this.toggleMenu,
        closeMenu: this.closeMenu,
        setLoading: this.setLoading,
        menuItems: []
      };

      Router.onRouteChangeStart = () => {
        console.log('start route');
        this.setLoading(true);
      };
      Router.onRouteChangeComplete = () => {
        console.log('end route');
        setTimeout(() => this.setLoading(false), 500);
      };

      Router.onRouteChangeError = () => {
        console.log('error route');
        this.setLoading(false);
      };
    }

    setLoading = (loading: boolean) => {
      console.log({ loading });
      this.setState(() => ({
        globalLoading: loading
      }));
    };

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
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null)
      };
    }

    render() {
      return (
        <LayoutContext.Provider value={this.state}>
          <Comp {...this.props} />
        </LayoutContext.Provider>
      );
    }
  };

export default PageWrapper;
