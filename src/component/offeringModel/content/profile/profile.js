import React, { Component, Fragment } from "react";
import Content from "../content";
import { withRouter } from "react-router-dom";
import { getOfferingsData, getProductSKUData } from "../../../../api/ajaxCalls/_base";
import "./profile.css";
export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileData: [],
      tab:""
    };
  }
  static getDerivedStateFromProps(props, state) {
  
    let id = props.match.params.id;
    let data =[];
    if(props.tab==="Offering")
    data=getOfferingsData();
     else
     data=getProductSKUData();
    let pData = data.filter((serGroup) => serGroup.Id === id);
//TODO implement the same for feature,Division
    return { profileData: pData ,tab: props.location.state.tab};
  }
  

  render() {
    
    return (
     
       <Fragment>
       
    
       {this.state.profileData.map((key,i)=>(
         <Fragment key={i}>
            <Content id={key.Name} tab={this.state.tab} ></Content>

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
            <form >
            <label htmlFor="fname">Name</label>
            <input type="text" id="fname" name="name" value={key.Name}/>
            {this.state.tab==="Offering"?
            <Fragment>
            <label htmlFor="sname">Organization</label>
            <input type="text" id="sname" name="sname" defaultValue={key.Name} />
            <label htmlFor="org">Offering Categories</label>
            <input type="text" id="org" name="org" defaultValue={key.Category}/>
            <label htmlFor="AA">Venue</label>
            <input type="text" id="AA" name="AA"  defaultValue={key.Venue}/>
            <label htmlFor="DOA">Description</label>
            <input type="text" id="DOA" name="DOA" defaultValue={key.Description} />
            <label htmlFor="POA">Tags</label>
            <input type="text" id="POA" name="POA" defaultValue={key.Tags} />
            <input type="submit" defaultValue="Edit"></input></Fragment>
            :
            <Fragment>
            <label htmlFor="fname">Organization</label>
            <input type="text" id="fname" name="name" value={key.OrganizationId}/>
            </Fragment>
            }
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
