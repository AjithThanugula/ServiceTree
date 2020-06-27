import React, { Component } from 'react'
import './subscriptionRegistration.css'
export class subscriptionRegistration extends Component {
    render() {
        return (
            <div className="subRegistration">
                <h2>Subscription Registration </h2>
                <div className="innersubRegistration">
                <h3>SUBSCRIPTION PURPOSE</h3>
                <input type="radio" id="dev" name="dev" value="dev"/>
                   <label for="dev">For development,hosting,monitoring or testing a service</label><br></br> <br></br>
                   <input type="radio" name="reason" value=""/>Other <input className="otherTxtbox" type="text" name="other_reason" placeholder="Please Specify" />
                   <br>
                   </br>
                   <h3>SERVICE NAME</h3>
                   <input type="text" name="search" placeholder="Search.."></input>
                   <h3>ENVIRONMENT</h3>
                   <input type="radio" id="prod" name="prod" value="prod"/>
                   <label for="prod">Production</label><br></br>  <br></br>
                   <input type="radio" id="nonprod" name="nonprod" value="nonprod"/>
                   <label for="nonprod">Non-Production(eg: test,ppe,dev,stage,etc)</label><br></br> 
                   <br>
                   </br>
                   <h3>SUBSCRIPTION HOSTED ON BEHALF OF CUSTOMERS</h3>
                   <input type="radio" id="yes" name="yes" value="yes"/>
                   <label for="yes">YES</label><br></br>  <br></br>
                   <input type="radio" id="no" name="no" value="no"/>
                   <label for="no">NO</label><br></br><br></br>
                   <button className="srbutton">Next</button>
                   </div>
            </div>
        )
    }
}

export default subscriptionRegistration
