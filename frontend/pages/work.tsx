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
        console.log(context);
        const postsRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/work?_embed&per_page=9`
        );
        const work = await postsRes.json();
        console.log(work);
        return {work};
    }

    render() {

        return (
            <Layout>
                
                <h2>Latest work</h2>
                <Grid cards={this.props.work} linkType="work"/>
               
            </Layout>
        );
    }
}

export default PageWrapper(Work);