import React, { Component } from "react";
import "./Sidebar.css";
import Offering from "../../../api/Offering.json";
import { Link } from "react-router-dom";
export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offerings: [],
    };
  }

  componentDidMount() {
    let orgOfferings = [];
    Object.keys(Offering).forEach(function (key) {
      orgOfferings = [...orgOfferings, ...Offering[key]];
    });

    this.setState({ offerings: orgOfferings });
  }
  render() {
    return (
      <div className="sidebar">
        <Link to="/CreateService">Create New Service</Link>

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
