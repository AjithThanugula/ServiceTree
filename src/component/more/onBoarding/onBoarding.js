import React, { Component, Fragment } from 'react'
import './onBoarding.css'
export class onBoarding extends Component {
    render() {
      
        return (
          <Fragment>
              <div className="onBoardingMain">
              <p>This page shows the services that have enabled onboarding powered by Service Tree.You can click on any tile you wish to begin the onboarding progrss for that service.Each of these services have configured a custom experience enabling them</p>
              <p>to capture important from you to help facilitate their obboarding process.At the end of each process you (and the support team for the desired service) will be sent a summary email providing the details as well as next steps.</p>
              <h2 className="heading">Select the client on which to onboard:</h2>
              <div className="onBoard"> 
                   <button className="onBoardLabel">Configure Onboarding</button>
                   <button className="onBoardLabel">FCM</button>
                   <button className="onBoardLabel">ACIS</button>
                   <button className="onBoardLabel">IcM</button>
                   <button className="onBoardLabel">Select Store</button>
                   <button className="onBoardLabel">Access Monitoring</button>
                   <button className="onBoardLabel">SHR</button>
                   <button className="onBoardLabel">ARM</button>
                   <button className="onBoardLabel">Tree Indexed Serach</button>
                   <button className="onBoardLabel">TSA</button>
                   <button className="onBoardLabel">GenevaBilling</button>
              </div>
              <p>If you are interested to make your onboarding seamless for your customers,here are more details.Contact Support to get Started</p>
              </div>
          </Fragment>
        )
    }
}

export default onBoarding
