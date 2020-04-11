import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

import TextInputGroup from '../components/layout/TextInputGroup'
import Button from '../components/layout/Button'
import ScreenLogo from '../components/layout/ScreenLogo'


import LoginIcon from '../assets/sign-in-alt-solid.png'
import UserIcon from '../assets/user-plus-solid.png'
import LockIcon from '../assets/lock-solid.png'

import { Consumer } from '../../context'

const LoginScreen = (props) => {
    const registerHandler = () => {
        props.navigation.navigate('Register')
    }

    return (
        <Consumer>
            {
                value => {
                    const { dispatch } = value
                    return (
                        <View style={styles.container}>
                            <ScreenLogo image={LockIcon} title="Login" />
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
                                <Button handler={() => dispatch({ type: 'LOGIN' })} value="Login" color='#007bff' imageTintColor="white" image={LoginIcon} />
                            </View>
                            <View style={{ width: '25%' }}>
                                <Button handler={registerHandler} value="Register" color='#007bff' imageTintColor="white" image={UserIcon} />
                            </View>
                        </View>
                    )
                }
            }
        </Consumer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

export default LoginScreen


