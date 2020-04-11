import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

import TextInputGroup from '../components/layout/TextInputGroup'
import Button from '../components/layout/Button'
import ScreenLogo from '../components/layout/ScreenLogo'

import RegisterIcon from '../assets/user-plus-solid.png'
import LockIcon from '../assets/lock-solid.png'

const RegisterScreen = () => {
    return (
       <View style={styles.container}>
            <ScreenLogo image={LockIcon} title="Register" />
            <TextInputGroup
                label="Email"
                placeholder="Enter Your Email ..."
                secure={false}
            />
            <TextInputGroup
                label="Password"
                placeholder="Enter Your Password ..."
                secure={true}
            />
            <View style={{ width: '25%', margin: 20 }}>
                <Button value="Register" color='#007bff' imageTintColor="white" image={RegisterIcon} />
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

export default RegisterScreen


