import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { bool } from "prop-types";

import "../styles/menu.css";

export class Menu extends Component {
  render() {
    let menu_class = this.props.open ? "menu" : "menu-hidden";
    let navlinks_class = this.props.open
      ? "menu-navlinks"
      : "menu-navlinks-hidden";
    return (
      <div className={menu_class} open={this.props.open}>
        <ul className={navlinks_class}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
