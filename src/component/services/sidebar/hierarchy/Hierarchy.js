import React, { Component, Fragment } from "react";

export class HierarchyView extends Component {
  constructor(props) {
    super(props);
  }

  hasChildren(member) {
    return member.Children.length === 0 ? false : true;
  }

  expand = (e) => {
    e.parentElement.querySelector(".nested").classList.toggle("active");
    e.classList.toggle("caret-down");
  };

  render() {
    let data = this.props.members;
    return (
      <Fragment>
        {data.map((member, i) => {
          console.log("i value" + i);
          return (
            <Fragment>
              {this.hasChildren(member) ? (
                <li>
                  <span className="caret" onClick={this.expand}>
                    {member.Name}
                  </span>
                  <ul className="nested">
                    <HierarchyView members={member.Children}></HierarchyView>
                  </ul>
                </li>
              ) : (
                <li>{member.Name}</li>
              )}
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}

export default HierarchyView;
