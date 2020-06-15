import React, { Component, Fragment } from "react";
import Content from "../Content";
import { withRouter } from "react-router-dom";
import { getSubscriptionsData } from "../../../../api/AjaxCalls/_base";
import { DataGrid, GridColumn, ComboBox } from "rc-easyui";

export class Subscription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      data: this.getData(),
      status: [
        { value: null, text: "All" },
        { value: "P", text: "P" },
        { value: "N", text: "N" },
      ],
    };
  }

  getData() {
   let data=getSubscriptionsData()
   return data;
  }
  static getDerivedStateFromProps(props, state) {
    let id = props.match.params.id;

    return { id: id };
  }

  render() {
    return (
      <Fragment>
        <Content id={"Ajith"}></Content>

        <h2>Azure Subscription:</h2>
        <p>
          If you service is hosted on Azure,then please enter your Azure
          Subscription below.Providing this information
        </p>
        <p>
          helps many services and tems to correlate your service with various
          activities across the ecosystem.
        </p>
        <p>This makes supporting your service that much easier.</p>
        <p>
          You may manage your subscription allocations with either the table
          control at the bottom
        </p>
        <p>
          Or if you have large number of subscriptions,You can download as csv
          from kusto.
        </p>
   
      <br></br>
      <br></br>
      <p>Number Of Associates Subscriptions:{this.state.data.length}</p>
      <br></br>
          <DataGrid
            filterable
            data={this.state.data}
            style={{ height: "auto" }}
          >
            <GridColumn
              sortable
              field="Id"
              title="Subsription Id"
              width="22%"
            ></GridColumn>
            <GridColumn sortable field="Cloud" title="Cloud"></GridColumn>
            <GridColumn
              sortable
              field="Environment"
              title="Environment"
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
              field="Notes"
              title="Notes"
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
    );
  }
}

export default withRouter(Subscription);
