import React, { Component } from "react";
import "./Sidebar.css";
import OfferingData from "../../../api/OfferingData.json";
//import Icon from '@material-ui/core/Icon';
//import { loadCSS } from 'fg-loadcss';
// import { makeStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
              <li>{letter}</li>
            ))}
          </ul>
        </div>
        <div className="innersidebar">
          {OfferingData.value.map((e, i) => (
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
