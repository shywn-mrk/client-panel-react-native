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

const ClientDetailsScreen = (props) => {
    const { firstName, lastName, email, phone, balance } = props.route.params.client

    const editScreenNavigator = () => {
        props.navigation.navigate("Edit", { client: props.route.params.client })
    }

    return (
        <View style={styles.container}>
            <ScreenLogo image={InfoIcon} title="Client Details" />
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <Button handler={editScreenNavigator} value="Edit" color='#000' />
                </View>
                <View style={styles.button}>
                    <Button value="Delete" color='#dc3545' />
                </View>
            </View>
            <View style={styles.clientContainer}>
                <Text style={styles.text}>Name: {firstName} {lastName}</Text>
            
                <Text style={styles.text}>Email: {email}</Text>
            
                <Text style={styles.text}>Phone: {phone}</Text>
            
                <Text style={styles.text}>Balance: ${parseFloat(balance).toFixed(2)}</Text>
                <TextInput style={styles.input} placeholder="Enter New Balance ..." />
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
        marginBottom: 10,
        padding: 10
    }
})

export default ClientDetailsScreen;