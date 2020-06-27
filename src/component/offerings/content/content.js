import React, { Component,Fragment } from 'react'
import { NavLink, withRouter } from "react-router-dom";
export class content extends Component {
    render() {
   
        return (
          <Fragment>
            <h1>Offering Profile Name</h1>
            <h1>{this.props.id}</h1>
            <ul id="ul">
              <li className="li">
                <NavLink to={`/Offering/Profile/` + this.props.match.params.id}>
                  Profile
                </NavLink>
              </li>
              <li className="li">
                <NavLink to={`/Offering/MetaData/` + this.props.match.params.id}>
                  MetaData
                </NavLink>
              </li>
              <li className="li">
                <NavLink to={`/Offering/ServiceMapping/` + this.props.match.params.id}>
                  Service Mapping
                </NavLink>
              </li>
              {/* <li className="li">
                <Link to={`/Offering/Metadata/` + this.props.match.params.id}>
                  Metadata
                </Link>
              </li> */}
              {/* <li className="li">
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
              </li> */}
              <li className="li">
                <NavLink to={`/Offering/History/` + this.props.match.params.id}>
                  History
                </NavLink>
              </li>
            </ul>
          </Fragment>
        );
      }
}

export default withRouter(content)
