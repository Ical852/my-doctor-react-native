import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDonctor1 } from '../../assets'
import {Header, List} from '../../components'
import { colors, showError } from '../../utils'
import {Fire} from '../../config'

const ChooseDoctor = ({navigation, route}) => {
    const itemCategory = route.params
    const [listDoctor, setListDcotor] = useState([])
    useEffect(() => {
        callDoctorByCategory(itemCategory.category)
    }, [])

    const callDoctorByCategory = (category) => {
        Fire.database()
            .ref('doctors/')
            .orderByChild('category')
            .equalTo(category)
            .once('value')
            .then(res => {
                if (res.val()) {
                    const oldData = res.val()
                    const data = []
                    Object.keys(oldData).map(key => {
                        data.push({
                            id : key,
                            data : oldData[key]
                        })
                    })
                    setListDcotor(data)
                }
            })
            .catch(err => {
                showError(err.message)
            })

    }

    return (
        <View style={styles.page}>
            <Header type={"dark"} title={"Pilih " + itemCategory.category} onPress={() => navigation.goBack()}/>
            {
                listDoctor.map(doctor => {
                    return <List key={doctor.data.uid} type={"next"} profile={{ uri : doctor.data.photo }} name={doctor.data.fullName} desc={doctor.data.gender} onPress={() => navigation.navigate('DoctorProfile', doctor)}/>
                })
            }
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex: 1,
    }
})