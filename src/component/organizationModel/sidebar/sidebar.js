import React, { Component } from "react";
import "./sidebar.css";
import { getDivisionData, getOrganizationData } from '../../../api/ajaxCalls/_base'
import { Link, withRouter } from "react-router-dom";
import Hierarchy from './hierarchy/hierarchy'
export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // services: [],
      division: [],
      organization: [],
    };
  }

  fetchOrganization = (e) => {

    let divValue = e.target.value; 

    let orgData = getOrganizationData();
    if (divValue !== "All") {
      let data = orgData.filter((org) => org.DivisionId === divValue);
      this.setState({ organization: data });
    }
    else {
      this.setState({ organization: orgData });
    }

  };
  expand = (e) => {


    let toggler = document.getElementsByClassName("caret");

    for (let i = 0; i < toggler.length; i++) {

      if (toggler[i].innerText === e) {
        toggler[i].parentElement
          .querySelector(".nested")
          .classList.toggle("active1");
        toggler[i].classList.toggle("caret-down");
      }
    }
  };

  FetchProfileData = (id, model,ref) => {

    
    let element = document.getElementsByClassName("orgHeadingli active")[0];
if(element)
element.classList.remove("active");
 element = document.getElementsByClassName("orgHeadingli_caret active")[0];
if(element)
element.classList.remove("active");
ref.target.parentElement.parentElement.classList.add("active");
    switch (model) {
      case "Organization":

        this.props.history.push("/OrganizationModel/Organization/Profile/" + id, { tab: "Organization" });
        break;
      case "ServiceGroup":
        this.props.history.push("/OrganizationModel/ServiceGroup/Profile/" + id, { tab: "ServiceGroup" });
        break;
      default:
        this.props.history.push("/OrganizationModel/Division/Profile/" + id, { tab: "Division" });
        break;

    }

  };


  componentWillMount() {

    this.setState({ division: getDivisionData(), organization: getOrganizationData() });
  }
  render() {

    return (
      <div className="orgsidebar">
          <button class="dispButton1">
          <Link to="/OrganizationModel/NewService">Create New Organization</Link>
        </button>
      
        <label>
          <p>Please select Division</p>
        </label>
        <br />

        <select onChange={this.fetchOrganization}>
          <option value="All">ALL Divisions</option>
          {this.state.division.map((e, i) => (
            <option value={e.value}>{e.Name}</option>
          ))}
        </select>
        <div>
          <ul className="myUL">
            <Hierarchy organization={this.state.organization} expand={this.expand} FetchProfileData={this.FetchProfileData}></Hierarchy>
          </ul>
        </div>


      </div>
    );
  }
}

export default withRouter(Sidebar);
