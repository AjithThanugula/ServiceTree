import React, { Component,Fragment } from 'react'
import Stepper from 'react-stepper-horizontal'
import './shared.css'

export class shared extends Component {
    render() { 
        return (
            <Fragment>
              <p>View and edit common Metadata values that are shared across all cloud locations</p>
                <div className="div-shared">
                <h2>Offering Lifecycle Status</h2>
               <Stepper steps={ [{title: 'In Development'}, {title: 'Private Preview'}, {title: 'Public Preview'}, {title: 'GA'},{title:'Closing Down'}] } activeStep={ 1 } activeTitleColor={"#339884"} defaultOpacity={5}/>
               </div>
                {/* <p>View and edit common Metadata values that are shared across all cloud locations</p>
                <div className="div-shared">

            <h2>Offering Lifecycle Status</h2>
            <ProgressBar
            percent={25}
            fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
          >
            <Step transition="scale">
              {({ accomplished }) => (
                <Fragment>
                  <img src={logo} alt="Logo" width="25" />
                </Fragment>
              )}
            </Step>
            <h4 className="metadatah1">In Development</h4>
            <Step transition="scale">
              {({ accomplished }) => (
                <Fragment>
                  <img src={logo} alt="Logo" width="25" />
                </Fragment>
              )}
            </Step>
            <h4 className="metadatah1">Private Preview</h4>
            <Step transition="scale">
              {({ accomplished }) => (
                <Fragment>
                  <img src={logo} alt="Logo" width="25" />
                </Fragment>
              )}
            </Step>
            <h4 className="metadatah1">Public Preview</h4>
            <Step transition="scale">
              {({ accomplished }) => (
                <Fragment>
                  <img src={logo} alt="Logo" width="25" />
                </Fragment>
              )}
            </Step>
            <h4 className="metadatah1">GA</h4>
            <Step transition="scale">
              {({ accomplished }) => (
                <Fragment>
                  <img src={logo} alt="Logo" width="25" />
                </Fragment>
              )}
            </Step>
            <h4 className="metadatah1">Closing Down</h4>
            <Step transition="scale">
              {({ accomplished }) => (
                <Fragment>
                  <img src={logo} alt="Logo" width="25" />
                </Fragment>
              )}
            </Step>
            <h4 className="metadatah1">Retired</h4>
          </ProgressBar>
          </div> */}
          </Fragment>
        )
    }
}

export default shared
