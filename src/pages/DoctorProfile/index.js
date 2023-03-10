import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Button, Gap, Header, Profile, ProfileItem} from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({navigation, route}) => {
    const dataDoctor = route.params
    return (
        <View style={styles.page}>
            <Header title={"Profile"} onPress={() => navigation.goBack()}/>
            <Gap heigth={10}/>
            <Profile photo={{ uri : dataDoctor.data.photo }} name={dataDoctor.data.fullName} desc={dataDoctor.data.profession}/>
            <Gap heigth={10}/>
            <ProfileItem label={"Alumnus"} value={dataDoctor.data.university}/>
            <ProfileItem label={"Tempat Praktik"} value={dataDoctor.data.hospital_address}/>
            <ProfileItem label={"No. STR"} value={dataDoctor.data.str_number}/>
            <View style={styles.button}>
                <Button title={"Start Consultation"} onPress={() => navigation.navigate('Chatting', dataDoctor)}/>
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex: 1,
    },
    button : {
        paddingHorizontal: 40,
        marginTop : 23
    }
})