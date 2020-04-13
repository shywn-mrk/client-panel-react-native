import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'

import InfoIcon from '../assets/info-circle-solid.png'

import Button from '../components/layout/Button'
import ScreenLogo from '../components/layout/ScreenLogo'

const ClientDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <ScreenLogo image={InfoIcon} title="Client Details" />
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <Button value="Edit" color='#000' />
                </View>
                <View style={styles.button}>
                    <Button value="Delete" color='#dc3545' />
                </View>
            </View>
            <View style={styles.clientContainer}>
                <Text style={styles.text}>Name: Karen Smith</Text>
            
                <Text style={styles.text}>Email: Karen@gamil.com</Text>
            
                <Text style={styles.text}>Phone: 555-555-5555</Text>
            
                <Text style={styles.text}>Balance: $40.00</Text>
                <TextInput style={styles.input} placeholder="Enter Client New Balance ..." />
                <View style={{ width: '25%' }}>
                    <Button value="Update" color='#28a745' />
                </View>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-around'
    },
    button: {
        width: '40%'
    },
    clientContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        fontSize: 18,
        margin: 10
    },
    input:{
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#007bff',
        marginTop: 25,
        marginBottom: 10
    }
})

export default ClientDetailsScreen;