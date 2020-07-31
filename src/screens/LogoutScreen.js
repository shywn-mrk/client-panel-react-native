import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import Button from '../components/layout/Button'
import ScreenLogo from '../components/layout/ScreenLogo'

import LogoutIcon from '../assets/sign-out-alt-solid.png'
import LockIcon from '../assets/lock-solid.png'

import { useAuthDispatch } from '../context/AuthContext'

const LogoutScreen = () => {
  const dispatch = useAuthDispatch()

  const logoutHandler = () => {
    AsyncStorage.removeItem('token')
    
    dispatch({ type: 'AUTH' })
  }

  return (
    <View style={styles.container}>
      <ScreenLogo image={LockIcon} title="Logout" />

      <Text style={styles.text}>Are You Sure?</Text>

      <View style={{ width: '25%', margin: 20 }}>
        <Button
          handler={logoutHandler}
          value="Logout"
          color='#007bff'
          imageTintColor="white"
          image={LogoutIcon}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default LogoutScreen