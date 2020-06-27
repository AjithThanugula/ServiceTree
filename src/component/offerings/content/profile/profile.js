import React, { Component, Fragment } from "react";
import Content from "../content";
import { withRouter } from "react-router-dom";
import { getOfferingsData } from "../../../../api/ajaxCalls/_base";
import "./profile.css";
export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offering: [],
    };
  }
  static getDerivedStateFromProps(props, state) {
  
    let id = props.match.params.id;
    let data = getOfferingsData();
    let serviceGroupData = data.filter((serGroup) => serGroup.Id === id);

    return { offering: serviceGroupData };
  }
  

  render() {
    
    return (
     
       <Fragment>
       
    
       {this.state.offering.map(key=>(
         <Fragment>
            <Content id={key.Name} ></Content>

<h2>Offering</h2>
<p>
  Offerings are buldled Services
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
            <label for="sname">Organization</label>
            <input type="text" id="sname" name="sname" value={key.Name} />
            <label for="org">Offering Categories</label>
            <input type="text" id="org" name="org" value={key.Category}/>
            <label for="AA">Venue</label>
            <input type="text" id="AA" name="AA"  value={key.Venue}/>
            <label for="DOA">Description</label>
            <input type="text" id="DOA" name="DOA" value={key.Description} />
            <label for="POA">Tags</label>
            <input type="text" id="POA" name="POA" value={key.Tags} />
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
