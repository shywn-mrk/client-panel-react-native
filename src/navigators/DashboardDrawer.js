import React from 'react'

import DashboardIcon from '../assets/columns-solid.png'
import SettingsIcon from '../assets/cogs-solid.png'
import AboutIcon from '../assets/address-card-solid.png'
import LogoutIcon from '../assets/sign-out-alt-solid.png'

import ClientManagerStack from './ClientManagerStack'
import AboutScreen from '../screens/AboutScreen'
import SettingsScreen from '../screens/SettingsScreen'
import LogoutScreen from '../screens/LogoutScreen'
import DrawerIcon from '../components/layout/DrawerIcon'

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
          drawerIcon: ({ focused, size }) => (
            <DrawerIcon
              icon={DashboardIcon}
              focused={focused}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <DrawerIcon
              icon={SettingsIcon}
              focused={focused}
              size={size}
            />
          ),
          headerTite: 'Settings'
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <DrawerIcon
              icon={AboutIcon}
              focused={focused}
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <DrawerIcon
              icon={LogoutIcon}
              focused={focused}
              size={size}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}