import React, { useState, useEffect } from 'react'
import {
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'

import SplashScreen from 'react-native-splash-screen'

import { createStackNavigator } from '@react-navigation/stack'
import { DrawerActions } from '@react-navigation/native';

import DashboardDrawer from './DashboardDrawer'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

import DrawerIcon from '../assets/bars-solid.png'

import { useAuthState, useAuthDispatch } from '../context/AuthContext'

const Stack = createStackNavigator()

export default SwtichNavigator = () => {
  const authState = useAuthState()
  const authDispatch = useAuthDispatch()
  
  useEffect(() => {
    const loader = async () => {
      const token = await AsyncStorage.getItem('token')

      if (token !== null) {
        authDispatch({ type: 'AUTH' })
      }
      
      SplashScreen.hide()
    }

    loader()
  }, [])

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
        authState.isLoggedin ?
          <>
            <Stack.Screen
              name="Dashboard"
              component={DashboardDrawer}
              options={({ navigation }) => ({
                title: '',
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => (
                      navigation.dispatch(DrawerActions.toggleDrawer())
                    )}
                  >
                    <Image
                      source={DrawerIcon}
                      style={{ 
                        marginLeft: 10,
                        width: 30,
                        height: 30,
                        tintColor: 'white',
                        resizeMode: 'contain' 
                      }}
                    />
                  </TouchableOpacity>
                )
              })}
            />
          </>
          :
          <>
            <Stack.Screen
              name='Login'
              component={LoginScreen}
            />
            <Stack.Screen
              name='Register'
              component={RegisterScreen}
            />
          </>
      }
    </Stack.Navigator>
  )
}