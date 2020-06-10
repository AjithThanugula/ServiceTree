import React, { Component } from "react";
import "./Sidebar.css";
import Division from "../../../api/Division.json";
import Organization from "../../../api/Organization.json";
import ServiceGroup from "../../../api/ServiceGroup.json";
import { Link } from "react-router-dom";
import Hierarchy from "./hierarchy/Hierarchy";
import HierarchyData from "../../../api/HierarchyData.json";

export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // services: [],
      organization: [],
      servicegroup: [],
      hierarchy: [],
    };
  }

  fetchOrganization = (e) => {
    let orgValue = e.target.value;

    if (Organization.hasOwnProperty("Organization")) {
      let data = Organization["Organization"].filter(
        (org) => org.DivisionId === orgValue
      );
      this.setState({ organization: data });
    } else {
      let defOrg = [
        {
          label: "We don't offer Any",
          value: "We don't offer Any",
        },
      ];
      this.setState({ organization: defOrg });
    }
  };

  fetchServiceGroup = (e) => {
    let offValue = e.target.value;
    if (ServiceGroup.hasOwnProperty("ServiceGroup")) {
      let data = ServiceGroup["ServiceGroup"].filter(
        (org) => org.OrganizationId === offValue
      );
      this.setState({ servicegroup: data });
    } else {
      let defOff = [
        {
          label: "We don't offer Any",
          value: "We don't offer Any",
        },
      ];
      this.setState({ servicegroup: defOff });
    }
  };

  componentWillMount() {
    let orgValue = [];
    Object.keys(HierarchyData).forEach(function (key) {
      orgValue = [...orgValue, ...HierarchyData[key]];
    });
    this.setState({ hierarchy: orgValue });
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
          {Division.Division.map(
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

        <select>
          <option value="Please Select">Please Select ServiceGroup</option>
          {this.state.servicegroup.map(
            (e, i) => (
              <option value={e.Id}>{e.Name}</option>
            )
            // <Select key={i} label={e.label} value={e.value} />
          )}
        </select>

        <h3>Hierarchy</h3>
        <ul id="myUL">
          <Hierarchy members={this.state.hierarchy} />
        </ul>
      </div>
    );
  }
}

export default Sidebar;
