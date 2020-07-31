import React from 'react'

import ClientsScreen from '../screens/ClientsScreen'
import ClientDetailsScreen from '../screens/ClientDetailsScreen'
import NewClientScreen from '../screens/NewClientScreen'
import EditClientScreen from '../screens/EditClientScreen'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default ClientManagerStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        header: () => null,
      }}
    >
      <Stack.Screen
        name="Clients"
        component={ClientsScreen}
      />
      <Stack.Screen
        name="Details"
        component={ClientDetailsScreen}
        options={{
          title: 'Details'
        }}
      />
      <Stack.Screen
        name="New"
        component={NewClientScreen}
        options={{
          title: 'New Client'
        }}
      />
      <Stack.Screen
        name="Edit"
        component={EditClientScreen}
        options={{
          title: 'Edit Client'
        }}
      />
    </Stack.Navigator>
  )
}