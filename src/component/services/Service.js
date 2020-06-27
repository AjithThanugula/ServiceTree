import React, { Component, Fragment } from "react";
import "./service.css";
import Sidebar from "./sidebar/sidebar";
import Profile from "./content/profile/profile";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./home";
import Subscription from "./content/subscription/subscription";
import History from "./content/history/history";
import ProfileManager  from "./content/profileManager/profileManager";
export class Service extends Component {
  constructor(props) {
    super(props);

    this.state = {
      render: "false",
    };
  } 

  render() {
    
    return ( 
      <div>
        <Sidebar />
        <div className="servicecontent">
          <Switch>
            <Route exact path="/Service/Profile/:id" component={Profile} />
            <Route
              exact
              path="/Service/ProfileManager/:id"
              component={ProfileManager} 
            />
            <Route
              exact
              path="/Service/Subscription/:id"
            render={()=> <Subscription {...this.props}/>}
            />
            <Route
              exact
              path="/Service/MetadataDependencies/:id"
              render={() => <h1>MetadataDependencies</h1>}
            />
            <Route
              exact
              path="/Service/Certificate/:id"
              render={() => <h1>Certificate</h1>}
            />
            <Route
              exact
              path="/Service/History/:id"
              component={History}
            />
            <Route
              exact
              path="/Service/Metadata/:id"
              render={() => <h1>Metadata</h1>}
            />
            <Route
              path="/Service"
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
