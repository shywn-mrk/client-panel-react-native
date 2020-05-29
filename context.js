import React, { Component, createContext } from 'react'

const Context = createContext()

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_CLIENT':
            return {
                ...state,
                clients: [...state.clients, action.payload]
            }
        case 'EDIT_CLIENT':
            return {
                ...state,
                clients: state.clients.map(client => 
                    client.id === action.payload.id ? (client = action.payload) : client
                )
            }
        case 'REMOVE_CLIENT':
            return {
                ...state,
                clients: state.clients.filter(client => client.id !== action.payload)
            }
        case 'LOGIN':
            return {
                ...state,
                isLoggedin: !state.isLoggedin
            }
        case 'LOGOUT':
            return {
                ...state,
                isLoggedin: !state.isLoggedin
            }
        default:
            return {
                ...state
            }
    }
}

export class Provider extends Component {
    state = {
        clients: [],
        isLoggedin: false,
        dispatch: action => {
            this.setState(prevState => reducer(prevState, action))
        }
    }

    render() { 
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
 
export const Consumer = Context.Consumer