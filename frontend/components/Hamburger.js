import React, { Component } from "react";

import { Config } from "../config.js";
import {LayoutContext} from './../context/layout-context';
import stylesheet from '../src/styles/style.scss'

class Header extends Component {
    constructor() {
        super();
      ////  this.state = { active: false };
     //   this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //   const current = this.state.active;
    // //  const current = this.props;
    //  // console.log(current);
    //  this.setState({active: !current});
    // }

    componentDidMount() {
      // ThemeContext value is this.props.theme
      console.log(this.props);
    }
  
    componentDidUpdate(prevProps, prevState) {
      // Previous ThemeContext value is prevProps.theme
      // New ThemeContext value is this.props.theme
     // console.log(prevProps, prevState);
      
    }

    render() {


        return (
          <LayoutContext.Consumer>
             {({menuActive,toggleMenu}) =>  (
              <a href="#" className={"menu-toggle " + (menuActive ? 'is-active' : '')} onClick={toggleMenu} >
                <span></span>
                <span></span>
                <span></span>
              </a>
             )}
          </LayoutContext.Consumer>
        );
    }
}

export default Header;
