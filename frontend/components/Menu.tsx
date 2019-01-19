import React, { Component } from 'react';

import ErrorMessage from './ErrorMessage';
import Link from 'next/link';
import Loader from './Loader';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

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
    position: fixed;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    background: transparent;
    border-top: 1px solid ${props => props.theme.secondary};
    opacity: 0;
    z-index: -1;
    transition: opacity 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    &.is-active {
      z-index: 100;
      transition: opacity 0.2s ease-in;
      opacity: 1;
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
      background-color: ${props => props.theme.primary};
      border-bottom: 1px solid ${props => props.theme.secondary};
      color: ${props => props.theme.secondary};
      font-size: 300%;
      letter-spacing: 1vw;
      line-height: ${100 / 4}vh;
      text-decoration: none;
      text-transform: uppercase;
      &:hover,
      &:focus {
        background-color: ${props => props.theme.highlight};
        color: ${props => props.theme.black};
      }
    }
  }
`;
class Menu extends Component {
  props: IMenuProps;
  constructor(props) {
    super(props);
  }

  getSlug(url) {
    const parts = url.split('/');
    return parts.length > 2 ? parts[parts.length - 2] : '';
  }

  render() {
    return (
      <Query query={MENU_QUERY}>
        {({ error, loading, data }) => {
          if (error) return <ErrorMessage error={error} />;
          if (loading) return <Loader />;
          if (!data) return <p>No menu found</p>;
          const menu = data.menuItems.edges;

          const menuItems =
            !!menu && menu.length
              ? menu.map(item => {
                  const { id, url, title, label, connectedObject } = item.node;
                  const object = connectedObject.__typename.toLowerCase();
     
                  if (object === 'menuitem') {
                    return (
                      <li key={id}>
                        <Link href={url}>
                          <a  onClick={this.props.close}>{title ? title : label}</a>
                        </Link>
                      </li>
                    );
                  }
                  const slug = this.getSlug(url);
                  const actualPage = object === 'category' ? 'category' : 'post';
                  return (
                    <li key={id}>
                      <Link as={`/${object}/${slug}`} href={`/${actualPage}?slug=${slug}&apiRoute=${object}`}>
                        <a onClick={this.props.close}>{title ? title : label}</a>
                      </Link>
                    </li>
                  );
                })
              : null;

          return (
            <StyledMenu>
              <nav className={'menu ' + (this.props.active ? 'is-active' : '')}>
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
