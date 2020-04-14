import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

import Clients from '../components/clients/Clients'
import ScreenLogo from '../components/layout/ScreenLogo'

import UsersIcon from '../assets/users-solid.png'

const ClientsScreen = (props) => {
    return (
        <View style={styles.container}>
            <ScreenLogo image={UsersIcon} title="Clients" />
            <Clients navigation={props.navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})
 
export default ClientsScreen