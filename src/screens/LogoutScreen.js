import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import Button from '../components/layout/Button'
import ScreenLogo from '../components/layout/ScreenLogo'

import LogoutIcon from '../assets/sign-out-alt-solid.png'
import LockIcon from '../assets/lock-solid.png'

import { Consumer } from '../../context'

const LoginScreen = () => {
    return (
        <Consumer>
            {
                value => {
                    const { dispatch } = value
                    return (
                        <View style={styles.container}>
                            <ScreenLogo image={LockIcon} title="Logout" />

                            <Text style={styles.text}>Are You Sure?</Text>

                            <View style={{ width: '25%', margin: 20 }}>
                                <Button handler={() => dispatch({ type: 'LOGOUT' })} value="Logout" color='#007bff' imageTintColor="white" image={LogoutIcon} />
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
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default LoginScreen