import React from 'react'

import ContextProvider from './src/context/ContextProvider'

import { NavigationContainer } from '@react-navigation/native'
import SwitchNavigator from './src/navigators/SwitchNavigator'

const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <SwitchNavigator />
      </NavigationContainer>
    </ContextProvider>
  )
}

export default App