import React, { Component } from "react";
import "./sidebar.css";
import { getOfferingsData, getProductSKUData } from "../../../api/ajaxCalls1/_base";
import { withRouter } from "react-router-dom";
import Hierarchy from './hierarchy'
//import Icon from '@material-ui/core/Icon';
//import { loadCSS } from 'fg-loadcss';
// import { makeStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
export class sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // search : "A",
      filterData: [],
      OfferingData: [],
      productSKU: [],
      // features: []
    };

  }

  componentWillMount() {

    let offerData = getOfferingsData();
    let productSKU = getProductSKUData();
   
    this.setState({ OfferingData: offerData, productSKU: productSKU });
    //, features: features
  }
  componentDidMount() {

    let filterData = []
    filterData = this.state.OfferingData.filter(data => (data.Name.charAt(0).toUpperCase() === 'A') || (data.Name.charAt(0) === '.'));
    this.setState({ filterData: filterData })
   // console.log(filterData);
  } 

  fetchMatchedData(item) {
    let filterData = []

    filterData = this.state.OfferingData.filter(data => data.Name.charAt(0).toUpperCase() === item);
    this.setState({ filterData: filterData })
    //console.log(filterData);
  }

  FetchProfileData = (id, model) => {
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

   
    const HeadingUL1 = {
      margin: "10px 0px 0px 40px",
      padding: "10px 0px 0px 0px"
    };

    return (
      <div className="offeringsidebar">

        <p className="SiderBarHeader">Request a New Offering</p>
        <button>Previous</button> <button style={{ marginLeft: "0px" }}>Next</button><br></br>
        <div className="alphalink" ><ul className="LinkUL">
          {letters.map((letter,i) => (
            <li key={i} onClick={this.fetchMatchedData.bind(this, letter)}>{letter}</li>
          ))}</ul>
        </div>

        <div className="innersidebar">
          <ul className="myUL">
            {this.state.filterData.map(
              (e, i) => (
                this.state.productSKU.find(o => o.OfferingId === e.Id) ?
                  <Hierarchy key={i} productSKU={this.state.productSKU} OfferingData={e} FetchProfileData={this.FetchProfileData} expand={this.expand}></Hierarchy>
                  : <li style={HeadingUL1} key={i}>  <span className="icon">Of</span><span className="textHeading" onClick={() => this.FetchProfileData(e.Id)}>{e.Name.length > 25 ? e.Name.substring(0, 25) + "..." : e.Name}</span></li>
              )
            )}
          </ul>
        </div>

      </div>
    );
  }
}

export default withRouter(sidebar);



