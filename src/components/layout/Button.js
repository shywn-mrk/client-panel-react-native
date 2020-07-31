import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet
} from 'react-native'

const Button = (props) => {
  const { value, image, imageTintColor, color, handler } = props

  const pressHandler = () => {
    handler()
  }

  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={[styles.container, { backgroundColor: color }]}>
        {
          image && imageTintColor ?
            <Image
              source={image}
              style={[styles.image, { tintColor: imageTintColor }]}
            />
          : null
        }
        <Text style={styles.text}>{value}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 40,
    padding: 6,
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600'
  },
  image: {
    width: 14,
    height: 14,
    resizeMode: 'contain'
  }
})

export default Button