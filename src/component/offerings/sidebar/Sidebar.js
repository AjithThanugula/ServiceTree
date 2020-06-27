import React, { Component } from "react";
import "./sidebar.css";
import {getOfferingsData} from "../../../api/ajaxCalls/_base";
import {withRouter } from "react-router-dom";
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
     OfferingData:[]
    };
    
  }

  componentWillMount() {

    let offerData = getOfferingsData();

    this.setState({ OfferingData: offerData});
  }
  componentDidMount(){
  
    let filterData = []
     filterData = this.state.OfferingData.filter(data => (data.Name.charAt(0).toUpperCase() === 'A') ||(data.Name.charAt(0)==='.'));
     this.setState({filterData: filterData})
     console.log(filterData);
 }

  fetchMatchedData(item){
     let filterData = []
   
      filterData = this.state.OfferingData.filter(data => data.Name.charAt(0).toUpperCase() === item);
      this.setState({filterData: filterData})
    console.log(filterData);
  }

  FetchProfileData=(id)=> {
  
    this.props.history.push("/Offering/Profile/"+id);

 

  };

  render() {
   const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const HeadingUL = {
      margin: "10px 0px 0px 22px",
    padding: "10px 0px 0px 0px"
    };
    
    return (
      <div className="offeringsidebar">

      <p className="SiderBarHeader">Request a New Offering</p>
      <button>Previous</button> <button style={{marginLeft: "0px"}}>Next</button><br></br>
    <div className="alphalink" ><ul className="LinkUL">
    {letters.map(letter => (
        <li onClick={this.fetchMatchedData.bind(this, letter)}>{letter}</li>
      ))}</ul>
    </div>
      <div className="innersidebar">
        {this.state.filterData.map(
            (e, i) => (
            <ul style={HeadingUL}><span className="icon">OF</span><span className="textHeading" onClick= {() => this.FetchProfileData(e.Id)}>{e.Name.length>25? e.Name.substring(0,25)+"...": e.Name}</span></ul> 
            )
          )}
</div>

      </div>
    );
  }
}

export default withRouter(sidebar); 
