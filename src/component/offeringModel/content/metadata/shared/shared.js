import React, { Component,Fragment } from 'react'
import { ProgressBar, Step } from "react-step-progress-bar";

import "react-step-progress-bar/styles.css";
import './shared.css'
import logo from '../../../../../assests/images/greenDot.jpg'
export class shared extends Component {
    render() {
        return (
            <Fragment>
                <p>View and edit common Metadata values that are shared across all cloud locations</p>
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
          </div>
          </Fragment>
        )
    }
}

export default shared
