import React, { Component } from "react";
import "./Sidebar.css";
import { Link, withRouter } from "react-router-dom";
import Hierarchy from "./hierarchy/Hierarchy";
import {
  getDivisionData,
  getHierarchyData,
  getOrganizationData,
  getServiceGroupData,
} from "../../../api/AjaxCalls/_base";
export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      division: [],
      organization: [],
      servicegroup: [],
      hierarchy: [],
    };
  }

  fetchOrganization = (e) => {
    let orgValue = e.target.value;
    let defOrg = [
      {
        Id: "We don't offer Any",
        Name: "We don't offer Any",
      },
    ];
    let orgData = getOrganizationData();

    if (orgData) {
      let data = orgData.filter((org) => org.DivisionId === orgValue);
      this.setState({ organization: data.length > 0 ? data : defOrg });
    } else {
      this.setState({ organization: defOrg });
    }
  };

  fetchServiceGroup = (e) => {
    let offValue = e.target.value;
    let defOff = [
      {
        Id: "We don't offer Any",
        Name: "We don't offer Any",
      },
    ];
    let serviceGroup = getServiceGroupData();
    if (serviceGroup) {
      let data = serviceGroup.filter((org) => org.OrganizationId === offValue);
      this.setState({ servicegroup: data.length > 0 ? data : defOff });
    } else {
      this.setState({ servicegroup: defOff });
    }
  };

  FetchProfileData = (e) => {
   
    let id = document.getElementById("sGroupId").value;
    this.props.history.push("/Service/Profile/"+id);
    // this.props.history.push({
    //   pathname: "/Profile/" + id,
    // });
  };

  componentWillMount() {
    let orgValue = [];
    // Object.keys(HierarchyData).forEach(function (key) {
    //   orgValue = [...orgValue, ...HierarchyData[key]];
    // });
    orgValue = getHierarchyData();
    let divData = getDivisionData();

    this.setState({ hierarchy: orgValue, division: divData });
  }

  render() {
    return (
      <div className="sidebar">
        <Link to="/CreateService">Create New Service</Link>
        <label>
          <p>Please select Division</p>
        </label>

        <select onChange={this.fetchOrganization}>
          <option value="Please Select">Please Select Division</option>
          {this.state.division.map(
            (e, i) => (
              <option value={e.Id}>{e.Name}</option>
            )
            // <Select key={i} label={e.label} value={e.value} />
          )}
        </select>

        <label>
          <p>Please select Organization</p>
        </label>

        <select onChange={this.fetchServiceGroup}>
          <option value="Please Select">Please Select Organization</option>
          {this.state.organization.map(
            (e, i) => (
              <option value={e.Id}>{e.Name}</option>
            )
            // <Select key={i} label={e.label} value={e.value} />
          )}
        </select>

        <label>
          <p>Please select ServiceGroup</p>
        </label>

        <select id="sGroupId">
          <option value="Please Select">Please Select ServiceGroup</option>
          {this.state.servicegroup.map(
            (e, i) => (
              <option value={e.Id}>{e.Name}</option>
            )
            // <Select key={i} label={e.label} value={e.value} />
          )}
        </select>
        <button onClick={this.FetchProfileData}>Apply</button>
        <h3>Hierarchy</h3>
        <ul id="myUL">
          <Hierarchy members={this.state.hierarchy} />
        </ul>
      </div>
    );
  }
}

export default withRouter(Sidebar);
