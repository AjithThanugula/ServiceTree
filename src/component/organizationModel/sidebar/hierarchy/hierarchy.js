import React, { Fragment } from 'react'
import { getServiceGroupData } from "../../../../api/ajaxCalls1/_base";
function hierarchy(props) {

    const HeadingUL = {
        margin: "10px 0px 0px 22px",
        padding: "10px 0px 0px 0px"
    };

    const HeadingUL1 = {
        margin: "10px 0px 0px 0px",
        padding: "10px 0px 0px 0px"
    };

    let dispStyle = HeadingUL;
    const serviceGroupData = getServiceGroupData();
    let spanClassName = "caret";
    return (
        <Fragment>


            {props.organization.map(
                (k, l) => {

                    spanClassName = serviceGroupData.find(o => o.OrganizationId === k.Id) ? "caret" : null;
                    dispStyle = spanClassName === "caret" ? HeadingUL1 : HeadingUL;
                    return <li key={l} style={dispStyle}>  <span
                        className={spanClassName} onClick={() => props.expand(k.Name.length > 25 ? "Org" + k.Name.substring(0, 25) + "..." : "Org" + k.Name)}><span className="icon">Org</span><span className="textHeading" onClick={() => props.FetchProfileData(k.Id, "Organization")}>{k.Name.length > 25 ? k.Name.substring(0, 25) + "..." : k.Name}</span></span>
                        <ul className="myUL nested">
                            {
                                serviceGroupData.map(
                                    ((sg, w) => {
                                        if (sg.OrganizationId === k.Id)
                                            return <li key={w} style={HeadingUL} onClick={() => props.FetchProfileData(sg.Id, "ServiceGroup")} ><span className="icon">Sg</span> {sg.Name} </li>
                                    })
                                )}
                        </ul>
                    </li>


                }
            )}


        </Fragment>
    )
}

export default hierarchy
