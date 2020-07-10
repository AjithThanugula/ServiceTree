import React, { Component } from "react";
import "./sidebar.css";
import { getOfferingsData, getProductSKUData } from "../../../api/ajaxCalls/_base";
import { withRouter,Link } from "react-router-dom";
import Hierarchy from './hierarchy'

export class sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {

      filterData: [],
      offeringData: [],
      productSKU: [],

    };

  }

  componentWillMount() {

    let offerData = getOfferingsData();
    let productSKU = getProductSKUData();

    this.setState({ offeringData: offerData, productSKU: productSKU });
    //, features: features
  }
  componentDidMount() {

    let filterData = []
    filterData = this.state.offeringData.filter(data => (data.Name.charAt(0).toUpperCase() === 'A') || (data.Name.charAt(0) === '.'));
    this.setState({ filterData: filterData })
    // console.log(filterData);
  }
 
  fetchMatchedData(item) {
    let filterData = []

    filterData = this.state.offeringData.filter(data => data.Name.charAt(0).toUpperCase() === item);
    this.setState({ filterData: filterData })
    //console.log(filterData);
  }

  FetchProfileData = (id, model,ref) => {

 debugger;
    
    let element = document.getElementsByClassName("offerHeadingUL1 active")[0];
  if(element)
   element.classList.remove("active");
   element = document.getElementsByClassName("offerHeadingUL active")[0];
  if(element)
   element.classList.remove("active");
 ref.target.parentElement.parentElement.classList.add("active");
    switch (model) {
      case "ProductSku":
        this.props.history.push("/OfferingModel/ProductSku/Profile/" + id, { tab: "ProductSku" });
        break;
      case "Offering":
        this.props.history.push("/OfferingModel/Offering/Profile/" + id, { tab: "Offering" });
        break;
      default:
        this.props.history.push("/OfferingModel/Offering/Profile/" + id, { tab: "Offering" });
        break;

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


  render() {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];




    return (
      <div className="offeringsidebar">
        <div className="fixedPosition">
  <button className="dispButton1 ">
          <Link to="/OrganizationModel/NewService">Create New Offering</Link>
        </button>
      
        <button className="pbutton buttonmargin">Prev</button> <button className="button" >Next</button>
        </div>
        <div className="alphalink" ><ul className="LinkUL">
          {letters.map((letter, i) => (
            <li key={i} onClick={this.fetchMatchedData.bind(this, letter)}>{letter}</li>
          ))}</ul>
        </div>

        <div className="innersidebar">
          <ul className="myUL">
            {this.state.filterData.map(
              (e, i) => (
                this.state.productSKU.find(o => o.OfferingId === e.Id) ?
                  <Hierarchy key={i} productSKU={this.state.productSKU} offeringData={e} FetchProfileData={this.FetchProfileData} expand={this.expand}></Hierarchy>
                  : <li className="offerHeadingUL1" key={i}>  <span><span className="icon">Of</span><span className="textHeading" onClick={(ref) => this.FetchProfileData(e.Id,"Offering",ref)}>{e.Name.length > 25 ? e.Name.substring(0, 25) + "..." : e.Name}</span></span></li>
              )
            )}
          </ul>
        </div>

      </div>
    );
  }
}

export default withRouter(sidebar);



