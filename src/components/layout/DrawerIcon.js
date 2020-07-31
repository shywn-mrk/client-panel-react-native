import React from 'react'
import {
  Image
} from 'react-native'

const DrawerIcon = ({ icon, focused, size }) => {
  return (
    <Image
      source={icon}
      style={{ 
        width: focused ? 40 : size,
        height: focused ? 40 : size,
        tintColor: 'white',
        resizeMode: 'contain' }}
    />
  )
}

export default DrawerIcon
