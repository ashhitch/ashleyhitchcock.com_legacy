import React, { Component } from "react";

import { Config } from "../config.js";
import {LayoutContext} from './../context/layout-context';
import Link from "next/link";

const linkStyle = {
    marginRight: 0
};

class Menu extends Component {
  constructor() {
      super();
  }

  getSlug(url) {
      const parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  render() {
      const menuItems = this.props.menu.items.map((item, index) => {
        if (item.object === "custom") {
            return (
                <li>
                    <Link href={item.url} key={item.ID}>
                        <a style={linkStyle}>{item.title}</a>
                    </Link>
                </li>
            );
        }
        const slug = this.getSlug(item.url);
        const actualPage = item.object === "category" ? "category" : "post";
        return (
            <li>
                <Link
                    as={`/${item.object}/${slug}`}
                    href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                    key={item.ID}
                >
                    <a style={linkStyle}>{item.title}</a>
                </Link>
            </li>
        );
    });


    return (
        <LayoutContext.Consumer>
             {({menuActive,toggleMenu}) => (
                <nav  className={"menu " + (menuActive ? 'is-active' : '')} >
                    <ul className="nav">
                        <li>
                            <Link href="/">
                                <a style={linkStyle}>Home</a>
                            </Link>
                        </li>
                        {menuItems}
                    </ul>
                </nav>
            )}
      </LayoutContext.Consumer>
    )
  }


}

export default Menu;
