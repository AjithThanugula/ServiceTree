import React, { Fragment } from 'react'
import { getServiceGroupData } from "../../../../api/ajaxCalls/_base";
import './hierarchy.css'
function hierarchy(props) {
  
    const serviceGroupData = getServiceGroupData();
    let spanClassName = "caret fa fa-caret";
    return (
        <Fragment>


            { props.organization.map(
                (k, l) => {

                    spanClassName = serviceGroupData.find(o => o.OrganizationId === k.Id) ? "caret fa fa-caret" : null;
                  
                    return <li key={l} className={`${spanClassName === "caret fa fa-caret" ? "orgHeadingli_caret" : "orgHeadingli"}`} >  
                    <span className={spanClassName} onClick={() => props.expand(k.Name.length > 25 ? "Org" + k.Name.substring(0, 25) + "..." : "Org" + k.Name)}>
                            <span className="icon">Org</span><span className="textHeading" onClick={(ref) => props.FetchProfileData(k.Id, "Organization", ref)}>{k.Name.length > 25 ? k.Name.substring(0, 25) + "..." : k.Name}</span></span>
                        <ul className="myUL nested">
                            {
                                serviceGroupData.map(
                                    ((sg, w) => {

                                        if (sg.OrganizationId === k.Id)
                                            return <li key={w} className="orgHeadingli" >
                                                <span>
                                                <span className="icon">Sg</span>
                                                <span className="textHeading" onClick={(ref) => props.FetchProfileData(sg.Id, "ServiceGroup", ref)}>{sg.Name.length > 25 ? sg.Name.substring(0, 25) + "..." : sg.Name}</span>
                                                </span>
                                            </li>
                                        else return "";
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
