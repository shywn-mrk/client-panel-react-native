import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

const ScreenLogo = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    tintColor: '#007bff'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
    color: '#007bff'
  }
})

export default ScreenLogo