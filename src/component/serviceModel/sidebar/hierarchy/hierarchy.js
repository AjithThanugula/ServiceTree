import React, { Component, Fragment } from "react";
import "./hierarchy.css";
import { withRouter } from "react-router-dom";
export class HierarchyView extends Component {


  hasChildren(member) {
    return member.Children.length === 0 ? false : true;
  }

  display = (e,ref) => {
//debugger;
let element = document.getElementsByClassName("hierarchyli active")[0];
if(element)
element.classList.remove("active");
ref.target.parentElement.classList.add("active");
    this.props.history.push("/ServiceModel/Profile/" + e.ServiceGroupId, {
      member: e,
    });
  };

  expand = (e) => {
    let toggler = document.getElementsByClassName("caret");

    for (let i = 0; i < toggler.length; i++) {
      if (toggler[i].innerText === e) {
        toggler[i].parentElement
          .querySelector(".nested")
          .classList.toggle("active1");
        toggler[i].classList.toggle("caret-down");
      }
    }
  };

  render() {
    let data = this.props.members;
    return (
      <Fragment>
        {data.map((member, i) => {
          return (
            <Fragment key={i}>
              {this.hasChildren(member) ? (
                <li className="hierarchyli" key={member.Name}>
                  <span
                    className="caret fa fa-caret-down"
                    onClick={() => this.expand(member.Name)}
                  >
                    <label className="hirarchylabel" onClick={(a) => this.display(member,a)}>

                      {member.Name}

                    </label>
                  </span>
                  <ul className="nested" >
                    <HierarchyView members={member.Children} history={this.props.history} ></HierarchyView>
                  </ul>
                </li>
              ) : (
                  <li className="hierarchyli" key={member.Name}>
                    <label className="hirarchylabel" onClick={(a) => this.display(member,a)}>

                      {member.Name}


                    </label>
                  </li>
                )}
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}

export default withRouter(HierarchyView);
