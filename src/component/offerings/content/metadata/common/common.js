import React, { Fragment } from "react";
import "./common.css";
function common() {
  return (
    <Fragment>
      <p>
        View and edit cloud specific Metadata values for this location
      </p>
      <div className="div-common">
        <label className="label"><b>General Availability Date</b></label>
        <input type="text" className="commontext" />
        <br></br>
        <label className="label"><b>Impact Analysis Entity </b></label>
        <input type="text" className="commontext" />
        <br></br>
        <button className="button button2">Contact US</button>
        <button className="button">Learn More</button>
      </div>
    </Fragment>
  );
}

export default common;
