import React, { Fragment } from 'react'
import { getFeaturesData } from "../../../api/ajaxCalls/_base";

function hierarchy(props) {



    const e = props.offeringData;
    const features = getFeaturesData();
    let spanClassName = "caret";
    return (
        <Fragment>

            <li className="HeadingUL">  <span
                className="caret" onClick={() => props.expand(e.Name.length > 25 ? "Of" + e.Name.substring(0, 25) + "..." : "Of" + e.Name)}><span className="icon">Of</span><span className="textHeading" onClick={() => props.FetchProfileData(e.Id, "Offering")}>{e.Name.length > 25 ? e.Name.substring(0, 25) + "..." : e.Name}</span></span>
                <ul className="myUL nested">
                    {
                        props.productSKU.map(
                            (sku, l) => {
                                if (sku.OfferingId === e.Id) {
                                    spanClassName = features.find(o => o.ProductSkuIds[0] === sku.Id) ? "caret" : null;
                                    return <li key={l} className="HeadingUL">  <span
                                        className={spanClassName} onClick={() => props.expand(sku.Name.length > 25 ? "Sku" + sku.Name.substring(0, 25) + "..." : "Sku" + sku.Name)}><span className="icon">Sku</span><span className="textHeading" onClick={() => props.FetchProfileData(sku.Id, "ProductSku")}>{sku.Name.length > 25 ? sku.Name.substring(0, 25) + "..." : sku.Name}</span></span>
                                        <ul className="myUL nested">
                                            {
                                                features.map(
                                                    ((ft, w) => {
                                                        if (ft.ProductSkuIds[0] === sku.Id)
                                                            return <li key={w} className="HeadingUL"><span className="icon">Ft</span> {ft.Value} </li>
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
