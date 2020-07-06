import React, { Component } from 'react'
import Content from "../content";
export class administrator extends Component {
    
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
            <div>
               <Content tab={this.state.tab}></Content> 
                  <h2><b>Administrator</b></h2>
             
              <p>This Page is used to View/Manage the administrators for the current object (as selected in the left navigation bar).<br></br>
              administrators have permissions to edit the existing object,including adding/removing other Admins <br></br>
              Please Contact Service Tree for questions and/or recommendations.</p>   
            </div>
        )
    }
}

export default administrator
