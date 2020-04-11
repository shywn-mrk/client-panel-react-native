import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const ClientsTableHeader = () => {
    return (
        <View style={styles.tableRow}>
            <View style={[styles.tableData, { flex: 1 }]}>
                <Text style={styles.text}>Name</Text>
            </View>
            <View style={[styles.tableData, { flex: 3 }]}>
                <Text style={styles.text}>Email</Text>
            </View>
            <View style={[styles.tableData, { flex: 1 }]}>
                <Text style={styles.text}>Balance</Text>
            </View>
            <View style={[styles.tableData, { flex: 1.2 }]}>
                <Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tableRow: {
        flexDirection: 'row',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#007bff',
        width: '95%',
        justifyContent: 'center',
        margin: 10
    },
    tableData: {
        width: '25%',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    text: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16
    }
})
 
export default ClientsTableHeader