import React,{Fragment} from 'react'

function home() {
    return (
        <Fragment>
              <h2>Welcome to Service Tree</h2>
           <p>Find your existing service</p>
           <p>Service Tree offers 2 main ways to find existing services</p>
           <p> 1)Browse and</p>
           <p> 2)Search </p>
           <p>
             To Browse use the organization filters(Division ,Organization and
             [optionally] Service Group) to filter down the list of services you
             are browsing
           </p>
           <p>All the services listed in the organization will appear</p>
           <p>
             To Search use the Search Box(top right) and type in 3 or more
             characters to find the available services
           </p>
           <h3 className="caution">
             Create new Service is yet to be implemented
           </h3>
          
           </Fragment>
     )
}

export default home
