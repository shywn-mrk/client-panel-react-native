import React, { Component, createContext, createFactory } from 'react'

const Context = createContext()

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_CLIENT':
            return {
                ...state
            }
        case 'REMOVE_CLIENT':
            return {
                ...state
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
        clients: [
            {
                id: '1',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevin@gamil.com',
                phone: '555-555-5555',
                balance: '30'
            },
            {
                id: '2',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevin@gamil.com',
                phone: '555-555-5555',
                balance: '30'
            },
            {
                id: '3',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevin@gamil.com',
                phone: '555-555-5555',
                balance: '30'
            },
            {
                id: '4',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevin@gamil.com',
                phone: '555-555-5555',
                balance: '30'
            },
            {
                id: '5',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevinkarimi@gamil.com',
                phone: '555-555-5555',
                balance: '30'
            },
            {
                id: '6',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevinkarimi@gamil.com',
                phone: '555-555-5555',
                balance: '30'
            },
            {
                id: '7',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevinkarimi@gamil.com',
                phone: '555-555-5555',
                balance: '30'
            },
            {
                id: '8',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevinkarimi@gamil.com',
                phone: '555-555-5555',
                balance: '30'
            },
            {
                id: '9',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevinkarimi@gamil.com',
                phone: '555-555-5555',
                balance: '30'
            },
            {
                id: '10',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevinkarimi@gamil.com',
                phone: '555-555-5555',
                balance: '30'
            },
            {
                id: '11',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevinkarimi@gamil.com',
                phone: '555-555-5555',
                balance: '30'
            },
            {
                id: '12',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevinkarimi@gamil.com',
                phone: '555-555-5555',
                balance: '30'
            },
            {
                id: '13',
                firstName: 'Kevin',
                lastName: 'Johnson',
                email: 'kevinkarimi@gamil.com',
                phone: '555-555-5555',
                balance: '30'
            }
        ],
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