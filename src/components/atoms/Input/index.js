import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Input = ({label, value, onChangeText, secureTextEntry, disable}) => {
    const [border, setBorder] = useState(colors.border)
    const onFocusForm = () => {
        setBorder(colors.tertiary)
    }
    const onBlurForm = () => {
        setBorder(colors.border)
    }
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                onFocus={onFocusForm} 
                onBlur={onBlurForm} 
                style={styles.input(border)} 
                onChangeText={onChangeText} 
                value={value} 
                secureTextEntry={secureTextEntry}
                editable={!disable}
                selectTextOnFocus={!disable}    
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input : (border) => ({
        borderWidth : 1,
        borderRadius : 10,
        borderColor: border,
        padding: 12,
    }),
    label : {
        fontFamily : fonts.primary.normal,
        fontSize : 16,
        color : colors.text.secondary,
        marginBottom : 6
    }
})