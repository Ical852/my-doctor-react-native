import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap } from '../../atoms'
import { colors, fonts } from '../../../utils'
import DarkProfile from './DarkProfile'

const Header = ({onPress, title, type, photo, desc}) => {
    if (type === 'dark-profile') {
        return <DarkProfile photo={photo} title={title} desc={desc} onPress={onPress}/>
    }
    return (
        <View style={styles.header(type)}>
            <Button type={"icon-only"} icon={type === 'dark' ? 'light-back' : 'dark-back'} onPress={onPress}/>
            <Text style={styles.text(type)}>{title}</Text>
            <Gap width={24}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header : (type) => ({
        paddingHorizontal : 16,
        flexDirection : 'row',
        paddingVertical : 30,
        backgroundColor : type === 'dark' ? colors.secondary : colors.white,
        alignItems : 'center',
        borderBottomLeftRadius : type === 'dark' ? 20 : 0,
        borderBottomRightRadius : type === 'dark' ? 20 : 0
    }),
    text : (type) => ({
        flex : 1,
        textAlign : 'center',
        width : 111,
        fontFamily : fonts.primary[600],
        fontSize : 20,
        color: type === 'dark' ? colors.white : colors.text.primary,
        textTransform : 'capitalize'
    })
})