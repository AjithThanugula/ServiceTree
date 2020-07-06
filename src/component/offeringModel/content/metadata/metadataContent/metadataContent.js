import React, { Component, Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";

export class metadataContent extends Component {
  render() {
    return (
      <Fragment>
       
        <ul id="ul">
          <li className="li">
            <NavLink to={ {pathname:`${this.props.match.url}/Shared`,state:{tab:this.props.tab}}}>
              SHARED
            </NavLink>
          </li>
          <li className="li">
          <NavLink to={ {pathname:`${this.props.match.url}/Public`,state:{tab:this.props.tab}}}>
              PUBLIC
            </NavLink>
          </li>
          <li className="li">
          <NavLink  to={ {pathname:`${this.props.match.url}/Mooncake`,state:{tab:this.props.tab}}}>
              MOONCAKE
            </NavLink>
          </li>

          <li className="li">
          <NavLink to={ {pathname:`${this.props.match.url}/Fairfax`,state:{tab:this.props.tab}}}>
              FAIRFAX
            </NavLink>
          </li>
          <li className="li">
          <NavLink  to={ {pathname:`${this.props.match.url}/Blackforest`,state:{tab:this.props.tab}}}>
              BLACKFOREST
            </NavLink>
          </li>
        </ul>
      
      
      </Fragment>
    );
  }
}

export default withRouter(metadataContent);
