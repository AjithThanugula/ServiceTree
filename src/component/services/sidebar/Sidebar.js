import React, { Component } from "react";
import "./Sidebar.css";
export class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    );
  }
}

export default Sidebar;
