import React, { useState } from 'react'
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native'

import TextInputGroup from '../components/layout/TextInputGroup'
import Button from '../components/layout/Button'
import ScreenLogo from '../components/layout/ScreenLogo'

// import { v4 as uuid } from 'uuid'

import NewUserIcon from '../assets/user-plus-solid.png'

import { Consumer } from '../../context'

// got from stackoverflow
// using it instead of uuid package
// uuid have problems with react-native so far
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

const AddClientScreen = (props) =>{
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [balance, setBalance] = useState('')

    const onSubmitHandler = (dispatch) => {
        const newContact = {
            id: uuidv4(),
            firstName,
            lastName,
            email,
            phone,
            balance
        }

        dispatch({ type: 'ADD_CLIENT', payload: newContact })

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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})
 
export default AddClientScreen