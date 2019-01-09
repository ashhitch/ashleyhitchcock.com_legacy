import React, { Component } from 'react';

import Head from 'next/head';

class PageHead extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Head>
          {/* <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Ashley Hitchcock | Frontend Developer</title>
        </Head>
      </>
    );
  }
}

export default PageHead;
