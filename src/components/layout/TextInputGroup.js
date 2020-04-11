import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

const TextInputGroup = (props) => {
    const [value, setValue] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}:</Text>
            <TextInput onChangeText={text => setValue(text)} defaultValue={value} style={styles.input} placeholder={props.placeholder} secureTextEntry={props.secure} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '75%',
        padding: 10
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 4
    },
    input: {
        borderWidth: 1,
        borderColor: '#007bff',
        borderRadius: 10,
        padding: 8
    }
})

export default TextInputGroup


