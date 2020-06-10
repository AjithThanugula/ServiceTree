import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../assests/images/stree1.png";
import { Link, Route } from "react-router-dom";
import Service from "../services/Service";
import Organization from "../organizations/Organization";
import Offering from "../offerings/Offering";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <a href="#home">
            {" "}
            <img src={logo} alt="Logo" />
          </a>
          <div className="subnav">
            <button className="subnavbtn">
              About <i className="fa fa-caret-down"></i>
            </button>
            <div className="subnav-content">
              <a href="#company">Company</a>
              <a href="#team">Team</a>
              <a href="#careers">Careers</a>
            </div>
          </div>
          <div className="subnav">
            <button className="subnavbtn">
              Browse <i className="fa fa-caret-down"></i>
            </button>
            <div className="subnav-content">
              <Link to="/Service">Service</Link>
              <Link to="/Organization">Organization</Link>
              <Link to="/Offering">Offering</Link>
            </div>
          </div>
          <div className="subnav">
            <button className="subnavbtn">
              More <i className="fa fa-caret-down"></i>
            </button>
            <div className="subnav-content">
              <a href="#link1">Link 1</a>
              <a href="#link2">Link 2</a>
              <a href="#link3">Link 3</a>
              <a href="#link4">Link 4</a>
            </div>
          </div>
          <a href="#contact">Contact</a>
          <div className="search-container">
            <input type="text" placeholder="Search.." name="search" />
          </div>
        </div>
      
        <Route path="/Organization" component={Organization} />
        <Route path="/Offering" component={Offering} />
        <Route path="/Service" component={Service} />
      
      </div>
    );
  }
}

export default Navbar;
