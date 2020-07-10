import React, { Component, Fragment } from 'react'
import './stepper.css'
import {getDivisionData} from '../../../api/ajaxCalls/_base'
import { Link } from 'react-router-dom'
// Step
const Step = (props) => {

  return (<div className="Stepper__step">
    <div className="Stepper__indicator">
      <span className="Stepper__info">{props.indicator}</span>
    </div>
    <div className="Stepper__label">{props.title}</div>
    {props.indicator === "1" ? <div className="Stepper__panel Stepper__panel1">
      {props.children}
    </div> : <div className="Stepper__panel">
        {props.children}
      </div>
    }

  </div>)
}

// Overlay
const Stepper = (props) =>
  <div className={`Stepper ${props.isVertical ? 'Stepper--vertical' : ''} ${props.isInline ? 'Stepper--inline' : ''}`}>
    {props.children}
  </div>;


export class stepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTabIndex: 0,
      organization:[]
    };

  };


  showActiveStep = (e, stepIndex) => {

    let currentStep = e.target.parentElement.parentElement;
    currentStep.style.display = "none"
    currentStep.parentElement.style.setProperty("--color", "#339884");
    currentStep.parentElement.getElementsByClassName("Stepper__indicator")[0].getElementsByTagName("span")[0].style.backgroundColor = "#339884"
    //debugger;

    let nxtElement = document.getElementById("Next_" + (parseInt(stepIndex) + 1));
    if (nxtElement)
      nxtElement.parentElement.parentElement.style.display = "block"
  };

  prevActiveStep = (e, stepIndex) => {


    e.target.parentElement.parentElement.style.display = "none"
    let nxtElement = document.getElementById("Next_" + (parseInt(stepIndex) - 1)).parentElement.parentElement;
    if (nxtElement) {
      nxtElement.parentElement.style.setProperty("--color", "#e3e8ec");
      nxtElement.parentElement.getElementsByClassName("Stepper__indicator")[0].getElementsByTagName("span")[0].style.backgroundColor = "#e3e8ec"
      nxtElement.style.display = "block"
    }
  };
componentDidMount()
{
  let orgData=getDivisionData();
  this.setState({ organization:orgData})
}

 dummyStep=()=>
 {
   return(
     <Fragment>
         <h3>Select Organization (aka. Service Group or Team Group)</h3>
            <select className="select" >
          <option value="Please Select">Please Select Organization</option>
          {this.state.organization.map(
            (e, i) => (
              <option key={e.Id} value={e.Id}>{e.Name}</option>
            )
          
          )}
        </select>
        <h3>Service Group or Team Group Admins</h3>
        <textarea id="w3review" name="w3review" rows="4" cols="50">
  
  </textarea>
  <h3>Business Owners</h3>
        <textarea id="w3review" name="w3review" rows="4" cols="50">
 
  </textarea>
  <br></br>
 <Link> Request a new Service Group or Team Group</Link>
 <br></br>
 <br></br>
 </Fragment> )
 }
  render() {
    return (
      <div> 

        <Stepper isVertical>
          <Step indicator="1" title=" Organization">
            <div className="Content">
           {this.dummyStep()}
              <button className="button" id={"Next_1"} onClick={(e) => this.showActiveStep(e, "1")}>Next</button>
            </div>
          </Step>
          <Step indicator="2" title=" Service Type">
            <div className="Content">
            {this.dummyStep()}
              <button className="pbutton" id={"Prev_2"} onClick={(e) => this.prevActiveStep(e, "2")}>Prev</button>
              <button className="button" id={"Next_2"} onClick={(e) => this.showActiveStep(e, "2")}>Next</button>
            </div>
          </Step>
          <Step indicator="3" title=" Profile Info">
            <div className="Content">
            {this.dummyStep()}
              <button className="pbutton" id={"Prev_3"} onClick={(e) => this.prevActiveStep(e, "3")}>Prev</button>
              <button className="button" id={"Next_3"} onClick={(e) => this.showActiveStep(e, "3")}>Next</button>
            </div>
          </Step>
          <Step indicator="4" title=" Metadata">
            <div className="Content">
            {this.dummyStep()}
              <button className="pbutton"  id={"Prev_4"} onClick={(e) => this.prevActiveStep(e, "4")}>Prev</button>
              <button className="button" id={"Next_4"} onClick={(e) => this.showActiveStep(e, "4")}>Next</button>
            </div>
          </Step>
          <Step indicator="5" title=" Review & Submit">
            <div className="Content">
            {this.dummyStep()}
              <button className="pbutton" id={"Prev_5"} onClick={(e) => this.prevActiveStep(e, "5")}>Prev</button>
              <button className="button" id={"Next_5"} onClick={(e) => this.showActiveStep(e, "5")}>Next</button>
            </div>
          </Step>
        </Stepper>


      </div>
    )
  }
}

export default stepper






