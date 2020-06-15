import React, { Component, Fragment } from "react";
import Content from "../Content";
import { withRouter } from "react-router-dom";
import { getServiceGroupData } from "../../../../api/AjaxCalls/_base";
import "./Profile.css";
export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offering: [],
    };
  }
  static getDerivedStateFromProps(props, state) {
   
    let id = props.match.params.id;
    let data = getServiceGroupData();
    let serviceGroupData = data.filter((serGroup) => serGroup.Id === id);

    return { offering: serviceGroupData };
  }
  

  render() {
   
    return (
     
       <Fragment>
       
    
       {this.state.offering.map(key=>(
         <Fragment>
            <Content id={key.Name} ></Content>

<h2>Service Profile:</h2>
<p>
  The Service is a top node in the service model.The Information on the
  page must be accurate and up to date.
</p>
<p>
  There are many other services and business processes that rely on the
  quality of this data.It is the responsibility of
</p>
<p>the service owners to keep the Information fresh</p>

             <div className="display">
            <form action="/action_page.php">
            <label for="fname">Name</label>
            <input type="text" id="fname" name="name" value={key.Name}/>
            <label for="sname">Short Name</label>
            <input type="text" id="sname" name="sname" value={key.Name} />
            <label for="org">Organization</label>
            <input type="text" id="org" name="org" value={key.OrganizationId}/>
            <label for="AA">Admin Aliases</label>
            <input type="text" id="AA" name="AA" />
            <label for="DOA">Dev Owner Aliases</label>
            <input type="text" id="DOA" name="DOA" />
            <label for="POA">PM Owner Aliases</label>
            <input type="text" id="POA" name="POA" />
            <label for="des">Description</label>
            <input type="text" id="des" name="des"  value={key.Description}/>
            <input type="submit" value="Edit"></input>
            </form>
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
