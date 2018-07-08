import React, { Component } from "react";

import { Config } from "../config.js";
import stylesheet from '../src/styles/style.scss'

class Header extends Component {
    constructor() {
        super();
        this.state = { active: false };
    }

    handleClick() {
      const current = this.state.active;
     // this.setState({active: !current});
    }

    render() {


        return (
          <a href="#" className={"menu-toggle " + (this.state.active ? 'is-active' : '')} onClick={this.handleClick} >
            <span></span>
            <span></span>
            <span></span>
          </a>
        );
    }
}

export default Header;
