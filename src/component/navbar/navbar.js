import React, { Component, Fragment } from "react";
import "./navbar.css";
import logo from "../../assests/images/GA_Logo.png";
import { NavLink, Route,withRouter } from "react-router-dom";
import ServiceModel from "../serviceModel/service";
import OrganizationModel from "../organizationModel/organizationModel";
import OfferingModel from "../offeringModel/offeringModel";
import OnBoarding from '../more/onBoarding/onBoarding'
import SubscriptionRegistration from '../more/subscriptionRegistration/subscriptionRegistration'
import MetadataDefinition from '../more/metadataDefinition/metadataDefinition'
import explore from "../../assests/images/ExploreWithLens.png";
export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: "Browse"

    };

  }

  navTab = (tabName, ref) => {

    let element = document.getElementsByClassName("active")[0];
    if (element)
      element.classList.remove("active");
    ref.target.classList.add("active");
if(tabName==="More")
this.props.history.push("/OnBoarding");
else
this.props.history.push("/ServiceModel");
    this.setState({ tab: tabName });
  }
componentDidMount()
{
  this.props.history.push("/ServiceModel");
}
  render() {
    return (
      <div>
        <div className="navbar">
          <a className="home" href="#home">
            <i className="fatable fa fa-th fa-1.75x" aria-hidden="true"></i>
            <img className="image" src={logo} alt="logo" />
            <a href="#" className="Stree">Service Tree</a>
          </a>
          
          <div className="subnav">
            <button className="subnavbtn active" onClick={(ref) => this.navTab("Browse", ref)}>
              Browse
            </button>

          </div>

          <div className="subnav">
            <button className="subnavbtn" onClick={(ref) => this.navTab("More", ref)}>
              More
            </button>

          </div>



          <div className="search-container">

            <input className="searchbox" type="search" placeholder="Search.." name="search" >
            </input>
            <span className="SIcon">
              <i className="fa fa-search" />
            </span>

            <span className="Icon">
              <img className="image2" src={explore} alt="Icon" />
            </span>
            <span className="Icon">
              <i className="fa fa-bug" aria-hidden="true"></i>
            </span>
            <span className="Icon">
              <i className="fa fa-question" aria-hidden="true"></i>
            </span>
          </div>
        </div>


        <div className="navbar1">

          <div className="subnav-content">
            {
              this.state.tab === "Browse" ?
                <Fragment>
                  <NavLink to="/ServiceModel">Service</NavLink>
                  <NavLink to="/OrganizationModel">Organization</NavLink>
                  <NavLink to="/OfferingModel">Offering</NavLink>
                </Fragment>
                :
                <Fragment>
                  <NavLink to="/OnBoarding">OnBoarding</NavLink>
                  <NavLink to="/SubscriptionRegistration">Subscription Registration</NavLink>
                  <NavLink to="/MetadataDefinition">Metadata Definitions</NavLink>
                </Fragment>
            }
          </div>

        </div>

        <Route path="/OrganizationModel" component={OrganizationModel} />
        <Route path="/OfferingModel" component={OfferingModel} />
        <Route path="/ServiceModel" component={ServiceModel} />
        <Route path="/OnBoarding" component={OnBoarding} />
        <Route path="/SubscriptionRegistration" component={SubscriptionRegistration} />
        <Route path="/MetadataDefinition" component={MetadataDefinition} />





      </div>

    );
  }
}

export default withRouter(Navbar);
