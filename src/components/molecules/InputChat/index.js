import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from '../../atoms'
import { colors, fonts } from '../../../utils'

const InputChat = ({value, onChangeText, onButtonPress}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Tulis Pesan Untuk Nairobi' value={value} onChangeText={onChangeText}/>
            <Button type={"btn-icon-send"} title={'send'} disable={value.length < 1 ? true : false} onPress={onButtonPress}/>
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    input : {
        backgroundColor: colors.disable,
        padding: 14,
        borderRadius : 10,
        flex: 1,
        marginRight : 10,
        fontSize : 14,
        fontFamily : fonts.primary.normal,
        maxHeight : 45
    },
    container : {
        padding: 16,
        flexDirection : 'row',
    }
})