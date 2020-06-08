import React, { Component } from "react";
import "./Sidebar.css";
import Division from "../../../api/Division.json";
import Organization from "../../../api/Organization.json";
import Offering from "../../../api/Offering.json";
import { Link } from "react-router-dom";
export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // services: [],
      organization: [],
      offerings: [],
    };
  }

  fetchOrganization = (e) => {
    let orgValue = e.target.value;

    if (Organization.hasOwnProperty(orgValue))
      this.setState({ organization: Organization[orgValue] });
    else {
      let defOrg = [
        {
          label: "We don't offer Any",
          value: "We don't offer Any",
        },
      ];
      this.setState({ organization: defOrg });
    }
  };

  fetchOfferings = (e) => {
    let offValue = e.target.value;
    if (Offering.hasOwnProperty(offValue))
      this.setState({ offerings: Offering[offValue] });
    else {
      let defOff = [
        {
          label: "We don't offer Any",
          value: "We don't offer Any",
        },
      ];
      this.setState({ offerings: defOff });
    }
  };

  //todo set Services(Division) State
  // componentDidMount(){

  //   // fetch Services Data and display from webapi
  // }

  render() {
    return (
      <div className="sidebar">
        <Link to="/CreateService">Create New Service</Link>
        <label>
          <p>Please select Division</p>
        </label>
        <br />

        <select onChange={this.fetchOrganization}>
          <option value="Please Select">Please Select Division</option>
          {Division.Division.map(
            (e, i) => (
              <option value={e.value}>{e.label}</option>
            )
            // <Select key={i} label={e.label} value={e.value} />
          )}
        </select>

        <label>
          <p>Please select Organization</p>
        </label>
        <br />

        <select onChange={this.fetchOfferings}>
          <option value="Please Select">Please Select Organization</option>
          {this.state.organization.map(
            (e, i) => (
              <option value={e.value}>{e.label}</option>
            )
            // <Select key={i} label={e.label} value={e.value} />
          )}
        </select>

        <label>
          <p>Please select Offerings</p>
        </label>
        <br />

        <select>
          <option value="Please Select">Please Select Offering</option>
          {this.state.offerings.map(
            (e, i) => (
              <option value={e.value}>{e.label}</option>
            )
            // <Select key={i} label={e.label} value={e.value} />
          )}
        </select>
      </div>
    );
  }
}

export default Sidebar;
