import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Link from "./Link";
import media from "./styles/media";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

export const MENU_QUERY = gql`
  query menuItems {
    menuItems(where: { location: HEADER_MENU }) {
      edges {
        node {
          id
          url
          title
          label
          connectedObject {
            __typename
          }
          childItems {
            nodes {
              id
              url
              title
              label
              connectedObject {
                __typename
              }
            }
          }
        }
      }
    }
  }
`;

interface IMenuProps {
  menu: IItemsProps;
  close: () => void;
  active: boolean;
}
interface IItemsProps {
  items: [{ ID: number; url: string; title: string; object: string }];
}

const StyledMenu = styled.div`
  .menu {
    width: 100%;
    background: transparent;
    margin: 0;
    padding: 0;

    .nav {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
    }

    .nav,
    .nav li {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: center;
    }
    .nav a {
      display: block;
      position: relative;
      z-index: 3;
      width: 100%;
      background-color: transparent;
      color: ${props => props.theme.primary};
      font-family: ${props => props.theme.headingFont};
      text-decoration: none;
      text-transform: uppercase;
      padding: 1rem;

      &:hover,
      &:focus {
      }
    }
  }
`;
class Menu extends Component {
  props: IMenuProps;

  getSlug(url) {
    const parts = url.split("/");
    return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  render() {
    return (
      <Query query={MENU_QUERY}>
        {({ error, loading, data }) => {
          if (error) return <ErrorMessage error={error} />;
          if (loading) return <Loader />;
          if (!data) return null;
          const menu = data.menuItems.edges;

          const menuItems =
            !!menu && menu.length
              ? menu.map(item => {
                  const { id, url, title, label, connectedObject } = item.node;
                  const object = connectedObject.__typename.toLowerCase();

                  if (object === "menuitem") {
                    return (
                      <li key={id}>
                        <Link href={url}>
                          <a onClick={this.props.close}>{title || label}</a>
                        </Link>
                      </li>
                    );
                  }
                  const slug = this.getSlug(url);
                  const actualPage =
                    object === "category" ? "category" : "post";
                  return (
                    <li key={id}>
                      <Link
                        as={`/${object}/${slug}`}
                        href={`/${actualPage}?slug=${slug}&apiRoute=${object}`}
                      >
                        <a onClick={this.props.close}>{title || label}</a>
                      </Link>
                    </li>
                  );
                })
              : null;

          return (
            <StyledMenu>
              <nav className={`menu ${this.props.active ? "is-active" : ""}`}>
                <ul className="nav">
                  <li>
                    <Link href="/">
                      <a onClick={this.props.close}>Home</a>
                    </Link>
                  </li>
                  {menuItems}
                </ul>
              </nav>
            </StyledMenu>
          );
        }}
      </Query>
    );
  }
}

export default Menu;
