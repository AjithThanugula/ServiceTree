import React, { Fragment } from 'react'
import { getFeaturesData } from "../../../api/ajaxCalls/_base";
function hierarchy(props) {

    const HeadingUL = {
        margin: "10px 0px 0px 22px",
        padding: "10px 0px 0px 0px"
    };
    
    const e = props.OfferingData;
    const features = getFeaturesData();
    let spanClassName = "caret";
    return (
        <Fragment>

            <li style={HeadingUL}>  <span
                className="caret" onClick={() => props.expand(e.Name.length > 25 ? "Of" + e.Name.substring(0, 25) + "..." : "Of" + e.Name)}><span className="icon">Of</span><span className="textHeading" onClick={() => props.FetchProfileData(e.Id,"Offering")}>{e.Name.length > 25 ? e.Name.substring(0, 25) + "..." : e.Name}</span></span>
                <ul className="myUL nested">
                    {
                        props.productSKU.map(
                            (k, l) => {
                                if (k.OfferingId === e.Id) {
                                    spanClassName = features.find(o => o.ProductSkuIds[0] === k.Id) ? "caret" : null;
                                    return <li key={l} style={HeadingUL}>  <span
                                        className={spanClassName} onClick={() => props.expand(k.Name.length > 25 ? "Sku" + k.Name.substring(0, 25) + "..." : "Sku" + k.Name)}><span className="icon">Sku</span><span className="textHeading" onClick={() => props.FetchProfileData(k.Id,"ProductSku")}>{k.Name.length > 25 ? k.Name.substring(0, 25) + "..." : k.Name}</span></span>
                                        <ul className="myUL nested">
                                            {
                                                features.map(
                                                    ((ft,w) => {
                                                        if (ft.ProductSkuIds[0] === k.Id)
                                                            return <li key={w} style={HeadingUL}><span className="icon">Ft</span> {ft.Value} </li>
                                                    })
                                                )}
                                        </ul>
                                    </li>
                                }

                            }
                        )

                    }
                </ul>
            </li>
        </Fragment>
    )
}

export default hierarchy
