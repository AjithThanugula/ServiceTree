import React, { Component, Fragment } from "react";
import Content from "../content";
import { withRouter } from "react-router-dom";
import { getServiceGroupData } from "../../../../api/ajaxCalls1/_base";
import "./profile.css";
export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offering: [],
      member: {},
    };
  }
  static getDerivedStateFromProps(props, state) {
   
    let id = props.match.params.id;
    let data = getServiceGroupData();
    let serviceGroupData = data.filter((serGroup) => serGroup.Id === id);

    return { offering: serviceGroupData, member: props.location.state.member };
  }

  render() {
    let data=this.state.member
    return (
      <Fragment>
        <Content member={this.state.member}></Content>

       
          <Fragment>
            <h2>Service Profile:</h2>
            <p>
              The Service is a top node in the service model.The Information on
              the page must be accurate and up to date.
            </p>
            <p>
              There are many other services and business processes that rely on
              the quality of this data.It is the responsibility of
            </p>
            <p>the service owners to keep the Information fresh</p>

            <div className="display">
              <form action="/action_page.php">
                <label htmlFor="fname">Name</label>
                <input type="text" id="fname" name="name" defaultValue={data.Name} />
                <label htmlFor="sname">Short Name</label>
                <input type="text" id="sname" name="sname" defaultValue={data.Name} />
                <label htmlFor="org">Organization</label>
                <input
                  type="text"
                  id="org"
                  name="org"
                  defaultValue={data.OrganizationPath}
                />
                <label htmlFor="AA">Admin Aliases</label>
                <input type="text" id="AA" name="AA" />
                <label htmlFor="DOA">Dev Owner Aliases</label>
                <input type="text" id="DOA" name="DOA" />
                <label htmlFor="POA">PM Owner Aliases</label>
                <input type="text" id="POA" name="POA" />
                <label htmlFor="des">Description</label>
                <input
                  type="text"
                  id="des"
                  name="des"
                  defaultValue={data.Description}
                />
                <input type="submit" defaultValue="Edit"></input>
              </form>
            </div>
            </Fragment>
           
            {this.state.offering.map((key,i) => (
            <div className="Info" key={i}>
              <p>
                Id: <br />
                {key.Id}
              </p>

              <p>
                Lifecycle: <br />
                Development
              </p>

              <p>
                Status: <br />
                {key.Status}
              </p>
              <p>
                Created: <br />
                {key.Created}
              </p>
              <p>
                Created By: <br />
                {key.CreatedBy}
              </p>
              <p>
                Modified: <br />
                {key.Modified}
              </p>
              <p>
                Modified By: <br />
                {key.ModifiedBy}
              </p>
            </div>
         
        ))}
      </Fragment>
    );
  }
}

export default withRouter(Profile);
