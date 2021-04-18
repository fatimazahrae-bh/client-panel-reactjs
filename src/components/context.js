import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
            case 'ADD_CONTACT':
            return {
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;    
    }
}

export class Provider extends Component {

    state = {
        contacts: [
            {id: 1, name: "salma changuiti", phone:"0654783563", email:"sal@gmail.com"},
            {id: 2, name: "amine bahadou", phone:"0654689324", email:"amine@gmail.com"},
            {id: 3, name: "badr bahadou", phone:"06545897764", email:"badr@gmail.com"}
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <div>
                <Context.Provider value = {this.state}>
                     {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

export const Consumer = Context.Consumer;