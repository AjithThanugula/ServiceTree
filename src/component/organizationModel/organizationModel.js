import React from 'react'
import { Route } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import NewService from "../createService/createService";
//import Organization from './organization/organization'
import Modal from '../createService/modal'
import Home from './home'
import Profile from './content/profile/profile'
import History from './content/history/history' 
import Metadata from './content/metadata/metadata'
import Administrator from './content/administrator/administrator'
import Service from './content/service/service'
import Stepper from '../createService/stepper/stepper'
import './organizationModel.css'
function organizationModel(props) {
  const absolutePath="/OrganizationModel/"
    return (
        <div>
        <Sidebar />

        <div className="content">

          <Route path={absolutePath+`NewService`}
            render={() => (
              // <Modal
              //   className="NewService"
              //   title="Create New Service"
              //   closeUrl={props.match.url}
              // >
              //   <NewService></NewService>
              // </Modal>
              <Stepper></Stepper>
           )}
          />
           <Route  path={absolutePath+"Organization/Profile/:id"} render={() => <Profile tab="Organization" />} />
      <Route exact path={absolutePath+"Organization/History/:id"}component={History} />
      <Route path={absolutePath+"Organization/Administrator/:id"} render={() => <Administrator {...props} />}/>
      <Route path={absolutePath+"Organization/Metadata/:id"}component={Metadata} />

      <Route exact  path={absolutePath+"ServiceGroup/Profile/:id"} render={() => <Profile tab="ServiceGroup" />}  />
      <Route  path={absolutePath+"ServiceGroup/History/:id"} component={History} />
      <Route path={absolutePath+"ServiceGroup/Administrator/:id"} render={() => <Administrator {...props} />}/>
      <Route path={absolutePath+"ServiceGroup/Metadata/:id"}component={Metadata} />
      <Route path={absolutePath+"ServiceGroup/Service/:id"}component={Service} />


      <Route  path={absolutePath+"Division/Profile/:id"} render={() => <Profile tab="Division" />}  />
      <Route exact path={absolutePath+"Division/History/:id"}component={History} />
      <Route path={absolutePath+"Division/Administrator/:id"} render={() => <Administrator {...this.props} />}/>
      <Route path={absolutePath+"Division/Metadata/:id"}component={Metadata} />
            <Route
            exact
              path="/OrganizationModel"
              render={() => {
                return <Home {...props}></Home>;
              }}
            />

        </div>
      </div>
      
    )
}

export default organizationModel
