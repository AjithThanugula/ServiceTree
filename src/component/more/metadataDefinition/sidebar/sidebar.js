import React, { Component } from "react";
import "./sidebar.css";
import { getOrganizationMetadata, getOfferingMetadata, getServiceMetadata } from '../../../../api/ajaxCalls/_base'
import { withRouter } from "react-router-dom";


export class sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            metadata: [],
            filterData: []
        };

    }

    componentWillMount() {


        let metadata = [...getOrganizationMetadata(), ...getOfferingMetadata(), ...getServiceMetadata()]

        this.setState({ metadata: metadata });
        //, features: features
    }
    componentDidMount() {

        let filterData = []
        filterData = this.state.metadata.filter(data => (data.Id.charAt(0).toUpperCase() === 'A') || (data.Id.charAt(0) === '.'));
        this.setState({ filterData: filterData })
      //  console.log(filterData);
    }

    fetchMatchedData(item) {
        let filterData = []

        filterData = this.state.metadata.filter(data => data.Id.charAt(0).toUpperCase() === item);
        this.setState({ filterData: filterData })
        //console.log(filterData);
    }

    FetchProfileData = (id, model) => {
        switch (model) {
            case "ProductSku":
                this.props.history.push("/OfferingModel/ProductSku/Profile/" + id);
                break;
            case "Offering":
                this.props.history.push("/OfferingModel/Offering/Profile/" + id);
                break;
            default:
                this.props.history.push("/OfferingModel/Offering/Profile/" + id);
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
            margin: "0px 0px 0px 20px",
  padding:"1px 0px 5px 0px"
        };

        return (
            <div className="metaDefsidebar">
  <button className="button">ADD SERVICE MDEF</button> <br></br>
  <button className="button">ADD ORGANIZATION MDEF</button><br></br>
  <button className="button">ADD OFFERING MDEF</button> <br></br>
              
                <button className="button">Request a New Offering</button> <br></br>
                <br></br>
                <button className="button">Previous</button> <button className="button" style={{ marginLeft: "0px" }}>Next</button><br></br>
                <div className="alphalink" ><ul className="LinkUL">
                    {letters.map((letter, i) => (
                        <li key={i} onClick={this.fetchMatchedData.bind(this, letter)}>{letter}</li>
                    ))}</ul>
                </div>

                <div className="innersidebar">
                    <ul className="myUL">
                        {this.state.filterData.map(
                            (e, i) => (

                                <li style={HeadingUL1} key={i}>  <span className="icon">Of</span><span className="textHeading" >{e.Id}</span></li> //onClick={() => this.FetchProfileData(e.Id)}
                            )
                        )}
                    </ul>
                </div>

            </div>
        );
    }
}

export default withRouter(sidebar);



