import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator
} from 'react-native'

import Client from './Client'
import ClientsTableHeader from '../layout/ClientsTableHeader'
import Button from '../layout/Button'

import AddImage from '../../assets/plus-circle-solid.png'

const Clients = (props) => {
  const [clients, setClients] = useState([])
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    const getClients = async () => {
      const token = await AsyncStorage.getItem('token')

      if (token !== null) {
        const options = {
          headers: {
            'Authorization': `Token ${token}`
          }
        }
  
        fetch('http://10.0.2.2:8000/api/clients/', options)
          .then(response => response.json())
          .then(data => {
            setIsloading(false)
            setClients(data)
          })
          .catch(error => console.log(error))
      }
    }

    getClients()
  }, [])

  const newClientNavigationHandler = () => {
    props.navigation.navigate('New')
  }

  const clientRenderFunction = ({ item }) => {
    return (
      <Client client={item} navigation={props.navigation} />
    )
  }

  return (
    <View style={styles.container}>
      <View style={{ width: 80 }}>
        <Button
          handler={newClientNavigationHandler}
          value="New"
          image={AddImage}
          imageTintColor='white'
          color="#28a745"
        />
      </View>
      {
        clients.length != 0 ? (
          <>
            <ClientsTableHeader />
            <FlatList
              style={{ width: '100%' }}
              contentContainerStyle={{ alignItems: 'center' }}
              data={clients}
              renderItem={clientRenderFunction}
              initialNumToRender={7}
              keyExtractor={item => item.id.toString()}
            />
          </>
        ) : isLoading ? (
          <ActivityIndicator size='large' color="blue" />
        ) : (
          <>
            <Text style={styles.text}>
              No Client Found!
            </Text>
            <Text style={styles.text}>
              Add New Clients To See Their Information.
            </Text>
          </>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center'
  }
})

export default Clients