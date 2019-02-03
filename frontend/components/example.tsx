import React, { Component } from "react";

class Example extends Component {
  props: any;

  // constructor(props) {
  //   super(props);
  //   // //  this.state = { active: false };
  //   //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   const current = this.state.active;
  // //  const current = this.props;
  //  // console.log(current);
  //  this.setState({active: !current});
  // }

  // componentDidMount() {
  //   // ThemeContext value is this.props.theme
  //   //console.log(this.props);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // Previous ThemeContext value is prevProps.theme
  //   // New ThemeContext value is this.props.theme
  //  // console.log(prevProps, prevState);

  // }

  render() {
    return (
      <a
        href="#"
        className={`menu-toggle ${this.props.active ? "is-active" : ""}`}
        onClick={this.props.toggle}
      >
        <span />
        <span />
        <span />
      </a>
    );
  }
}

export default Example;
