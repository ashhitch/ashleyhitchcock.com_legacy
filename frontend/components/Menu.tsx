import React, { Component } from "react";

import Link from "next/link";

class Menu extends Component {
    props: any;
  constructor(props) {
      super(props);
  }

  getSlug(url) {
      const parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
  }

  render() {
  
          const menuItems = (!!this.props.menu && !!this.props.menu.items && this.props.menu.items.length) ?  this.props.menu.items.map((item, index) => {
            if (item.object === "custom") {
                return (
                    <li key={item.ID}>
                        <Link href={item.url}>
                            <a>{item.title}</a>
                        </Link>
                    </li>
                );
            }
      


        const slug = this.getSlug(item.url);
        const actualPage = item.object === "category" ? "category" : "post";
        return (
            <li  key={item.ID}>
                <Link
                    as={`/${item.object}/${slug}`}
                    href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                   
                >
                    <a>{item.title}</a>
                </Link>
            </li>
        );
    }) : null;



    return (
       
                <nav  className={"menu " + (this.props.active ? 'is-active' : '')} >
                    <ul className="nav">
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        {menuItems}
                    </ul>
                </nav>

    )
  }


}

export default Menu;
