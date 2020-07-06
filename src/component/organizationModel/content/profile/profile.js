import React, { Component, Fragment } from "react";
import Content from "../content";
import { withRouter } from "react-router-dom";
import { getOrganizationData, getServiceGroupData } from "../../../../api/ajaxCalls1/_base";
import "./profile.css";
export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organization: [], 
      tab: "",
    };
  }
  static getDerivedStateFromProps(props, state) {
debugger;
    let id = props.match.params.id;
    let data = [];
    let organizationData = [];
    if (props.tab === "Organization") {
      data = getOrganizationData();
      organizationData = data.filter((orgData) => orgData.Id === id);
    }
    else {
      data = getServiceGroupData();
      organizationData = data.filter((orgData) => orgData.Id === id);
    }
    return { organization: organizationData, tab: props.location.state.tab };
  }


  render() {

    return (

      <Fragment>


        {this.state.organization.map((key, i) => (
          <Fragment key={i}>
            <Content id={key.Name} tab={this.state.tab} ></Content>

            <h2>{this.state.tab}</h2>
            <h2><b>Product Area Profile</b></h2>
            <p>Divisions are Generally divided in to one or more product areas.Organizational Units within a Division that do not<br></br>
produce Infrastructure,System or services are Generally not included in the hierarchy.<br></br>
Please Contact ServiceTree for questions or recommendations.</p>
            <div className="display">

              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={key.Name} />
              <label htmlFor="DOA">Business Owner</label>
              <input type="text" id="DOA" name="DOA" defaultValue="v-@microsoft.com" />

              <label htmlFor="DOA">Description</label>
              <input type="text" id="DOA" name="DOA" value={key.Description} />
              <label htmlFor="POA">Tags</label>
              <input type="text" id="POA" name="POA" value={key.Tags} />
              <input type="submit" defaultValue="Edit"></input>

            </div>
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
          </Fragment>
        ))}

      </Fragment>



    );
  }
}

export default withRouter(Profile);
