import React, { Component } from 'react';

import Link from 'next/link';

interface MenuProps {
  menu: ItemsProps;
  close: () => void;
  active: boolean;
}
interface ItemsProps {
  items: [{ ID: number; url: string; title: string; object: string }];
}
class Menu extends Component {
  props: MenuProps;
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
    );
  }
}

export default Menu;
