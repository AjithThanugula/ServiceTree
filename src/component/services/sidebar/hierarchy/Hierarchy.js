import React, { Component, Fragment } from "react";
import './Hierarchy.css'
import {withRouter} from 'react-router-dom'
export class HierarchyView extends Component {
  constructor(props) {
    super(props);
  }

  hasChildren(member) {
    return member.Children.length === 0 ? false : true;
  }
 
  expand = (e) => {
  
 this.props.history.push('/Service/Profile/'+e.ServiceGroupId,{member:e})
  };

  render() {
    let data = this.props.members;
    return (
      <Fragment>
        {data.map((member, i) => {
          
          return (
            <Fragment>
              {this.hasChildren(member) ? (
                <li className="hierarchyli"  onClick={()=>this.expand(member)}>
                  <span className="caret" >
                    {member.Name}
                  </span>
                  <ul className="nested">
                    <HierarchyView members={member.Children}></HierarchyView>
                  </ul>
                </li>
              ) : (
                <li className="hierarchyli"  onClick={()=>this.expand(member)}>{member.Name}</li>
              )}
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}

export default withRouter(HierarchyView);
