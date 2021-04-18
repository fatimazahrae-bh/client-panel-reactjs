import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../context';

import './Contact.css'


class Contact extends Component {

    // showContact(myMessage) {
    //     console.log('bien', myMessage);
    // }

    state = {
        showContactToggle: true
    }
    
    showContact() {
        this.setState({
            showContactToggle: !this.state.showContactToggle
        });
    }

    onDeleteClick = (id, dispatch) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
        
    }

    render() {
        const { id, name, phone, email } = this.props.data;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return ( 
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            { name } <i onClick={ this.showContact.bind(this, name) } 
                             className="fa fa-sort-down" style={{ cursor: 'pointer' }}></i>
                            
                            <i style={{color: 'red', float: 'right', cursor: 'pointer'}} className="fa fa-times" aria-hidden="true"
                            onClick={this.onDeleteClick.bind(this, id, dispatch)}
                            ></i>  
                            </h4>
                        <p className="card-text">
                            {(this.state.showContactToggle) ? (
                                <ul className="list-group">
                                  <li className="list-group-item">{ phone }</li>
                                  <li className="list-group-item">{ email }</li>
                                </ul>
                            ) : null}
                            
                        </p>
                    </div>
                </div>
                )
                   
          }}
            </Consumer>

            // <div>
            //    <h3>contacts: { this.props.name }</h3>
            //    <ul>
            //        <li>Tel: { this.props.tel } </li>
            //        <li>email: { this.props.email }</li>
                   
            //     </ul>   
            // </div>
        )
    }
}

Contact.defaultProps = {
    name: "My name",
    phone: "0000",
    email: "my@gmail.com"
}

Contact.propTypes = {
    data: PropTypes.object.isRequired,
    
    
}
export default Contact;