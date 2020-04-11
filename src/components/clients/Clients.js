import React, { Component } from 'react'
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native'

import { Consumer } from '../../../context'

import Client from './Client'
import ClientsTableHeader from '../layout/ClientsTableHeader'
import Button from '../layout/Button'

import AddImage from '../../assets/plus-circle-solid.png'

class Clients extends Component {
    newClientNavigationHandler = () => {
        this.props.navigation.navigate('New')
    }

    clientDetailsNavigationHandler = (id) => {
        this.props.navigation.navigate('Details')
    }

    render() {
        return (
            <Consumer>
                {
                    value => {
                        const { clients } = value
                        return (
                            <View style={styles.container}>
                                <View style={{ width: 80 }}>
                                    <Button handler={this.newClientNavigationHandler} value="New" image={AddImage} imageTintColor='white' color="#28a745" />
                                </View>
                                <ClientsTableHeader />
                                <FlatList
                                    style={{ width: '100%' }}
                                    contentContainerStyle={{ alignItems: 'center' }}
                                    data={clients}
                                    renderItem={({item}) => <Client client={item} detailsNavigation={() => this.clientDetailsNavigationHandler(item.id)} />}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        )
                    }
                }
            </Consumer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%'
    }
})

export default Clients