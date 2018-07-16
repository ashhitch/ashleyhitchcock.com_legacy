import React, { Component } from "react";

import { Config } from "../config";
import Grid from "../components/Grid";
import Hero from "../components/Hero/Hero";
import Intro from '../components/Intro';
import Layout from "../components/Layout";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";
import fetch from "isomorphic-unfetch";

const headerImageStyle = {
    marginTop: 50,
    marginBottom: 50
};

class Index extends Component {

    static async getInitialProps(context) {
        const pageRes = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/page?slug=welcome`
        );
        const page = await pageRes.json();
        console.log(`${Config.apiUrl}/wp-json/wp/v2/posts?_embed&per_page=9`);
        const postsRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/posts?_embed&per_page=9`
        );
        const posts = await postsRes.json();
        // const pagesRes = await fetch(
        //     `${Config.apiUrl}/wp-json/wp/v2/pages?_embed`
        // );
        // const pages = await pagesRes.json();
        return { page, posts };
    }

    render() {
      const isActive = false;
        const posts = this.props.posts.map((post, index) => {
            return (
                <ul key={index}>
                    <li>
                        <Link
                            as={`/post/${post.slug}`}
                            href={`/post?slug=${post.slug}&apiRoute=post`}
                        >
                            <a>{post.title.rendered}</a>
                        </Link>
                    </li>
                </ul>
            );
        });
        // const pages = this.props.pages.map((page, index) => {
        //     return (
        //         <div key={index}>
                  
        //                     <Link
        //                         as={`/page/${page.slug}`}
        //                         href={`/post?slug=${page.slug}&apiRoute=page`}
        //                     >
        //                         <a>{page.title.rendered}</a>
        //                     </Link>
             
        //         </div>
        //     );
        // });
        return (
            <Layout>
                
                    <Hero />
                    <Intro  title={this.props.page.title ? this.props.page.title.rendered : null} content={this.props.page.content.rendered ? this.props.page.content.rendered : null}/>
             
                    <h2>Latest from the blog</h2>
                    <Grid cards={this.props.posts} linkType="post"/>
          
               
            </Layout>
        );
    }
}

export default PageWrapper(Index);
