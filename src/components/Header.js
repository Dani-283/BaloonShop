import React, { Component } from "react";
import Navbar from "./Navbar";

import "../styles/header.css";

export class Header extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#ffb3be" }}>
        <div className="header-div">
          <a href="www.google.com">baloonshop@gmail.com</a>
          <i class="fas fa-shopping-cart"></i>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default Header;
