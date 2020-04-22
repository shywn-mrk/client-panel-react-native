import React from 'react'
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native'

import TextInputGroup from '../components/layout/TextInputGroup'
import Button from '../components/layout/Button'
import ScreenLogo from '../components/layout/ScreenLogo'

import NewUserIcon from '../assets/user-plus-solid.png'

const EditClientScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <ScreenLogo image={NewUserIcon} title="Edit Client" />
                <TextInputGroup
                    label="First Name"
                    placeholder="Enter Client First Name ..."
                    secure={false}
                />
                <TextInputGroup
                    label="Last Name"
                    placeholder="Enter Client Last Name ..."
                    secure={false}
                />
                <TextInputGroup
                    label="Email"
                    placeholder="Enter Client Email ..."
                    secure={false}
                />
                <TextInputGroup
                    label="Phone"
                    placeholder="Enter Client Phone ..."
                    secure={false}
                />
                <TextInputGroup
                    label="Balance"
                    placeholder="Enter Client Balance ..."
                    secure={false}
                />
                <View style={{ width: '25%', margin: 20 }}>
                    <Button value="Submit" color='#007bff' />
                </View>
            </View>
        </ScrollView>
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