import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyDonctor9 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Other = ({text, date, photo}) => {
    return (
        <View style={styles.container}>
            <Image source={photo} style={styles.avatar}/>
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    chatContent: {
        padding: 12,
        paddingRight: 13,
        backgroundColor: colors.primary,
        maxWidth: '80%',
        borderRadius: 10,
        borderBottomLeftRadius: 0,
    },
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingLeft: 16,
        flexDirection : 'row'
    },
    text: {
        color: colors.white,
        fontFamily: fonts.primary.normal,
        fontSize: 14
    },
    date: {
        color: colors.text.secondary,
        fontFamily: fonts.primary.normal,
        fontSize: 11,
        marginTop: 8
    },
    avatar : {
        width : 30,
        height : 30,
        borderRadius : 30/2,
        marginRight : 12
    }
})