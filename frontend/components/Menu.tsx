import React, { Component } from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled, { keyframes } from 'styled-components';
import Link from './Link';
import media from './styles/media';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

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
  menu?: IItemsProps;
  close?: () => void;
}
interface IItemsProps {
  items: [{ ID: number; url: string; title: string; object: string }];
}

const menuAni = keyframes`
  0%{transform: rotate(5deg);}
  50%{transform: rotate(0deg);}
  100%{transform: rotate(5deg);}
  `;

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
      justify-content: flex-start;
      padding: 0;
      margin: 0;
      list-style: none;
      -webkit-overflow-scrolling: touch;
      overflow-x: auto;
      overflow-y: visible;
      white-space: nowrap;

      ${media.md`
      justify-content: flex-end;
    `}
    }

    .nav li {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: center;
      padding: 0 0.75rem;

      ${media.md`
      padding: 0 1rem;
    `}

      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }
    .nav a {
      display: block;
      position: relative;
      z-index: 3;
      width: 100%;
      background-color: transparent;
      color: ${props => props.theme.primary};
      text-decoration: none;
      text-transform: uppercase;
      padding: 1rem 0;

      &:after {
        display: block;
        content: '';
        background: ${props => props.theme.secondary};
        height: 0.4ex;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10px;
        z-index: -1;
        transition: all 0.2s ease-in-out;
      }
      &.is-active:after {
        background: ${props => props.theme.highlight};
        animation: ${menuAni} 1s ease 2;
      }

      &:hover:after {
        transform: rotate(4deg);
        background: ${props => props.theme.highlight};
      }
    }
  }
`;
const Menu = (props: IMenuProps) => {
  const getSlug = url => {
    const parts = url.split('/');
    return parts.length > 2 ? parts[parts.length - 2] : '';
  };

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

                if (object === 'menuitem') {
                  return (
                    <li key={id}>
                      <Link href={url}>
                        <a>{title || label}</a>
                      </Link>
                    </li>
                  );
                }
                const slug = getSlug(url);
                const actualPage = object === 'category' ? 'category' : 'post';
                return (
                  <li key={id}>
                    <Link as={`/${object}/${slug}`} href={`/${actualPage}?slug=${slug}&apiRoute=${object}`}>
                      <a>{title || label}</a>
                    </Link>
                  </li>
                );
              })
            : null;

        return (
          <StyledMenu>
            <nav className="menu">
              <ul className="nav">
                <li>
                  <Link href="/">
                    <a>Home</a>
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
};

export default Menu;
