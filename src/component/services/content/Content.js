import React, { Component, Fragment } from "react";
import "./Content.css";
import { Link, withRouter } from "react-router-dom";

export class Content extends Component {
  render() {
    debugger;
    return (
      <Fragment>
        <h1>Service Profile Name</h1>
        <h1>{this.props.id}</h1>
        <ul id="ul">
          <li className="li">
            <Link to={`/Service/Profile/` + this.props.match.params.id}>
              Profile
            </Link>
          </li>
          <li className="li">
            <Link to={`/Service/ProfileManager/` + this.props.match.params.id}>
              Profile Manager
            </Link>
          </li>
          <li className="li">
            <Link to={`/Service/Subscription/` + this.props.match.params.id}>
              Subscription
            </Link>
          </li>
          <li className="li">
            <Link to={`/Service/Metadata/` + this.props.match.params.id}>
              Metadata
            </Link>
          </li>
          <li className="li">
            <Link
              to={`/Service/MetadataDependencies/` + this.props.match.params.id}
            >
              MetadataDependencies
            </Link>
          </li>
          <li className="li">
            <Link to={`/Service/Certificate/` + this.props.match.params.id}>
              Certificate
            </Link>
          </li>
          <li className="li">
            <Link to={`/Service/History/` + this.props.match.params.id}>
              History
            </Link>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default withRouter(Content);
