import React, { Component } from 'react';

import Link from 'next/link';

export default class Linky extends Component {
    parseString(string: string) {
      if (string === '') {
        return string;
      }
    
      const elements = [];
      let lastIndex = 0;

      if (string.length > lastIndex) {
        elements.push(string.substring(lastIndex));
      }

      return elements.length === 1 ? elements[0] : elements;
    }

    parse(children: any, key: number = 0) {
      if (typeof children === 'string') {
        return this.parseString(children);
      } else if (React.isValidElement(children) && children.type !== 'a' && children.type !== 'button') {
        return React.cloneElement(children, { key: key }, this.parse(children.props.children));
      } else if (React.isValidElement(children) && children.type === 'a') {
        console.log(children.props);
        //TODO wrap in Link, map over children to get string for text
      } else if (Array.isArray(children)) {

        return children.map((child, i) => this.parse(child, i));
      }

      return children;
    }

    render() {
      return (
        <React.Fragment>
          {this.parse(this.props.children)}
        </React.Fragment>
      );
    }
  }



