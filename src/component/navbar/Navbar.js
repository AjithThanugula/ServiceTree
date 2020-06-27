import React, { Component } from "react";
import "./navbar.css";
import logo from "../../assests/images/stree1.png";
import { Link, Route } from "react-router-dom";
import Service from "../services/service";
import Organization from "../organizations/organization";
import Offering from "../offerings/offering";
import OnBoarding from '../more/onBoarding/onBoarding'
import SubscriptionRegistration from '../more/subscriptionRegistration/subscriptionRegistration'
import MetadataDefinition from '../more/metadataDefinition/metadataDefinition'
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
              <Link to="/OnBoarding">OnBoarding</Link>
              <Link to="/SubscriptionRegistration">Subscription Registration</Link>
              <Link to="/MetadataDefinition">Metadata Definitions</Link>
            </div>
          </div>
          <div className="search-container">
            <input type="text" placeholder="Search.." name="search" />
          </div>
        </div>
      
        <Route path="/Organization" component={Organization} />
        <Route path="/Offering" component={Offering} />
        <Route path="/Service" component={Service} />
        <Route path="/OnBoarding" component={OnBoarding} />
        <Route path="/SubscriptionRegistration" component={SubscriptionRegistration} />
        <Route path="/MetadataDefinition" component={MetadataDefinition} />
          
       
         
        
       
      </div>
    );
  }
}

export default Navbar;
