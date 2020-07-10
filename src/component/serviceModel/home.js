import React, { Fragment } from 'react'

function Home() {
    return (
       <Fragment>
       <div className="Home">
        <h1 className="bgColor">Welcome To Service Tree</h1><br />

        <h5>Find Your Existing Service</h5>
        <p>Service tree offers two main ways to find exesting Services <br />1) Browse and <br /> 2)Search</p>
      

        <p>To browse use the Organisation filters (Division,organization and [optionally] service group) to
            <br />filter down the list of services yiu are browsing. All services listed in thatorganization will appear.</p>
        <p>To search, use the search box (topright) and type in 3 characters (or more) to find the available servies.</p>
      

        <h5 className="bgColor">Add a new Service</h5>
        <p>If you do not find the service you are looking for, you can click on the <a href="#">Create a new Service</a>
            <br />menu. It will walk you through the experience of creating a new service.</p>
    </div>
          <h3 className="caution">
            Create new Service is yet to be implemented
          </h3>
         
          </Fragment>
    )
}

export default Home
