import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1, DummyHospital2, DummyHospital3, ILHospitalBG } from '../../assets'
import { ListHospital } from '../../components'
import { colors, fonts } from '../../utils'

const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style = {styles.background}>
                <Text style={styles.title}>Nearby Hospitals</Text>
                <Text style={styles.available}>3 tersedia</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ListHospital type={"Rumah Sakit"} name={"Citra Bunga Merdeka"} address={"Jln. Surya Sejahtera 20"} pic={DummyHospital1}/>
                <ListHospital type={"Rumah Sakit Anak"} name={"Happy Family & Kids"} address={"Jln. Surya Sejahtera 20"} pic={DummyHospital2}/>
                <ListHospital type={"Rumah Sakit Jiwa"} name={"Tingkatan Paling Atas"} address={"Jln. Surya Sejahtera 20"} pic={DummyHospital3}/>
            </View>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderRadius : 20,
        marginTop : -30,
        paddingTop : 14
    },
    background : {
        height : 240
    },
    title : {
        color : colors.white,
        fontFamily : fonts.primary[600],
        fontSize : 20,
        textAlign : 'center',
        paddingTop : 30
    },
    available : {
        color : colors.white,
        fontFamily : fonts.primary[300],
        fontSize : 14,
        textAlign : 'center',
        marginTop : 6
    },
})