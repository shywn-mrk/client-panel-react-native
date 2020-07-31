import React, { useState } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import TextInputGroup from '../components/layout/TextInputGroup'
import Button from '../components/layout/Button'
import ScreenLogo from '../components/layout/ScreenLogo'

import NewUserIcon from '../assets/user-plus-solid.png'

const AddClientScreen = (props) => {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [balance, setBalance] = useState('')

  const onSubmitHandler = async () => {
    const floatBalance = parseFloat(balance)

    const newClient = {
      first_name,
      last_name,
      email,
      phone,
      balance: floatBalance
    }

    console.log(newClient, typeof(newClient.balance))

    const token = await AsyncStorage.getItem('token')

    const options = {
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newClient)
    }

    fetch('http://10.0.2.2:8000/api/clients/', options)
      .then(response => response.json)
      .then(data => {
        console.log(data)
        props.navigation.navigate('Clients')
      })
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <ScreenLogo image={NewUserIcon} title="New Client" />
        <TextInputGroup
          label="First Name"
          placeholder="Enter Client First Name ..."
          value={first_name}
          onChange={setFirstName}
          secure={false}
        />
        <TextInputGroup
          label="Last Name"
          placeholder="Enter Client Last Name ..."
          value={last_name}
          onChange={setLastName}
          secure={false}
        />
        <TextInputGroup
          label="Email"
          placeholder="Enter Client Email ..."
          value={email}
          onChange={setEmail}
          secure={false}
        />
        <TextInputGroup
          label="Phone"
          placeholder="Enter Client Phone ..."
          value={phone}
          onChange={setPhone}
          secure={false}
        />
        <TextInputGroup
          label="Balance"
          placeholder="Enter Client Balance ..."
          value={balance}
          onChange={setBalance}
          secure={false}
        />
        <View style={{ width: '25%', margin: 20 }}>
          <Button
            handler={onSubmitHandler}
            value="Submit"
            color='#007bff'
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})

export default AddClientScreen