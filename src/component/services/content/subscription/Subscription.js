import React, { Component, Fragment } from "react";
import Content from "../Content";
import { withRouter } from "react-router-dom";
import { getServiceGroupData } from "../../../../api/AjaxCalls/_base";

export class Subscription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
   
    let id = props.match.params.id;
   

    return { id:id };
  }
  

  render() {
 
    return (
     
       <Fragment>
       
    
      
            <Content id={"Ajith"} ></Content>

<h2>Azure Subscription:</h2>
<p>If you service is hosted on Azure,then please enter your Azure Subscription below.Providing this information</p>
<p>helps many services and tems to correlate your service with various activities across the ecosystem.</p>
<p>This makes supporting your service that much easier.</p>
<p>You may manage your subscription allocations with either the table control at the bottom</p>
<p>Or if you have large number of subscriptions,You can download as csv from kusto.</p>

           </Fragment>
          
         
      
    );
  }
}

export default withRouter(Subscription);
