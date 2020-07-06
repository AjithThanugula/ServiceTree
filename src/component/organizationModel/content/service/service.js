import React, { Component, Fragment } from 'react'
import Content from '../content'
import {getServiceGroupData} from '../../../../api/ajaxCalls1/_base'
import { DataGrid, GridColumn } from "rc-easyui";
export class service extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          id: "",
          tab:"",
         serviceData:[]
        };
      }

    static getDerivedStateFromProps(props, state) {
        let id = props.match.params.id;
    let serviceData=getServiceGroupData();
        return { id: id, tab: props.location.state.tab,serviceData:serviceData };
      }
    
    render() {
        return (
           <Fragment>
               <Content tab={this.state.tab}></Content>  
                    <h2><b>Services withni this Organization</b></h2>
                    <p>This is a list of all Services belonging to this organization,Including Services in all Team Groups within this Service<br></br>
                    Group.You can navigate to any individual service by clicking on its name.</p>
                    <br></br>
       
                    <br></br>
        <br></br>
        <p>Number Of Associates Subscriptions:{this.state.serviceData.length}</p>
        <br></br>
        <DataGrid filterable data={this.state.serviceData} style={{ height: "auto" }}>
          <GridColumn
            sortable
            field="Id"
            title="Subsription Id"
            width="22%"
          ></GridColumn>
          <GridColumn sortable field="Tags" title="Tags"></GridColumn>
          <GridColumn
            sortable
            field="Name"
            title="Name"
            align="left"
          ></GridColumn>
          <GridColumn
            sortable
            field="Status"
            title="Status"
            align="left"
          ></GridColumn>
          <GridColumn
            sortable
            field="Description"
            title="Description"
            width="30%"
          ></GridColumn>
          <GridColumn
            remoteFilter
            field="status"
            title="Actions"
            align="center"
          />
        </DataGrid>
              
            </Fragment>
        )
    }
}

export default service
