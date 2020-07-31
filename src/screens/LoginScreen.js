import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import TextInputGroup from '../components/layout/TextInputGroup'
import Button from '../components/layout/Button'
import ScreenLogo from '../components/layout/ScreenLogo'


import LoginIcon from '../assets/sign-in-alt-solid.png'
import UserIcon from '../assets/user-plus-solid.png'
import LockIcon from '../assets/lock-solid.png'

import { useAuthDispatch } from '../context/AuthContext'

const LoginScreen = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAuthDispatch()

  const loginHandler = () => {
    const user = {
      username,
      password
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('http://10.0.2.2:8000/api/accounts/login/', options)
      .then(response => response.json())
      .then(data => {
        AsyncStorage.setItem('token', data.token)

        dispatch({ type: 'AUTH' })
      })
  }

  const registerHandler = () => {
    props.navigation.navigate('Register')
  }

  return (
    <View style={styles.container}>
      <ScreenLogo image={LockIcon} title="Login" />
      <TextInputGroup
        label="Username"
        placeholder="Enter Your Username ..."
        onChange={setUsername}
        value={username}
      />
      <TextInputGroup
        label="Password"
        placeholder="Enter Your Password ..."
        secure={true}
        onChange={setPassword}
        value={password}
      />
      <View style={{ width: '25%', margin: 20 }}>
        <Button
          handler={loginHandler}
          value="Login"
          color='#007bff'
          imageTintColor="white"
          image={LoginIcon}
        />
      </View>
      <View style={{ width: '25%' }}>
        <Button
          handler={registerHandler}
          value="Register"
          color='#007bff'
          imageTintColor="white"
          image={UserIcon}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})

export default LoginScreen