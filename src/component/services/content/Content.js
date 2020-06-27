import React, { Component, Fragment } from "react";
import "./content.css";
import { NavLink, withRouter } from "react-router-dom";

export class Content extends Component {
  render() {
    return (
      <Fragment>
        <div id="linkdiv">
          <NavLink to="/Service">Go to Service Home</NavLink>
        </div>
        <h1>Service Profile Name</h1>
        <h1>{this.props.member.Name}</h1>

        <ul id="ul">
          <li className="li">
            <NavLink
              to={{
                pathname: `/Service/Profile/` + this.props.match.params.id,

                state: { member: this.props.member },
              }}
            >
              Profile
            </NavLink>
          </li>
          <li className="li">
            <NavLink
              to={{
                pathname:
                  `/Service/ProfileManager/` + this.props.match.params.id,

                state: { member: this.props.member },
              }}
            >
              Profile Manager
            </NavLink>
          </li>
          <li className="li">
            <NavLink
              to={{
                pathname: `/Service/Subscription/` + this.props.match.params.id,

                state: { member: this.props.member },
              }}
            >
              Subscription
            </NavLink>
          </li>
          {/* <li className="li">
            <NavLink to={`/Service/Metadata/` + this.props.match.params.id}>
              Metadata
            </NavLink>
          </li>
          <li className="li">
            <NavLink
              to={`/Service/MetadataDependencies/` + this.props.match.params.id}
            >
              MetadataDependencies
            </NavLink>
          </li>
          <li className="li">
            <NavLink to={`/Service/Certificate/` + this.props.match.params.id}>
              Certificate
            </NavLink>
          </li> */}
          <li className="li">
            <NavLink
              to={{
                pathname: `/Service/History/` + this.props.match.params.id,

                state: { member: this.props.member },
              }}
            >
              History
            </NavLink>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default withRouter(Content);
