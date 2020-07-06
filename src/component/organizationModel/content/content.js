import React, { Component,Fragment } from 'react'
import { NavLink, withRouter } from "react-router-dom";
export class content extends Component {
    render() {
    
    const tab=this.props.tab
    let absolutePath="/OrganizationModel/Organization/";
    switch(tab)
    {
       case "ServiceGroup":
       absolutePath="/OrganizationModel/ServiceGroup/";
       break;
       case "Division":
        absolutePath="/OrganizationModel/Division/";
        break;
        default:
          absolutePath="/OrganizationModel/Organization/";
        break;

       
    }
  
        return (
          <Fragment>
            <h1>Offering Profile Name</h1>
            <h1>{this.props.id}</h1>
            <ul id="ul">
              <li className="li">
                <NavLink to={ {pathname:absolutePath+`Profile/` + this.props.match.params.id,state:{tab:this.props.tab}}}>
                  Profile
                </NavLink>
              
              </li>
              <li className="li">
                <NavLink  to={ {pathname:absolutePath+`MetaData/` + this.props.match.params.id,state:{tab:this.props.tab}}}>
                  MetaData
                </NavLink>
              </li>
              <li className="li">
                <NavLink  to={ {pathname:absolutePath+`Administrator/` + this.props.match.params.id,state:{tab:this.props.tab}}}>
                 Administrators
                </NavLink>
              </li>
              {tab==="ServiceGroup"?
              <li className="li">
                <NavLink  to={ {pathname:absolutePath+`Service/` + this.props.match.params.id,state:{tab:this.props.tab}}}>
                  Service
                </NavLink>
              </li>:null
    }
            
              <li className="li">
                <NavLink  to={ {pathname:absolutePath+`History/` + this.props.match.params.id,state:{tab:this.props.tab}}}>
                  History
                </NavLink>
              </li>
            </ul>
          </Fragment>
        );
      }
}

export default withRouter(content)
