import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator
} from 'react-native'

import CheckBoxGroup from '../components/layout/CheckBoxGroup'
import ScreenLogo from '../components/layout/ScreenLogo'
import Button from '../components/layout/Button'

import SettingsIcon from '../assets/cogs-solid.png'

const SettingsScreen = () => {
  const [settings, setSettings] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isChanged, setIschanged] = useState(false)

  useEffect(() => {
    if (isChanged === false) {
      const getSettings = async () => {
        const token = await AsyncStorage.getItem('token')

        const options = {
          headers: {
            'Authorization': `Token ${token}`
          }
        }

        fetch('http://10.0.2.2:8000/api/settings', options)
          .then(response => response.json())
          .then(data => {
            setSettings(data)
            setIsLoading(false)
          })
      }

      getSettings()
    }
  }, [isChanged])

  const updateSettingsLocal = (type) => {
    setIschanged(true)

    switch (type) {
      case 1:
        setSettings({ 
          ...settings,
          allow_registeration: !settings.allow_registeration
        })
        break
      case 2:
        setSettings({ 
          ...settings,
          disable_balance_on_add: !settings.disable_balance_on_add
        })
        break
      case 3:
        setSettings({ 
          ...settings,
          disable_balance_on_edit: !settings.disable_balance_on_edit
        })
        break
      default:
        return null
    }
  }

  const updateSettings = async () => {
    const token = await AsyncStorage.getItem('token')

    const { 
      allow_registeration,
      disable_balance_on_add,
      disable_balance_on_edit
    } = settings

    const newSettings = {
      allow_registeration,
      disable_balance_on_add,
      disable_balance_on_edit
    }

    console.log(newSettings)

    const options = {
      method: 'PUT',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSettings)
    }

    console.log(settings.id)

    fetch(`http://10.0.2.2:8000/api/settings/${settings.id}/`, options)
      .then(response => response.json())
      .then(data => {
        console.log('recieved data: ', data)
        setIschanged(false)
      })
  }

  return (
    <View style={styles.container}>
      <ScreenLogo image={SettingsIcon} title="Edit Settings" />
      {
        isLoading ? (
          <ActivityIndicator color="blue" size="large" />
        ) : (
        <View style={styles.settingsContainer}>
          <CheckBoxGroup
            value="Allow Registeration"
            selected={settings.allow_registeration}
            handler={() => updateSettingsLocal(1)}
          />
          <CheckBoxGroup
            value="Disable Balance On Add"
            selected={settings.disable_balance_on_add}
            handler={() => updateSettingsLocal(2)}
          />
          <CheckBoxGroup
            value="Disable Balance On Edit"
            selected={settings.disable_balance_on_edit}
            handler={() => updateSettingsLocal(3)}
          />
        </View>
        )
      }
      {
        isChanged ? (
          <View style={styles.submitButton}>
            <Button
              value="Submit"
              color="#28a745"
              handler={updateSettings}
            />
          </View>
        ) : (
          null
        )
      }
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
  },
  submitButton: {
    width: "30%",
    marginTop: 20
  }
})

export default SettingsScreen