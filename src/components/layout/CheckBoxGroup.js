import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableNativeFeedback,
    StyleSheet
} from 'react-native'

const CheckBoxGroup = (props) =>{
    const [selected, setSelected] = useState(false)

    const pressHandler = () => {
        const newValue = !selected
        setSelected(newValue)
    }

    return (
        <TouchableNativeFeedback onPress={pressHandler}>
            <View style={styles.container}>
                <Text>{props.value}</Text>
                <View style={{
                    height: 20,
                    width: 20,
                    borderRadius: 20 / 2,
                    borderWidth: 2,
                    borderColor: '#007bff',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                {
                    selected ?
                    <View style={{
                        height: 20 / 2 + 2,
                        width: 20 / 2 + 2,
                        borderRadius: 6,
                        backgroundColor: '#007bff',
                    }}/>
                    : null
                }
                </View>
            </View>
        </TouchableNativeFeedback>
    )
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


