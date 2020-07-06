import React  from 'react'
import {Link} from 'react-router-dom'
import './modal.css'
export class Modal extends React.Component {
  
      render() {
        const overflow = this.props.overflowVisible ? 'overflow-visible' : '';
        return (
          <div className={`Modal ${this.props.className || ''} ${overflow}`}>
            <div className="Modal__window">
              {
                this.props.hideTitle ? null : 
                <div className="Modal__window__header">
                  <h3>{this.props.title}</h3>
                  {this.props.closeUrl && (
                    <Link
                      to={this.props.closeUrl}
                      className="Modal__close fa fa-spinner fa-spin"
                   > Close </Link>
                  )}
                  {this.props.handleCloseClick && (
                    <span
                      onClick={this.props.handleCloseClick}
                      className="Modal__close fa fa-spinner fa-spin"
                    />
                  )}
                </div>
              }
              <div className="Modal__window__content">{this.props.children}</div>
            </div>
          </div>
        );
      }
    }
    
export default Modal
