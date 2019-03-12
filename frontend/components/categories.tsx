import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Link from "next/link";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import StyledCategories from "./styles/Categories";

export const POST_CATEGORIES = gql`
  query GET_CATEGORIES {
    categories(where: { hideEmpty: true }) {
      edges {
        node {
          id
          categoryId
          name
          slug
        }
      }
    }
  }
`;
const Categories = () => (
  <Query query={POST_CATEGORIES}>
    {({ error, loading, data }) => {
      if (error) return <ErrorMessage error={error} />;
      if (loading) return <Loader />;
      const { categories } = data;

      return (
        <StyledCategories>
          {categories.edges.map(cat => (
            <li key={cat.node.id}>
              <Link
                as={`/blog/category/${cat.node.slug}`}
                href={`/category?slug=${cat.node.slug}`}
              >
                <a>{cat.node.name}</a>
              </Link>
            </li>
          ))}
        </StyledCategories>
      );
    }}
  </Query>
);

export default Categories;
