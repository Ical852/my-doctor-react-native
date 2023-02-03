import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ILCatAnak, ILCatObat, ILCatPsikiater, ILCatUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = ({category, onPress}) => {
    const Icon = () => {
        if (category === 'dokter umum') {
            return <ILCatUmum style={styles.icon}/>
        }
        if (category === 'psikiater') {
            return <ILCatPsikiater style={styles.icon}/>
        }
        if (category === 'dokter obat') {
            return <ILCatObat style={styles.icon}/>
        }
        if (category === 'dokter anak') {
            return <ILCatAnak style={styles.icon} />
        }
        return <ILCatUmum style={styles.icon}/>
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon/>
            <Text style={styles.text1}>Saya butuh</Text>
            <Text style={styles.text2}>{category}</Text>
        </TouchableOpacity>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container : {
        padding: 12,
        backgroundColor : colors.cardLight,
        alignSelf : 'flex-start',
        borderRadius : 10,
        marginRight : 10,
        height : 130,
        width : 100
    },
    icon : {
        marginBottom : 28
    },
    text1 : {
        color : colors.text.primary,
        fontFamily : fonts.primary[300],
        fontSize : 12
    },
    text2 : {
        color : colors.text.primary,
        fontFamily : fonts.primary[600],
        fontSize : 12
    }
})