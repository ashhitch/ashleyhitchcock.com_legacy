import React, { Component } from "react";

import { Config } from "../config.js";
import Error from "next/error";
import Layout from "../components/Layout.js";
import PageWrapper from "../components/PageWrapper.js";
import fetch from "isomorphic-unfetch";

class Post extends Component {
    static async getInitialProps(context) {
        const { slug, apiRoute } = context.query;
        const res = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
        );
        const post = await res.json();
        return { post };
    }

    render() {
        if (!this.props.post.title) return <Error statusCode={404} />;

        return (
            <Layout>
              <div  className="post">
              <banner  className="post__banner">
                <img className="post__banner__src" src="http://via.placeholder.com/1800x500" alt={this.props.post.title.rendered} />
              </banner>
              <header  className="post__heading">
                <h1>{this.props.post.title.rendered}</h1>
              </header>
     
            
                <div className="post__content content"
                    dangerouslySetInnerHTML={{
                        __html: this.props.post.content.rendered
                    }}
                />
                </div>
            </Layout>
        );
    }
}

export default PageWrapper(Post);
