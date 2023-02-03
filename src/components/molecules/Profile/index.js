import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { IconRemovePhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Profile = ({name, desc, isRemove, photo, onPress}) => {
    return (
        <View style={styles.container}>
            {!isRemove && (
                <View style={styles.borderProfile}>
                    <Image source={photo} style={styles.avatar}/>
                    {isRemove && <IconRemovePhoto style={styles.removePhoto}/>}
                </View>
            )}
            {isRemove && (
                <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
                    <Image source={photo} style={styles.avatar}/>
                    {isRemove && <IconRemovePhoto style={styles.removePhoto}/>}
                </TouchableOpacity>
            )}
            {name && <Text style={styles.name}>{name}</Text>}
            {desc && <Text style={styles.proffesion}>{desc}</Text>}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems : 'center'
    },
    avatar : {
        width : 110,
        height : 110,
        borderRadius : 110/2
    },
    borderProfile : {
        width: 130,
        height: 130,
        borderWidth : 1,
        borderColor : colors.border,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 130/2
    },
    name : {
        color : colors.text.primary,
        fontFamily : fonts.primary[600],
        fontSize : 20,
        textAlign : 'center',
        marginTop : 16
    },
    proffesion : {
        color : colors.text.secondary,
        fontFamily : fonts.primary.normal,
        fontSize : 16,
        marginTop : 2,
        textAlign : 'center'
    },
    removePhoto : {
        position : 'absolute',
        bottom : 8,
        right : 8
    }
})