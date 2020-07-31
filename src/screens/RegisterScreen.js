import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import TextInputGroup from '../components/layout/TextInputGroup'
import Button from '../components/layout/Button'
import ScreenLogo from '../components/layout/ScreenLogo'

import RegisterIcon from '../assets/user-plus-solid.png'
import LockIcon from '../assets/lock-solid.png'

import { useAuthDispatch } from '../context/AuthContext'

const RegisterScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const registerationHandler = () => {
    const user = {
      "username": username,
      "password": password
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('http://10.0.2.2:8000/api/accounts/signup/', options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        AsyncStorage.setItem('token', data.token)

        const dispatch = useAuthDispatch()

        dispatch({ type: 'Auth' })
      })
  }

  return (
    <View style={styles.container}>
      <ScreenLogo image={LockIcon} title="Register" />
      <TextInputGroup
        label="Username"
        placeholder="Enter Your Username ..."
        onChange={setUsername}
        secure={false}
      />
      <TextInputGroup
        label="Password"
        placeholder="Enter Your Password ..."
        onChange={setPassword}
        secure={true}
      />
      <View style={{ width: '25%', margin: 20 }}>
        <Button
          handler={registerationHandler}
          value="Register"
          color='#007bff'
          imageTintColor="white"
          image={RegisterIcon}
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

export default RegisterScreen