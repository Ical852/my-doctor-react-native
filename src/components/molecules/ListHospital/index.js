import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts } from '../../../utils'

const ListHospital = ({type, name, address, pic}) => {
    return (
        <View style={styles.container}>
            <Image source={pic} style={styles.pic}/>
            <View>
                <Text style={styles.title}>{type}</Text>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </View>
    )
}

export default ListHospital

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        borderBottomWidth : 1,
        borderBottomColor : colors.border,
        padding: 16,
    },
    pic : {
        height : 60,
        width : 80,
        borderRadius : 11,
        marginRight : 16
    },
    title : {
        color : colors.text.primary,
        fontFamily : fonts.primary.normal,
        fontSize : 16
    },
    address : {
        color : colors.text.secondary,
        fontFamily : fonts.primary[300],
        fontSize : 12,
        marginTop : 6
    }
})