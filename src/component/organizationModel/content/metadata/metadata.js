import React, { Component, Fragment } from 'react'
import Content from "../content";
export class metadata extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          id: "",
          tab:"", 
          // data: this.getData(),
          // member: {},
        };
      }

    static getDerivedStateFromProps(props, state) {
        let id = props.match.params.id;
    
        return { id: id, tab:props.location.state.tab };
      }
    render() {
        return (
           <Fragment>
                 <Content tab={this.state.tab}></Content>  
                <h2><b>Metadata</b></h2>
           <p>Service Tree provides a rich platform management.This includes support for metadata to be applied to <br></br>
           nodes in the organization hierarchy.If there is additional metadata you would like to add to Organization nodes.<br></br>
           please reach out to Service Tree.</p>
           <br>
           </br>
           <br></br>
           <input type="text" name="search" placeholder="Search.."/>
           <h2><b>Metadata Values</b></h2>
           <div className="div-common">
        <label className="label"><b>Business Owners</b></label>
        <input type="text" className="commontext" />
        <br></br>
        <label className="label"><b>MDS Policy </b></label>
        <input type="text" className="commontext" />
        <br></br>
        <label className="label"><b>Business Owners</b></label>
        <input type="text" className="commontext" />
        <br></br>
        <label className="label"><b>Azure Subscription Policy</b></label>
        <input type="text" className="commontext" />
        <br></br>
        <label className="label"><b>TFS Project Base URL</b></label>
        <input type="text" className="commontext" />
        <br></br>
        <label className="label"><b>Finance Hierarchy</b></label>
        <input type="text" className="commontext" />
        <br></br>
        <label className="label"><b>Azure Subscription Cost Categories</b></label>
        <input type="text" className="commontext" />
        <br></br>
        <label className="label"><b>Azure Subscription Profit Centers</b></label>
        <input type="text" className="commontext" />
        <br></br>
        <label className="label"><b>Azure Subscription Finance Managers</b></label>
        <input type="text" className="commontext" />
        <br></br>
        <button className="button button2">Contact US</button>
        <button className="button">Learn More</button>
      </div>
           </Fragment>
        )
    }
}

export default metadata
