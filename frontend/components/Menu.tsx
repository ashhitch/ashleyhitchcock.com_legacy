import React, { Component } from 'react';

import Link from 'next/link';
import styled from 'styled-components';

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
  background: ${props => props.theme.blue};
  border-top: 1px solid #5f5fe8;
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
    background: transparent;
    border-bottom: 1px solid ${props => props.theme.white};
    color: ${props => props.theme.white};
    font-size: 300%;
    letter-spacing: 1vw;
    line-height: ${100 / 4}vh;
    text-decoration: none;
    text-transform: uppercase;
    &:hover,
    &:focus {
      background: rgba(#5f5fe8, 0.9);
      color: #ffffff;
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
    const menuItems =
      !!this.props.menu && !!this.props.menu.items && this.props.menu.items.length
        ? this.props.menu.items.map(item => {
            if (item.object === 'custom') {
              return (
                <li key={item.ID}>
                  <Link href={item.url}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              );
            }

            const slug = this.getSlug(item.url);
            const actualPage = item.object === 'category' ? 'category' : 'post';
            return (
              <li key={item.ID}>
                <Link as={`/${item.object}/${slug}`} href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}>
                  <a onClick={this.props.close}>{item.title}</a>
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
  }
}

export default Menu;
