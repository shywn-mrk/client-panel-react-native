import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Button from '../layout/Button'

import ArrowImage from '../../assets/arrow-circle-right-solid.png'

const Client = (props) => {
  const { first_name, last_name, email, balance } = props.client

  const detailsNavigationHandler = () => {
    props.navigation.navigate('Details', { client: props.client })
  }

  return (
    <View style={styles.container}>
      <View style={[styles.dataView, { flex: 1 }]}>
        <Text style={styles.dataText}>
          {first_name} {last_name}
        </Text>
      </View>
      <View style={[styles.dataView, { flex: 3 }]}>
        <Text style={styles.dataText}>
          {email}
        </Text>
      </View>
      <View style={[styles.dataView, { flex: 1 }]}>
        <Text style={styles.dataText}>
          ${parseFloat(balance).toFixed(2)}
        </Text>
      </View>
      <View style={[styles.dataView, { flex: 1.2 }]}>
        <Button
          handler={detailsNavigationHandler}
          value='Details'
          imageTintColor='white'
          color="#6c757d"
          image={ArrowImage}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#007bff',
    width: '95%',
    justifyContent: 'center',
    borderBottomWidth: 2,
    padding: 10,
    borderColor: 'grey'
  },
  dataView: {
    width: 'auto',
    justifyContent: 'center',
  },
  dataText: {
    textAlign: 'center',
    fontWeight: '700'
  }
})

export default Client