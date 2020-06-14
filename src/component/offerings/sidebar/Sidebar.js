import React, { Component } from "react";
import "./Sidebar.css";
import OfferingData from "../../../api/OfferingData.json";

export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "A",
      filterData: [],
    };
  }

  fetchMatchedData(item) {
    let filterData = [];

    filterData = OfferingData.value.filter(
      (data) => data.Name.charAt(0).toUpperCase() === item
    );

    this.setState({ filterData: filterData });
  }
  componentDidMount() {
    let filterData = [];

    filterData = OfferingData.value.filter(
      (data) => data.Name.charAt(0).toUpperCase() === "A"
    );

    this.setState({ filterData: filterData });
  }

  render() {
    const letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    const HeadingUL = {
      margin: "10px 0px 0px 22px",
      padding: "10px 0px 0px 0px",
    };

    return (
      <div className="sidebar">
        <p className="SiderBarHeader">Request a New Offering</p>
        <button>Previous</button>{" "}
        <button style={{ marginLeft: "0px" }}>Next</button>
        <br></br>
        <div className="alphalink">
          <ul className="LinkUL">
            {letters.map((letter) => (
              <li onClick={this.fetchMatchedData.bind(this, letter)}>
                {letter}
              </li>
            ))}
          </ul>
        </div>
        <div className="innersidebar">
          {this.state.filterData.map((e, i) => (
            <ul style={HeadingUL}>
              <span className="icon">OF</span>
              <span className="textHeading">
                {e.Name.length > 15 ? e.Name.substring(0, 15) + "..." : e.Name}
              </span>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default Sidebar;
