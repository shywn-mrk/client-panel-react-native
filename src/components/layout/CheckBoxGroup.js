import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native'

const CheckBoxGroup = ({ selected, value, handler }) => {
  return (
    <TouchableNativeFeedback onPress={handler}>
      <View style={styles.container}>
        <Text>{value}</Text>
        <View style={{
          height: 20,
          width: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: '#007bff',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
          {
            selected ?
              <View style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#007bff',
              }} />
            : null
          }
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

CheckBoxGroup.defaultProps = {
  selected: false
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})

export default CheckBoxGroup