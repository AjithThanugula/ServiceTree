import React, { Component } from "react";
import "./sidebar.css";
import Organization from "../../../api/organization.json";
import Offering from "../../../api/offering.json";
import { Link,Route } from "react-router-dom";


import Modal from '../../createService/modal'
export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // services: [],
      organization: [],
      offerings: [],
    };
  }

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

  componentDidMount() {
    //debugger;
    let orgValue = [];
    // Object.keys(Organization).forEach(function (key) {
    //   orgValue = [...orgValue, ...Organization[key]];
    // });
    orgValue=Organization["Organization"];
    this.setState({ organization: orgValue });
  }
  render() {
    return (
      <div className="sidebar">
      <Link  to="/Organization/NewService">New Service</Link>
        <label>
          <p>Please select Organization</p>
        </label>
        <br />

        <select onChange={this.fetchOfferings}>
          <option value="Please Select">Please Select Organization</option>
          {this.state.organization.map((e, i) => (
            <option value={e.value}>{e.label}</option>
          ))}
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
        {/* <Route  path={`${this.props.match.path}/NewService`}
           render={() => (
            <Modal
              className="CheckInStudentModal"
              title="New Service"
              closeUrl={this.props.match.url}
            >
             <NewService></NewService>
            </Modal>
          )}
          /> */}
      </div>
    );
  }
}

export default Sidebar;
