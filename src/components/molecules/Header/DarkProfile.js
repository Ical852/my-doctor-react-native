import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from '../../atoms'
import { colors, fonts } from '../../../utils'
import { DummyDonctor9 } from '../../../assets'

const DarkProfile = ({onPress, title, photo, desc}) => {
    return (
        <View style={styles.container}>
            <Button type={"icon-only"} icon={'light-back'} onPress={onPress}/>
            <View style={styles.content}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            <Image source={photo} style={styles.avatar}/>
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.secondary,
        paddingVertical : 30,
        paddingLeft : 20,
        paddingRight : 16,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
        flexDirection : 'row',
        alignItems : 'center'
    },
    content : {
        flex: 1,
    },
    avatar : {
        width : 46,
        height : 46,
        borderRadius : 46/2
    },
    name : {
        color : colors.white,
        fontFamily : fonts.primary[600],
        fontSize : 20,
        textAlign : 'center'
    },
    desc : {
        color : colors.text.subTitle,
        fontFamily : fonts.primary.normal,
        fontSize : 14,
        textAlign : 'center',
        marginTop : 6,
        textTransform : 'capitalize'
    }
})