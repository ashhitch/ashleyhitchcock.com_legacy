import React, { Component } from "react";

import { Config } from "../config";
import Grid from "../components/Grid";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import fetch from "isomorphic-unfetch";

class Work extends Component {
    IntroSection: any;
    props: any;
    constructor(props) {
        super(props);
    }

    static async getInitialProps(context) {

        const postsRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/posts?_embed&per_page=10`
        );
        const posts = await postsRes.json();
        return {posts};
    }

    render() {

        return (
            <Layout>
                <h2>The blog</h2>
                <Grid cards={this.props.posts} />
            </Layout>
        );
    }
}

export default PageWrapper(Work);