import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { IconStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

const RatedDoctor = ({onPress, name, desc, avatar}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.profile}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.category}>{desc}</Text>
            </View>
            <View style={styles.rate}>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
            </View>
        </TouchableOpacity>
    )
}

export default RatedDoctor

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingBottom : 16,
        alignItems : 'center'
    },
    avatar : {
        height : 50,
        width : 50,
        borderRadius : 50/2,
        marginRight : 12
    },
    rate : {
        flexDirection : 'row',
    },
    name : {
        color : colors.text.primary,
        fontFamily : fonts.primary[600],
        fontSize : 16,
    },
    category : {
        color : colors.text.secondary,
        fontFamily : fonts.primary.normal,
        fontSize : 12,
        marginTop : 2
    },
    profile : {
        flex: 1,
    }
})