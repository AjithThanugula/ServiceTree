import React, { Component, Fragment } from "react";
import "./hierarchy.css";
import { withRouter } from "react-router-dom";
export class HierarchyView extends Component {
  constructor(props) {
    super(props);
  }

  hasChildren(member) {
    return member.Children.length === 0 ? false : true;
  }

  display = (e) => {
    debugger;
    this.props.history.push("/Service/Profile/" + e.ServiceGroupId, {
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
            <Fragment>
              {this.hasChildren(member) ? (
                <li className="hierarchyli">
                  <span
                    className="caret"
                    onClick={() => this.expand(member.Name)}
                  >
                    <label className="hirarchylabel" onClick={() => this.display(member)}>
                      {member.Name}
                    </label>
                  </span>
                  <ul className="nested">
                    <HierarchyView members={member.Children} history={this.props.history}></HierarchyView>
                  </ul>
                </li>
              ) : (
                <li className="hierarchyli">
                  <label  className="hirarchylabel" onClick={() => this.display(member)}>
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
