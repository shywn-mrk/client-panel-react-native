import React, { useState } from 'react'
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native'

import TextInputGroup from '../components/layout/TextInputGroup'
import Button from '../components/layout/Button'
import ScreenLogo from '../components/layout/ScreenLogo'

import NewUserIcon from '../assets/user-plus-solid.png'

import { Consumer } from '../../context'

const EditClientScreen = (props) => {
    const client = props.route.params.client

    const [firstName, setFirstName] = useState(client.firstName)
    const [lastName, setLastName] = useState(client.lastName)
    const [email, setEmail] = useState(client.email)
    const [phone, setPhone] = useState(client.phone)
    const [balance, setBalance] = useState(client.balance)

    const onSubmitHandler = (dispatch) => {
        const editedClient = {
            ...client,
            firstName,
            lastName,
            email,
            phone,
            balance
        }

        console.log(editedClient)

        dispatch({ type: 'EDIT_CLIENT', payload: editedClient })

        props.navigation.navigate('Clients')
    }

    return (
        <Consumer>
            {value => {
                return (
                    <ScrollView>
                        <View style={styles.container}>
                            <ScreenLogo image={NewUserIcon} title="New Client" />
                            <TextInputGroup
                                label="First Name"
                                placeholder="Enter Client First Name ..."
                                value={firstName}
                                onChange={(text) => setFirstName(text)}
                                secure={false}
                            />
                            <TextInputGroup
                                label="Last Name"
                                placeholder="Enter Client Last Name ..."
                                value={lastName}
                                onChange={(text) => setLastName(text)}
                                secure={false}
                            />
                            <TextInputGroup
                                label="Email"
                                placeholder="Enter Client Email ..."
                                value={email}
                                onChange={(text) => setEmail(text)}
                                secure={false}
                            />
                            <TextInputGroup
                                label="Phone"
                                placeholder="Enter Client Phone ..."
                                value={phone}
                                onChange={(text) => setPhone(text)}
                                secure={false}
                            />
                            <TextInputGroup
                                label="Balance"
                                placeholder="Enter Client Balance ..."
                                value={balance}
                                onChange={(text) => setBalance(text)}
                                secure={false}
                            />
                            <View style={{ width: '25%', margin: 20 }}>
                                <Button handler={() => onSubmitHandler(value.dispatch)} value="Submit" color='#007bff' />
                            </View>
                        </View>
                    </ScrollView>
                )
            }}
        </Consumer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007bff',
    },
    topBar: {
        marginTop: 50,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '45%'
    }
})
 
export default EditClientScreen;