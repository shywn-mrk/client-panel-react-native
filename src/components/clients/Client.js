import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import Button from '../layout/Button'

import ArrowImage from '../../assets/arrow-circle-right-solid.png'

const Client = (props) => {
    const { firstName, lastName, email, balance } = props.client
    return (
        <View style={styles.container}>
            <View style={[styles.dataView, { flex: 1 }]}>
                <Text style={styles.dataText}>{firstName} {lastName}</Text>
            </View>
            <View style={[styles.dataView, { flex: 3 }]}>
                <Text style={styles.dataText}>{email}</Text>
            </View>
            <View style={[styles.dataView, { flex: 1 }]}>
                <Text style={styles.dataText}>${parseFloat(balance).toFixed(2)}</Text>
            </View>
            <View style={[styles.dataView, { flex: 1.2 }]}>
                <Button handler={props.detailsNavigation} value='Details' imageTintColor='white' color="#6c757d" image={ArrowImage} />
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