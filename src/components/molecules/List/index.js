import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assets'
import { colors, fonts } from '../../../utils'

const List = ({profile, name, desc, type, onPress, icon}) => {
    const Icon = () => {
        if (icon === 'edit-profile') {
            return <IconEditProfile/>
        }
        if (icon === 'language') {
            return <IconLanguage/>
        }
        if (icon === 'rate') {
            return <IconRate/>
        }
        if (icon === 'help') {
            return <IconHelp/>
        }
        return <IconEditProfile/>
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon ? <Icon /> : <Image source={profile} style={styles.avatar}/>}
            <View style={styles.profile(icon)}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.message}>{desc}</Text>
            </View>
            {
                type === 'next' && <IconNext/>  
            }
        </TouchableOpacity>
    )
}

export default List 

const styles = StyleSheet.create({
    avatar : {
        width : 46,
        height : 46,
        borderRadius : 46/2,
    },
    container : {
        flexDirection : 'row',
        padding: 16,
        borderBottomWidth : 1,
        borderBottomColor : colors.border,
        alignItems: 'center',
        justifyContent : 'space-between'
    },
    profile : (icon) => ({
        flex: 1,
        marginLeft : icon ? 16 : 12
    }),
    name : {
        color : colors.text.primary,
        fontFamily : fonts.primary.normal,
        fontSize : 16,
    },
    message : {
        color : colors.text.secondary,
        fontFamily : fonts.primary[300],
        fontSize : 12,
        textTransform : 'capitalize'
    },
})