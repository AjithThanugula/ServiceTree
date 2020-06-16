import React, { Component, Fragment } from "react";
import Content from "../Content";
import { withRouter } from "react-router-dom";
import "./ProfileManager.css";

export class ProfileManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      member: {},
    };
  }

  static getDerivedStateFromProps(props, state) {
    let id = props.match.params.id;

    return { id: id, member: props.location.state.member };
  }

  render() {
    return (
      <Fragment>
        <Content member={this.state.member}></Content>

        <div id="boxes">
          <h1 id="h1">Profile Manager</h1>

          <div id="leftbox">
            <h2>Actions:</h2>
            <p>Surface Metadata that requires your review </p>
          </div>

          <div id="rightbox">
            <h2>System Activity:</h2>
            <p> Show Actions we took for you</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(ProfileManager);
