import React, { Component } from "react";

import { Config } from "../config";
import Error from "next/error";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import SinglePost from "../components/SinglePost";
import fetch from "isomorphic-unfetch";

class Post extends Component {
    props: any;
    static async getInitialProps(context) {
        const { slug, apiRoute } = context.query;
        
       //console.log(`/wp-json/postlight/v1/${apiRoute}?slug=${slug}`);
            const res = await fetch(
                `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
            );
        const post = await res.json();
        console.log(post);
         return { post };
    
    }

    render() {
     
        // if (!post.title) return <Error statusCode={404} />;
       // console.log('this',this.props.post);
        return (
            <Layout>
              {this.props.post ? <SinglePost post={this.props.post} /> : null}
            </Layout>
        );
    }
}

export default PageWrapper(Post);
