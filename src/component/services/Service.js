import React, { Component, Fragment } from "react";
import "./Service.css";
import Sidebar from "./sidebar/Sidebar";
import Profile from "./content/Profile/Profile";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import Subscription from "./content/subscription/Subscription";
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
        <div className="content">
          <Switch>
            <Route exact path="/Service/Profile/:id" component={Profile} />
            <Route
              exact
              path="/Service/ProfileManager/:id"
              render={() => <h1>ProfileManager</h1>}
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
              render={() => <h1>History</h1>}
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
