import React, { Component,Fragment } from 'react'
import { NavLink, withRouter } from "react-router-dom";
export class content extends Component { 
    render() {
    let absolutePath="/OfferingModel/Offering/";
    
    const tab=this.props.tab;
  
    switch(tab)
    {
       case "ProductSku":
       absolutePath="/OfferingModel/ProductSku/";
       break;
       case "Feature":
        absolutePath="/OfferingModel/Feature/";
        break;
        default:
          absolutePath="/OfferingModel/Offering/";
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
                <NavLink to={ {pathname:absolutePath+`ServiceMapping/` + this.props.match.params.id,state:{tab:this.props.tab}}}>
                  Service Mapping
                </NavLink>
              </li>
            
              <li className="li">
                <NavLink to={ {pathname:absolutePath+`History/` + this.props.match.params.id,state:{tab:this.props.tab}}}>
                  History
                </NavLink>
              </li>
            </ul>
          </Fragment>
        );
      }
}

export default withRouter(content)
