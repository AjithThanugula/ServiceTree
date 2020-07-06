import React, { Component } from "react";
import "./service.css";
import Sidebar from "./sidebar/sidebar";
import Profile from "./content/profile/profile";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Subscription from "./content/subscription/subscription";
import History from "./content/history/history";
import ProfileManager  from "./content/profileManager/profileManager";
export class Service extends Component {


  render() {
    const absolutepath="/ServiceModel/"
    return ( 
      <div>
        <Sidebar />
        <div className="servicecontent">
          <Switch>
            <Route exact path={absolutepath+"Profile/:id"} component={Profile} />
            <Route
              exact
              path={absolutepath+"ProfileManager/:id"} 
              
              component={ProfileManager} 
            />
            <Route
              exact
              path={absolutepath+"Subscription/:id"} 
            
            render={()=> <Subscription {...this.props}/>}
            />
            <Route
              exact
              path={absolutepath+"MetadataDependencies/:id"} 
            
              render={() => <h1>MetadataDependencies</h1>}
            />
            <Route
              exact
              path={absolutepath+"Certificate/:id"} 
            
              render={() => <h1>Certificate</h1>}
            />
            <Route
              exact
              path={absolutepath+"History/:id"} 
            
              component={History}
            />
            <Route
              exact
              path={absolutepath+"Metadata/:id"} 
            
              render={() => <h1>Metadata</h1>}
            />
            <Route
               path={absolutepath} 
              render={() => {
                return <Home {...this.props}></Home>;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Service;
