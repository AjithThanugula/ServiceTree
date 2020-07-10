import React, { Component } from 'react'
import Sidebar from './sidebar/sidebar'
import './metaDefinition.css'
export class metadataDefinition extends Component {
    render() {
        return (
            <div> 
            <Sidebar />
            <div className="metaDefinition">
           

                <h2>METADATA DEFINITION</h2>
                <p>
                    Welcome to Metadata Definition Editor.This feature enables authorized users <br></br>
                    to create/edit/retire Metadata Definitions (MDefs).Mdefs are an <br></br>
                    importnat part of the Service Tree master data system.They allow the extension <br></br>
                    of Service Tree entity schema to enable creation of strong types.
                </p>
                </div>
            </div>
        )
    }
}

export default metadataDefinition
