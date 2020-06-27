import React, { Component, Fragment } from "react";
import Content from "../content";
import { withRouter } from "react-router-dom";
import { getServiceGroupData } from "../../../../api/ajaxCalls/_base";
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
    debugger;
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
                <label for="fname">Name</label>
                <input type="text" id="fname" name="name" value={data.Name} />
                <label for="sname">Short Name</label>
                <input type="text" id="sname" name="sname" value={data.Name} />
                <label for="org">Organization</label>
                <input
                  type="text"
                  id="org"
                  name="org"
                  value={data.OrganizationPath}
                />
                <label for="AA">Admin Aliases</label>
                <input type="text" id="AA" name="AA" />
                <label for="DOA">Dev Owner Aliases</label>
                <input type="text" id="DOA" name="DOA" />
                <label for="POA">PM Owner Aliases</label>
                <input type="text" id="POA" name="POA" />
                <label for="des">Description</label>
                <input
                  type="text"
                  id="des"
                  name="des"
                  value={data.Description}
                />
                <input type="submit" value="Edit"></input>
              </form>
            </div>
            </Fragment>
           
            {this.state.offering.map((key) => (
            <div className="Info">
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
