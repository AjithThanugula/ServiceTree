import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./offeringModel.css";
import Sidebar from "./sidebar/sidebar";
import Home from './home'
import Profile from './content/profile/profile'
import History from './content/history/history'
import Metadata from './content/metadata/metadata'
import ServiceMapping from './content/serviceMapping/serviceMapping'
//import ProductSkuProfile from './content/productSkuProfile/productSkuProfile'
export class offeringModel extends Component {
  render() {
    let absolutePath = "/OfferingModel/"
    return (
      <div >
        <Sidebar />
        <div className="offeringcontent">
          <Switch>
            <Route path={absolutePath + "Offering/Profile/:id"} render={() => <Profile tab="Offering" />} />
            <Route path={absolutePath + "Offering/ServiceMapping/:id"} component={ServiceMapping} />
            <Route exact path={absolutePath + "Offering/History/:id"} component={History} />
            <Route path={absolutePath + "Offering/Metadata/:id"} component={Metadata} />


            <Route path={absolutePath + "ProductSku/Profile/:id"} render={() => <Profile tab="ProductSku" />} />
            <Route path={absolutePath + "ProductSku/ServiceMapping/:id"} component={ServiceMapping}/>
            <Route exact path={absolutePath + "ProductSku/History/:id"} component={History} />
            <Route path={absolutePath + "ProductSku/Metadata/:id"} component={Metadata} />


            {/*      
      
<Route  path={absolutePath+"Profile/:id"} component={Profile} />
<Route path={absolutePath+"ServiceMapping/:id"} render={() => <ServiceMapping {...this.props} />} />
<Route exact path={absolutePath+"Administrators/:id"}component={History} /> 
 <Route path={absolutePath+"Metadata/:id"} component={Metadata} /> */}



            <Route exact path="/OfferingModel" render={() => { return <Home {...this.props}></Home>; }} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default offeringModel;
