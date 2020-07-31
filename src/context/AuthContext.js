import React, { useState, useEffect, useContext, createContext, useReducer } from 'react'

const AuthStateContext = createContext()
const AuthDispatchContext = createContext()

const authReducer = (state, action) => {
  switch (action.type){
    case 'AUTH':
      return {
        isLoggedin: !state.isLoggedin
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    authReducer,
    {
      isLoggedin: false
    }
  )

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        { children }
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  )
}

const useAuthState = () => {
  const context = useContext(AuthStateContext)

  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider')
  }

  return context
}

const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext)

  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider')
  }
  
  return context
}

export { AuthProvider, useAuthState, useAuthDispatch }