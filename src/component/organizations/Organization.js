import React, { Component } from "react";
import "./organization.css";
import Sidebar from "./sidebar/sidebar";
import NewService from "../createService/createService";
import {withRouter} from 'react-router-dom'
import {Link,Route} from 'react-router-dom'
import Modal from '../createService/modal'
export class Organization extends Component {
  render() {
    return (
      <div>
        <Sidebar />

        <div className="content">
       
          <h2>Organization Sidebar Example</h2>
          <p>
            This example use media queries to transform the sidebar to a top
            navigation bar when the screen size is 700px or less.
          </p>
          <p>
            We have also added a media query for screens that are 400px or less,
            which will vertically stack and center the navigation links.
          </p>
          <h3>Resize the browser window to see the effect.</h3>
          {/* <Link  to={`${this.props.match.url}/NewService`}>New Service</Link> */}
          <Route  path={`${this.props.match.url}/NewService`}  
           render={() => (
            <Modal
              className="CheckInStudentModal"
              title="Check-In Student"
              closeUrl={this.props.match.url}
            >
             <NewService></NewService>
            </Modal>
          )}
          />
        
        </div>
      </div>
    );
  }
}

export default Organization;
