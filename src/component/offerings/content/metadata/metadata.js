import React, { Component, Fragment } from "react";
import { Route, Redirect, Switch, withRouter, NavLink } from "react-router-dom";
import Content from "../content";
import Shared from "./shared/shared";
import "./metadata.css";
import MetadataContent from "./metadataContent/metadataContent";
import Common from "./common/common";
export class metadata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      member: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return { member: props.match.path };
  }

  render() {
    return (
      <Fragment>
        <Content></Content>
        <h2>Metadata:</h2>

        <p>
          Useful Metadata can be defined and stored for each Offering.Metadata
          definitions are carefully curated by service tree team.
        </p>
        <p>
          Authorized users for each offering can enter the correct metadata
          values on this page
        </p>
        <input type="text" name="search" placeholder="Search.." />
        <MetadataContent></MetadataContent>

        <Switch>
          <Route
            
            path={`${this.props.match.url}/Shared`}
            render={() => {
              return <Shared />;
            }}
          />

          <Route
            path={`${this.props.match.url}/`}
            render={() => {
              return <Common />;
            }}
          />
        </Switch>

        {/* <Route
            exact
            path="/Offering/ServiceMapping/:id"
            render={() => <Shared {...this.props} />}
          />

          <Route exact path="/Offering/History/:id" component={Shared} />
          <Route exact path="/Offering/Metadata/:id" component={Shared} />
        
        </Switch> */}
      </Fragment>
    );
  }
}

export default metadata;
