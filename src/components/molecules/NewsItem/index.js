import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts } from '../../../utils'

const NewsItem = ({title, date, image}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            <Image source={{ uri : image }} style={styles.image}/>
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    title : {
        color : colors.text.primary,
        fontSize : 16,
        fontFamily : fonts.primary[600],
        maxWidth : '90%'
    },
    titleWrapper : {
        flex: 1,
    },
    date : {
        color : colors.text.secondary,
        fontFamily : fonts.primary.normal,
        fontSize : 12,
        marginTop : 4
    },
    container : {
        flexDirection : 'row',
        borderBottomWidth : 1,
        borderBottomColor : colors.border,
        paddingBottom : 16,
        paddingTop : 16,
        paddingHorizontal : 16
    },
    image : {
        width: 80,
        height: 60,
        borderRadius : 11
    }
})