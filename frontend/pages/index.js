import React, { Component } from "react";

import { Config } from "../config";
import Hamburger from "../components/Hamburger";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout";
import {LayoutContext} from './../context/layout-context';
import Link from "next/link";
import Menu from "../components/Menu";
import PageWrapper from "../components/PageWrapper";
import fetch from "isomorphic-unfetch";

const headerImageStyle = {
    marginTop: 50,
    marginBottom: 50
};


class Index extends Component {

    constructor(props) {
        super(props);
    
        this.toggleMenu = () => {
          this.setState(state => ({
            menuActive: !state.menuActive
          }));
        };
    
        // State also contains the updater function so it will
        // be passed down into the context provider
        this.state = {
            menuActive: false,
            toggleMenu: this.toggleMenu
        };
      }

      
    static async getInitialProps(context) {
        const pageRes = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/page?slug=welcome`
        );
        const page = await pageRes.json();
        const postsRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/posts?_embed`
        );
        const posts = await postsRes.json();
        const pagesRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/pages?_embed`
        );
        const pages = await pagesRes.json();
        return { page, posts, pages };
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
        const pages = this.props.pages.map((page, index) => {
            return (
                <div key={index}>
                  
                            <Link
                                as={`/page/${page.slug}`}
                                href={`/post?slug=${page.slug}&apiRoute=page`}
                            >
                                <a>{page.title.rendered}</a>
                            </Link>
             
                </div>
            );
        });
        return (
            <Layout>
                <LayoutContext.Provider value={this.state}>
                    <Hamburger />
                    <Menu menu={this.props.headerMenu} active={isActive} />
                    <Hero />
                    {/* <img
                        src="/static/images/wordpress-plus-react-header.png"
                        width="815"
                        style={headerImageStyle}
                    /> */}
                    <h1>{this.props.page.title ? this.props.page.title.rendered : null}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: this.props.page.content.rendered ? this.props.page.content.rendered : null
                        }}
                    />
                    <h2>Posts</h2>
                    {posts}
          
                </LayoutContext.Provider>
            </Layout>
        );
    }
}

export default PageWrapper(Index);
