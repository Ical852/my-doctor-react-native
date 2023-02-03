import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {ILNullPhoto } from '../../../assets'
import { colors, fonts, getData } from '../../../utils'

const HomeProfile = ({navigation, onPress}) => {
    useEffect(() => {
        getData('user').then(res => {
            const data = res
            data.photo = {uri: res.photo}
            setProfile(res)
        })
    }, [navigation])

    const [profile, setProfile] = useState({
        photo : ILNullPhoto,
        fullName : '',
        proffesion : ''
    })

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.photo} style={styles.avatar}/>
            <View>
                <Text style={styles.name}>{profile.fullName}</Text>
                <Text style={styles.proffesion}>{profile.proffesion}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row'
    },
    avatar : {
        width : 46,
        height : 46,
        borderRadius : 46/2,
        marginRight : 12
    },
    name : {
        color : colors.text.primary,
        fontFamily : fonts.primary[600],
        fontSize : 16,
        textTransform : 'capitalize'
    },
    proffesion : {
        color : colors.text.secondary,
        fontFamily : fonts.primary.normal,
        fontSize : 12,
        textTransform: 'capitalize'
        }
})