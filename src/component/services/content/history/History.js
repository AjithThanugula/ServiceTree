import React, { Component, Fragment } from "react";
import Content from "../content";
import { withRouter } from "react-router-dom";
import { getSubscriptionsData } from "../../../../api/ajaxCalls/_base";
import { DataGrid, GridColumn } from "rc-easyui";

export class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      data: this.getData(),
      member: {},
    };
  }

  getData() {
    let data = null;
    return data;
  }
  static getDerivedStateFromProps(props, state) {
    let id = props.match.params.id;

    return { id: id, member: props.location.state.member };
  }

  render() {
    return (
      <Fragment>
        <Content member={this.state.member}></Content>

        <br></br>
        <DataGrid data={this.state.data} style={{ height: "auto" }}>
          <GridColumn
            sortable
            field="Id"
            title="ChangeDate"
            width="22%"
          ></GridColumn>
          <GridColumn sortable field="Cloud" title="ChangedBy"></GridColumn>
          <GridColumn
            sortable
            field="Environment"
            title="Action"
            align="left"
          ></GridColumn>
          <GridColumn
            sortable
            field="Status"
            title="Details"
            align="left"
          ></GridColumn>
        </DataGrid>
      </Fragment>
    );
  }
}

export default withRouter(History);
