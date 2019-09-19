import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    var showNav = {};

    if (this.props.displayNav) {
      if (this.props.displayNav.inView === false) {
        showNav = {
          zIndex: 100,
          position: "sticky",
          display: "block",
          top: 0,
          width: "100%"
        };
        console.log(showNav);
      }
    }

    return (
      <div>
        <ul className="navbar">
          <span className="icon">IR</span>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Projects</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}
