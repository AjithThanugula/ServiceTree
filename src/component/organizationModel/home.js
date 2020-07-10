import React,{Fragment} from 'react'

function home() {
    return ( 
        <Fragment>
           <div class="col-xs-12 col-md-8">
        <h1 className="bgColor">Welcome to Organizations</h1>
        <br/>
        <div class="welcome-text">
            Service Tree maintains a 3 level hierarchy (with an optional 4th level) defining how both engineering and non-engineering organizations operate within Microsoft. <br></br>
        </div>
        <br></br>
        <div class="welcome-text">
            <div >The Org Hierarchy is defined as follows:</div>
            <div >
                <ul>
                    <li className="orgli" ><span className="orgspan"> Division</span> (The Executive Organizations of Microsoft, defined by the direct reports to the CEO – L2 of Headtrax Hierarchy)</li>
                    <li className="orgli" ><span className="orgspan">  Organization</span> (The high level product or service areas that make up each Division, usually defined by the direct reports to each EVP – L3 of Headtrax Hierarchy)</li>
                    <li className="orgli" ><span className="orgspan">  Service Group</span> (Engineering groups responsible for several related services within a product area. For non-engineering teams, this can be thought of simply as the teams underneath leaders at the L4 level of the Headtrax Hierarchy)</li>
                    <li className="orgli" ><span className="orgspan">  Team Group</span> (OPTIONAL – grouping of related services/projects that may share a code base and/or employees and which make sense to combine together for reporting and billing purposes)</li>
                </ul>
            </div>
        </div>
       <br></br>
        <h2>Examples</h2>
        <table>
            <tbody>
                <tr>
                    <td><b>Division(Level 1)</b></td>
                    <td><b>C+E</b></td>
                    <td><b>OPG</b></td>
                    <td><b>WDG</b></td>
                </tr>
                <tr>
                    <td><b>Organization(Level 2)</b></td>
                    <td>Azure</td>
                    <td>Information Protection</td>
                    <td>Universal Store</td>
                </tr>
                <tr>
                    <td><b>Service Group (Level 3)</b></td>
                    <td>Compute</td>
                    <td>Exchange Online Protection</td>
                    <td>Storefronts</td>
                </tr>
        </tbody></table>
      <br></br>
        <div class="welcome-text">
            If there are incorrect or missing nodes in the hierarchy, please send feedback to the {" "}
            <a href="mailto:servicetreesupport@microsoft.com" target="_top">Service Tree Team</a>.
        </div>
    </div>
   
         
          </Fragment>
    )
}

export default home
