// switching between auth pages and dashboard
import React, { useState } from 'react'

import { createStackNavigator} from '@react-navigation/stack'

import DashboardDrawer from './DashboardDrawer'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

import { Consumer } from '../../context'

const Stack = createStackNavigator()

export default SwtichNavigator = () => {
    return (
        <Consumer>
            {
                value => {
                    const { isLoggedin } = value
                    return (
                        <Stack.Navigator
                            screenOptions={{
                                title: 'Client Panel',
                                headerStyle: {
                                    backgroundColor: '#007bff',
                                },
                                headerTintColor: 'white',
                                headerTitleStyle: {
                                    fontWeight: 'bold',
                                },
                            }}
                        >
                            {
                                isLoggedin ?
                                <>
                                    <Stack.Screen
                                        name="Dashboard"
                                        component={DashboardDrawer} 
                                        options={{
                                            header: () => null
                                        }}
                                    />
                                </>
                                :
                                <>
                                    <Stack.Screen name='Login' component={LoginScreen} options={{loginPressHandler: () => loginHandler()}} />
                                    <Stack.Screen name='Register' component={RegisterScreen} />
                                </>
                            }
                        </Stack.Navigator>
                    )
                }
            }
        </Consumer>
    )
}