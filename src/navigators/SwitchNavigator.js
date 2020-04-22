// switching between auth pages and dashboard
import React from 'react'
import {
    Image,
    TouchableOpacity
} from 'react-native'

import { createStackNavigator} from '@react-navigation/stack'
import { DrawerActions } from '@react-navigation/native';

import DashboardDrawer from './DashboardDrawer'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

import DrawerIcon from '../assets/bars-solid.png'

import { Consumer } from '../../context'

const Stack = createStackNavigator()

export default SwtichNavigator = (props) => {
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
                                        options={({ navigation }) => ({
                                            title: '',
                                            headerLeft: () => <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}><Image source={DrawerIcon} style={{ marginLeft: 10, width:  30, height: 30, tintColor: 'white', resizeMode: 'contain' }} /></TouchableOpacity>
                                        })}
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