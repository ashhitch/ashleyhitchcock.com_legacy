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
  width: calc(100vw - 42px);
  height: calc(100vh - 42px);
  background: rgba(255, 255, 255, 0.8);
  border-top: 1px solid #5f5fe8;
  opacity: 0;
  z-index: -1;
  transition: opacity 0;
  top: 21px;
  left: 21px;
  right: 21px;
  bottom: 21px;
  margin: 0;
  padding: 0;
  &.is-active {
    z-index: 10;
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
    border-bottom: 1px solid #5f5fe8;
    color: #111111;
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

.menu-toggle {
  position: fixed;
  z-index: 20;
  right: 0;
  top: 0;
  margin: 5%;
  > span {
    width: 50px;
    height: 5px;
    background-color: #5f5fe8;
    display: block;
    margin: 8px auto;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
  }

  &.is-active span {
    background-color: #111111;
    &:nth-child(1),
    &:nth-child(3) {
      width: 40px;
    }
    &:nth-child(1) {
      transform: translateX(-10px) rotate(-45deg);
    }
    &:nth-child(3) {
      transform: translateX(-10px) rotate(45deg);
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
