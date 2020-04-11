import React from 'react'
import {
    Image
} from 'react-native'

import DashboardIcon from '../assets/columns-solid.png'
import SettingsIcon from '../assets/cogs-solid.png'
import AboutIcon from '../assets/address-card-solid.png'

import ClientManagerStack from './ClientManagerStack'
import AboutScreen from '../screens/AboutScreen'
import SettingsScreen from '../screens/SettingsScreen'

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

export default DashboardStack = () => {
    return (
        <Drawer.Navigator 
        drawerType="front"
        drawerStyle={{
            backgroundColor: '#007bff',
            opacity: 0.9,
            width: '60%',
        }}
        drawerContentOptions={{
            activeTintColor: 'white',
            activeBackgroundColor: '#6c757d',
            inactiveTintColor: 'white'
        }}
        >
            <Drawer.Screen
                name="Clients"
                component={ClientManagerStack}
                options={{
                drawerIcon: ({focused, size}) => <Image source={DashboardIcon} style={{ width: focused ? 40 : size, height: focused ? 40 : size, tintColor: 'white', resizeMode: 'contain' }} />,
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                drawerIcon: ({focused, size}) => <Image source={SettingsIcon} style={{ width: focused ? 40 : size, height: focused ? 40 : size, tintColor: 'white', resizeMode: 'contain' }} />
                }}
            />
            <Drawer.Screen
                name="About"
                component={AboutScreen}
                options={{
                drawerIcon: ({focused, size}) => <Image source={AboutIcon} style={{ width: focused ? 40 : size, height: focused ? 40 : size, tintColor: 'white', resizeMode: 'contain' }} />
                }}
            />
        </Drawer.Navigator>
    )
}
