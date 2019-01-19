import { ApolloConsumer } from 'react-apollo';
import React from 'react';
import Router from 'next/router';

const PageWrapper = Comp =>
  class extends React.Component {
    props: any;

    constructor(props) {
      super(props);


      Router.onRouteChangeStart = () => {
        // console.log('start route');
        this.setLoading(true);
      };
      Router.onRouteChangeComplete = () => {
        //console.log('end route');
        setTimeout(() => this.setLoading(false), 1500);
      };

      Router.onRouteChangeError = () => {
        // console.log('error route');
        this.setLoading(false);
      };
    }

    setLoading = (loading: boolean) => {
      <ApolloConsumer>
        {client =>  client.writeData({ data: { isLoading: loading } })}
      </ApolloConsumer>
    }

    static async getInitialProps(args) {
      return {
        // headerMenu,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null)
      };
    }

    render() {
      return (
          <Comp {...this.props} />
      );
    }
  };

export default PageWrapper;
