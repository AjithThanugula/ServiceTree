import React,{Fragment} from 'react'

function home() {
    return (
        <Fragment>
             <h2>Welcome to Organizations</h2>
     <p>
         <b>Service Tree maintains 3 level hierarchy(with an optional 4th leel) defining how both engineering<br></br>
         and non-engineering organizations operate within Microsoft.</b>

     </p>
     <br></br>
     <br></br>
     <p>
         <b>The Org Hierrarchy is defined as follows.</b><br></br>
         </p>
         <ul>
             <li>Division(The Executive Organizations of Microsoft defined by the defined reports to the CEO-L2 of <br></br>
             Headtrax(Hierarchy) </li>
             <br>
             </br>
             <li>Organization(The high Level product or service areas that makes up each Division,usually defined by <br></br>
             the direct reports to each EVP-L3 of Headtrax Hierarchy)</li>
             <br>
             </br>
             <li>Service Group (Engineering groups reponsible for several related services within a product area.<br></br>
             For non-engineering teams, this can be thought of simply as the teams underneath leaders at the<br></br>
             L4 level of the Headtrax Hierarchy)</li>
         </ul>  
   
         
          </Fragment>
    )
}

export default home
