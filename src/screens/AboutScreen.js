import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

import ScreenLogo from '../components/layout/ScreenLogo'

import AboutIcon from '../assets/address-card-solid.png'
import instagram from '../assets/instagram-brands.png'
import github from '../assets/github-brands.png'
import facebook from '../assets/facebook-brands.png'
import linkedin from '../assets/linkedin-brands.png'
import telegram from '../assets/telegram-brands.png'
import twitter from '../assets/twitter-brands.png'

const AboutScreen = () => {
    return (
       <View style={styles.container}>
            <ScreenLogo image={AboutIcon} title="About" />
            <View style={styles.content}>
                <Text style={styles.heading}>Credit:</Text>
                <Text style={styles.text}>Brad Traversy</Text>

                <Text style={styles.heading}>Created By:</Text>
                <Text style={styles.text}>Shayan Karimi Nafchi</Text>

                <Text style={styles.heading}>Contact Me:</Text>
                <Text style={styles.text}>shayankarimi0078@gmail.com</Text>

                <Text style={styles.heading}>Social Medias:</Text>
                <View style={styles.row}>
                    <Image style={styles.icon} source={facebook} />
                    <Image style={styles.icon} source={twitter} />
                    <Image style={styles.icon} source={telegram} />
                    <Image style={styles.icon} source={instagram} />
                    <Image style={styles.icon} source={linkedin} />
                </View>
                <Text style={styles.text}>@shywn_mrk</Text>

                <Image style={[styles.icon, {marginTop: 20, marginBottom: 3}]} source={github} />
                <Text style={[styles.text, {padding: 2}]}>shywn-mrk</Text>
            </View>
       </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        alignItems: 'center'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007bff',
        paddingTop: 20
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        color: '#6c757d',
        paddingTop: 5
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: '#6c757d',
        resizeMode: 'contain',
        margin: 8
    }
})

export default AboutScreen


