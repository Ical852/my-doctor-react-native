import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ProfileItem = ({label, value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export default ProfileItem

const styles = StyleSheet.create({
    container : {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    label : {
        color : colors.text.secondary,
        fontFamily : fonts.primary.normal,
        fontSize : 14,
        marginBottom : 6
    },
    value : {
        color : colors.text.primary,
        fontFamily : fonts.primary.normal,
        fontSize : 14,
    }
})