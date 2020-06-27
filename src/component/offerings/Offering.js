import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./offering.css";
import Sidebar from "./sidebar/sidebar";
import Home from './content/home'
import History from './/content/history/History'
import Profile from './content/profile/profile'
import Metadata from './content/metadata/metadata'
import ServiceMapping from './content/serviceMapping/serviceMapping'
export class Offering extends Component {
  render() {
    return (
      <div> 
        <Sidebar />
        <div className="offeringcontent">
        
            <Route  path="/Offering/Profile/:id" component={Profile} />
          
            <Route
              
              path="/Offering/ServiceMapping/:id"
              render={() => <ServiceMapping {...this.props} />}
            />
        
            <Route exact path="/Offering/History/:id" component={History} />
            <Route
              
              path="/Offering/Metadata/:id"
              component={Metadata}
            />
            <Route
            exact
              path="/Offering"
              render={() => {
                return <Home {...this.props}></Home>;
              }}
            />
         
        </div>
      </div>
    );
  }
}

export default Offering;
