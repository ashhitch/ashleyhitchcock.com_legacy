import React, { Component } from "react";

import { Config } from "../config";
import ErrorMessage from '../components/ErrorMessage';
import Grid from "../components/Grid";
import Intro from '../components/Intro';
import Layout from "../components/Layout";
import Link from "next/link";
import Loader from '../components/Loader';
import PageWrapper from "../components/PageWrapper";
import { Query } from 'react-apollo';
import Techstack from "../components/Techstack";
import gql from 'graphql-tag';
import scrollToComponent from  'react-scroll-to-component-ssr';

const headerImageStyle = {
    marginTop: 50,
    marginBottom: 50
};


export const HOME_QUERY = gql`
query home($slug: String!) {
    pageBy(uri: $slug) {
        title
        slug
        link
        content(format: RAW)
   	 excerpt
    }

    posts(first: 4){
        edges{
            node{
                id
                title
                link
                slug
                date
                content
              	excerpt
              tags {
                nodes{
                  name
                }
              }
            }	
        }
    }
  }
`;

class Index extends Component {
    IntroSection: any;
    props: any;

    scrollToIntro = () => {
        scrollToComponent(this.IntroSection, { offset: 0, align: 'top', duration: 1500 });
    }


    render(){

        return (
        <>

        <Query
        query={HOME_QUERY}
        variables={{
          slug: 'welcome',
        }} >

        {({ error, loading, data }) => {
          if (error) return <ErrorMessage error={error} />;
          if (loading) return <Loader />;
          if (!data.pageBy) return <p>No Data returned</p>;

          const postItems = data.posts.edges;
          const page = data.pageBy;

        //   const posts = postItems.map(({node}, index) =>  {
        //     return (
        //         <ul key={index}>
        //             <li>
        //                 <Link
        //                     as={`/post/${node.slug}`}
        //                     href={`/post?slug=${node.slug}&apiRoute=post`}
        //                 >
        //                     <a>{node.title}</a>
        //                 </Link>
        //             </li>
        //         </ul>
        //     );
        // });


        return (
            <Layout>
                <Intro ref={(section) => { this.IntroSection = section; }} title={page.title ? page.title : null} content={page.content ? page.content : null} />
                <Techstack />
                <h2>Latest from the blog</h2>
                <Grid cards={postItems} linkType="post"/>
            </Layout>
            );
        }}

        </Query>
        </>
        );
    }

    // componentDidMount = () => {
    //     // if ("serviceWorker" in navigator) {
    //     //     navigator.serviceWorker.register("/sw.js")
    //     //         .catch(err => console.error("Service worker registration failed", err));
    //     // } else {
    //     //     console.log("Service worker not supported");
    //     // }
    // }


}

export default PageWrapper(Index);