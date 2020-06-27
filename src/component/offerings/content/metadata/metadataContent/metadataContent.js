import React, { Component, Fragment } from "react";
import { Route,NavLink, withRouter } from "react-router-dom";
import shared from "../shared/shared";
export class metadataContent extends Component {
  render() {
    return (
      <Fragment>
       
        <ul id="ul">
          <li className="li">
            <NavLink  to={`${this.props.match.url}/Shared`}>
              SHARED
            </NavLink>
          </li>
          <li className="li">
          <NavLink  to={`${this.props.match.url}/Public`}>
              PUBLIC
            </NavLink>
          </li>
          <li className="li">
          <NavLink  to={`${this.props.match.url}/Mooncake`}>
              MOONCAKE
            </NavLink>
          </li>

          <li className="li">
          <NavLink  to={`${this.props.match.url}/Fairfax`}>
              FAIRFAX
            </NavLink>
          </li>
          <li className="li">
          <NavLink  to={`${this.props.match.url}/Blackforest`}>
              BLACKFOREST
            </NavLink>
          </li>
        </ul>
      
      
      </Fragment>
    );
  }
}

export default withRouter(metadataContent);
