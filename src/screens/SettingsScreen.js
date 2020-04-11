import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

import CheckBoxGroup from '../components/layout/CheckBoxGroup'
import ScreenLogo from '../components/layout/ScreenLogo'

import SettingsIcon from '../assets/cogs-solid.png'

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <ScreenLogo image={SettingsIcon} title="Edit Settings" />
            <View style={styles.settingsContainer}>
                <CheckBoxGroup value="Allow Registeration" />
                <CheckBoxGroup value="Disable Balance On Add" />
                <CheckBoxGroup value="Disable Balance On Edit" />
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    settingsContainer: {
        width: '80%',
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#007bff'
    }
})

export default SettingsScreen


